export type AutomationTopic = {
  id: string;
  title: string;             // Main topic title (display on card)
  aliases: string[];         // Alternate names (to show as chips)
  description: string;       // Short summary of what the topic is
  path: string;              // URL path to the topic page
  category: string;          // e.g., Element, Event, Input, Navigation
  tags?: string[];           // Optional: extra keywords for search/filter
};
import type React from "react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

export interface ConceptPageData {
  breadcrumbs: BreadcrumbItem[]
  title: string
  tabs: TabItem[]
  activeTab?: string,
}

export interface ContentSection {
  title?: string
  content: React.ReactNode
}

export interface TestCase {
  id: string
  scenario: string
  type: "positive" | "negative" | "error"
  description: string
  expectedResult: string
  priority: "high" | "medium" | "low"
  steps: string[]
}

export interface SolutionCode {
  testCaseId: string
  language: string
  code: string
  explanation: string
}

// Updated Practice Scenario interfaces
export interface PracticeScenario {
  id: string
  title: string
  description: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  learningObjectives: string[]
  siteContent: React.ReactNode
}

export interface InteractiveElement {
  id: string
  type: "button" | "input" | "dropdown" | "checkbox" | "link" | "form" | "dragdrop" | "slider" | "modal"
  label: string
  selector: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>
}

// Challenge system interfaces
// export interface Challenge {
//   id: string
//   title: string
//   description: string
//   difficulty: "easy" | "medium" | "hard" | "expert"
//   category: string
//   tags: string[]
//   prerequisites?: string[]
//   scenario: React.ReactNode
//   objectives: string[]
//   hints?: string[]
// }

export interface ChallengeFilters {
  difficulty: string
  category: string
  search: string
}

export interface PracticeEnvironment {
  title: string,
  description:string,
  instructions: string[],
  interactiveElements: {
        id: string,
        type: string,
        label: string,
        selector: string,
        description: string,
      }[]
}
// interfaces.ts
export interface Blog {
  title: string;
  category: string;
  slug: string;
  description: string;
  content: BlogContent[];
}

export type BlogContent = ParagraphContent | ImageContent | IHeaderContent;

interface ParagraphContent {
  type: 'paragraph';
  text: string;
}

interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
}

interface IHeaderContent {
  type: 'header';
  text: string;
}

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
};


// Challenge system interfaces
export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard" | "expert"
  category: string
  tags: string[]
  prerequisites?: string[]
  scenario: React.ReactNode
  objectives?: string[]
  hints?: string[]
}

export interface ChallengeFilters {
  difficulty: string
  category: string
  search: string
}


// New Challenge Page Data interface
export interface ChallengePageData {
  breadcrumbs: BreadcrumbItem[]
  challenge: Challenge
  tabs: TabItem[]
  activeTab?: string
}

// Challenge content interface
export interface ChallengeContent {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard" | "expert"
  category: string
  tags: string[]
  prerequisites?: string[]
  objectives?: string[]
  hints?: string[]
  scenario: React.ReactNode
  backgroundInfo?: string
  requirements?: string[]
  acceptanceCriteria: string[]
  testCases: TestCase[]
  solutions?: SolutionCode[]
}
