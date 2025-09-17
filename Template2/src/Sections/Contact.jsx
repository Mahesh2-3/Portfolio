import React from "react";
import { ContactContent } from "../constants";

const Contact = () => {
  return (
    <div className="mt-20 font-openSans sm:px-10 px-5">
      <h1 className="font-primary mb-7 font-bold w-fit tracking-[0.2em] text-center text-3xl ">
        Contact
      </h1>
      <p className="lg:w-[50%] tracking-wider w-full">{ContactContent.line}</p>
      <p className="my-5 font-secondary font-bold tracking-wide">
        {ContactContent.email}
      </p>

      {/* social media links with icons */}
      <div className="flex sm:gap-10 gap-5 text-2xl">
        {ContactContent.links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent my-3 duration-300 flex items-center gap-2"
            >
              <Icon size={24} />
              {/* <span className="hidden sm:inline">{link.name}</span> */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
