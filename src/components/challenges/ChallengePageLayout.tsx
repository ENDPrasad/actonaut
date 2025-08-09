import { Container, Paper } from "@mui/material"
import { Breadcrumb } from "../categories/BreadCrumb"
import { TabNavigation } from "../categories/TabNavigation"
import type { ChallengePageData } from "../../interfaces/interfaces"

interface ChallengePageLayoutProps {
  data: ChallengePageData
}

export function ChallengePageLayout({ data }: ChallengePageLayoutProps) {
  return (
    <Container maxWidth="lg" className="py-6">
      <Paper elevation={0} className="bg-white min-h-screen p-6" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Breadcrumb items={data.breadcrumbs} />
        <TabNavigation tabs={data.tabs} defaultActiveTab={data.activeTab} />
      </Paper>
    </Container>
  )
}
