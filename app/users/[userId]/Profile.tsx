import { UserProfile } from "@/src/query/user.query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { PropsWithChildren } from "react";
import Link from "next/link";

const removeHttp = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};

export const Profile = ({
  user,
  children,
}: PropsWithChildren<{ user: UserProfile }>) => {
  return (
    <div className="container mt-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <p>@{user.username}</p>
        </div>
        <Avatar size="lg">
          {user.image ? (
            <AvatarImage src={user.image} alt="user avatar" />
          ) : null}
          <AvatarFallback>
            {user.username?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      {user.bio ? (
        <p className="mt-2 text-sm text-card-foreground">{user.bio}</p>
      ) : (
        <p className="text-muted-foreground">No bio</p>
      )}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex -space-x-2">
          {user.followeds.map((f) => (
            <Avatar
              size="sm"
              className="border-2 border-background"
              key={f.follower.id}
            >
              {f.follower.image ? (
                <AvatarImage src={f.follower.image} alt="user avatar" />
              ) : null}
              <AvatarFallback>
                {f.follower.username?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-muted-foreground">{" • "}</p>
        <p className="text-muted-foreground">
          {user._count.followeds} followers
        </p>
        {user.link ? (
          <>
            <p className="text-muted-foreground">{" • "}</p>
            <Link
              href={user.link}
              className="text-muted-foreground hover:underline"
            >
              {removeHttp(user.link)}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
