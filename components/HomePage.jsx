import React from "react";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-gray-700 text-5xl">
          Software Engineer
        </h1>

        <p className="text-gray-600 text-xl min-w-sm min-auto">
        I am a qualified IT Intelligent Industrial System engineer with 
        expertise in Software, web, mobile development and Machine Learning  
          . I am passionate about Automation, internet of 
        things, software engineering, Data engineering and the related 
        aspects of Computer engineering systems since my career 
        path is aligned with it. I am currently working on an Intelligent 
        Solar Ups Project that charges battery. I am looking forward to
        sharing a fresh and innovative approach to management
        which I believe will benefit your establishment. I am keen to
        learn further skills in order to strengthen my experience in the
        field and I am looking forward to meeting people and sharing
        new ideas.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
