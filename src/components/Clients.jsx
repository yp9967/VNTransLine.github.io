import React from "react";

import lnt from "../assets/L_T-removebg-preview.png";
import vdipl from "../assets/vdipl-removebg-preview.png";
import bg from "../assets/bgsh-removebg-preview.png";
import jkumar from "../assets/j123.png";
import jm from "../assets/jm-removebg-preview.png";
import manoj from "../assets/images-removebg-preview.png";

const Clients= () => {
  const techs = [
    {
      id: 1,
      src: lnt,
      title: "Larsen & Toubro Ltd",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: vdipl,
      title: "Vaibhav Const.",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: bg,
      title: "B.G.Shirke",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: jkumar,
      title: "Jkumar pvt ltd",
      style: "shadow-yellow-600",
    },
    {
      id: 5,
      src: jm,
      title: "JM Infra ltd",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: manoj,
      title: "Manoj Infra ltd",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="clients"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white ">
        <div className="pt-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline">
            Clients
          </p>
          <p className="pt-4">
            Partnering with these reputed Construction Companie, the prominent players in the
            industry, hace been instrumental in executing successful projects.
            Their commitments to innovation and adherence to strict quality
            standards aligns perfectly with our vision for delivering top-notch
            construction solutions.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
