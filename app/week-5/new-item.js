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
    
    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

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
}