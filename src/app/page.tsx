"use client";
import { dataAbout } from "@/ConfigData/About/data";
import { dataNavBar } from "@/ConfigData/NavBar/data";
import { dataProject } from "@/ConfigData/Project/data";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";
import Typewriter from "typewriter-effect";
import { dataEducation } from "./../ConfigData/Education/Education";
import { Experience } from "@/ConfigData/Experience/Experience";

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
                    .typeString("I'm Tran Thi Phuong Thao")
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
              src="/img/pt.jpg"
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
        <div className="text-center bg-[#efebfc] min-w-[600px] rounded-xl shadow-lg ">
          <h2 className="text-4xl text-gray-500 pt-5 font-bold">About Me</h2>
          <div className=" flex items-center py-10 px-4">
            <div className="w-1/2">
              <Image
                src="/img/pt.jpg"
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
      <div className="bg-slate-300 py-10">
        <h2 className="text-center py-5 font-bold text-gray-500 text-4xl mb-8">
          Education & Experience
        </h2>
        <div className="flex items-center justify-center border-b border-slate-500 border-solid pb-10 px-20">
          {dataEducation.map((item, index) => {
            return (
              <div
                key={item.id}
                className="w-[360px] bg-white shadow-lg p-4 rounded-md mx-3 hover:cursor-pointer hover:translate-x-[-10px] hover:translate-y-[-10px] hover:duration-300 hover:ease-in-out hover:transition"
              >
                <h2 className="text-gray-500 font-bold">
                  Name shool :
                  <span className="text-black font-semibold">
                    {item.nameSchool}
                  </span>
                </h2>
                <p className="text-gray-500 font-bold">
                  Major :
                  <span className="text-black font-semibold">{item.major}</span>
                </p>
                <div className="text-gray-500 font-bold">
                  From :
                  <span className="text-black font-semibold mx-1">
                    {item.fromDate}
                  </span>
                  -
                  <span className="text-black font-semibold mx-1">
                    {item.toDate}
                  </span>
                </div>
                <h3 className="text-gray-500 font-bold">
                  Degree Classification :
                  <span className="text-black font-semibold">
                    {item.degreeClassification}
                  </span>
                </h3>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          {Experience.map((item, index) => {
            return (
              <div
                className="bg-white shadow-lg w-[700px] rounded-3xl px-4 py-7 mt-5 ease-out duration-300 hover:translate-y-[-15px] hover:cursor-pointer"
                key={item.id}
              >
                <h2 className="text-gray-500 font-medium">
                  Company :{" "}
                  <span className="font-bold text-black">
                    {item.nameCompany}
                  </span>
                </h2>
                <h3 className="text-gray-500 font-medium">
                  From :{" "}
                  <span className="font-bold text-black mx-1">
                    {item.fromDate}
                  </span>{" "}
                  To{" "}
                  <span className="font-bold text-black mx-1">
                    {item.toDate}
                  </span>
                </h3>
                <p className="text-gray-500 font-medium">
                  Position :
                  <span className="font-bold text-black">
                    {item.positionCompany}
                  </span>
                </p>
                <ul className="text-justify">
                  <li className="text-gray-500 font-medium">Decsription : </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs1}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs2}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs3}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs4}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs5}</span>
                  </li>
                  <li className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">{item.decs6}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* project */}
      <div className="py-10 px-10">
        <div className="border-y border-slate-500 border-solid py-5">
          <h2 className="text-center pt-5 font-bold text-gray-500 text-4xl mb-8">
            Projects
          </h2>
          <h3 className="text-center pb-5 pt-1 font-semibold text-gray-500">
            Here are a few of my standout projects
          </h3>
          <div className="pt-10 grid grid-cols-2 gap-4">
            {dataProject.map((item, index) => {
              return (
                <a key={item.id} href={item.link ? item.link : "#"}>
                  <div className=" relative hover:scale-90 hover:cursor-pointer hover:delay-200 hover:duration-500 hover:ease-in-out transition-all">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full block rounded-2xl"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/[.50] rounded-2xl hover:bg-violet-800/[.20] flex flex-col justify-center items-center">
                      <h3 className="text-white font-bold text-xl">
                        {item.nameProject}
                      </h3>
                      <p className="text-white text-lg mt-2">{item.decs}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* get touch menu */}
      <div>
        <h2 className="text-center py-5 font-bold text-gray-500 text-4xl mb-8">
          Get In Touch With Me
        </h2>
        <div className="text-center font-semibold text-gray-400">
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
              className="ml-1 font-bold"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center ml-3  hover:opacity-70 hover:text-teal-800 hover:cursor-pointer">
            <AiFillTwitterSquare size={22} color="blue" />
            <a href="https://zalo.me/0329050100" className="ml-1 font-bold">
              Zalo
            </a>
          </div>
          <div className="flex items-center ml-3 hover:opacity-70 hover:text-teal-800 hover:cursor-pointer">
            <CgInstagram size={22} color="pink" />
            <a
              href="https://www.instagram.com/phg.thaow_?igsh=NTY1dm9wbXczOXN3"
              className="ml-1 font-bold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
