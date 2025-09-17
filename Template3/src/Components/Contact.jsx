import React from "react";
import { ContactContent } from "../constants";

const Contact = () => {
  return (
    <div id="contact" className="mt-20 md:px-16 px-5">
      <h1 className="my-10  font-logo text-4xl">Contact Me</h1>
      <div className="flex md:flex-row flex-col md:items-center items-start gap-6 justify-between">
        <div className="flex flex-col gap-3">
          <span className="md:w-[60%] tracking-wider text-sm w-full">
            {ContactContent.line}
          </span>
          <span className="font-bold text-third">{ContactContent.email}</span>
        </div>
        <ul className="flex items-center gap-5 lg:mr-16 mr-4">
          {ContactContent.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
