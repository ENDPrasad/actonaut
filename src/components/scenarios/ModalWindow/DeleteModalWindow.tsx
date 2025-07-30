import { useState } from "react";
import { Button, Typography } from "@mui/material";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function DeleteModalWindow() {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setDeleted(true);
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {deleted ? "Item has been deleted." : "Item: Learn Automation"}
      </Typography>
      {!deleted && (
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
      )}
      <ConfirmDeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

