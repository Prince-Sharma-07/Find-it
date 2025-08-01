//@ts-nocheck
"use client";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { Edit } from "lucide-react";
import React, { useState } from "react";

export default function EditBtn({ handleCancel ,handleUpdate , name , setName , location , setLocation , description , setDescription}) {
  
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Edit className="cursor-pointer" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit Post</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your post.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root value={name} onChange={e=>setName(e.target.value)} placeholder="Edit name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root value={description} onChange={description} onChange={e=>setDescription(e.target.value)} placeholder="Edit description" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Location
            </Text>
            <TextField.Root value={location} onChange={e=>setLocation(e.target.value)} placeholder="Edit location" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={handleCancel} variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleUpdate}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
