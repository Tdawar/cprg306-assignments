export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-blue-100 hover:bg-blue-300 hover:scale-110 text-gray-900 border-4 border-gray-500 w-58 h-30 m-3 p-2 rounded inline-block items-center place-content-center">
      <h3 className="text-indigo-900 font-bold font-serif">{name}</h3>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}
