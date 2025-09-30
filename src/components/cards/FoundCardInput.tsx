"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { Locate } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function FoundCardInput() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { user } = useUserContext();

  async function handleItemFound(e: FormEvent) {
    e.preventDefault();
    setError("");

    const item = {
      name,
      description,
      location,
      status: "FOUND",
      authorId: user?.id,
    };

    const res = await fetch("/api/found", {
      method: "POST",
      body: JSON.stringify(item),
    });
    const data = await res.json();

    if (!data.success) {
      console.log(data.message);
      setError("Something went wrong!");
    } else {
      toast(data?.message);
      handleCancel();
      window.location.href = "/";
    }
  }

  function handleCancel() {
    setName("");
    setDescription("");
    setLocation("");
    setError("");
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    console.log(pos);
    const crd = pos.coords;
    setLocation(JSON.stringify(crd));
  }

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function handleCurrentLocation() {
    navigator.geolocation.getCurrentPosition(success, errors, options);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="max-md:hidden font-medium px-4 py-2 border-[#22C55E] border rounded-md">
          Report Found item
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Found Item</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your post.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {error.length ? (
            <span className="text-red-400 text-sm text-center">{error}</span>
          ) : (
            <></>
          )}
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
          <button
            type="button"
            onClick={handleCurrentLocation}
            className="text-start flex gap-2"
          >
            <Locate /> Current Location
          </button>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={handleCancel} variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleItemFound}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
