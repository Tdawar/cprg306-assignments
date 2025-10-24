"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-20 flex flex-col items-center text-center bg-gradient-to-t from-gray-600 to-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold w-full mb-10">Week 7 - Shopping List</h1>
      <div className="w-full max-w-md mb-10">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="w-full max-w-3xl">
        <ItemList items={items} />
      </div>
      <p className="italic w-full mt-20">Made By - Tushar Dawar</p>
    </main>
  );
}
