import type { ConceptPageData, ContentSection } from "../../../interfaces/interfaces"
import { CodeBlock } from "../CodeBlock"
import { BulletList } from "../BulletList"
import { ContentSectionComponent } from "../ContentSection"
import { Typography } from "@mui/material"
import { PracticeEnvironmentComponent } from "../PracticeEnvironment"
import { TestCasesTable } from "../TestCasesTable"
import { SolutionCodeComponent } from "../SolutionCode"
import { createButtonPracticeEnvironment, createFormPracticeEnvironment } from "./PracticeEnvironmentFactory"
import { createButtonTestCases, createFormTestCases } from "./TestCasesFactory"
import { createButtonSolutions, createFormSolutions } from "./SolutionCodeFactory"

// Factory function to create concept page data
export function createConceptPageData(
  conceptName: string,
  overview: string,
  syntaxCode: string,
  useCases: string[],
  additionalSections?: ContentSection[],
): ConceptPageData {
  // Determine which practice environment, test cases, and solutions to use
  const practiceEnvironment =
    conceptName === "button" ? createButtonPracticeEnvironment() : createFormPracticeEnvironment()

  const testCases = conceptName === "button" ? createButtonTestCases() : createFormTestCases()

  const solutions = conceptName === "button" ? createButtonSolutions() : createFormSolutions()

  return {
    breadcrumbs: [{ label: "Categories", href: "/explore" }, { label: conceptName }],
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

                    <ContentSectionComponent
                        section={{
                            title: "Syntax",
                            content: <CodeBlock code={syntaxCode} />,
                        }} />

                    <ContentSectionComponent
                        section={{
                            title: "Where we will use that?",
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
            content: <PracticeEnvironmentComponent environment={practiceEnvironment} />,
        },
        {
            id: "test-cases",
            label: "Test Cases",
            content: <TestCasesTable testCases={testCases} />,
        },
        {
            id: "solution",
            label: "Solution",
            content: <SolutionCodeComponent solutions={solutions} testCases={testCases} />,
        },
    ],
    activeTab: "concept",
    title: "",
}
}
