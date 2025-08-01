import React from "react";

export default function loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <span className="loading loading-spinner text-success"></span>
    </div>
  );
}
