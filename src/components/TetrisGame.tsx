
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TetrisGameProps {
  boringMode?: boolean;
}

interface TetrisScore {
  name: string;
  score: number;
  lines: number;
  message: string;
  time: string;
}

const TetrisGame = ({ boringMode = false }: TetrisGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [highScores, setHighScores] = useState<TetrisScore[]>([
    { name: 'BlockMaster', score: 15000, lines: 50, message: 'tetris is life', time: '10:30' },
    { name: 'RedSquare420', score: 12000, lines: 40, message: 'red blocks best blocks', time: '09:15' },
    { name: 'StackKing', score: 8500, lines: 30, message: 'cant stop stacking', time: '08:45' }
  ]);

  const BOARD_WIDTH = 10;
  const BOARD_HEIGHT = 20;
  const BLOCK_SIZE = 20;

  // Game state
  const [board, setBoard] = useState<number[][]>([]);
  const [currentPiece, setCurrentPiece] = useState<{
    shape: number[][];
    x: number;
    y: number;
    type: number;
  } | null>(null);

  // Tetris pieces
  const pieces = [
    { shape: [[1,1,1,1]], color: 1 }, // I
    { shape: [[1,1],[1,1]], color: 1 }, // O
    { shape: [[0,1,0],[1,1,1]], color: 1 }, // T
    { shape: [[0,1,1],[1,1,0]], color: 1 }, // S
    { shape: [[1,1,0],[0,1,1]], color: 1 }, // Z
    { shape: [[1,0,0],[1,1,1]], color: 1 }, // J
    { shape: [[0,0,1],[1,1,1]], color: 1 }, // L
  ];

  // Load high scores from localStorage
  useEffect(() => {
    const savedScores = localStorage.getItem('craiglast-tetris-scores');
    if (savedScores) {
      try {
        const parsedScores = JSON.parse(savedScores);
        setHighScores(parsedScores);
      } catch (error) {
        console.error('Error loading Tetris scores:', error);
      }
    }
  }, []);

  // Save high scores to localStorage
  useEffect(() => {
    localStorage.setItem('craiglast-tetris-scores', JSON.stringify(highScores));
  }, [highScores]);

  // Initialize empty board
  const createEmptyBoard = useCallback(() => {
    return Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0));
  }, []);

  // Create new piece
  const createNewPiece = useCallback(() => {
    const pieceIndex = Math.floor(Math.random() * pieces.length);
    const piece = pieces[pieceIndex];
    return {
      shape: piece.shape,
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(piece.shape[0].length / 2),
      y: 0,
      type: piece.color
    };
  }, [pieces]);

  // Check collision
  const checkCollision = useCallback((piece: any, board: number[][], dx = 0, dy = 0) => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = piece.x + x + dx;
          const newY = piece.y + y + dy;
          
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return true;
          }
          
          if (newY >= 0 && board[newY][newX]) {
            return true;
          }
        }
      }
    }
    return false;
  }, []);

  // Merge piece to board
  const mergePieceToBoard = useCallback((piece: any, board: number[][]) => {
    const newBoard = board.map(row => [...row]);
    
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const boardY = piece.y + y;
          const boardX = piece.x + x;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = piece.type;
          }
        }
      }
    }
    
    return newBoard;
  }, []);

  // Clear completed lines
  const clearLines = useCallback((board: number[][]) => {
    let linesCleared = 0;
    const newBoard = [];
    
    for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      if (board[y].every(cell => cell !== 0)) {
        linesCleared++;
      } else {
        newBoard.unshift(board[y]);
      }
    }
    
    // Add empty lines at top
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }
    
    return { board: newBoard, linesCleared };
  }, []);

  // Rotate piece
  const rotatePiece = useCallback((piece: any) => {
    const rotated = piece.shape[0].map((_: any, index: number) =>
      piece.shape.map((row: any) => row[index]).reverse()
    );
    return { ...piece, shape: rotated };
  }, []);

  // Game initialization
  useEffect(() => {
    if (gameStarted && !gameOver) {
      setBoard(createEmptyBoard());
      setCurrentPiece(createNewPiece());
      setScore(0);
      setLines(0);
      setLevel(1);
    }
  }, [gameStarted, gameOver, createEmptyBoard, createNewPiece]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused || !currentPiece) return;

    const dropInterval = Math.max(100, 800 - (level - 1) * 50);
    
    const gameLoop = setInterval(() => {
      setCurrentPiece(prevPiece => {
        if (!prevPiece) return prevPiece;
        
        if (!checkCollision(prevPiece, board, 0, 1)) {
          return { ...prevPiece, y: prevPiece.y + 1 };
        } else {
          // Piece has landed
          const newBoard = mergePieceToBoard(prevPiece, board);
          const { board: clearedBoard, linesCleared } = clearLines(newBoard);
          
          setBoard(clearedBoard);
          setLines(prev => prev + linesCleared);
          setScore(prev => prev + linesCleared * 100 * level + 10);
          setLevel(prev => Math.floor((lines + linesCleared) / 10) + 1);
          
          const newPiece = createNewPiece();
          if (checkCollision(newPiece, clearedBoard)) {
            setGameOver(true);
            return prevPiece;
          }
          
          return newPiece;
        }
      });
    }, dropInterval);

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, isPaused, currentPiece, board, level, lines, checkCollision, mergePieceToBoard, clearLines, createNewPiece]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver || isPaused || !currentPiece) return;

      e.preventDefault();
      
      switch (e.key) {
        case 'ArrowLeft':
          if (!checkCollision(currentPiece, board, -1, 0)) {
            setCurrentPiece(prev => prev ? { ...prev, x: prev.x - 1 } : prev);
          }
          break;
        case 'ArrowRight':
          if (!checkCollision(currentPiece, board, 1, 0)) {
            setCurrentPiece(prev => prev ? { ...prev, x: prev.x + 1 } : prev);
          }
          break;
        case 'ArrowDown':
          if (!checkCollision(currentPiece, board, 0, 1)) {
            setCurrentPiece(prev => prev ? { ...prev, y: prev.y + 1 } : prev);
          }
          break;
        case 'ArrowUp':
        case ' ':
          const rotated = rotatePiece(currentPiece);
          if (!checkCollision(rotated, board)) {
            setCurrentPiece(rotated);
          }
          break;
        case 'p':
        case 'P':
          setIsPaused(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver, isPaused, currentPiece, board, checkCollision, rotatePiece]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw board
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (board[y] && board[y][x]) {
          ctx.fillStyle = '#FF0000';
          ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
        }
      }
    }

    // Draw current piece
    if (currentPiece) {
      ctx.fillStyle = '#FF0000';
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            ctx.fillRect(
              (currentPiece.x + x) * BLOCK_SIZE,
              (currentPiece.y + y) * BLOCK_SIZE,
              BLOCK_SIZE - 1,
              BLOCK_SIZE - 1
            );
          }
        }
      }
    }

    // Draw grid lines
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    for (let x = 0; x <= BOARD_WIDTH; x++) {
      ctx.beginPath();
      ctx.moveTo(x * BLOCK_SIZE, 0);
      ctx.lineTo(x * BLOCK_SIZE, BOARD_HEIGHT * BLOCK_SIZE);
      ctx.stroke();
    }
    for (let y = 0; y <= BOARD_HEIGHT; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * BLOCK_SIZE);
      ctx.lineTo(BOARD_WIDTH * BLOCK_SIZE, y * BLOCK_SIZE);
      ctx.stroke();
    }
  }, [board, currentPiece]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setIsPaused(false);
  };

  const pauseGame = () => {
    setIsPaused(!isPaused);
  };

  const submitScore = () => {
    if (name && message) {
      const newScore = {
        name,
        score,
        lines,
        message,
        time: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setHighScores(prev => [newScore, ...prev]
        .sort((a, b) => b.score - a.score)
        .slice(0, 20)
      );
      setName('');
      setMessage('');
      
      if (!boringMode) {
        (window as any).addCraigPopup?.({
          title: "🧱 TETRIS SCORE SUBMITTED",
          content: `Score: ${score} Lines: ${lines}. Your blocks are now immortalized.`,
          x: Math.random() * 400 + 100,
          y: Math.random() * 300 + 100
        });
      }
    }
  };

  return (
    <div className="bg-black border-4 border-red-500 p-6 mt-8 mb-6">
      <h2 className="text-red-400 font-courier text-xl text-center mb-4">
        🧱 THE ONLY ONE
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
        <div className="text-red-400 text-xs mb-2">
          C:\GAMES\TETRIS.EXE - [TERMINAL MODE]
        </div>
        
        <div className="text-center mb-4">
          <div className="text-red-400 text-xs mb-2">
            ← → ↓ to move, ↑ or SPACE to rotate, P to pause
          </div>
          
          {!gameStarted ? (
            <button 
              onClick={startGame}
              className="bg-red-600 text-white px-4 py-2 font-courier text-xs border-2 border-red-400 hover:bg-red-500"
            >
              START TETRIS
            </button>
          ) : (
            <div className="space-y-2">
              <div className="text-red-400 text-sm grid grid-cols-2 gap-4">
                <div>Score: {score}</div>
                <div>Lines: {lines}</div>
                <div>Level: {level}</div>
                <div>{isPaused ? 'PAUSED' : 'PLAYING'}</div>
              </div>
              
              <div className="space-x-2">
                <button 
                  onClick={pauseGame}
                  className="bg-yellow-600 text-white px-3 py-1 font-courier text-xs border-2 border-yellow-400 hover:bg-yellow-500"
                >
                  {isPaused ? 'RESUME' : 'PAUSE'}
                </button>
                
                {gameOver && (
                  <button 
                    onClick={startGame}
                    className="bg-red-600 text-white px-4 py-1 font-courier text-xs border-2 border-red-400 hover:bg-red-500"
                  >
                    PLAY AGAIN
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mb-4">
          <canvas 
            ref={canvasRef}
            width={BOARD_WIDTH * BLOCK_SIZE}
            height={BOARD_HEIGHT * BLOCK_SIZE}
            className="border-4 border-red-400"
          />
        </div>
        
        {gameOver && (
          <div className="text-center text-red-400 font-courier text-sm mb-2">
            GAME OVER! Final Score: {score} | Lines: {lines}
          </div>
        )}
      </div>

      {/* Score Submission */}
      {gameOver && (
        <div className="bg-purple-900 border-2 border-purple-400 p-4 mb-4">
          <h3 className="text-purple-400 font-courier text-sm mb-3">
            🏆 Submit Your Tetris Legacy
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-purple-400 p-1 font-courier text-xs"
              maxLength={20}
            />
            <input
              type="text"
              placeholder="Leave a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-purple-400 p-1 font-courier text-xs"
              maxLength={50}
            />
            <button
              onClick={submitScore}
              disabled={!name || !message}
              className="bg-purple-600 text-white px-4 py-1 font-courier text-xs border border-purple-400 hover:bg-purple-700 disabled:opacity-50"
            >
              SUBMIT TO HALL OF BLOCKS
            </button>
          </div>
        </div>
      )}

      {/* High Scores */}
      <div className="bg-yellow-900 border-2 border-yellow-400 p-4">
        <h3 className="text-yellow-400 font-courier text-sm mb-3">
          🏆 Hall of Blocks (Top Stackers)
        </h3>
        <div className="max-h-40 overflow-y-auto">
          {highScores.map((entry, index) => (
            <div key={index} className="font-courier text-xs text-yellow-200 mb-1">
              <span className="text-white">{entry.name}</span>
              <span className="text-gray-400"> [{entry.time}]: </span>
              <span className="text-yellow-400">{entry.score}pts</span>
              <span className="text-orange-400"> ({entry.lines}L)</span>
              <span className="text-gray-300"> - {entry.message}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4 font-courier text-xs text-gray-500">
        🧱 Stack blocks, clear lines, embrace the void. 🧱
      </div>
    </div>
  );
};

export default TetrisGame;
