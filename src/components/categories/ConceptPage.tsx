"use client"

import { useParams } from "react-router-dom"
import { ConceptPageLayout } from "./ConceptPageLayout"
import { createConceptPageData } from "./lib/conceptDataFactory"
import { conceptsData } from "../../assets/data/ConceptPagesData"


export function ConceptPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) {
    return <div>Invalid concept</div>
  }

  const concept = conceptsData[slug as keyof typeof conceptsData]

  if (!concept) {
    return <div>Concept not found</div>
  }

  const pageData = createConceptPageData(
    concept.name,
    concept.overview,
    concept.syntaxCode,
    concept.useCases,
    concept.importantNote
  )

  return <ConceptPageLayout data={pageData} />
}
