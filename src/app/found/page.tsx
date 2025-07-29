'use client'
import { addFoundItem } from "@/actions";
import React, { FormEvent, useState } from "react";
export default function Found() {

  const [itemName , setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [locationFound, setLocationFound] = useState<string>('');
  const [error , setError] = useState<string>('');

  async function handleItemFound(e : FormEvent){
      e.preventDefault()
      setError("")

      const item = {
        itemName,
        itemDescription,
        locationFound
      }
      const response = await addFoundItem(item);
      if(!response.success){
          setError(response.message);
      }
      else{
         alert(response.message)
      }
      setItemName("")
      setItemDescription("")
      setLocationFound("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Report Found Item</h1>
      <form className="w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4" onSubmit={handleItemFound}>
        {error ? <p className="text-red-400">{error}</p> : <></>}
        <label>
          <span className="text-gray-700">Item Name</span>
          <input
            type="text"
            placeholder="Enter item name"
            value={itemName}
            onChange={e=>setItemName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label>
          <span className="text-gray-700">Description</span>
          <textarea
            placeholder="Describe the item"
            value={itemDescription}
            onChange={e=>setItemDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
        </label>
        <label>
          <span className="text-gray-700">Location Found</span>
          <input
            type="text"
            placeholder="Where was it found?"
            value={locationFound}
            onChange={e=>setLocationFound(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
