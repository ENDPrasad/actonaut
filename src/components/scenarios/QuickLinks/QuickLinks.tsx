import { Card, CardContent } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface QuickLink {
  label: string;
  href: string;
  openIn: "tab" | "window";
}

interface QuickLinksSection {
  title: string;
  links: QuickLink[];
}

const sections: QuickLinksSection[] = [
  {
    title: "Basic Interactions",
    links: [
      { label: "Learn about Button", href: "/explore/button", openIn: "tab" },
      { label: "Learn about Links", href: "/explore/links", openIn: "tab" },
    ],
  },
  {
    title: "Pickers & Inputs",
    links: [
      { label: "Learn about Time Picker", href: "/explore/timepicker", openIn: "window" },
      { label: "Learn about Date Picker", href: "/explore/datepicker", openIn: "window" },
      { label: "Learn about Radio Input", href: "/explore/radio", openIn: "tab" },
      { label: "Learn about Checkbox", href: "/explore/checkbox", openIn: "tab" },
    ],
  },
  {
    title: "Layout & Interaction",
    links: [
      { label: "Learn about Scroll", href: "/explore/scroll", openIn: "window" },
      { label: "Learn about Drag and Drop", href: "/explore/draganddrop", openIn: "tab" },
      { label: "Learn about Dropdown", href: "/explore/dropdown", openIn: "tab" },
      { label: "Learn about AI", href: "/ai", openIn: "tab" },
    ],
  },
];

const QuickLinks = () => {
  const openLink = (href: string, type: "tab" | "window") => {
    if (type === "window") {
      window.open(href, "_blank", "width=800,height=600");
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="space-y-6">
      {sections.map((section, idx) => (
        <Card key={idx} className="p-4 rounded-2xl shadow-md bg-white">
          <CardContent>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline"
                  onClick={() => openLink(link.href, link.openIn)}
                >
                  {link.label} <OpenInNewIcon fontSize="small" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickLinks;
