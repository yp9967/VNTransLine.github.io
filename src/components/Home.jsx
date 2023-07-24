import React from "react";
import HeroImage from "../assets/vnlogo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white">
            Welcome to{" "}
          </h2>
          <p
            className="text-4xl font-bold text-yellow-600
            mt-2"
          >
            VN TRANS LINE
          </p>

          <p className="text-gray-600 font-primary py-4 max-w-md">
            Your satisfaction is our priority. Our dedicated customer support is
            always ready to assist you at every step of the transportation
            process.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Us
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="flex flex-col justify-end " />
        </div>
      </div>
    </div>
  );
};

export default Home;
