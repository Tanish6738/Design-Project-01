import { motion } from 'framer-motion';
import { Calendar, Rocket, Users, Zap } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      quarter: "Q2 2025",
      title: "Mainnet Launch",
      description: "Launch of the core Nebulink mainnet with full functionality",
      icon: Rocket,
      delay: 0.1,
      imagePlaceholder: "/Images/1.jpg"
    },
    {
      quarter: "Q3 2025", 
      title: "Modular SDK for Devs",
      description: "Release developer tools and SDK for building on Nebulink",
      icon: Zap,
      delay: 0.2,
      imagePlaceholder: "/Images/2.jpg"
    },
    {
      quarter: "Q4 2025",
      title: "Nebulink DAO",
      description: "Decentralized governance system for community-driven decisions",
      icon: Users,
      delay: 0.3,
      imagePlaceholder: "/Images/3.jpg"
    },
    {
      quarter: "2026",
      title: "Cross-universe teleportation 😎",
      description: "Revolutionary technology for seamless cross-chain interactions",
      icon: Calendar,
      delay: 0.4,
      imagePlaceholder: "/Images/4.jpeg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };  return (
    <section
    id='roadmap'
    className="theme-bg relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            
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
            Galactic Path
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl theme-text-muted max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our journey through the cosmos of innovation. Charting the course for the future of decentralized technology.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-4 sm:left-8 md:left-1/2 top-0 w-1 theme-gradient rounded-full transform md:-translate-x-1/2"
          />

          {/* Milestones */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: milestone.delay }}
                    className="absolute left-0 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 theme-gradient rounded-full flex items-center justify-center theme-glow z-10"
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className={`ml-12 sm:ml-16 md:ml-0 w-full md:w-5/12 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="theme-glass p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-opacity-20 hover:border-opacity-40 transition-all duration-500 relative overflow-hidden group">
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Image Placeholder */}
                      <motion.div
                        variants={imageHoverVariants}
                        className="relative z-10 mb-6 rounded-lg overflow-hidden"
                      >
                        <img
                          src={milestone.imagePlaceholder}
                          alt={milestone.title}
                          className="w-full h-32 sm:h-40 object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-32 sm:h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 items-center justify-center">
                          <IconComponent className="w-12 h-12 text-yellow-400" />
                        </div>
                      </motion.div>

                      {/* Quarter Badge */}
                      <div className="relative z-10 mb-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                          {milestone.quarter}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.h3 
                          className="text-xl sm:text-2xl font-bold theme-text mb-3 sm:mb-4 group-hover:theme-text-gradient transition-all duration-300 leading-tight"
                          initial={{ opacity: 0.9 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {milestone.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="theme-text-muted leading-relaxed text-sm sm:text-base"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {milestone.description}
                        </motion.p>
                      </div>

                      {/* Subtle Border Glow on Hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl border border-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="w-16 sm:w-20 md:w-24 h-1 theme-gradient mx-auto rounded-full" />
          <motion.p 
            className="theme-text-muted text-sm sm:text-base mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            The future is written in the stars, and we're charting the course.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
