"use client";
import GetStartedButton from "@/components/get-started-button";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-black">Welcome Next Js + Better Auth</h1>
        <GetStartedButton />
      </div>
    </div>
  );
};

export default Home;
