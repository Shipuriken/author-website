import React from "react";
import { Link } from "react-router-dom";

function UniverseCard({ universe }) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition">
      <Link to={`/universe/${encodeURIComponent(universe.name)}`}>
        <h2 className="text-xl font-semibold">{universe.name}</h2>
      </Link>
      <p>{universe.snippets[0]}</p>
    </div>
  );
}

export default UniverseCard;