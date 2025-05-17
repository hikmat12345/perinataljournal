import React from "react";
import {
  FaStar,
  FaEye,
  FaBook,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";


export default function Header() {
  return (
    <header className="bg-white shadow h-[50px]">
      <div className="  mx-auto flex items-center h-full text-sm font-normal text-[#777777] leading-6">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-8 h-full">
          {/* Logo and title with gradient background */}
          <div
            className="h-full flex items-center px-4"
            style={{
              background: "linear-gradient(to right, #C3E2F8, #1B7DC0)",
            }}
          >
            <img
              src="/images/logo-en-US.png"
              alt="Logo"
              className="h-10 w-[428px] object-contain "
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center h-full">
            <a href="#" className="pr-3 py-2 hover:text-blue-600">
              Home
            </a>

            <div className="border-l border-gray-300 h-full mx-2" />

            {/* Information Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-2 py-2 hover:text-blue-600 text-[#777777] text-sm font-normal leading-6">
                Information
                <MdArrowDropDown size={18} className="ml-1 text-blue-600 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded-md text-sm w-64 z-10">
                {[
                  "About Perinatal Journal",
                  "Editorial Board",
                  "Author Guidelines",
                  "Article Processing Charge",
                  "Editorial Policies",
                  "Publication Ethics",
                  "Contact Us",
                ].map((item, idx, arr) => (
                  <a
                    key={idx}
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 flex items-start text-[#777777] text-sm font-normal leading-6 ${idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <span className="mr-2 text-[#777777] text-base">
                      <FaChevronRight />
                    </span>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-l border-gray-300 h-full mx-2" />

            {/* Archive Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 hover:text-blue-600">
                Archive
                <MdArrowDropDown size={18} className="ml-1 text-blue-600 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded-md text-sm w-56 z-10">
                {[
                  {
                    icon: <FaStar className="text-[#777777]" />,
                    label: "Current Issue",
                  },
                  {
                    icon: <FaEye className="text-[#777777]" />,
                    label: "Early View",
                  },
                  {
                    icon: <FaBook className="text-[#777777]" />,
                    label: "All Issues",
                  },
                  {
                    icon: <FaSearch className="text-[#777777]" />,
                    label: "Article Search",
                  },
                ].map((item, idx, arr) => (
                  <a
                    key={idx}
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 flex items-center text-[#777777] text-sm font-normal leading-6 ${idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <span className="mr-2 text-base">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-l border-gray-300 h-full mx-2" />
          </nav>
        </div>
      </div>
    </header>
  );
}
