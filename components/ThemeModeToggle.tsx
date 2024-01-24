import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
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
