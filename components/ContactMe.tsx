import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

const ContactMe = (props: Props) => {
  type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:nabilelhady73@gmail.com?subject=${data.subject}&body=Hi,my name is ${data.name}.(${data.message}) (${data.email})`;
  };
  return (
    <div className="md:h-screen h-[650px] text-[#dbdbdb] flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      {" "}
      <h3 className="absolute md:top-5 top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Contact
      </h3>
      <div className="relative  top-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center w-[600px]">
          I have got just what u need
          <br />
          <span className="decoration-[#f7ab0a]/50 underline"> lets talk</span>
        </h4>
        <div className="md:space-y-6 space-y-4 md:my-5">
          <div className="flex items-center space-x-5 justify-center mt-2">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"></PhoneIcon>
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"></MapPinIcon>
            <p className="text-2xl">123 developer st</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"></EnvelopeIcon>
            <p className="text-2xl">nabilelhady73@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 md:space-y-4 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="name"
              className="contactInput w-[150px] sm:w-fit"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contactInput w-[150px] sm:w-fit"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
