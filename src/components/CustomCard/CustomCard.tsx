import { Card, Chip, Typography } from "@mui/material"
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR, scrollToTop, SECONDARY_DARK_COLOR, SECONDARY_TEXT_COLOR } from "../../helper/contants"
import { Link } from "react-router"
import './CustomCard.css'
import type { AutomationTopic } from "../../interfaces/interfaces"

function CustomCard({cardDetails}: {cardDetails:AutomationTopic}) {
  const {id, title, description, aliases, path, category} = cardDetails

  return (
    <Link to={path} key={id} onClick={scrollToTop}>
    <Card sx={{padding: '16px', minHeight: '18rem'}} className="flex flex-col custom-card gap-1">
      <div>
        <Chip label={category} sx={{backgroundColor: SECONDARY_DARK_COLOR, color: PRIMARY_TEXT_COLOR, padding: '2px 4px', fontWeight: '500', }}/>
      </div>
      <Typography sx={{ color: PRIMARY_COLOR, fontWeight: '500', fontSize: '18px'}}>{title}</Typography>
      <Typography sx={{textWrap: 'wrap', color: SECONDARY_TEXT_COLOR, fontSize: '14px'}}>{description}</Typography>
      <div className="py-4 flex gap-2 flex-wrap">
        {aliases.slice(0, 3).map((alias, idx) => (
  <Chip key={`${alias}-${idx}`} label={alias} />
))}
{aliases.length > 3 && (
  <Chip label={`+${aliases.length - 3} more`} />
)}

      </div>
    </Card>
    </Link>
  )
}

export default CustomCard