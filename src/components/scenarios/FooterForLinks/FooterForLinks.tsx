import { Link } from "react-router-dom";

export default function Footer() {
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-lg font-bold hover:underline">
            Cnarios
          </Link>
          <p className="mt-1 text-gray-400">Your automation practice ground</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Navigation</span>
          <Link to="/explore/links/#concept" className="hover:text-blue-400">
            In-page Navigation
          </Link>
          <a
            href="/explore/button"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            External Navigation (New Tab)
          </a>
          <button
            onClick={() => openInNewWindow("/explore/slider")}
            className="hover:text-blue-400 text-left"
          >
            External Navigation (New Window)
          </button>
          <Link to="/something" className="hover:text-blue-400">
            Broken Link
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Contact</span>
          <a href="mailto:cnaarios@gmail.com" className="hover:text-blue-400">
            Contact Us
          </a>
          <a
            href="https://www.youtube.com/channel/UC2F8fdGwKP18tyqEKtGRxeg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Follow Us on YouTube
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Cnarios. All rights reserved.
      </div>
    </footer>
  );
};

