"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let name = item.name;
    name = name.split(",")[0].trim();
    name = name.replace(/[^\p{L}\p{N}\s]/gu, "");
    setSelectedItemName(name);
  };

  return (
    <main className="p-20 flex flex-col items-center text-center bg-gradient-to-t from-gray-600 to-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold w-full mb-10">Week 9 - Authentication Demo</h1>
      <div className="flex w-full gap-10">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
      <p className="italic w-full mt-20">Made By - Tushar Dawar</p>
    </main>
  );
}
