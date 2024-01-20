import MoodeeIcon from "./ModeeIcon";

export default function PageFooter() {
  return (
    <footer className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-[100vh]">
      <div className="w-full flex justify-between items-center p-3 text-sm">
        <div className="flex items-center justify-center">
          <p className="text-sm">
            <span className="inline-block align-middle mr-2">
              <MoodeeIcon width="15" height="15" />
            </span>
            © 2024 <span className="text-xs opacity-40"> beta</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
