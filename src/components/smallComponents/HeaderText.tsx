import { Typography } from "@mui/material";

function HeaderText({ text }: { text: string }) {
  return (
    <Typography sx={{ fontSize: "2rem", fontWeight: "800" }}>{text}</Typography>
  );
}

export default HeaderText;
