import React from "react";
import ReduxImg from "../../assets/reduxinreact.png";
import HooksImg from "..//..//assets/hooks.png";
import WebImg from "..//..//assets/responsiveweb.png";

const PostCards = () => {
  return (
    <div className="w-full lg:w-2/3">
      {/* Article 1 - Redux in React */}
      <a className="block rounded w-full lg:flex mb-10" href="#">
        <div
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage: `url(${ReduxImg})`,
          }}
          title="Redux in React"
        ></div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
              Getting Started with Redux in React
            </div>
            <p className="text-gray-700 text-base">
              Learn the basics of Redux, how to manage global state in a
              scalable way, and integrate it into your React apps.
            </p>
          </div>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {" "}
                John Billy{" "}
              </p>
              <p className="text-gray-600 text-xs"> 25 July </p>
            </div>
          </div>
        </div>
      </a>

      {/* Article 2 - React Hooks */}
      <div className="rounded w-full lg:flex mb-10">
        <div
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage: `url(${HooksImg})`,
          }}
          title="React Hooks"
        ></div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
              A Beginner’s Guide to React Hooks
            </div>
            <p className="text-gray-700 text-base">
              Learn how to use `useState`, `useEffect`, and custom hooks to
              write cleaner functional components in React.
            </p>
          </div>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/women/54.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {" "}
                Sky James{" "}
              </p>
              <p className="text-gray-600 text-xs"> 5 July </p>
            </div>
          </div>
        </div>
      </div>

      {/*Article 3 - Responsive Web Design */}
      <div className="rounded w-full lg:flex mb-10">
        <div
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage: `url(${WebImg})`,
          }}
          title="Responsive Design"
        ></div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
              Responsive Web Design in 2025
            </div>
            <p className="text-gray-700 text-base">
              How to build websites that look great on all devices using CSS
              media queries, flexbox, and Tailwind CSS.
            </p>
          </div>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/66.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {" "}
                Mark Anthony{" "}
              </p>
              <p className="text-gray-600 text-xs"> 29 June </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
