"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SunMedium, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <SunMedium
        size={20}
        className="transition-all scale-100 rotate-0 dark:rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
