import { motion } from 'framer-motion';
import { ChevronRight, Rocket } from 'lucide-react';

const FinalCta = () => {
  return (
    <section
    id='final-cta'
    className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Section-specific Background Video */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <video 
          src="/Videos/element.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Bold Statement */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold theme-text leading-tight mb-6">
              <span className="block mb-2">Your wallet is the</span>
              <span className="theme-text-gradient block mb-2">passport.</span>
              <span className="block mb-2">Nebulink is the</span>
              <span className="theme-text-gradient block">spaceship.</span>
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative theme-btn px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl md:text-2xl flex items-center justify-center space-x-3 sm:space-x-4 mx-auto overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
              
              <Rocket size={24} className="sm:w-7 sm:h-7 relative z-10" />
              <span className="relative z-10">Launch Wallet</span>
              <ChevronRight size={24} className="sm:w-7 sm:h-7 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl theme-text-muted max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Built for traders, devs, and visionaries of Web3.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full border-2 border-[var(--color-primary)] rounded-full animate-pulse" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-20 pointer-events-none"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full border border-[var(--color-secondary)] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;