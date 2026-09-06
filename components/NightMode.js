import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function NightMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoids a hydration mismatch — theme is only known on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-nexagreen text-nexagreen hover:bg-nexablack hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-nexagreen"
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
      <span className="font-popins text-sm font-medium">
        {isDark ? 'Light' : 'Dark'} mode
      </span>
    </button>
  );
}

export default NightMode;