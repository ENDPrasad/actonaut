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
  activeTab?: string
}

export interface ContentSection {
  title: string
  content: React.ReactNode
}

// New interfaces for the additional sections
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

export interface PracticeEnvironment {
  title: string
  description: string
  sampleSiteUrl?: string
  interactiveElements: InteractiveElement[]
  instructions: string[]
}

export interface InteractiveElement {
  id: string
  type: "button" | "input" | "dropdown" | "checkbox" | "link" | "form"
  label: string
  selector: string
  description: string
}
