import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-purple-700 text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
