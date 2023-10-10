import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { LoginButton } from "./auth/LoginButton";
import { getAuthSession } from "@/lib/auth";
import { UserProfile } from "./auth/UserProfile";

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="fixed top-0 w-full border-b border-b-accent bg-background z-20">
      <div className="container flex items-center max-w-lg gap-1 py-2 m-auto">
        <h2 className="mr-auto text-2xl font-bold">GitThread</h2>
        {session?.user ? <UserProfile /> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  );
};
