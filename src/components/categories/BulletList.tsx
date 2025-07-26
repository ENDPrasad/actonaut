import { List, ListItem, ListItemText } from "@mui/material"

interface BulletListProps {
  items: string[]
  className?: string
}

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <List
      className={`text-gray-700 ${className}`}
      sx={{
        listStyleType: "disc",
        pl: 2,
        "& .MuiListItem-root": {
          display: "list-item",
          padding: "2px 0",
        },
      }}
    >
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemText
            primary={item}
            sx={{
              margin: 0,
              "& .MuiTypography-root": {
                fontSize: "0.875rem",
                lineHeight: 1.5,
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}
