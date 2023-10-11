import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

export const PostPlaceholder = () => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4")}>
      <Avatar size="default">
        <AvatarFallback>AA</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full gap-2 ml-4">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-4 h-6" />
          <button>
            <MoreHorizontal size={20} />
          </button>
        </div>
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="w-full h-6" />
        <div className="flex items-center gap-4">
          <button
            className={clsx(
              "rounded-md hover:bg-accent flex gap-1 items-center",
              {}
            )}
          >
            <Heart size={20} />
          </button>
          <span className="flex items-center gap-1 rounded-md hover:bg-accent">
            <MessageCircle size={20} />
          </span>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">
            <Skeleton className="inline-block w-4 h-6" /> likes
          </span>
          {" ‧ "}
          <span className="text-sm text-muted-foreground">
            <Skeleton className="inline-block w-4 h-6" /> replies
          </span>
        </div>
      </div>
    </div>
  );
};
