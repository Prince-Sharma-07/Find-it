//@ts-nocheck
"use client";
import Image from "next/image";
import DeleteBtn from "../ui/delete-btn";
import EditBtn from "../ui/edit-btn";

export default function FoundCard({ item }: { item: any }) {
  return (
    <div className="text-xl h-110 w-full bg-white dark:bg-blue-950/30 rounded-lg relative shadow-[0px_0px_10px_3px_rgba(0,0,0,0.3)]">
      <span className="bg-green-400 px-2 py-1 rounded-md text-xs font-medium absolute top-3 right-4 text-center w-15">
        {item.status}
      </span>
      <Image
        src={"/temp.jpg"}
        height={160}
        width={380}
        alt="item_image"
        className="rounded-t-md min-w-full"
      />
      <div className="p-4 h-[30%] flex flex-col justify-center">
        <h2>Item: {item.name}</h2>
        <p>Description: {item.description}</p>
        <span>Location: {item.location}</span>
      </div>
    </div>
  );
}
