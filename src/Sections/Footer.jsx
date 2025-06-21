import { motion } from 'framer-motion';
import { Github, MessageCircle, Users, Briefcase, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Docs', href: '#docs', icon: ExternalLink },
    { name: 'GitHub', href: '#github', icon: Github },
    { name: 'Community', href: '#community', icon: Users },
    { name: 'Careers', href: '#careers', icon: Briefcase }
  ];

  const socialLinks = [
    { name: 'X (Twitter)', href: '#twitter', icon: '𝕏' },
    { name: 'Telegram', href: '#telegram', icon: '✈️' },
    { name: 'Discord', href: '#discord', icon: '💬' },
    { name: 'Lens', href: '#lens', icon: '🌿' }
  ];

  const chainBadges = [
    { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
    { name: 'Arbitrum', symbol: 'ARB', color: '#28A0F0' },
    { name: 'Polygon', symbol: 'MATIC', color: '#8247E5' },
    { name: 'Optimism', symbol: 'OP', color: '#FF0420' },
    { name: 'Base', symbol: 'BASE', color: '#0052FF' },
    { name: 'BSC', symbol: 'BNB', color: '#F3BA2F' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-black/80 to-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo + Tagline */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl theme-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Nebulink
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xl font-medium theme-text-gradient max-w-md">
              "Nebulink — Decentralize the cosmos."
            </p>

            {/* Chain Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold theme-text-muted uppercase tracking-wide">
                Supported Chains
              </h4>
              <div className="flex flex-wrap gap-2">
                {chainBadges.map((chain, index) => (
                  <motion.div
                    key={chain.name}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: chain.color }}
                    />
                    <span className="text-sm font-medium text-white group-hover:text-[var(--color-primary)] transition-colors">
                      {chain.symbol}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={16} className="group-hover:text-[var(--color-primary)] transition-colors" />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-3 text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-[var(--color-text-muted)]">
              © 2025 Nebulink. All rights reserved. Decentralizing the cosmos, one chain at a time.
            </p>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-[var(--color-text-muted)] hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[var(--color-text-muted)] hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
