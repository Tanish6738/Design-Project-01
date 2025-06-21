import { motion } from 'framer-motion';
import { Shield, Zap, Link, Wallet } from 'lucide-react';

const Feature = () => {
  const features = [
    {
      icon: Shield,
      title: "Quantum-Grade Security",
      description: "Next-gen encryption with zero-knowledge proof compliance.",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Blazing Fast Transactions",
      description: "Experience speeds faster than light—literally.",
      delay: 0.2
    },
    {
      icon: Link,
      title: "Universal Compatibility",
      description: "One interface, all chains. Completely composable.",
      delay: 0.3
    },
    {
      icon: Wallet,
      title: "Modular Smart Wallets",
      description: "Non-custodial. Multi-sig. Futuristic.",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };
  return (
    <section 
    id='features'
    className="theme-bg py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold theme-text-gradient mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Nebulink Engine
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl theme-text-muted max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explain value clearly through immersive storytelling.
          </motion.p>
        </motion.div>        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="theme-glass h-full p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-opacity-20 hover:border-opacity-40 transition-all duration-500 relative overflow-hidden touch-manipulation"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="relative z-10 mb-4 sm:mb-6"
                  >                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl theme-gradient flex items-center justify-center theme-glow">
                      <IconComponent 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-lg sm:text-xl font-semibold theme-text mb-3 sm:mb-4 group-hover:theme-text-gradient transition-all duration-300 leading-tight"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="theme-text-muted leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Subtle Border Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl border border-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="w-16 sm:w-20 md:w-24 h-1 theme-gradient mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;