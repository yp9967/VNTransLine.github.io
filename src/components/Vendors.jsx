import React from "react";
import icl from "../assets/Vendors/icl.jpg";
import chettinad from "../assets/Vendors/chc.jpg";
import orient from "../assets/Vendors/oc.png";


const Vendors = () => {
  const vendors = [
    {
      id: 1,
      src: icl,
      site:"https://www.indiacements.co.in/",
    },
    {
      id: 2,
      src: chettinad,
      site:"https://www.chettinad.com/",
    },
    {
      id: 3,
      src: orient,
      site:"https://orientcement.com/",
    },
 
  ];

  return (
    <div
      name="vendors"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-8">
        <div className="pt-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Vendors
          </p>
          <p className="py-4 font-semibold">
          Meet Our Cement Suppliers :-)
          </p>
          <p>Partnering with all of these Cement, a leading manufacturers, ensures a steady supply of high-quality cement products. Their commitment to sustainable practices and adherence to industry standards make them a reliable choice for construction projects of all scales.</p><br/><p>As a trusted cement suppliers offers a diverse range of cement types, including OPC and PPC, meeting various construction needs. With a robust production capacity and an extensive distribution network, they deliver timely solutions for our customers.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-4 sm:px-0 m-auto">
          {vendors.map(({ id, src,site }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "><a href={site} target="_blank" rel="noreferrer">
                  Learn more...</a>
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
