import { Typography } from "@mui/material";

function HeaderText({ text, color= '' }: { text: string, color?:string }) {
  return (
    <Typography sx={{ color: `${color}`, fontSize: "2rem", fontWeight: "800" }}>{text}</Typography>
  );
}

export default HeaderText;
