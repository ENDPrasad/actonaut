// components/UserFollowCard.tsx
import { useState } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CheckIcon from "@mui/icons-material/Check";

interface UserFollowCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  isDisabled?: boolean;
  isInitiallyFollowing?: boolean;
  onChange?: ()=>void;
}

export default function UserFollowCard({
  name,
  title,
  avatarUrl,
  isDisabled = false,
  isInitiallyFollowing = false,
  onChange
}: UserFollowCardProps) {
  const [isFollowing, setIsFollowing] = useState(isInitiallyFollowing);
  const [loading, setLoading] = useState(false);

  const handleToggleFollow = () => {
    setLoading(true);
    setTimeout(() => {
      setIsFollowing((prev) => !prev);
      onChange?.()
      setLoading(false);
    }, 1000); // Simulate API call
  };

  const tooltipText = loading
    ? "Please wait..."
    : isFollowing
    ? "Click to unfollow"
    : "Click to follow";

  return (
    <Card className="w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: 56, height: 56 }}
          className="border border-gray-300"
        />
        <div className="flex flex-col grow">
          <Typography variant="subtitle1" className="font-semibold">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </div>

        <Tooltip title={isDisabled ? "User Removed": tooltipText} arrow>
          <span>
            <Button
              variant={isFollowing ? "outlined" : "contained"}
              color="primary"
              size="small"
              startIcon={
                loading ? (
                  <CircularProgress size={16} color="inherit" />
                ) : isFollowing ? (
                  <CheckIcon fontSize="small" />
                ) : (
                  <PersonAddAlt1Icon fontSize="small" />
                )
              }
              disabled={loading || isDisabled}
              onClick={handleToggleFollow}
              className={`transition-all duration-300 ${
                isFollowing
                  ? "hover:border-red-400 hover:text-red-500"
                  : "hover:bg-blue-700"
              }`}
            >
              {loading ? "..." : isFollowing ? "Following" : "Follow"}
            </Button>
          </span>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
