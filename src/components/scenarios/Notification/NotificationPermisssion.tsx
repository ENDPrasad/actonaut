import { useState, useEffect } from "react";
import { Button, Alert } from "@mui/material";

export default function NotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermission>(Notification.permission);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPermission(Notification.permission);
  }, []);

  const handleRequestPermission = async () => {
    if (permission === "granted") {
      new Notification("✅ You already allowed notifications", {
        body: "Thanks for enabling notifications!",
      });
      return;
    }

    if (permission === "denied") {
      setError(
        "You've previously denied permission. Please enable it manually from browser settings."
      );
      return;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);

      if (result === "granted") {
        new Notification("🎉 Notification Enabled", {
          body: "You will now receive notifications!",
        });
        setError(null);
      } else if (result === "denied") {
        setError("You denied notification permission.");
      } else {
        setError("You dismissed the permission popup.");
      }
    } catch {
      setError("Something went wrong while requesting permission.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Button
        variant="contained"
        color="primary"
        onClick={handleRequestPermission}
        className="!rounded-xl !px-6 !py-3"
      >
        Request Notification Permission
      </Button>

      {error && <Alert severity="error">{error}</Alert>}

      {permission === "granted" && !error && (
        <Alert severity="success">Notifications are already enabled.</Alert>
      )}

      {permission === "denied" && (
        <Alert severity="warning">
          You have denied notifications. To change, go to your browser settings and allow them
          again.
        </Alert>
      )}
      {/* Always-visible bottom warning */}
      <Alert severity="warning" className="mt-8">
        If you've already <strong>granted</strong> or <strong>denied</strong> permission,
        browsers won't show the popup again. Please go to your browser's notification settings to
        reset or change the permission.
      </Alert>
    </div>
  );
};
