"use client";
import React, { useState } from "react";
import MyFoundCard from "../cards/my-found-card";
import MyLostCard from "../cards/my-lost-card";

export default function ClientFeed({ initialData }) {
  const [allItems, setAllItems] = useState(initialData);
  function handleDelete(id) {
    setAllItems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-[75%]">
      {allItems.length ? (
        allItems.map((item) =>
          item.status === "FOUND" ? (
            <MyFoundCard handleDelete={handleDelete} key={item.id} item={item} />
          ) : (
            <MyLostCard handleDelete={handleDelete} key={item.id} item={item} />
          )
        )
      ) : (
        <div className="text-black font-medium col-start-2 text-xl">
          No Posts Uploaded Yet...
        </div>
      )}
    </main>
  );
}
