"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = [...itemsData];

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const baseButton = "px-4 py-2 rounded-md font-semibold mx-2 transition duration-200";
  const activeButton = "bg-blue-600 text-white hover:bg-blue-700";
  const inactiveButton = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-8">
        <button
          onClick={() => setSortBy("name")}
          className={`${baseButton} ${ sortBy === "name" ? activeButton : inactiveButton }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`${baseButton} ${ sortBy === "category" ? activeButton : inactiveButton }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="grid grid-cols-1">
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
