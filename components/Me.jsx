import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          About me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          I am a qualified IT Intelligent Industrial System engineer with 
          in Software, web, mobile development and PLC 
          Programming. I am passionate about Automation, internet of 
          things, software engineering, Data engineering and the related 
          aspects of Computer engineering systems since my career 
          path is aligned with it. .
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          I have recently completed a variety of projects such as Booking systems, Assets Management Systems, Smart home system and Solar UPS Web APP 
          . I am also very analytical and committed when working with a 
          team. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          I am looking forward to
          sharing a fresh and innovative approach to management
          which I believe will benefit your establishment. I am keen to
          learn further skills in order to strengthen my experience in the
          field and I am looking forward to meeting people and sharing
          new ideas.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
