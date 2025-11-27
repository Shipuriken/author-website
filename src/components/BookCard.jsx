import React from "react";

function BookCard({ book }) {
  return (
    <div className="border border-gray-700 p-3 rounded-lg my-2 bg-gray-800">
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-gray-400">{book.price}</p>
    </div>
  );
}

export default BookCard;