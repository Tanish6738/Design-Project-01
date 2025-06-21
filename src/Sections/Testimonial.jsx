import { motion } from 'framer-motion';
import { Quote, Star, Users, Zap } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Nebulink feels like the intergalactic PayPal for web3.",
      author: "Sarah Chen",
      role: "DeFi Protocol Founder",
      avatar: "SC",
      rating: 5,
      delay: 0.1
    },
    {
      quote: "Plugged it into my DAO in 5 minutes. Magic.",
      author: "Alex Rivera",
      role: "DAO Architect",
      avatar: "AR",
      rating: 5,
      delay: 0.2
    },
    {
      quote: "Finally, a wallet that thinks faster than I do. Quantum leap in UX.",
      author: "Maya Patel",
      role: "Web3 Designer",
      avatar: "MP",
      rating: 5,
      delay: 0.3
    },
    {
      quote: "The future of finance just arrived. Seamless multichain magic.",
      author: "Jordan Kim",
      role: "Crypto Investor",
      avatar: "JK",
      rating: 5,
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 25
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
    id='testimonials'
    className="theme-bg py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-glass border border-yellow-400/20 mb-6"
          >
            <Users className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium theme-text">Trusted by Pioneers</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-gradient mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Voices From the Future
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl theme-text-muted max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hear from the pioneers already living in tomorrow.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${testimonial.delay}s` }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                className="theme-glass p-6 sm:p-8 rounded-2xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-500 relative overflow-hidden h-full"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: testimonial.delay + 0.2, duration: 0.5 }}
                  className="absolute top-4 right-4"
                >
                  <Quote className="w-8 h-8 text-yellow-400/20 transform rotate-180" />
                </motion.div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Stars */}
                  <motion.div 
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: testimonial.delay + 0.3, duration: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: testimonial.delay + 0.4 + (i * 0.1), 
                          duration: 0.3 
                        }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote 
                    className="text-lg sm:text-xl theme-text leading-relaxed mb-6 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: testimonial.delay + 0.5, duration: 0.8 }}
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: testimonial.delay + 0.6, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-full theme-gradient flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold theme-text text-sm sm:text-base">
                        {testimonial.author}
                      </div>
                      <div className="theme-text-muted text-xs sm:text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Pulse Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-yellow-400/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      "0 0 0 1px rgba(255, 212, 0, 0.1)",
                      "0 0 0 3px rgba(255, 212, 0, 0.1)",
                      "0 0 0 1px rgba(255, 212, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-1">50K+</div>
              <div className="text-xs sm:text-sm theme-text-muted">Active Users</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-1">99.9%</div>
              <div className="text-xs sm:text-sm theme-text-muted">Uptime</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-1">∞</div>
              <div className="text-xs sm:text-sm theme-text-muted">Possibilities</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="w-16 sm:w-20 h-1 theme-gradient mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;