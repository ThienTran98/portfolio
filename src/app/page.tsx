"use client";
import { dataNavBar } from "@/ConfigData/NavBar/data";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  const handleDownloadFile = () => {
    const link = document.createElement("a");
    link.href = `C:\Users\Thien Tran\Downloads`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="">
      <div className="px-10 py-5 flex items-center justify-between">
        <div className="flex items-center min-w-[360px]">
          <Image src="/img/download.jpg" width={56} height={56} alt="Logo" />
          <span className="mx-2 text-red-600 font-bold">My Portfolio</span>
        </div>
        <ul className="flex items-center justify-between flex-grow">
          {dataNavBar.map((item) => {
            return (
              <li
                key={item.id}
                className="text-gray-500 font-bold hover:opacity-80 px-2 py-2 relative block before:absolute before:h-0.5 before:bg-red-500  before:rounded-l  before:rounded-r  before:bottom-0 before:left-0 before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-500 hover:before:ease-linear"
              >
                <a href="" className="block">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* avatar */}
      <div className="bg-slate-300 py-10">
        <div className="flex items-center px-10">
          <div className="w-1/2">
            <h3 className="text-red-500 font-bold tracking-widest text-4xl hover:scale-125 transition-all duration-300">
              Welcome to my Portfolio
            </h3>
            <h2 className="text-gray-500 py-3 animate__fadeInLeftBig  animate__animated  animate__slow animate__delay-1s tracking-widest font-bold text-xl">
              I'm Tran Huu Thien
            </h2>
            <p className="text-justify leading-6 font-medium text-violet-700">
              Taking advantage of knowledge and experience in my studying to
              solve problems and complete assigned tasks. I am looking forward
              to challenging position Frontend Developer. Having the opportunity
              to work, contribute to the company and be promoted at work
            </p>
            <div className="text-center pt-10">
              <Button
                variant="filled"
                color="red"
                onClick={handleDownloadFile}
                rightSection={<IconDownload size={14} />}
              >
                Download
              </Button>
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              src="/img/ht.jpg"
              alt="avatar"
              width={360}
              height={400}
              className="h-[360px] rounded-full block items-end mx-auto"
            />
          </div>
        </div>
      </div>
      {/* About */}
    </div>
  );
}
