import { FaArrowRight } from "react-icons/fa";
import { LuMessageCircleOff, LuMessageCircleWarning } from "react-icons/lu";

const FreeTemplates = () => {
  return (
    <div>
      <div className="flex w-full items-end justify-between px-5">
        <h1 className="text-4xl font-secondary font-bold">
          Free Portfolio Templates
        </h1>
        <a
          href="/templates"
          className="text-secondary border-b cursor-pointer flex gap-2 items-center"
        >
          See all <FaArrowRight size={15} />
        </a>
      </div>
      <div className="flex mt-20 flex-wrap items-center justify-evenly gap-10">
        {["template1", "template2", "template3"].map((template, index) => (
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

export default FreeTemplates;
