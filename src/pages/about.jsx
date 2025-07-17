import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      key="about"
    >
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Profile box */}
        <div className="animate-omori-float delay-[600ms] bg-black rounded-2xl p-8 flex flex-col items-center shadow-[4px_4px_0_rgba(0,0,0,1)]">
          <div className="w-28 h-28 rounded-lg border-4 border-white bg-gray-300 flex items-center justify-center text-4xl text-gray-600 mb-2 select-none">
            ?
          </div>
          <p className="text-sm text-gray-400 mb-4">FANDI AHMAD</p>
          <div className="w-56 space-y-4">
            <div className="flex items-center">
              <span className="text-white w-10">❤️</span>
              <div className="flex-1 bg-gray-800 border-2 border-white rounded-md h-5 ml-1 mr-10 overflow-hidden">
                <div className="bg-red-500 h-full rounded-l-md animate-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-white w-10">💧</span>
              <div className="flex-1 bg-gray-800 border-2 border-white rounded-md h-5 ml-1 mr-10 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-l-md animate-bar" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Textbox */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0_rgba(0,0,0,1)] px-8 py-6 min-w-[280px] max-w-md text-lg text-black animate-omori-float delay-[10ms]">
          <p>
            Hi, I'm <span className="font-bold">Fandi!</span><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum modi quod cumque sequi molestias est similique reprehenderit nam doloribus quaerat omnis voluptatibus dolor architecto velit, distinctio nihil non. Corporis.
          </p>
          <p className="animate-pulse text-center mt-2 text-sm text-gray-500">...</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
