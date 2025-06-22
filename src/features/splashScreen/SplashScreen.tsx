import React, { useEffect, useState } from 'react';
import { Mountain, Loader2 } from 'lucide-react';

interface SplashScreenProps {
  onLoadComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Initializing Portal...',
    'Loading Environmental Data...',
    'Connecting Community Services...',
    'Preparing Grievance System...',
    'Finalizing Setup...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(stepTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#01baef]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DC965A]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#841C26]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#01baef]/20 rounded-full blur-xl animate-ping"></div>
            <div className="relative bg-gradient-to-br from-[#01baef] to-[#01baef]/80 p-6 rounded-full shadow-2xl">
              <Mountain className="h-16 w-16 text-black animate-bounce" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#f8f8ff] mb-2 animate-fade-in">
            UCIL Portal
          </h1>
          <p className="text-lg text-gray-300 animate-fade-in-delay">
            Responsible Mining for a Sustainable Future
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#01baef] to-[#DC965A] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>0%</span>
            <span className="font-medium text-[#01baef]">{progress}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="mb-8 h-6">
          <p className="text-gray-300 animate-pulse flex items-center justify-center">
            <Loader2 className="h-4 w-4 mr-2 animate-spin text-[#01baef]" />
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-[#01baef]/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#01baef] rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs text-gray-400">Environmental</p>
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-[#DC965A]/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#DC965A] rounded-full animate-pulse delay-200"></div>
            </div>
            <p className="text-xs text-gray-400">Community</p>
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-[#841C26]/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#841C26] rounded-full animate-pulse delay-400"></div>
            </div>
            <p className="text-xs text-gray-400">Grievances</p>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-500">
          Uranium Corporation of India Limited
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Powering India's Nuclear Future Responsibly
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;