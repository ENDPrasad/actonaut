import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

interface SuggestionCardProps {
  name: string;
  position: string;
  mutuals: string;
  avatarUrl: string;
  onFollow?: () => void;
  onRemove?: () => void;
  initiallyFollowing?: boolean
}

const SuggestionCardWithFollow: React.FC<SuggestionCardProps> = ({
  name,
  position,
  mutuals,
  avatarUrl,
  onFollow,
  onRemove,
  initiallyFollowing
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleFollowClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsFollowing(!isFollowing);
      onFollow?.();
    }, 3000); // simulate delay
  };

  const handleRemoveClick = () => {
    setIsVisible(false);
    onRemove?.();
  };

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-sm">
      <Typography variant="subtitle1" className="mb-2">
        Suggestions for you
      </Typography>

      <Card className="relative shadow-md rounded-2xl p-2">
        {/* Remove Button */}
        <div className="absolute right-2 top-2 z-10">
          <Tooltip title="Remove">
            <IconButton onClick={handleRemoveClick} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>

        <CardHeader
          avatar={<Avatar src={avatarUrl} alt={name} />}
          title={<Typography variant="subtitle1">{name}</Typography>}
          subheader={
            <div>
              <Typography variant="body2" className="text-sm text-gray-600">
                {position}
              </Typography>
              <Typography variant="caption" className="text-xs text-gray-400">
                {mutuals}
              </Typography>
            </div>
          }
        />

        <CardContent className="pt-1">
          <Tooltip title={isFollowing ? "Unfollow" : "Follow"}>
            <span>
              <Button
                fullWidth
                onClick={handleFollowClick}
                variant={isFollowing || initiallyFollowing ? "outlined" : "contained"}
                disabled={isLoading}
                startIcon={isFollowing || initiallyFollowing ? <DoneIcon /> : <PersonAddAlt1Icon />}
                className="capitalize"
              >
                {isLoading
                  ? "Processing..."
                  : isFollowing
                  ? "Following"
                  : initiallyFollowing ? "Following": "Follow"}
              </Button>
            </span>
          </Tooltip>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuggestionCardWithFollow;
