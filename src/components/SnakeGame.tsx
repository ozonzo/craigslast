
import React, { useState, useEffect } from 'react';

interface SnakeGameProps {
  boringMode?: boolean;
}

const SnakeGame = ({ boringMode = false }: SnakeGameProps) => {
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
        🐍 NOKIA SNAKE 2000 (PROBABLY BROKEN)
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
        <div className="text-green-400 text-xs mb-2">
          C:\GAMES\SNAKE.EXE - [TERMINAL MODE]
        </div>
        
        {/* Snake Game Iframe */}
        <div className="flex justify-center mb-4">
          <iframe 
            src="data:text/html,<!DOCTYPE html><html><head><style>body{background:black;color:#00FF00;font-family:courier;text-align:center;margin:0;padding:10px;}canvas{border:2px solid #00FF00;background:#111;}</style></head><body><h3>🐍 SNAKE 2000</h3><p>Use Arrow Keys</p><canvas id='game' width='200' height='200'></canvas><p id='score'>Score: 0</p><script>const canvas=document.getElementById('game');const ctx=canvas.getContext('2d');const box=10;let snake=[{x:100,y:100}];let food={x:50,y:50};let dx=0,dy=0;let score=0;function draw(){ctx.fillStyle='#111';ctx.fillRect(0,0,200,200);for(let s of snake){ctx.fillStyle='#0f0';ctx.fillRect(s.x,s.y,box,box);}ctx.fillStyle='#f00';ctx.fillRect(food.x,food.y,box,box);if(dx||dy){let head={x:snake[0].x+dx,y:snake[0].y+dy};if(head.x<0||head.x>=200||head.y<0||head.y>=200||snake.some(s=>s.x===head.x&&s.y===head.y)){alert('Game Over! Score: '+score);return;}snake.unshift(head);if(head.x===food.x&&head.y===food.y){score++;document.getElementById('score').textContent='Score: '+score;food={x:Math.floor(Math.random()*20)*box,y:Math.floor(Math.random()*20)*box};}else{snake.pop();}}}document.addEventListener('keydown',e=>{if(e.key==='ArrowUp'&&dy===0){dx=0;dy=-box;}if(e.key==='ArrowDown'&&dy===0){dx=0;dy=box;}if(e.key==='ArrowLeft'&&dx===0){dx=-box;dy=0;}if(e.key==='ArrowRight'&&dx===0){dx=box;dy=0;}});setInterval(draw,150);</script></body></html>"
            width="280" 
            height="320" 
            className="border-2 border-green-400"
            title="Snake Game"
          />
        </div>
        
        <div className="text-center mb-4">
          <button 
            onClick={() => {
              setScore(Math.floor(Math.random() * 150));
              setGameOver(true);
            }}
            className="bg-green-600 text-black px-4 py-2 font-courier text-xs border-2 border-green-400 hover:bg-green-500"
          >
            START FAKE GAME (Real one in iframe above)
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
