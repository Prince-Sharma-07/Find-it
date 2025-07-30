//@ts-nocheck
'use client'
import React, { useState } from "react";
import FoundCard from "../cards/found-card";
import LostCard from "../cards/lost-card";

export default function Feed({ initialData, fallback }) {
  const [allItems, setAllItems] = useState(initialData);

  return (
    <main className="grid grid-cols-3 gap-8 w-[75%]">
      {allItems.length ? (
        allItems.map((item) =>
          item.status === "FOUND" ? (
            <FoundCard key={item.id} item={item} />
          ) : (
            <LostCard key={item.id} item={item} />
          )
        )
      ) : (
        <div className="text-black font-medium col-start-2 text-xl">
          {fallback}
        </div>
      )}
    </main>
  );
}
