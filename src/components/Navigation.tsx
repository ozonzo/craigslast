
import React from 'react';

interface NavigationProps {
  boringMode: boolean;
  onPostClick: () => void;
  onAccountClick: () => void;
  onErrorClick: () => void;
  onRandomHover: () => void;
}

const Navigation = ({ boringMode, onPostClick, onAccountClick, onErrorClick, onRandomHover }: NavigationProps) => {
  return (
    <div className="mb-6 text-center">
      <div className="font-courier text-sm space-x-4 text-craigpurple">
        <span 
          className="underline cursor-pointer hover:text-red-600 transition-colors"
          onClick={onPostClick}
        >
          post
        </span> |
        <span 
          className="underline cursor-pointer hover:text-red-600 transition-colors"
          onClick={onAccountClick}
        >
          account
        </span> |
        <span className="line-through text-gray-400">search</span> |
        <span 
          className="text-red-600 cursor-pointer hover:text-purple-600 transition-colors"
          onClick={onErrorClick}
        >
          [ERROR 404]
        </span> |
        <span 
          className="animate-broken-blink underline cursor-pointer hover:text-red-600 transition-colors"
          onMouseEnter={onRandomHover}
        >
          help
        </span>
      </div>
    </div>
  );
};

export default Navigation;
