"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Alert className="py-4 my-8">
      <AlertTriangle size={26} />
      <div className="flex flex-col justify-center ml-2">
        <AlertTitle>Non connecté</AlertTitle>
        <AlertDescription>
          Vous devez être connecté pour accéder à cette page.
        </AlertDescription>
      </div>
    </Alert>
  );
}
