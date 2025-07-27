import { ConceptPageLayout } from "../components/categories/ConceptPageLayout"
import { ContentSectionComponent } from "../components/categories/ContentSection"
import { CodeBlock } from "../components/categories/CodeBlock"
import { BulletList } from "../components/categories/BulletList"
import type { ConceptPageData } from "../interfaces/interfaces"

// Example data for the button concept page
const buttonConceptData: ConceptPageData = {
    breadcrumbs: [{ label: "Categories", href: "/explore" }, { label: "button" }],
    tabs: [
        {
            id: "concept",
            label: "Concept",
            content: (
                <div>
                    <ContentSectionComponent
                        section={{
                            title: "Overview",
                            content: (
                                <p>
                                    The {"<a>"} (anchor) tag defines a hyperlink, which is used to navigate from one page or section of a
                                    document to another or to trigger actions like file downloads in real time.
                                </p>
                            ),
                        }} />

                    <ContentSectionComponent
                        section={{
                            title: "Syntax",
                            content: <CodeBlock code='<a href="https://example.com">Navigate to example site</a>' language="html" />,
                        }} />

                    <ContentSectionComponent
                        section={{
                            title: "Where we will use that?",
                            content: (
                                <BulletList
                                    items={[
                                        "Enables navigation between web pages or sections.",
                                        "Can fix the",
                                        'Internal navigation (href="#about")',
                                        'External navigation (href="#about")',
                                        'Email links (href="mailto:")',
                                        'Phone numbers (href="tel:")',
                                        'File downloads (href="/file.pdf" download)',
                                    ]} />
                            ),
                        }} />

                    <ContentSectionComponent
                        section={{
                            title: "All Possible States",
                            content: (
                                <div>
                                    <p className="mb-3 font-medium">Pseudo-Classes States:</p>
                                    <BulletList
                                        items={[
                                            "link - Default links",
                                            "visited - Visited links",
                                            "hover - On mouse hover",
                                            "active - When being clicked",
                                            "focus - When focused via keyboard or script",
                                            "target - When the link's hash matches an element ID",
                                        ]} />

                                    <p className="mb-3 mt-6 font-medium">Attributes:</p>
                                    <BulletList
                                        items={[
                                            "href - Destination",
                                            'target="_blank" - Open in new tab',
                                            'rel="noopener" - Security for external links using _blank',
                                            "download - Triggers file download",
                                            "disabled - Not valid natively (can be simulated for display/handling)",
                                        ]} />
                                </div>
                            ),
                        }} />
                </div>
            ),
        },
        {
            id: "try-it-yourself",
            label: "Try It Yourself",
            content: (
                <div>
                    <h3 className="text-lg font-semibold mb-4">Interactive Example</h3>
                    <p className="text-gray-600">Try creating your own anchor tags here...</p>
                    {/* Add interactive code editor component here */}
                </div>
            ),
        },
        {
            id: "test-cases",
            label: "Test Cases",
            content: (
                <div>
                    <h3 className="text-lg font-semibold mb-4">Test Your Knowledge</h3>
                    <p className="text-gray-600">Test cases and quizzes will be displayed here...</p>
                    {/* Add test cases component here */}
                </div>
            ),
        },
    ],
    activeTab: "concept",
    title: ""
}

export default function HomePage() {
  return <ConceptPageLayout data={buttonConceptData} />
}
