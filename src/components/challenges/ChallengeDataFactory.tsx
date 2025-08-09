import type { ChallengePageData, ChallengeContent } from "../../interfaces/interfaces"
import { ChallengeContent as ChallengeContentComponent } from "./ChallengeContent"
import { TestCasesTable } from "../categories/TestCasesTable"
// import { SolutionCodeComponent } from "../categories/SolutionCode"

export function createChallengePageData(challengeContent: ChallengeContent): ChallengePageData {
  const challenge = {
    id: challengeContent.id,
    title: challengeContent.title,
    description: challengeContent.description,
    difficulty: challengeContent.difficulty,
    category: challengeContent.category,
    tags: challengeContent.tags,
    prerequisites: challengeContent.prerequisites,
    objectives: challengeContent.objectives,
    hints: challengeContent.hints,
    scenario: challengeContent.scenario,
  }

  return {
    breadcrumbs: [{ label: "Challenges", href: "/challenges" }, { label: challenge.title }],
    challenge,
    tabs: [
      {
        id: "challenge",
        label: "Challenge",
        content: (
          <ChallengeContentComponent
            challenge={challenge}
            backgroundInfo={challengeContent.backgroundInfo}
            requirements={challengeContent.requirements}
            acceptanceCriteria={challengeContent.acceptanceCriteria}
          />
        ),
      },
      {
        id: "test-cases",
        label: "Test Cases",
        content: <TestCasesTable testCases={challengeContent.testCases} />,
      },
      // {
      //   id: "solution",
      //   label: "Solution",
      //   content: <SolutionCodeComponent solutions={challengeContent?.solutions || []} testCases={challengeContent.testCases} />,
      // },
    ],
    activeTab: "challenge",
  }
}
