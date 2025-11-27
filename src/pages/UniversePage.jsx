import React from "react";
import { useParams } from "react-router-dom";
import { universes } from "../data/universes.js";
import SnippetCard from "../components/SnippetCard.jsx";
import BookCard from "../components/BookCard.jsx";

function UniversePage() {
  const { name } = useParams();
  const universe = universes.find((u) => u.name === name);

  if (!universe) {
    return <p>Universe not found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{universe.name}</h2>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Snippets</h3>
        {universe.snippets.map((s, i) => (
          <SnippetCard key={i} snippet={s} />
        ))}
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2">Books</h3>
        {universe.books.map((b, i) => (
          <BookCard key={i} book={b} />
        ))}
      </section>
    </div>
  );
}

export default UniversePage;