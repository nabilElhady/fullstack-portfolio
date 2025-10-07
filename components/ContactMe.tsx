import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:nabilelhady73@gmail.com?subject=${data.subject}&body=Hi,my name is ${data.name}.(${data.message}) (${data.email})`;
  };
  return (
    <div className="md:h-screen h-[650px]  text-[#dbdbdb] flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute md:top-5 top-16 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Contact
      </h3>
      <div className="relative  top-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center w-[600px]">
          I have got just what you need
          <br />
          <span className="decoration-[#f7ab0a]/50 underline">Let&apos;s talk</span>
        </h4>
        <div className="space-y-6  my-5">
          <div className="flex items-center space-x-5 justify-center mt-2">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" aria-hidden="true"></PhoneIcon>
            <a href="tel:+201234567890" className="text-2xl hover:text-[#f7ab0a] transition-colors">+20 123 456 7890</a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" aria-hidden="true"></MapPinIcon>
            <p className="text-2xl">Egypt</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" aria-hidden="true"></EnvelopeIcon>
            <a href="mailto:nabilelhady73@gmail.com" className="text-2xl hover:text-[#f7ab0a] transition-colors">nabilelhady73@gmail.com</a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 md:space-y-4 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput w-[150px] sm:w-fit"
              type="text"
              aria-label="Your name"
              required
            />
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Email"
              className="contactInput w-[150px] sm:w-fit"
              type="email"
              aria-label="Your email"
              required
            />
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
            aria-label="Email subject"
            required
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
            aria-label="Your message"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#f7ab0a]/90 transition-all duration-300 transform hover:scale-105"
            aria-label="Submit contact form"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
