export default function Item({ name, quantity, category }) {
  return (
    <div  className="list-none bg-white text-gray-900 border rounded-lg shadow-md w-64 p-4 m-3 mx-auto">
      <li>
        <h3 className="text-indigo-900 font-bold font-serif text-lg">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p className="capitalize">Category: {category}</p>
      </li>
    </div>
  );
}
