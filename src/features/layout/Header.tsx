import { ThemeToggle } from "@/src/theme/ThemeToggle";

export const Header = async () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center max-w-lg gap-1 py-2 m-auto">
        <h2 className="mr-auto text-2xl font-bold">GitThread</h2>
        <ThemeToggle />
      </div>
    </header>
  );
};
