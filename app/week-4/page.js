import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-20 flex flex-col items-center text-center bg-gradient-to-t from-gray-600 to-gray-900 min-h-screen text-white">
      <h1 className="text-3xl w-full mb-10">Add New Item</h1>
      <NewItem />
      <p className="italic w-full mt-20">Made By - Tushar Dawar</p>
    </main>
  );
}