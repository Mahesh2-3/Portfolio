"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import StarfieldBackground from "./Animations/Stars";
import { MdOutlineRocket, MdOutlineRocketLaunch } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const rocketRef = useRef(null);
  const [isLaunched, setIsLaunched] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (form) => {
    setLoading(true); // start loading

    emailjs
      .send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATE1,
        {
          from_name: form.name,
          to_name: "Mahesh",
          from_email: form.email,
          to_email: "maheshkarna32@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        () => {
          alert("✅ Thank you! I’ll get back to you as soon as possible.");

          // Send confirmation email back to user
          emailjs.send(
            import.meta.env.VITE_SERVICEID,
            import.meta.env.VITE_TEMPLATE2,
            {
              from_name: "Mahesh",
              to_name: form.name,
              to_email: form.email,
              from_email: "maheshkarna32@gmail.com",
            },
            import.meta.env.VITE_PUBLICKEY
          );

          reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // stop loading
      });

    setIsLaunched(true);

    if (rocketRef.current) {
      rocketRef.current.classList.add("rocket-launch");
    }

    setTimeout(() => {
      if (rocketRef.current) {
        rocketRef.current.classList.remove("rocket-launch");
      }
      setIsLaunched(false);
    }, 5000);
  };

  const handleHover = () => {
    if (!isLaunched && rocketRef.current) {
      rocketRef.current.classList.add("rocket-tilt");
    }
  };

  const handleLeave = () => {
    if (!isLaunched && rocketRef.current) {
      rocketRef.current.classList.remove("rocket-tilt");
    }
  };

  const doubleGradient =
    "linear-gradient(90deg, #04c91b 0%, #04c91b 50%, #9333ea 50%, #db2777 100%)";

  return (
    <div className="relative w-full min-h-[1000px] pb-20">
      <StarfieldBackground />
      <div className="p-3">
        <h1 className="heading mb-10 mt-15 fade-in z-[10] relative sm:pl-10 pl-5">
          Get In Touch
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col fade-in relative top-20 font-normal justify-evenly gap-4 p-6 bg-violet4/5 border border-white/20 rounded-2xl sm:max-w-[600px] w-full mx-auto h-[500px] backdrop-blur-sm"
        >
          <span className="text-4xl text-white font-extrabold">Contact Me</span>
          {/* Name */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Your Good Name"
              className="w-full rounded-lg border border-white/20 p-3"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-white/20 p-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg border border-white/20 p-3 h-[100px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            disabled={loading} // ✅ disabled while loading
            className={`flex items-center overflow-hidden justify-center gap-2 font-semibold text-white p-2 h-[50px] cursor-pointer transition-all ease-in-out duration-300 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{
              backgroundImage: doubleGradient,
              backgroundSize: "200% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: isLaunched ? "left center" : "right center",
              transition: "background-position 1000ms ease-in-out",
              willChange: "background-position",
            }}
          >
            <span>{loading ? "Sending..." : "Send Message"}</span>

            <FaCheck
              size={20}
              style={{
                visibility: isLaunched ? "visible" : "hidden",
                transform: `scale(${isLaunched ? 1 : 0})`,
                transition: "transform 0.3s ease-in-out",
                transitionDelay: isLaunched ? "1s" : "0s",
              }}
            />

            <span
              id="rocket"
              className="relative translate-x-[-30px]"
              ref={rocketRef}
              aria-hidden="true"
            >
              {isLaunched ? (
                <MdOutlineRocketLaunch size={20} />
              ) : (
                <MdOutlineRocket size={20} />
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
