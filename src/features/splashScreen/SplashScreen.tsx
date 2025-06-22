import React, { useEffect, useState } from 'react';
import { Mountain } from 'lucide-react';

interface SplashScreenProps {
  onLoadComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          // Delay before starting fade out
          setTimeout(() => onLoadComplete(), 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ease-out ${
      isComplete ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
    }`}>
      {/* Background that matches home page */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Subtle animated background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#01baef]/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className={`transition-all duration-1000 ${
                progress > 50 ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
              }`}>
                <Mountain className="h-20 w-20 text-[#01baef] mx-auto" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${
            progress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-5xl font-bold text-[#f8f8ff] mb-3">
              UCIL Portal
            </h1>
            <p className="text-xl text-gray-300">
              Together, for a Sustainable Future
            </p>
          </div>

          {/* Minimalist Progress */}
          <div className={`transition-all duration-1000 delay-500 ${
            progress > 40 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-64 mx-auto">
              <div className="w-full bg-gray-800/50 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#01baef] to-[#01baef]/80 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;