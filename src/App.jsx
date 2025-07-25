import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Components/Navbar"
// import MainLayout from "./common/layouts/MainLayout";
// Portal Pages
import Home from "./features/portal/pages/Home";
import About from "./features/portal/pages/About";
import KnowYourRights from "./features/portal/pages/KnowYourRights";
import EnvironmentalImpact from "./features/portal/pages/EnvironmentalImpact";
import LatestUpdates from "./features/portal/pages/LatestUpdates";
import Footer from "./common/Components/Footer";
import GrievancePage from "./features/grievances/GrievancePage.tsx";
import LifeAroundMine from "./features/story/LifeAroundMine.jsx";
import SplashScreen from "./features/splashScreen/SplashScreen.tsx";

// Grievance Page
// import GrievancePage from "./features/grievance/pages/GrievancePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };
  
  return (
    
    <Router>
      {isLoading?(<SplashScreen onLoadComplete={handleLoadComplete}/>):<></>}
      <Navbar/>
      {/* <MainLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/know-your-rights" element={<KnowYourRights />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/latest-updates" element={<LatestUpdates />} /> 
          <Route path="/life-around-mine" element={<LifeAroundMine />} />
          <Route path="/grievance" element={<GrievancePage/>} /> 
        </Routes>
        <Footer/>
      {/* </MainLayout> */}
    </Router>
  );
}

export default App;
