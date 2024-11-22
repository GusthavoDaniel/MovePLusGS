import { useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return { darkMode, toggleDarkMode };
}
