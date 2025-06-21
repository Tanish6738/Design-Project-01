import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section 
    id='hero'
    className="relative min-h-screen w-full flex items-center overflow-hidden">

      {/* Main Content - Responsive Layout */}
      <div className="z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Main Headline */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block theme-text">Bridge Every Chain.</span>
            <span className="block theme-text-gradient">Rule Your Universe.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl theme-text-muted mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nebulink empowers you to transact, build, and scale across all blockchains — 
            seamlessly, securely, and at the speed of light.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="w-full sm:w-auto theme-btn px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 sm:space-x-3 min-w-[160px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Launch App</span>
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              className="w-full sm:w-auto flex items-center justify-center space-x-2 text-[var(--color-primary)] font-semibold text-sm sm:text-base md:text-lg hover:text-[var(--color-secondary)] transition-all duration-300 border border-white/20 hover:border-[var(--color-secondary)]/50 px-4 sm:px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 shadow-lg hover:shadow-xl min-w-[160px]"
              whileHover={{ x: 5 }}
            >
              <Play size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span>How it works</span>
              <ChevronRight size={12} className="sm:w-4 sm:h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;