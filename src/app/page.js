import Image from "next/image";
import HomeBody from "@/components/HomeBody.js"
import Aside from "@/components/Aside";

export default function Home() {
  return (
    <div className="flex lg:w-[75%] mx-auto">
    <Aside/>
    <HomeBody/>
    </div>
  );
}
