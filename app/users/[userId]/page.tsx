import { getAuthSession } from "@/lib/auth";
import { getUserProfile } from "@/src/query/user.query";
import { Profile } from "./Profile";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { followUser } from "./follow.action";
import { Post } from "@/src/features/post/Post";

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) return notFound();

  const isFollowing = session?.user.id
    ? await prisma.follow.findFirst({
        where: {
          followerId: user.id,
          followingId: user.id,
        },
        select: {
          id: true,
        },
      })
    : null;

  const currentUser = params.userId === session?.user.id;

  if (currentUser) {
    redirect("/profile");
  }

  return (
    <>
      <Profile user={user}>
        <form className="mt-4">
          <Button
            variant="outline"
            formAction={async () => {
              "use server";
              await followUser(params.userId);
            }}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        </form>
      </Profile>
      <div className="mt-4 border-t divide-y divide-muted border-accent">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
