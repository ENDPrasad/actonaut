import ProductFilters from "../../components/scenarios/ProductFilter/ProductsFilterPage"
import ProductsPage from "../../components/scenarios/ProductsPagination/ProductsPage"
import type { ChallengeContent } from "../../interfaces/interfaces"

export const challengesData: Record<string, ChallengeContent> = {
"product-listing-pagination": {
  id: "product-listing-pagination",
  title: "E-commerce Product Listing & Pagination",
  description:
    "Automate testing of an e-commerce product listing page with pagination, category grouping, and product details.",
  difficulty: "medium",
  category: "E-Commerce",
  tags: ["pagination", "products", "search", "sorting", "filtering"],
  objectives: [
    "Navigate through paginated product listings",
    "Verify product counts by category",
    "Locate specific product across pages",
    "Identify highest-rated products in each category",
    "Find the most expensive product in each category",
  ],
  backgroundInfo:
    "This challenge simulates an e-commerce storefront with multiple products displayed over several pages. Testers need to validate product data, pagination functionality, and filtering logic.",
  requirements: [
    "Automate navigation through all product pages",
    "Verify category-wise product counts match expected data",
    "Locate and highlight specific products",
    "Identify products by rating and price within each category",
    "Validate next/previous pagination buttons and number navigation",
  ],
  acceptanceCriteria: [
    "Pagination works correctly with both number clicks and next/previous buttons",
    "Category-wise product counts are accurate",
    "Correct page number is identified for searched product",
    "Highest-rated and most expensive products are correctly identified in each category",
    "Automation follows best practices and uses proper waits",
  ],
  hints: [
    "Use loops to iterate through all pages when searching for a product",
    "Store product details in an array for category-wise analysis",
    "Use explicit waits for page content updates",
    "Consider dynamic selectors for products to avoid brittle locators",
  ],
  scenario: (
    <ProductsPage />
  ),
  testCases: [
    {
      id: "PLP_001",
      scenario: "Count products in each category",
      type: "positive",
      description: "Verify total number of products in each category matches expected values",
      expectedResult: "Counts match data source values",
      priority: "high",
      steps: [
        "Navigate to product listing page",
        "Iterate through all pages",
        "Extract category for each product",
        "Count products per category",
        "Compare counts with expected values from product data file",
      ],
    },
    {
      id: "PLP_002",
      scenario: "Find specific product and identify its page",
      type: "positive",
      description: "Locate a specific product in the listing and verify which page it is on",
      expectedResult: "Product is found and correct page number is displayed",
      priority: "high",
      steps: [
        "Navigate to product listing page",
        "Iterate through pages until product is found",
        "Verify product details match expected data",
        "Record the page number where product was found",
      ],
    },
    {
      id: "PLP_003",
      scenario: "Find highest-rated product in each category",
      type: "positive",
      description: "Identify the highest-rated product within each category",
      expectedResult: "Highest-rated product is correctly identified in each category",
      priority: "medium",
      steps: [
        "Navigate through all product pages",
        "Group products by category",
        "Identify product(s) with maximum rating in each category",
        "Verify ratings match expected data",
      ],
    },
    {
      id: "PLP_004",
      scenario: "Find most expensive product in each category",
      type: "positive",
      description: "Identify the most expensive product in each category",
      expectedResult: "Most expensive product is correctly identified in each category",
      priority: "medium",
      steps: [
        "Navigate through all product pages",
        "Group products by category",
        "Identify product with highest price in each category",
        "Verify price matches expected data",
      ],
    },
    {
      id: "PLP_005",
      scenario: "Validate pagination controls",
      type: "positive",
      description: "Ensure pagination works correctly using next, previous, and page number clicks",
      expectedResult: "Products change according to the page clicked",
      priority: "high",
      steps: [
        "Click page number 3 and verify products displayed belong to page 3",
        "Click Next button and verify correct next page is loaded",
        "Click Prev button and verify correct previous page is loaded",
        "Navigate to first page using pagination",
        "Navigate to last page using pagination",
      ],
    },
    {
      id: "PLP_006",
      scenario: "Verify product card details format",
      type: "negative",
      description: "Ensure each product card displays name, price, category, and rating",
      expectedResult: "All product cards have complete details in correct format",
      priority: "medium",
      steps: [
        "Navigate through all pages",
        "Verify each card displays product name",
        "Verify each card displays price with currency",
        "Verify each card displays category text",
        "Verify rating stars are visible and read-only",
      ],
    },
  ],
},
"product-filtering": {
  id: "product-filtering",
  title: "E-commerce Product Filtering & Search",
  description:
    "Automate testing of an e-commerce product listing page with multiple filtering options, including category, price range, rating, and stock availability.",
  difficulty: "medium",
  category: "E-Commerce",
  tags: ["filters", "products", "search", "category", "price", "rating", "stock"],
  objectives: [
    "Filter products by category",
    "Filter products by price range",
    "Filter products by minimum rating",
    "Show only in-stock products",
    "Reset filters and verify product list resets",
  ],
  backgroundInfo:
    "This challenge simulates an e-commerce storefront with various filtering options. Testers must validate that the filters work independently and in combination, and that resetting filters restores the full product list.",
  requirements: [
    "Automate category-based filtering",
    "Automate price range slider filtering",
    "Automate rating filter selection",
    "Automate stock availability filter",
    "Verify reset functionality clears all filters",
  ],
  acceptanceCriteria: [
    "All filters correctly update the displayed product list",
    "Filters work both individually and in combination",
    "Reset clears all filters and restores default product list",
    "Automation follows best practices with proper waits",
  ],
  hints: [
    "Use data attributes or accessible labels to select filter components",
    "Verify filter results match expected product data",
    "Test combinations of filters to ensure no conflicts",
    "Check that product counts update dynamically with filters applied",
  ],
  scenario: (
    <ProductFilters />
  ),
  testCases: [
    {
      id: "PF_001",
      scenario: "Filter products by category",
      type: "positive",
      description: "Select a category and verify only products from that category are shown",
      expectedResult: "Displayed products belong only to the selected category",
      priority: "high",
      steps: [
        "Navigate to product listing page",
        "Select category 'Electronics' from filter",
        "Verify all displayed products belong to 'Electronics'",
      ],
    },
    {
      id: "PF_002",
      scenario: "Filter products by price range",
      type: "positive",
      description: "Adjust price range slider and verify products displayed are within range",
      expectedResult: "All displayed products have price within selected range",
      priority: "high",
      steps: [
        "Navigate to product listing page",
        "Adjust price range slider to ₹5,000 – ₹50,000",
        "Verify all displayed products fall within selected price range",
      ],
    },
    {
      id: "PF_003",
      scenario: "Filter products by minimum rating",
      type: "positive",
      description: "Select minimum rating and verify products meet or exceed that rating",
      expectedResult: "All displayed products have rating greater than or equal to selected rating",
      priority: "medium",
      steps: [
        "Navigate to product listing page",
        "Set minimum rating filter to 4 stars",
        "Verify all displayed products have rating >= 4",
      ],
    },
    {
      id: "PF_004",
      scenario: "Show only in-stock products",
      type: "positive",
      description: "Enable 'In Stock Only' filter and verify out-of-stock items are hidden",
      expectedResult: "Only in-stock products are displayed",
      priority: "medium",
      steps: [
        "Navigate to product listing page",
        "Enable 'In Stock Only' filter",
        "Verify all displayed products are in stock",
      ],
    },
    {
      id: "PF_005",
      scenario: "Reset filters",
      type: "positive",
      description: "Apply multiple filters, reset them, and verify the full product list is shown",
      expectedResult: "All filters are cleared and default product list is displayed",
      priority: "high",
      steps: [
        "Navigate to product listing page",
        "Apply category, price, and stock filters",
        "Click reset button",
        "Verify all filters are cleared",
        "Verify full default product list is restored",
      ],
    },
    {
      id: "PF_006",
      scenario: "Verify product card details format after filtering",
      type: "negative",
      description: "Ensure that even after filtering, each product card shows complete details",
      expectedResult: "All product cards display name, price, category, and rating in correct format",
      priority: "medium",
      steps: [
        "Navigate to product listing page",
        "Apply category filter",
        "Verify each product card displays name",
        "Verify price is shown with currency symbol",
        "Verify category label is present",
        "Verify rating stars are visible and read-only",
      ],
    },
  ],
}

}

export function getChallengeById(challengeId: string): ChallengeContent | null {
  return challengesData[challengeId] || null
}

export function getAllChallenges(): ChallengeContent[] {
  return Object.values(challengesData)
}
