import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          P. Caillou Andrew — Author
        </h1>
        <nav className="mt-2">
          <Link className="mr-4 hover:underline" to="/">Home</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="p-4 border-t border-gray-700 text-center">
        &copy; 2025 P. Caillou Andrew
      </footer>
    </div>
  );
}

export default Layout;