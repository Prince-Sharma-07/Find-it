"use client";
import { addLostItem } from "@/actions";
import React, { useState } from "react";

export default function Lost() {
  const [itemName, setItemName] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");
  const [locationLost, setLocationLost] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleItemLost(e: FormEvent) {
    e.preventDefault();
    setError("");

    const item = {
      itemName,
      itemDescription,
      locationLost,
    };
    const response = await addLostItem(item);
    if (!response.success) {
      setError(response.message);
    } else {
      alert(response.message);
    }
    setItemName("");
    setItemDescription("");
    setLocationLost("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Report Lost Item</h1>
      <form
        onSubmit={handleItemLost}
        className="w-1/2 bg-white p-6 rounded-lg shadow-lg"
      >
        {error ? <p className="text-red-400">{error}</p> : <></>}
        <label className="block mb-4">
          <span className="text-gray-700">Item Name</span>
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            type="text"
            placeholder="Enter item name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            placeholder="Describe the item"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Location Lost</span>
          <input
            value={locationLost}
            onChange={(e) => setLocationLost(e.target.value)}
            type="text"
            placeholder="Where was it lost?"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
