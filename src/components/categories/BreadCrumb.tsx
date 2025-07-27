import { Breadcrumbs, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import type { BreadcrumbItem } from "../../interfaces/interfaces"
import { PRIMARY_COLOR } from "../../helper/contants"

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mb-4 text-sm text-gray-600" separator=">">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            component={RouterLink}
            to={item.href}
            className="hover:text-gray-900 text-gray-600 no-underline"
            sx={{ textDecoration: "none", color: PRIMARY_COLOR }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={index} className="text-gray-900">
            {item.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  )
}
