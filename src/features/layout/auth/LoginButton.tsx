"use client";

import { Loader } from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      onClick={() => {
        startTransition(() => {
          signIn();
        });
      }}
    >
      {isPending ? (
        <Loader size={16} className="mr-2" />
      ) : (
        <LogIn size={16} className="mr-2" />
      )}
      Connexion
    </Button>
  );
};
