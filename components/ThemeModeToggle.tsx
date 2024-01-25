import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {resolvedTheme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
}
