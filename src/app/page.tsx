"use client";
import { dataAbout } from "@/ConfigData/About/data";
import { dataNavBar } from "@/ConfigData/NavBar/data";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";
import Typewriter from "typewriter-effect";

export default function Home() {
  const handleDownloadFile = () => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/file/d/16mPHoMEaRm3wCn3UFH4C-s366cwsc-XL/view?usp=sharing`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <div className="px-10 py-5 flex items-center justify-between fixed top-0 left-0 right-0 bg-slate-100 z-40">
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
      <div className="bg-slate-300 py-10 mt-24">
        <div className="flex items-center px-10">
          <div className="w-1/2">
            <h3 className="text-red-500 font-bold tracking-widest text-4xl hover:scale-125 transition-all duration-300">
              Welcome to my Portfolio
            </h3>
            <h2 className="text-gray-500 py-3  tracking-widest font-bold text-xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm Tran Huu Thien")
                    .callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll(100)
                    .callFunction(() => {})
                    .start();
                }}
                options={{
                  loop: true,
                  delay: 50,
                }}
              />
            </h2>
            <p className="text-justify leading-6 font-medium text-violet-700">
              Taking advantage of knowledge and experience in my studying to
              solve problems and complete assigned tasks. I am looking forward
              to challenging position Frontend Developer. Having the opportunity
              to work, contribute to the company and be promoted at work
            </p>
            <div className="text-center pt-10 relative top-[-5px] before:absolute ">
              <Button
                variant="filled"
                color="red"
                onClick={handleDownloadFile}
                rightSection={<IconDownload size={14} />}
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              src="/img/1-1626437591.jpg"
              alt="avatar"
              width={360}
              height={400}
              className="h-[360px] rounded-full block items-end mx-auto"
            />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="py-5 flex item-center justify-center bg-gray-200">
        <div className="text-center bg-[#efebfc] min-w-[600px] rounded-xl shadow-lg ease-out duration-300 hover:translate-y-[-10px] hover:cursor-pointer">
          <h2 className="text-4xl text-red-500 pt-5 font-bold">About Me</h2>
          <div className=" flex items-center py-10 px-4">
            <div className="w-1/2">
              <Image
                src="/img/1-1626437591.jpg"
                alt="avatar"
                width={360}
                height={400}
                className="h-[360px] rounded-3xl block items-end mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">Name : </h2>
                <p className="ml-3 font-semibold">{dataAbout.name}</p>
              </div>
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">DOB : </h2>
                <p className="ml-3 font-semibold">{dataAbout.dob}</p>
              </div>
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">Gender : </h2>
                <p className="ml-3 font-semibold">{dataAbout.gender}</p>
              </div>
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">Age : </h2>
                <p className="ml-3 font-semibold">{dataAbout.age}</p>
              </div>
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">Phone : </h2>
                <p className="ml-3 font-semibold">{dataAbout.phone}</p>
              </div>
              <div className="flex item-center leading-8 px-4">
                <h2 className="text-gray-500 font-semibold">Email : </h2>
                <p className="ml-3 font-semibold">{dataAbout.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education & Experience */}
      <div className="bg-gray-400">
        <h2 className="text-center py-5 font-bold text-gray-500 text-4xl mb-8">
          Education & Experience
        </h2>
        <div className="w-[360px] bg-white shadow-lg px-4 rounded-md">
          <h2>Hello</h2>
        </div>
      </div>

      {/* get touch menu */}

      <div>
        <h2 className="text-center py-5 font-bold text-gray-500 text-4xl mb-8">
          Get In Touch With Me
        </h2>
        <div className="text-center font-semibold">
          <p>
            Thank you to spend your time visiting my page! Please feel free to
            send me some messages.
          </p>
          <p> Hope that we can have a chance to work together</p>
        </div>

        <div className="mt-4">
          <form
            className="max-w-md mx-auto"
            action="https://formsubmit.co/tranhuuthien98@gmail.com"
            method="POST"
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div>
              <input type="hidden" name="_captcha" defaultValue="false" />
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="text-white bg-red-500 hover:opacity-75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#f6fafb] font-medium px-10 py-8 flex items-center justify-between text-gray-500 mt-5">
        <div>
          <p>&copy; All right reserved 2024</p>
        </div>
        <div className="flex items-center text-sm">
          <div className="flex items-center hover:opacity-70 hover:text-teal-800 hover:cursor-pointer ">
            <AiFillFacebook size={22} className="rounded-sm" color="blue" />
            <a
              href="https://www.facebook.com/meo.ngokham?mibextid=uzlsIk"
              className="ml-1"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center ml-3  hover:opacity-70 hover:text-teal-800 hover:cursor-pointer">
            <AiFillTwitterSquare size={22} color="blue" />
            <a href="https://zalo.me/0329050100" className="ml-1">
              Zalo
            </a>
          </div>
          <div className="flex items-center ml-3 hover:opacity-70 hover:text-teal-800 hover:cursor-pointer">
            <CgInstagram size={22} color="pink" />
            <a
              href="https://www.instagram.com/phg.thaow_?igsh=NTY1dm9wbXczOXN3"
              className="ml-1"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
