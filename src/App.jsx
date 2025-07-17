import { useState } from 'react'
import Typewriter from './components/typewriter'
import './App.css'
import './styles/styles.css'
import HomeComponent from './components/homecomponent.jsx'
import { motion, AnimatePresence } from 'framer-motion';
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [page, setPage] = useState('home')
  const [showContent, setShowContent] = useState(false);

  const handleNavClick = (targetPage) => {
    if (targetPage === page) return; // ⬅️ Jangan lakukan apapun jika klik halaman yang sama
    setPage(targetPage);
    setShowContent(false);
  };


  return (
    <div className={showContent ? 'content-active' : ''}>
      {/* Typewriter Container - akan berubah positioning setelah content muncul */}
      <div className={`typewriter-container ${showContent ? 'typewriter-moved' : ''}`}>
        <div>
          <Typewriter 
            key={page}
            text={
              page === 'home'
                ? 'Welcome to WHITE SPACE'
                : page === 'about'
                  ? 'Hi, I am Fandi!'
                  : page === 'projects'
                    ? 'Welcome to WHITE SPACE'
                    : 'Contact me!'
            }
            duration={3000}
            allowSkip={true}
            onDone={() => setShowContent(true)}
          />
        </div>

        {/* Navbar - akan muncul setelah typewriter selesai */}
        <Navbar 
          page={page}
          showContent={showContent}
          handleNavClick={handleNavClick}
        />
      </div>

      {/* Main Content - akan muncul setelah animasi selesai */}
      <div className={`main-content ${showContent ? 'content-visible' : 'content-hidden'}`}>
        {showContent && page === 'home' && (
          <div id="white-space">
            <HomeComponent />
          </div>
        )}

        <AnimatePresence mode="wait">
          {showContent && page === 'about' && (
            <div id="white-space">
              <About />
            </div>
          )}
        </AnimatePresence>


        {showContent && page === 'projects' && (
          <div id="white-space">

            {/* Projects content here */}
          </div>
        )}

        {showContent && page === 'contact' && (
          <div id="white-space">
            <h1 className="typewriter">Contact me!</h1>
            {/* Contact content here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default App