import React, { useState, useEffect } from 'react';
import { BookUser, RadiationIcon } from 'lucide-react';
import './splashScreen.css'; // for styling
import GradientText from './GradientText';

const SplashScreen = () => {
  const Card = ({ title, Icon, strokeColor = "stroke-blue-400", children }) => (
    <div className="bg-[#0b0110] border border-gray-700 rounded-3xl p-20 shadow-md space-y-2 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`w-6 h-6 ${strokeColor}`} />
        <h2 className="text-lg font-semibold text-gray-400">{title}</h2>
      </div>
      <div className="text-sm text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500); // start fade before removing
    const hideTimer = setTimeout(() => setShowSplash(false), 3000); // fully remove after fade
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (<>
    <div className="bg-#000">
      {showSplash ? (
        <div className={`splash-screen bg-#000 ${fadeOut ? 'fade-out' : ''}`}>
          <Card title="CSI-Project: Development Track" Icon={RadiationIcon} strokeColor="stroke-orange-400">
           <GradientText
            colors={["#FFFFFF","#111111"]}
            animationSpeed={0}
            showBorder={false}
            className="custom-class"
            >
            <h1>UCIL Awareness Portal</h1>
            </GradientText>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </div>
    </>
  );
}

export default SplashScreen;
