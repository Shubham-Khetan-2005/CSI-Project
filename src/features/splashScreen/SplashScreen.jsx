import React, { useState, useEffect } from 'react';
import './splashScreen.css'; // for styling
import GradientText from './GradientText';

const SplashScreen = () => {
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

  return (
    <div className="bg-black">
      {showSplash ? (
        <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
          <GradientText
            colors={["#08BDBD","#F8F8FF","#0D3B66"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            >
            <h1>CSI Project: SDE-4</h1>
            </GradientText>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SplashScreen;
