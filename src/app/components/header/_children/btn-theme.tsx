"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconBrightnessDown, IconMoon } from "@tabler/icons-react";
import Button from "../../button";

const BtnTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button type="button" variant="ghost" aria-label="Toggle theme">
        <span className="block w-5 h-5"></span>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <IconBrightnessDown size={20} />
      ) : (
        <IconMoon size={20} />
      )}
    </Button>
  );
};

export default BtnTheme;
