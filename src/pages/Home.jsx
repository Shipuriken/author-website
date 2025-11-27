import React from "react";
import { universes } from "../data/universes.js";
import UniverseCard from "../components/UniverseCard.jsx";

function Home() {
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">About the Author</h2>
        <p>Enter bio here</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Universes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {universes.map((u) => (
            <UniverseCard key={u.name} universe={u} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;