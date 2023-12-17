"use client";
import React from "react";
import { Avatar } from "@material-tailwind/react";

export const Picture = () => {
  return (
    <>
      <Avatar
        src="../images/canvas.png"
        alt="profile"
        variant="rounded"
        size="xxl"
      />
    </>
  );
};
