import { motion } from 'framer-motion';
import { useMemo } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 60,
    },
  },
};

const randomBetween = (min, max) => Math.random() * (max - min) + min;

function HomeComponent() {
  const floatingShapes = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: randomBetween(20, 80),
      shape: ['rounded-full', 'rounded-md', ''][Math.floor(Math.random() * 3)],
      xTo: randomBetween(-80, 80),
      yTo: randomBetween(-80, 80),
      top: randomBetween(0, 100),
      left: randomBetween(0, 100),
      delay: randomBetween(0, 2),
      duration: randomBetween(6, 12),
    }));
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {floatingShapes.map(({ id, size, shape, xTo, yTo, top, left, delay, duration }) => (
          <motion.div
            key={id}
            className={`absolute bg-black ${shape}`}
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.05,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [0, xTo, 0],
              y: [0, yTo, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay,
            }}
          />
        ))}
      </div>

      {/* Dialogue Box */}
      <motion.div
        variants={itemVariants}
        className="bg-white border-4 border-black px-6 py-4 rounded-xl shadow-[4px_4px_0_rgba(0,0,0,1)] text-lg max-w-lg text-center z-10"
      >
        <p>
          "You are in White Space.<br />
          You have been living here for as long as you can remember."
        </p>
      </motion.div>

      {/* Subtext */}
      <motion.div
        variants={itemVariants}
        className="text-sm text-gray-400 z-10"
      >
        Press any key to continue...
      </motion.div>
    </motion.div>
  );
}

export default HomeComponent;
