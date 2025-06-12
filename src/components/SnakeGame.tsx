
import React, { useState, useEffect, useRef } from 'react';

interface SnakeGameProps {
  boringMode?: boolean;
}

const SnakeGame = ({ boringMode = false }: SnakeGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [highScores, setHighScores] = useState([
    { name: 'CryptoSnake420', score: 69, message: 'snek is life', time: '12:34' },
    { name: 'RugPullVictim', score: 42, message: 'lost everything to snake', time: '11:11' },
    { name: 'DiamondHands', score: 100, message: 'HODL the snake', time: '09:30' }
  ]);

  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });

  const GRID_SIZE = 20;
  const CANVAS_SIZE = 400;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;

        // Check wall collision
        if (head.x < 0 || head.x >= CANVAS_SIZE / GRID_SIZE || 
            head.y < 0 || head.y >= CANVAS_SIZE / GRID_SIZE) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return currentSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 1);
          setFood({
            x: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
            y: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE))
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameStarted, gameOver]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Draw snake
    ctx.fillStyle = '#00FF00';
    snake.forEach(segment => {
      ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
    });

    // Draw food
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
  }, [snake, food]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 1, y: 0 });
  };

  const submitScore = () => {
    if (name && message) {
      const newScore = {
        name,
        score,
        message,
        time: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setHighScores(prev => [newScore, ...prev].slice(0, 10));
      setName('');
      setMessage('');
      
      if (!boringMode) {
        (window as any).addCraigPopup?.({
          title: "🐍 SNAKE SCORE SUBMITTED",
          content: `Score: ${score}. Your snake legacy is now immortalized in the void.`,
          x: Math.random() * 400 + 100,
          y: Math.random() * 300 + 100
        });
      }
    }
  };

  return (
    <div className="bg-black border-4 border-green-500 p-6 mt-8 mb-6">
      <h2 className="text-green-400 font-courier text-xl text-center mb-4">
        🐍 NOKIA SNAKE 2000 (NOW ACTUALLY WORKS)
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
        <div className="text-green-400 text-xs mb-2">
          C:\GAMES\SNAKE.EXE - [TERMINAL MODE]
        </div>
        
        {/* Game Controls */}
        <div className="text-center mb-4">
          <div className="text-green-400 text-xs mb-2">
            Use ARROW KEYS to control the snake
          </div>
          
          {!gameStarted ? (
            <div className="space-y-2">
              <div className="mb-2">
                <label className="text-green-400 text-xs">
                  Name: <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="ml-2 bg-black border border-green-400 text-green-400 px-2 py-1 text-xs" 
                    placeholder="DegenGamer420"
                    maxLength={15}
                  />
                </label>
              </div>
              <button 
                onClick={startGame}
                className="bg-green-600 text-black px-4 py-2 font-courier text-xs border-2 border-green-400 hover:bg-green-500"
              >
                START SNAKE GAME
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-green-400 text-sm">Score: {score}</div>
              {gameOver && (
                <button 
                  onClick={startGame}
                  className="bg-green-600 text-black px-4 py-2 font-courier text-xs border-2 border-green-400 hover:bg-green-500"
                >
                  PLAY AGAIN
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Game Canvas */}
        <div className="flex justify-center mb-4">
          <canvas 
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="border-4 border-green-400"
            style={{ border: '3px ridge lime' }}
          />
        </div>
        
        {gameOver && (
          <div className="text-center text-red-400 font-courier text-sm mb-2">
            GAME OVER! Final Score: {score}
          </div>
        )}
      </div>

      {/* Score Submission */}
      {gameOver && (
        <div className="bg-purple-900 border-2 border-purple-400 p-4 mb-4">
          <h3 className="text-purple-400 font-courier text-sm mb-3">
            📝 Submit Your Snake Legacy
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your real name (or fake)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-purple-400 p-1 font-courier text-xs"
              maxLength={20}
            />
            <input
              type="text"
              placeholder="Cursed/funny message"
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
              SUBMIT TO ETERNAL RECORD
            </button>
          </div>
        </div>
      )}

      {/* High Scores - Wall of Snake */}
      <div className="bg-yellow-900 border-2 border-yellow-400 p-4">
        <h3 className="text-yellow-400 font-courier text-sm mb-3">
          🏆 Wall of Snake (Hall of Shame)
        </h3>
        <div className="max-h-40 overflow-y-auto">
          {highScores.map((entry, index) => (
            <div key={index} className="font-courier text-xs text-yellow-200 mb-1">
              <span className="text-white">{entry.name}</span>
              <span className="text-gray-400"> [{entry.time}]: </span>
              <span className="text-yellow-400">{entry.score}pts</span>
              <span className="text-gray-300"> - {entry.message}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4 font-courier text-xs text-gray-500">
        🐍 You either win Snake or become Snake. 🐍
      </div>
    </div>
  );
};

export default SnakeGame;
