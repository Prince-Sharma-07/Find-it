//@ts-nocheck
"use client";
import { addItem } from "@/actions";
import { FormEvent, useState } from "react";

export default function Lost() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleItemLost(e: FormEvent) {
    e.preventDefault();
    setError("");

    const item = {
      name,
      description,
      location,
      status: "LOST",
    };
    const response = await addItem(item);
    if (!response.success) {
      setError(response.message);
    } else {
      alert(response.message);
    }
    setName("");
    setDescription("");
    setLocation("");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter item name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the item"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Location Lost</span>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
