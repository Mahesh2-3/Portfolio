import { FaStore } from "react-icons/fa";
import { LuMessageCircleWarning } from "react-icons/lu";
import { Templates } from "../Constants";

const GetTemplates = () => {
  return (
    <div className="px-5">
      <div className="flex w-full items-end justify-between">
        <h1 className="text-4xl font-alumni font-bold">
          Build Your Own Stunning Portfolio!
        </h1>
        <a
          href="http://localhost:3000/"
          target="__blank"
          className="text-secondary border-b cursor-pointer flex gap-2 items-center"
        >
          View Portfolio Store <FaStore size={15} />
        </a>
      </div>
      <p className="mt-10 sm:w-[60%] w-full text-primary">
        Want a professional portfolio like mine? I’ve created customizable
        portfolio templates designed for You!. Choose a template, share your
        details, and get your site deployed and ready to showcase your work.
      </p>
      <div className="flex mt-20 flex-wrap items-center justify-evenly gap-10">
        {Templates.map((template, index) => (
          <div key={index} className="relative cursor-pointer">
            <span className="bg-violet7 flex gap-1 border border-violet1/20  items-center w-fit px-2 py-1 absolute top-0 -right-4 rotate-45">
              <LuMessageCircleWarning /> New
            </span>
            <img
              src={`/${template}.png`}
              alt="templates"
              className="w-[400px] h-auto rounded-t-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTemplates;
