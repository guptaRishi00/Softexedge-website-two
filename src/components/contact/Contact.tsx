import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="w-full bg-black rounded-3xl py-8 px-4 sm:px-6 lg:py-20 lg:px-16 space-y-8">
      <h1 className="text-white text-4xl text-center">Contact Form</h1>
      <div className="bg-[#121212] rounded-2xl py-8 px-4 sm:px-6 lg:py-20 lg:px-16">
        <form className="w-full flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-20">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
                Full Name*
              </p>
              <input
                type="text"
                className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base w-full"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
                Last Name*
              </p>
              <input
                type="text"
                className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
              Work Email*
            </p>
            <input
              type="text"
              className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
              Phone Number*
            </p>
            <input
              type="text"
              className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
              Add Service*
            </p>
            <input
              type="text"
              className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
              How did you hear about us?*
            </p>
            <input
              type="text"
              className="bg-black px-4 sm:px-5 py-3 sm:py-5 rounded-full text-white text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-sm sm:text-lg lg:pl-0 lg:pb-3">
              Message / Project Details
            </p>
            <textarea
              placeholder="Write your message..."
              className="bg-black px-4 sm:px-5 py-4 sm:py-10 rounded-2xl text-white text-sm sm:text-base min-h-[120px]"
            />
          </div>

          <button className="mx-auto w-fit bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] px-6 py-3 rounded-full text-white font-medium text-sm sm:text-base">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
