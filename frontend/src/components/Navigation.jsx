import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wind, Activity, Info, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home', icon: Wind },
    { path: '/forecasting', label: 'Forecasting', icon: Activity },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-glow" />
              <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-primary relative z-10 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-display font-bold text-foreground">
                AirCast<span className="text-primary">AI</span>
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Satellite Intelligence</p>
            </div>
          </Link>

          {/* Navigation Links & Theme Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative flex items-center space-x-2">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <span className={`text-sm sm:text-base font-medium hidden sm:inline transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
