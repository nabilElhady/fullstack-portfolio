import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen h-auto py-20 md:py-24 text-[#dbdbdb] flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl z-10">
        Contact
      </h3>
      
      <div className="relative mt-20 md:mt-0 w-full max-w-2xl">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8"
        >
          I have got just what you need.
          <br />
          <span className="decoration-[#f7ab0a]/50 underline text-[#f7ab0a]">
            Let&apos;s talk
          </span>
        </motion.h4>
        
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="tel:+201234567890"
            className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl border border-[#333] hover:border-[#f7ab0a]/50 transition-all duration-300 group"
          >
            <PhoneIcon className="text-[#f7ab0a] h-5 w-5 group-hover:animate-pulse" aria-hidden="true" />
            <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
              +20 123 456 7890
            </span>
          </a>
          
          <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl border border-[#333]">
            <MapPinIcon className="text-[#f7ab0a] h-5 w-5" aria-hidden="true" />
            <span className="text-sm sm:text-base text-gray-300">Egypt</span>
          </div>
          
          <a
            href="mailto:nabilelhady73@gmail.com"
            className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl border border-[#333] hover:border-[#f7ab0a]/50 transition-all duration-300 group"
          >
            <EnvelopeIcon className="text-[#f7ab0a] h-5 w-5 group-hover:animate-pulse" aria-hidden="true" />
            <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
              nabilelhady73@gmail.com
            </span>
          </a>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              aria-label="Your name"
              required
            />
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Email"
              className="contactInput flex-1"
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
            className="contactInput min-h-[150px] resize-none"
            aria-label="Your message"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="glowButton w-full sm:w-auto sm:px-12 py-4 mx-auto"
            aria-label="Submit contact form"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
};
export default ContactMe;

