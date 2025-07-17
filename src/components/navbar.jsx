import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const NAV_ITEMS = ['home', 'about', 'projects', 'contact'];

function Navbar({ page, showContent, handleNavClick }) {
  const [pointerIndex, setPointerIndex] = useState(NAV_ITEMS.indexOf(page));
  const menuRefs = useRef([]);

  // Update pointer position when page changes
  useEffect(() => {
    setPointerIndex(NAV_ITEMS.indexOf(page));
  }, [page]);

  // Keyboard navigation (W/S or Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showContent) return;
      
      // Prevent default behavior for arrow keys to avoid page scrolling
      if (['ArrowRight', 'ArrowLeft', 'a', 'd'].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        setPointerIndex(prev => (prev + 1) % NAV_ITEMS.length);
      } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        setPointerIndex(prev => (prev - 1 + NAV_ITEMS.length) % NAV_ITEMS.length);
      } else if (e.key === 'Enter') {
        handleNavClick(NAV_ITEMS[pointerIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showContent, handleNavClick]); // Removed pointerIndex from dependencies

  return (
    <nav
      className={`navbar ${showContent ? 'navbar-visible' : 'navbar-hidden'}`}
      tabIndex={-1} // Moved tabIndex to proper prop
    >
      <div className="menu relative items-center gap-6">
        <motion.div
          className="absolute text-black animate-omori-float"
          style={{ left: 0 }} // Set posisi awal
          initial={false}
          animate={{
            x: (menuRefs.current[pointerIndex]?.offsetLeft || 0) - 32
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ChevronRight />
        </motion.div>

        {NAV_ITEMS.map((item, index) => (
          <button
            key={item}
            ref={(el) => (menuRefs.current[index] = el)}
            onClick={() => handleNavClick(item)}
            disabled={page === item}
            className={`glitch-link text-left ${page === item ? 'opacity-50' : ''}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
