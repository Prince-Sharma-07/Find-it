"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function LostCardInput() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");
  const {user} = useUserContext();

  async function handleItemLost(e: FormEvent) {
    e.preventDefault();
    setError("");

    if(name.trim() == "" || description.trim() == "" || location.trim() == ""){
      setError("Fields Can't be empty");
      return;
    }
    
    const item = {
      name,
      description,
      location,
      status: "LOST",
      authorId: user?.id 
    };

    const res = await fetch("/api/lost", {
      method: "POST",
      body: JSON.stringify(item),
    });

    const data = await res.json();

    if (!data.success) {
      console.log(data?.message);
      setError("Something went wrong!");
    } else {
      toast(data?.message);
      handleCancel();
      window.location.href = '/'
    }
  }

  function handleCancel() {
    setName("");
    setDescription("");
    setLocation("");
    setError("");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="max-md:hidden font-medium px-4 py-2 bg-gradient-to-r from-[#DC2627] to-[#DB2775] rounded-md">
          Report Lost item
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Lost Item</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your post.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {error.length ? (
            <span className="text-red-400 text-sm text-center">{error}</span>
          ) : <></>}
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Edit name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Edit description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Location
            </Text>
            <TextField.Root
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Edit location"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={handleCancel} variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleItemLost}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
