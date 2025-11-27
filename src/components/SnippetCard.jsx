import React from "react";

function SnippetCard({ snippet }) {
  return (
    <div className="border border-gray-700 p-3 rounded-lg my-2 bg-gray-800">
      <p>{snippet}</p>
    </div>
  );
}

export default SnippetCard;