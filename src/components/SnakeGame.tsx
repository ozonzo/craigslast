
import React, { useState, useEffect, useCallback } from 'react';

interface SnakeGameProps {
  boringMode: boolean;
}

const SnakeGame = ({ boringMode }: SnakeGameProps) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [highScores, setHighScores] = useState([
    { name: 'CryptoSnake420', score: 69, message: 'snek is life', time: '12:34' },
    { name: 'RugPullVictim', score: 42, message: 'lost everything to snake', time: '11:11' },
    { name: 'DiamondHands', score: 100, message: 'HODL the snake', time: '09:30' }
  ]);

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
        🐍 NOKIA SNAKE (PROBABLY BROKEN)
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
        <div className="text-green-400 text-xs mb-2">
          C:\GAMES\SNAKE.EXE - [TERMINAL MODE]
        </div>
        
        {/* Fake Snake Game Display */}
        <div className="bg-black border border-green-400 h-64 flex items-center justify-center mb-4">
          <div className="text-green-400 font-courier text-center">
            <div className="text-6xl mb-4">🐍</div>
            <div className="text-sm">Score: {score}</div>
            <div className="text-xs mt-2">
              {gameOver ? 'GAME OVER' : 'Use WASD to move (fake)'}
            </div>
          </div>
        </div>
        
        <div className="text-center mb-4">
          <button 
            onClick={() => {
              setScore(Math.floor(Math.random() * 150));
              setGameOver(true);
            }}
            className="bg-green-600 text-black px-4 py-2 font-courier text-xs border-2 border-green-400 hover:bg-green-500"
          >
            START FAKE GAME
          </button>
        </div>
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

      {/* High Scores */}
      <div className="bg-yellow-900 border-2 border-yellow-400 p-4">
        <h3 className="text-yellow-400 font-courier text-sm mb-3">
          🏆 Snake Hall of Shame
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
