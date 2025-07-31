import React from "react";

const Category = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
      {/* topics */}
      <div className="mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          {" "}
          Popular Topics{" "}
        </h5>
        <ul>
          {/*Topic 1 - JavaScript Basics */}
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
              Javascript Basics
              <span className="text-gray-500 ml-auto">12 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          {/*Topic 1 - React.js */}
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
              React.js
              <span className="text-gray-500 ml-auto">17 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          {/*Topic 1 - Responsive Design */}
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
              Responsive Design
              <span className="text-gray-500 ml-auto">10 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          {/*Topic 1 - CSS & Styling */}
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
              CSS & Styling
              <span className="text-gray-500 ml-auto">9 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* divider */}
      <div className="border border-dotted"></div>

      {/* subscribe */}
      <div className="p-1 mt-4 mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
          {" "}
          Subscribe{" "}
        </h5>
        <p className="text-gray-600">
          Subscribe to our newsletter. We deliver the best health-related
          articles to your inbox
        </p>
        <input
          placeholder="your email address"
          className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
        />
        <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
          Subscribe
        </button>
      </div>

      {/* divider */}
      <div className="border border-dotted"></div>
    </div>
  );
};

export default Category;
