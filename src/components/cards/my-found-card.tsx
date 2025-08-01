//@ts-nocheck
"use client";
import Image from "next/image";
import DeleteBtn from "../ui/delete-btn";
import EditBtn from "../ui/edit-btn";
import { updatePost } from "@/actions";
import { useState } from "react";

export default function MyFoundCard({ item, handleDelete }: { item: any }) {
  const [nameOp, setNameOp] = useState(item.name);
  const [descriptionOp, setDescriptionOp] = useState(item.description);
  const [locationOp, setLocationOp] = useState(item.location);

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [location, setLocation] = useState(item.location);

  function handleCancel(){
      setName(item.name)
      setDescription(item.description)
      setLocation(item.location)
  }

  async function handleUpdate() {
    const updatedData = {
      name,
      description,
      location,
    };
    const res = await updatePost(updatedData, item.id);
    if(!res.success){
      alert(res.message)
    }else{
    setNameOp(name);
    setDescriptionOp(description);
    setLocation(location);
    }
  }

  return (
    <div className="text-xl h-110 bg-white dark:bg-blue-950/30 w-full rounded-lg relative shadow-[0px_0px_10px_3px_rgba(0,0,0,0.3)]">
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
        <div className="w-full flex justify-between items-center">
          <h2>Item: {nameOp}</h2>
          <span className="flex items-center gap-3 justify-center">
            <EditBtn handleCancel={handleCancel} handleUpdate={handleUpdate} name={name} setName={setName} description={description} setDescription={setDescription} location={location} setLocation={setLocation}  />
            <DeleteBtn handleDelete={handleDelete}  id={item.id} />
          </span>
        </div>
        <p>Description: {descriptionOp}</p>
        <span>Location: {locationOp}</span>
      </div>
    </div>
  );
}
