// pages/index.tsx
import { useState } from "react";
import UserFollowCard from "./UserFollowCard";

export default function ProfileSuggestion() {
    const [isFollowing, setIsFollowing] = useState(false)

    const onChange = ()=>{
        setIsFollowing(prev=>!prev)
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Suggestions for you</h2>

        <div className="space-y-4">
          <UserFollowCard
            name="Pranavi Reddy"
            title="Frontend Engineer @LinkedIn"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            isInitiallyFollowing={isFollowing}
            onChange={onChange}
          />
          <UserFollowCard
            name="Aarav Sharma"
            title="Product Designer @Dribbble"
            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
            isInitiallyFollowing={isFollowing}
            onChange={onChange}

          />
          <UserFollowCard
            name="Divya Patel"
            title="Full Stack Developer @Google"
            avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
          />
          <UserFollowCard
            name="Hermoine"
            title="Backend Developer @Netflix"
            avatarUrl=""
          />
          <UserFollowCard
            name="Ramya"
            title="Full Stack Developer @Meta"
            avatarUrl="https://randomuser.me/api/portraits/women/48.jpg"
          />
          <UserFollowCard
            name="Unknown User"
            title="Unknown"
            avatarUrl=""
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  );
}
