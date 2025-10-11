import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering theme components after mounting on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR and initial client render, provide a non-interactive version
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// Utility hook to safely use theme
export function useThemeValue() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: mounted ? theme : undefined,
    setTheme,
    mounted,
  };
}
