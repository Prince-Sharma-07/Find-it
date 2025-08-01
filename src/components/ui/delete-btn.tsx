"use client";
import { deletePost } from "@/actions";
import { Trash } from "lucide-react";

export default function DeleteBtn({id , handleDelete} : {id : string}) {
 
  async function handlePostDelete() {
    const res = await deletePost(id);
    if (!res.success) {
      alert(res.message);
    }
    handleDelete(id)
  }

  return (
      <Trash className="cursor-pointer" onClick={handlePostDelete} />
  );
}
