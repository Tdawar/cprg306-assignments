"use client";

import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-20 flex flex-col items-center text-center bg-gradient-to-t from-gray-600 to-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold w-full mb-10">Shopping List </h1>
      <div className="w-full max-w-3xl">
        <ItemList />
      </div>
      <p className="italic w-full mt-20">Made By - Tushar Dawar </p>
    </main>
  );
}
