import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { Home, PenSquare, User } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container fixed bottom-0 left-0 right-0 flex justify-between max-w-lg gap-1 py-2 m-auto border-t bg-background border-accent">
      <Link
        href="/"
        className={clsx(
          buttonVariants({
            variant: "ghost",
          }),
          "flex-1"
        )}
      >
        <Home size={16} />
      </Link>
      <Link
        href="/write"
        className={clsx(
          buttonVariants({
            variant: "ghost",
          }),
          "flex-1"
        )}
      >
        <PenSquare size={16} />
      </Link>
      <Link
        href="/profile"
        className={clsx(
          buttonVariants({
            variant: "ghost",
          }),
          "flex-1"
        )}
      >
        <User size={16} />
      </Link>
    </footer>
  );
};
