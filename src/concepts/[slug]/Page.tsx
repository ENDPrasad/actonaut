import { ConceptPageLayout } from "../../components/categories/ConceptPageLayout"
import { createConceptPageData } from "../../components/categories/lib/conceptDataFactory"

// This would typically come from a database or CMS
const conceptsData = {
  "html-div": {
    name: "div",
    overview:
      "The <div> element is a generic container for flow content. It has no effect on the content or layout until styled with CSS.",
    syntaxCode: '<div class="container">Content goes here</div>',
    useCases: [
      "Creating layout containers",
      "Grouping related elements",
      "Applying CSS styles to multiple elements",
      "Creating semantic sections with CSS classes",
    ],
    importantNote: []

  },
  "css-flexbox": {
    name: "flexbox",
    overview:
      "CSS Flexbox is a layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.",
    syntaxCode: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    useCases: [
      "Creating responsive layouts",
      "Centering content vertically and horizontally",
      "Distributing space between items",
      "Creating equal-height columns",
    ],
    importantNote: []
  },
}

interface ConceptPageProps {
  params: {
    slug: string
  }
}

export default function ConceptPage({ params }: ConceptPageProps) {
  const concept = conceptsData[params.slug as keyof typeof conceptsData]

  if (!concept) {
    return <div className="py-16">Concept not found</div>
  }

  const pageData = createConceptPageData(concept.name, concept.overview, concept.syntaxCode, concept.useCases, concept.importantNote)

  return <ConceptPageLayout data={pageData} />
}

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return Object.keys(conceptsData).map((slug) => ({
    slug,
  }))
}
