import type { ConceptPageData, ContentSection } from "../../../interfaces/interfaces"
// import { CodeBlock } from "../CodeBlock"
import { BulletList } from "../BulletList"
import { ContentSectionComponent } from "../ContentSection"
import { Typography } from "@mui/material"
import { TestCasesTable } from "../TestCasesTable"
// import { SolutionCodeComponent } from "../SolutionCode"
// import { createButtonSolutions, createFormSolutions } from "./SolutionCodeFactory"
import { PracticeScenarioComponent } from "../PracticeScenario"
import { getScenarioById } from "./ScenarioFactory"
import { getTestCasesById } from "./TestCaseSelection"
import ImportantNoteList from "../ImportantNotes"

// Factory function to create concept page data
export function createConceptPageData(
  conceptName: string,
  overview: string,
  syntaxCode: string,
  useCases: string[],
  importantNote: string[],
  scenarioId?: string,
  additionalSections?: ContentSection[],
): ConceptPageData {
  // Get the appropriate scenario
  const scenario = scenarioId ? getScenarioById(scenarioId) : getScenarioById(conceptName)


  const finalScenario = scenario || (scenarioId ? getScenarioById(scenarioId) : null)

  const testCases = getTestCasesById(conceptName)
//   const solutions = conceptName === "button" ? createButtonSolutions() : createFormSolutions()

  return {
    breadcrumbs: [{ label: "explore", href: "/explore" }, { label: conceptName }],
    tabs: [
        {
            id: "concept",
            label: "Concept",
            content: (
                <div>
                    <ContentSectionComponent
                        section={{
                            title: "Overview",
                            content: <Typography className="text-gray-700">{overview}</Typography>,
                        }} />

                    {/* <ContentSectionComponent
                        section={{
                            title: "Syntax",
                            content: <CodeBlock code={syntaxCode} />,
                        }} /> */}

                    <ContentSectionComponent
                        section={{
                            // title: "Important Note",
                            content: <ImportantNoteList items={importantNote} />,
                        }} />

                    <ContentSectionComponent
                        section={{
                            title: "Usecases",
                            content: <BulletList items={useCases} />,
                        }} />

                    {additionalSections?.map((section, index) => (
                        <ContentSectionComponent key={index} section={section} />
                    ))}
                </div>
            ),
        },
        {
            id: "try-it-yourself",
            label: "Try It Yourself",
            content: finalScenario ? (
                <PracticeScenarioComponent scenario={finalScenario} />
            ) : (
                <Typography>No practice scenario available for this concept.</Typography>
            ),
        },
        {
            id: "test-cases",
            label: "Test Cases",
            content: <TestCasesTable testCases={testCases || []} />,
        }
    ],
    activeTab: "concept",
    title: "",
}
}
