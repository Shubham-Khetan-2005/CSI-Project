import React, { useState , useEffect } from 'react';
import { story_en, story_hi } from './storyData';
import { motion } from 'framer-motion';
import '../.././index.css';
import BackButton from '../../common/Components/BackButton';
import './story.css';

export default function LifeAroundMine() {
  const [language, setLanguage] = useState('en');

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = language === 'hi' ? story_hi : story_en;

  return (
    <>
    <div className="bg-[#000000] text-white min-h-screen font-sans scroll-smooth">

      <header className="bg-[#0b0f17] border-b border-[#101726] p-2 flex justify-between items-center">
        <h1 className=" cursor typewriter-animation text-xl md:text-2xl font-bold tracking-wide align-center text-gray-500">
          {language === 'hi' ? 'जादूगोड़ा की कहानी' : 'The Story of Jadugora'}
        </h1>
        <button
          onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
          className="bg-[#101726] hover:bg-[#111827] text-[#01BAEF] px-4 py-2 rounded-md transition"
          >
          {language === 'hi' ? 'English में देखें' : 'हिंदी में देखें'}
        </button>
      </header>
      <div className='px-20 py-4 '>
        {/* Hello a text */}
        <BackButton/>
      </div>

      <main className="space-y-24 pb-24">
        {content.map((slide, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="py-16 px-4 md:px-16 flex flex-col justify-center items-center text-center"
          >
            {/* 🧠 Title */}
            <motion.h2
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl max-w-3xl mb-10 text-gray-300 leading-relaxed"
            >
              {slide.text}
            </motion.p>


            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full max-w-sm md:max-w-lg rounded-lg shadow-lg object-cover mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.section>
        ))}
      </main>
    </div>
    </>
  )
}