"use client";
import { deletePost } from "@/actions";
import { Trash } from "lucide-react";

export default function DeleteBtn({id} : {id : string}) {
  console.log(id)
  async function handleDelete() {
    const res = await deletePost(id);
    if (!res.success) {
      console.log(res.message);
    } else {
      alert("Item Deleted Successfully!");
    }
  }

  return (
      <Trash className="cursor-pointer" onClick={handleDelete} />
  );
}
