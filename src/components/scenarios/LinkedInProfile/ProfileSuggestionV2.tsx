import React, { useState } from "react";
import SuggestionCardWithFollow from "./UserFollowCardV2";

const suggestionsData = [
  {
    id: "1",
    name: "Anjali Sharma",
    position: "Product Designer at Dribbble",
    mutuals: "3 mutual connections",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    position: "Software Engineer at Google",
    mutuals: "2 mutual connections",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "3",
    name: "Neha Verma",
    position: "UX Researcher at Adobe",
    mutuals: "5 mutual connections",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "4",
    name: "Ram",
    position: "SDET at Apple",
    mutuals: "15 mutual connections",
    avatarUrl: "https://i.pravatar.cc/150?img=69",
  },
];

export default function ProfileSuggestionV2() {
    // const [isFollowing, setIsFollowing] = useState(false)
  const [suggestions, setSuggestions] = useState(suggestionsData);

  const handleRemove = (id: string) => {
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
  };


  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2>

      <div className="flex flex-wrap gap-4">
        {suggestions.length > 0 ? suggestions.map((suggestion) => (
          <SuggestionCardWithFollow
            key={suggestion.id}
            // initiallyFollowing={parseInt(suggestion.id) === 3 && isFollowing}
            name={suggestion.name}
            position={suggestion.position}
            mutuals={suggestion.mutuals}
            avatarUrl={suggestion.avatarUrl}
            // onFollow={() =>
            // //   setIsFollowing(prev=>!prev)
            // }
            onRemove={() => handleRemove(suggestion.id)}
          />
        )): <div className="p-8">No suggestions at the moment</div>}
      </div>
    </div>
  );
};

