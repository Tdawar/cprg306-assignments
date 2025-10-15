"use client";

import { useState } from "react";

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };


    console.log(item);
    
    alert(`Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

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

  let buttonStylesInc = "mt-4 bg-blue-500 hover:bg-blue-300 text-white px-4 ml-5 py-2 rounded";
  if (quantity >= 20) {
    buttonStylesInc += " opacity-50 cursor-not-allowed";
  }
  let buttonStylesDec = "mt-4 bg-blue-500 hover:bg-blue-300 text-white px-4 ml-5 py-2 rounded";
  if (quantity <= 1) {
    buttonStylesDec += " opacity-50 cursor-not-allowed";
  }

   return(
    <form onSubmit={handleSubmit} className = "outline p-9" >
       <label htmlFor="name" className="block font-medium ">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 my-4"
              placeholder="e.g., milk, 4 L 🥛"
            />
              <p>Quantity: {quantity}</p>
              <p>
                <button
                className={buttonStylesDec}
                onClick={decrement}
                type = "button"
                >-</button>
              <button
              className={buttonStylesInc}
              onClick={increment}
              type = "button"
              >+</button>
              </p>
           
             <label htmlFor="category" className="block font-medium my-4">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700 my-4"
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>

            
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 my-4"
          >
            Add Item
          </button>
          
    </form>
  );

}