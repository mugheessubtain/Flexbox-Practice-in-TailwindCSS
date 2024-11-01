import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[420px] flex w-full my-20">

        <div className="w-[33.3%] bg-red-600"></div>
        <div className="w-[33.3%] bg-green-600"></div>
        <div className="w-[33.3%] bg-blue-600"></div>

      </div>

      <div className=" h-96 flex w-full my-20">

        <div className="w-[50%] bg-purple-600"></div>
        <div className="w-[50%] bg-pink-600"></div>

      </div>
    </>
  );
}
