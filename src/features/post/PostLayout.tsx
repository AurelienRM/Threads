import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/date";
import { PostHome } from "@/src/query/post.query";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"];
  createdAt?: Date;
  postId?: string;
  className?: string;
}>;

export const PostLayout = ({
  className,
  user,
  createdAt,
  postId,
  children,
}: PostLayoutProps) => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4", className)}>
      <Avatar size="default">
        {user.image ? <AvatarImage src={user.image} alt="user avatar" /> : null}
        <AvatarFallback>
          {user.username?.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full gap-2 ml-4">
        <Link href={`/users/${user.id}`}>
          <div className="flex flex-row gap-2 item-center">
            <p className="mr-auto text-sm text-card-foreground">
              {user.username}
            </p>
            {createdAt ? (
              <p className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            ) : null}
            <button>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};
