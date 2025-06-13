
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TetrisGameProps {
  boringMode?: boolean;
}

const TetrisGame = ({ boringMode = false }: TetrisGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [lines, setLines] = useState(0);
  const [currentPiece, setCurrentPiece] = useState<number[][]>([]);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [board, setBoard] = useState<number[][]>([]);

  const BOARD_WIDTH = 10;
  const BOARD_HEIGHT = 20;
  const BLOCK_SIZE = 20;

  // Tetris pieces (T-piece only for simplicity)
  const pieces = [
    [[1, 1, 1], [0, 1, 0]], // T-piece
    [[1, 1], [1, 1]], // Square
    [[1, 1, 1, 1]], // Line
    [[1, 1, 0], [0, 1, 1]], // Z-piece
  ];

  const initializeBoard = useCallback(() => {
    return Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0));
  }, []);

  const spawnPiece = useCallback(() => {
    const piece = pieces[Math.floor(Math.random() * pieces.length)];
    setCurrentPiece(piece);
    setCurrentX(Math.floor(BOARD_WIDTH / 2) - Math.floor(piece[0].length / 2));
    setCurrentY(0);
  }, [pieces]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      setBoard(initializeBoard());
      spawnPiece();
    }
  }, [gameStarted, gameOver, initializeBoard, spawnPiece]);

  const isValidMove = useCallback((piece: number[][], x: number, y: number, boardState: number[][]) => {
    for (let py = 0; py < piece.length; py++) {
      for (let px = 0; px < piece[py].length; px++) {
        if (piece[py][px]) {
          const newX = x + px;
          const newY = y + py;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return false;
          }
          if (newY >= 0 && boardState[newY][newX]) {
            return false;
          }
        }
      }
    }
    return true;
  }, []);

  const placePiece = useCallback(() => {
    const newBoard = board.map(row => [...row]);
    
    for (let py = 0; py < currentPiece.length; py++) {
      for (let px = 0; px < currentPiece[py].length; px++) {
        if (currentPiece[py][px]) {
          const boardY = currentY + py;
          const boardX = currentX + px;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = 1;
          }
        }
      }
    }

    // Check for completed lines
    let linesCleared = 0;
    for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      if (newBoard[y].every(cell => cell === 1)) {
        newBoard.splice(y, 1);
        newBoard.unshift(Array(BOARD_WIDTH).fill(0));
        linesCleared++;
        y++; // Check the same line again
      }
    }

    setBoard(newBoard);
    setLines(prev => prev + linesCleared);
    setScore(prev => prev + linesCleared * 100);
    spawnPiece();
  }, [board, currentPiece, currentX, currentY, spawnPiece]);

  const moveDown = useCallback(() => {
    if (isValidMove(currentPiece, currentX, currentY + 1, board)) {
      setCurrentY(prev => prev + 1);
    } else {
      if (currentY <= 0) {
        setGameOver(true);
        return;
      }
      placePiece();
    }
  }, [currentPiece, currentX, currentY, board, isValidMove, placePiece]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          if (isValidMove(currentPiece, currentX - 1, currentY, board)) {
            setCurrentX(prev => prev - 1);
          }
          break;
        case 'ArrowRight':
          if (isValidMove(currentPiece, currentX + 1, currentY, board)) {
            setCurrentX(prev => prev + 1);
          }
          break;
        case 'ArrowDown':
          moveDown();
          break;
        case ' ':
          e.preventDefault();
          while (isValidMove(currentPiece, currentX, currentY + 1, board)) {
            setCurrentY(prev => prev + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPiece, currentX, currentY, board, gameStarted, gameOver, isValidMove, moveDown]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      moveDown();
    }, 800);

    return () => clearInterval(gameLoop);
  }, [moveDown, gameStarted, gameOver]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, BOARD_WIDTH * BLOCK_SIZE, BOARD_HEIGHT * BLOCK_SIZE);

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
    ctx.fillStyle = '#FF0000';
    for (let py = 0; py < currentPiece.length; py++) {
      for (let px = 0; px < currentPiece[py].length; px++) {
        if (currentPiece[py][px]) {
          const x = (currentX + px) * BLOCK_SIZE;
          const y = (currentY + py) * BLOCK_SIZE;
          ctx.fillRect(x, y, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
        }
      }
    }
  }, [board, currentPiece, currentX, currentY]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLines(0);
    setBoard(initializeBoard());
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
            Use ARROW KEYS to move, SPACEBAR to drop
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
              <div className="text-red-400 text-sm">Score: {score} | Lines: {lines}</div>
              {gameOver && (
                <button 
                  onClick={startGame}
                  className="bg-red-600 text-white px-4 py-2 font-courier text-xs border-2 border-red-400 hover:bg-red-500"
                >
                  PLAY AGAIN
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="flex justify-center mb-4">
          <canvas 
            ref={canvasRef}
            width={BOARD_WIDTH * BLOCK_SIZE}
            height={BOARD_HEIGHT * BLOCK_SIZE}
            className="border-4 border-red-400"
            style={{ border: '3px ridge red' }}
          />
        </div>
        
        {gameOver && (
          <div className="text-center text-red-400 font-courier text-sm mb-2">
            GAME OVER! Final Score: {score}
          </div>
        )}
      </div>
      
      <div className="text-center mt-4 font-courier text-xs text-gray-500">
        🧱 Stack blocks, clear lines, embrace the void. 🧱
      </div>
    </div>
  );
};

export default TetrisGame;
