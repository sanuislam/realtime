import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Welcome Next Js + Socket.io</h1>
        <Button className="cursor-pointer">Learn More</Button>
      </div>
    </div>
  );
};

export default Home;
