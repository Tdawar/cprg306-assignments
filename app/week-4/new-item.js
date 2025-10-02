"use client"

import { useState } from "react";

export default function NewItem() {

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Conditional styling
  let buttonStylesInc = "mt-4 bg-blue-500 hover:bg-blue-300 text-white px-4 ml-5 py-2 rounded";
  if (quantity >= 20) {
    buttonStylesInc += " opacity-50 cursor-not-allowed";
  }
  let buttonStylesDec = "mt-4 bg-blue-500 hover:bg-blue-300 text-white px-4 ml-5 py-2 rounded";
  if (quantity <= 1) {
    buttonStylesDec += " opacity-50 cursor-not-allowed";
  }

  return (
    <main className="p-10">
      <p>Current quantity: {quantity}
        <button
          className={buttonStylesDec}
          onClick={decrement}
        >-</button>
        <button
          className={buttonStylesInc}
          onClick={increment}
        >+</button>
      </p>
    </main>
  );
}
