
import React, { useState, useEffect, useCallback } from 'react';

interface GameScore {
  name: string;
  message: string;
  score: number;
  timestamp: string;
}

const SnakeGame = () => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState<GameScore[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [playerMessage, setPlayerMessage] = useState('');
  const [snake, setSnake] = useState([{x: 10, y: 10}]);
  const [food, setFood] = useState({x: 15, y: 15});
  const [direction, setDirection] = useState({x: 0, y: 1});

  const BOARD_SIZE = 20;

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE)
    };
  }, []);

  const moveSnake = useCallback(() => {
    if (gameState !== 'playing') return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = {...newSnake[0]};
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
        setGameState('gameOver');
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState('gameOver');
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameState, generateFood]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({x: 0, y: -1});
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({x: 0, y: 1});
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({x: -1, y: 0});
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({x: 1, y: 0});
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameState]);

  const startGame = () => {
    setSnake([{x: 10, y: 10}]);
    setFood(generateFood());
    setDirection({x: 0, y: 1});
    setScore(0);
    setGameState('playing');
  };

  const submitScore = () => {
    if (playerName && playerMessage) {
      const newScore: GameScore = {
        name: playerName,
        message: playerMessage,
        score,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setHighScores(prev => [...prev, newScore].sort((a, b) => b.score - a.score).slice(0, 10));
      setPlayerName('');
      setPlayerMessage('');
      setGameState('menu');
    }
  };

  return (
    <div className="bg-purple-900 border-4 border-yellow-400 p-4 mb-6 text-center">
      <div className="bg-black border-2 border-green-500 p-4">
        <h2 className="text-yellow-400 font-courier text-lg mb-2 animate-broken-blink">
          🐍 SNAKE GAME FROM 1997 🐍
        </h2>
        <p className="text-green-400 font-courier text-xs mb-4">
          You either win Snake or become Snake.
        </p>

        {gameState === 'menu' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your real name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-gray-800 text-green-400 border border-green-500 p-2 font-courier text-xs"
              />
              <input
                type="text"
                placeholder="Leave a cursed message"
                value={playerMessage}
                onChange={(e) => setPlayerMessage(e.target.value)}
                className="w-full bg-gray-800 text-green-400 border border-green-500 p-2 font-courier text-xs"
              />
            </div>
            <button
              onClick={startGame}
              className="bg-green-600 text-black px-6 py-2 font-courier text-sm border-2 border-green-400 hover:bg-green-500"
            >
              START SNAKE
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="space-y-2">
            <div className="text-yellow-400 font-courier text-sm">Score: {score}</div>
            <div className="bg-gray-900 border border-green-500 mx-auto" style={{width: '300px', height: '300px'}}>
              <div className="grid grid-cols-20 gap-0 w-full h-full">
                {Array.from({length: BOARD_SIZE * BOARD_SIZE}).map((_, index) => {
                  const x = index % BOARD_SIZE;
                  const y = Math.floor(index / BOARD_SIZE);
                  const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                  const isFood = food.x === x && food.y === y;
                  
                  return (
                    <div
                      key={index}
                      className={`w-full h-full ${
                        isSnake ? 'bg-green-400' : 
                        isFood ? 'bg-red-500' : 
                        'bg-gray-900'
                      }`}
                      style={{width: '15px', height: '15px'}}
                    />
                  );
                })}
              </div>
            </div>
            <div className="text-green-400 font-courier text-xs">
              Use arrow keys to move | Don't hit walls or yourself
            </div>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="space-y-4">
            <div className="text-red-500 font-courier text-lg">GAME OVER</div>
            <div className="text-yellow-400 font-courier">Final Score: {score}</div>
            <div className="space-y-2">
              <button
                onClick={submitScore}
                disabled={!playerName || !playerMessage}
                className="bg-purple-600 text-white px-6 py-2 font-courier text-sm border-2 border-purple-400 hover:bg-purple-500 disabled:opacity-50"
              >
                SUBMIT SCORE
              </button>
              <button
                onClick={() => setGameState('menu')}
                className="bg-gray-600 text-white px-6 py-2 font-courier text-sm border-2 border-gray-400 hover:bg-gray-500 ml-2"
              >
                MENU
              </button>
            </div>
          </div>
        )}

        {/* High Scores */}
        {highScores.length > 0 && (
          <div className="mt-6 border-t border-green-500 pt-4">
            <h3 className="text-yellow-400 font-courier text-sm mb-2">HIGH SCORES (ARCADE STYLE)</h3>
            <div className="max-h-32 overflow-y-auto">
              {highScores.map((scoreEntry, index) => (
                <div key={index} className="text-green-400 font-courier text-xs mb-1 hover:text-yellow-400">
                  {index + 1}. {scoreEntry.name} - {scoreEntry.score} - "{scoreEntry.message}" ({scoreEntry.timestamp})
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
