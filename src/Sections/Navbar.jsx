import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Wallet } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Trust", href: "#trust" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Roadmap", href: "#roadmap" },
  ];
  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className={`w-full sm:w-[95%] md:w-[90%] max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "theme-glass-nav border border-[var(--color-glow)] theme-glow backdrop-blur-md bg-[rgba(26,14,53,0.8)]"
            : "theme-glass-nav border border-[rgba(255,255,255,0.1)] backdrop-blur-md bg-[rgba(26,14,53,0.6)]"
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 sm:space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg theme-gradient flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">N</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Nebulink
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 font-medium group text-sm xl:text-base"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right Side - Connect Wallet & Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Connect Wallet Button */}
          <motion.button
            className="theme-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1 sm:space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Wallet
              size={14}
              className="sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hidden sm:inline">Connect Wallet</span>
            <span className="sm:hidden">Connect</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 mx-auto w-[calc(100%-1rem)] sm:w-[95%] md:w-[90%] max-w-6xl theme-glass border border-[var(--color-glow)] rounded-xl sm:rounded-2xl ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 font-medium py-2 text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}

          {/* Mobile-only full Connect Wallet button */}
          <motion.button
            className="w-full mt-4 theme-btn px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Wallet
              size={16}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span>Connect Wallet</span>
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
