import { getUserEdit } from "@/src/query/user.query";
import { ProfileForm } from "./ProfileForm";
import { editProfile } from "./edit-profile.action";

export default async function page() {
  const user = await getUserEdit();

  return (
    <div className="container flex items-center h-full">
      <div className="flex-1 p-4 border rounded-md bg-card border-border">
        <ProfileForm user={user} onSubmit={editProfile} />
      </div>
    </div>
  );
}
