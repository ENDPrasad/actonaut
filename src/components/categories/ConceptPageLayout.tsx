import { Container, Paper } from "@mui/material"
import { Breadcrumb } from "./BreadCrumb"
import { TabNavigation } from "./TabNavigation"
import type { ConceptPageData } from "../../interfaces/interfaces"

interface ConceptPageLayoutProps {
  data: ConceptPageData
}

export function ConceptPageLayout({ data }: ConceptPageLayoutProps) {
  return (
    <Container maxWidth="lg" className="py-6">
      <Paper elevation={0} className="bg-white min-h-screen p-6" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Breadcrumb items={data.breadcrumbs} />
        <TabNavigation tabs={data.tabs} defaultActiveTab={data.activeTab} />
      </Paper>
    </Container>
  )
}
