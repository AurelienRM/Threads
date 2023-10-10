"use client";

import { Loader } from "@/components/ui/Loader";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTransition } from "react";

export const DropdownMenuItemLogout = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      onClick={() => {
        startTransition(() => {
          signOut();
        });
      }}
    >
      {isPending ? (
        <Loader size={16} className="mr-2" />
      ) : (
        <LogOut size={16} className="mr-2" />
      )}
      Déconnexion
    </DropdownMenuItem>
  );
};
