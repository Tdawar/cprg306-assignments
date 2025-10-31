export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      onClick={onSelect}
      className="bg-white text-gray-900 border rounded-lg shadow-md w-64 p-4 m-3 mx-auto list-none cursor-pointer hover:bg-gray-100"
    >
      <h3 className="text-indigo-900 font-bold font-serif text-lg">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
