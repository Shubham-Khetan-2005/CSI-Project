import Navbar from './components/Navbar.tsx';
import React from 'react';
import { useState } from 'react';
import './index.css';
import GrievancePage from './components/GrievancePage.tsx';
import Footer from './components/Footer.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // const renderActiveSection = () => {
  //   switch (activeSection) {
  //     case 'home':
  //       return <HomePage onSectionChange={setActiveSection} />;
  //     case 'about':
  //       return <AboutPage />;
  //     case 'awareness':
  //       return <AwarenessPage />;
  //     case 'engagement':
  //       return <EngagementPage />;
  //     case 'grievances':
  //       return <GrievancePage />;
  //     default:
  //       return <HomePage onSectionChange={setActiveSection} />;
  //   }
  // };
  return (
    <>
    <Navbar/>
  
    <div className="App">
      <header className="App-header">
        <GrievancePage/>
      </header>
      <Footer/>
    </div>
    </>
  );
}

export default App;
