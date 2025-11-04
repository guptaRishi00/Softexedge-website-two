import React from "react";

type Props = {};

export default function ReadyToGrow({}: Props) {
  return (
    // Main container
    <div className="h-auto w-full  bg-black text-white rounded-3xl flex flex-col items-center py-12 px-6 md:px-10 lg:px-16 gap-6">
      {/* "Apply Now" Badge */}
      <span className="bg-zinc-800 text-zinc-300 text-sm font-medium px-4 py-1.5 rounded-full">
        Apply Now
      </span>

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center">
        Ready to Grow With Us?
      </h2>

      {/* Form */}
      <form className="w-full flex flex-col gap-6 mt-4">
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-full focus:ring-blue-500 focus:outline-none block w-full p-3.5"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-full focus:ring-blue-500 focus:outline-none block w-full p-3.5"
          />
        </div>

        {/* LinkedIn Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="linkedin"
            className="text-sm font-medium text-zinc-300"
          >
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-full focus:ring-blue-500 focus:outline-none block w-full p-3.5"
          />
        </div>

        {/* Portfolio Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-300"
          >
            Portfolio link
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-full focus:ring-blue-500 focus:outline-none block w-full p-3.5"
          />
        </div>

        {/* Resume Upload */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-300">
            Resume upload
          </label>
          {/* This is a common trick to style file inputs:
              1. A <label> styled as a button, pointing to the input's id.
              2. The actual <input type="file"> is hidden with className="hidden".
          */}
          <label
            htmlFor="resume-upload"
            className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm rounded-full w-1/4 p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-zinc-800 transition-colors"
          >
            {/* Embedded SVG for the paperclip icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg>
            Attach
          </label>
          <input
            type="file"
            id="resume-upload"
            name="resume"
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <p className="text-xs text-zinc-500">
            Accepted file types: pdf, doc, docx.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-fit mx-auto text-white bg-linear-to-r from-blue-600 to-cyan-400 hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-20 py-3.5 text-center mt-2"
        >
          Submit
        </button>
      </form>

      {/* "OR" Separator */}
      <div className="text-center text-sm text-zinc-500">OR</div>

      {/* Mail Us Link */}
      <a
        href="mailto:careers@company.com"
        className="text-sm text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
      >
        {/* Embedded SVG for the mail icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.558z" />
        </svg>
        Mail Us: careers@[company].com
      </a>
    </div>
  );
}
