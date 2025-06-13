
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ModalsProps {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  showVoidModal: boolean;
  setShowVoidModal: (show: boolean) => void;
  boringMode: boolean;
}

const Modals = ({ showLoginModal, setShowLoginModal, showVoidModal, setShowVoidModal, boringMode }: ModalsProps) => {
  return (
    <>
      {/* Enhanced Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="bg-gray-100 border-4 border-craigpurple font-courier max-w-md">
          <DialogHeader>
            <DialogTitle className="text-craigpurple font-times text-lg">
              🔐 CraigLast Account Login
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-700">Username:</label>
              <input 
                className="w-full border border-gray-400 p-1 text-xs"
                placeholder="disappointment_collector_69"
              />
            </div>
            <div>
              <label className="text-xs text-gray-700">Password:</label>
              <input 
                type="password"
                className="w-full border border-gray-400 p-1 text-xs"
                placeholder="••••••••••••"
              />
            </div>
            <div className="text-xs text-red-600 bg-yellow-100 p-2 border">
              Enter your seed phrase for "security" (definitely not a scam)
            </div>
            <button 
              className="w-full bg-craigpurple text-white py-2 font-courier text-xs hover:bg-purple-700 transition-colors"
              onClick={() => {
                setShowLoginModal(false);
                if (!boringMode) {
                  (window as any).addCraigPopup?.({
                    title: "✅ LOGIN SUCCESSFUL",
                    content: "Welcome back! Your portfolio is still worthless.",
                    x: 300,
                    y: 200
                  });
                }
              }}
            >
              Login to Regret
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Void Modal */}
      <Dialog open={showVoidModal} onOpenChange={setShowVoidModal}>
        <DialogContent className="bg-black text-green-400 border-4 border-red-600 font-courier max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-500 font-times text-lg">
              🌀 THE VOID
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center text-sm">
              Welcome to the Void.<br/>
              Nothing exists here.<br/>
              Not even hope.
            </div>
            <div className="text-xs text-gray-500 text-center">
              You clicked [ERROR 404]. What did you expect?
            </div>
            <button 
              className="w-full bg-red-600 text-white py-2 font-courier text-xs hover:bg-red-700 transition-colors"
              onClick={() => setShowVoidModal(false)}
            >
              Escape the Void (Maybe)
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modals;
