import { Button, buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/features/post/Post";
import { getUserProfile } from "@/src/query/user.query";
import { followUser } from "../users/[userId]/follow.action";
import { Profile } from "../users/[userId]/Profile";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    notFound();
  }

  const user = await getUserProfile(session?.user.id);

  if (!user) {
    notFound();
  }

  return (
    <>
      <Profile user={user}>
        <form className="mt-4">
          <Link
            className={buttonVariants({
              variant: "outline",
            })}
            href="/profile/edit"
          >
            Edit profile
          </Link>
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
