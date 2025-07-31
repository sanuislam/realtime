"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Redirect = () => {
  return (
    useEffect(() => {
      redirect("/bd") // Redirect to the desired path
    }, []),
    (
      // This component will redirect to /bd when mounted
      <div>Redirect</div>
    )
  );
};

export default Redirect;
