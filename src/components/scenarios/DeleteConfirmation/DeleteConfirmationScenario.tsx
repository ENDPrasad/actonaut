"use client";

import { useState } from "react";

export default function DeleteConfirmScenario() {
  const [itemDeleted, setItemDeleted] = useState(false);
  const [status, setStatus] = useState("");

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      setItemDeleted(true);
      setStatus("Item deleted successfully");
    } else {
      setStatus("Deletion cancelled");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Your Bookmarked Item</h2>

      {!itemDeleted ? (
        <div className="flex items-center justify-between">
          <span className="text-gray-800">📘 Learn React Testing</span>
          <button
            onClick={handleDelete}
            className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      ) : (
        <p className="text-gray-500 italic">Item has been deleted.</p>
      )}

      {status && (
        <div className="mt-4 p-3 rounded text-sm font-medium bg-gray-100 border border-gray-300 text-gray-800">
          {status}
        </div>
      )}
    </div>
  );
}
