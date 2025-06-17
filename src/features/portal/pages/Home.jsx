import React from "react";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
       {/* 👋 Welcome Section */}
      <section className="text-center py-6 px-4 bg-[#1e293b] shadow">
        <h2 className="text-2xl font-semibold text-sky-400">Welcome to UCIL Awareness Portal</h2>
        <p className="text-gray-300 text-sm mt-1">
          Empowering communities with facts and voices
        </p>
        </section>


      {/* Hero */}

      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-sky-400">
          Voices from the Ground, Data from the Sky
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Understand uranium mining's impact. Know your rights. Take action.
        </p>
        {/* <a href="#explore" className="mt-6 inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition">
          Start Exploring ↓
        </a> */}
      </section>


      {/* Info Cards */}

      <section id="explore" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
        <InfoCard />
      </section>


      {/* Quick Stats */}
      
      <section className="bg-[#1E293B] py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-sky-300">Did You Know?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium">
          <p>🏞️ 10,000+ hectares mined</p>
          <p>🧬 3× illness rate near mines</p>
          <p>⚖️ 0 grievance hearings in 5 years</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
