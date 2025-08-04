// NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-extrabold text-[#4052B5]">404</h1>
      <p className="text-xl mt-4 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <p className="mt-2 text-gray-500">It seems you've tried to automate something that's not built yet.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-[#4052B5] text-white px-6 py-3 rounded-lg shadow hover:bg-[#2f3b91] transition"
      >
        Back to Practice Lab
      </Link>
    </div>
  );
};

export default NotFound;
