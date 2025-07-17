import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/typewriter.css';

function Typewriter({ text, className = '', onDone, allowSkip = false }) {
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);
  const charCount = text.length;
  const typingDuration = Math.max(1500, charCount * 100);
  const containerRef = useRef();

  const handleSkip = () => {
    if (!done && allowSkip) {
      setSkip(true);
      setDone(true);
      if (onDone) onDone();
    }
  };

  useEffect(() => {
    if (!allowSkip || done) return;

    const handleGlobalClick = (e) => {
      const isNavbarClick = e.target.closest('nav, button');
      if (!isNavbarClick) handleSkip();
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [allowSkip, done]);

  useEffect(() => {
    setDone(false);
    setSkip(false);
    const timeout = setTimeout(() => {
      setDone(true);
      if (onDone) onDone();
    }, typingDuration);
    return () => clearTimeout(timeout);
  }, [text, typingDuration, onDone]);

  return (
    <motion.h1
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`typewriter ${className}`}
      style={{
        width: skip ? 'auto' : `${charCount}ch`,
        animation: skip
          ? 'none, blink 750ms step-end infinite'
          : `typingEffect ${typingDuration}ms steps(${charCount}) forwards, blink 750ms step-end infinite`,
      }}
    >
      {text}
    </motion.h1>
  );
}

export default Typewriter;
