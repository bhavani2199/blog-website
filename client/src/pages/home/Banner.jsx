import React from "react";
import ReduxImg from "../../assets/redux.png";
import JSArray from "../../assets/jsarray.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
      {/*Main featured Article */}
      <a
        className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
        style={{ height: "24em" }}
        href="#"
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={ReduxImg}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="Understanding Redux"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            React
          </span>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            Understanding React: A Beginner's Guide to State Management
          </h2>
          <div className="flex mt-3">
            <img
              src={"https://randomuser.me/api/portraits/women/29.jpg"}
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {" "}
                Bhavani Ambrose{" "}
              </p>
              <p className="font-semibold text-gray-400 text-xs"> 31 July </p>
            </div>
          </div>
        </div>
      </a>

      {/*Secondary Featured Article */}
      <a
        className="w-full md:w-1/3 relative rounded"
        style={{ height: "24em" }}
        href="/articles/javascript-array-methods"
      >
        <div
          className="absolute left-0 top-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={JSArray}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="JavaScript Array Methods"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            JavaScript
          </span>
          <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
            10 Useful JavaScript Array Methods You Should Know
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm"> Mike Tan </p>
              <p className="font-semibold text-gray-400 text-xs"> 29 July </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
