import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("dark")}>DARK</button>
      <button onClick={() => setTheme("light")}>LIGHT</button>
    </div>
  );
}
