import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Notfound() {
  return (
    <Alert className="py-4 my-8">
      <AlertTriangle size={26} />
      <div className="flex flex-col justify-center ml-2">
        <AlertTitle>Not found</AlertTitle>
        <AlertDescription>post not found.</AlertDescription>
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Go to home
        </Link>
      </div>
    </Alert>
  );
}
