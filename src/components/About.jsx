import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-2">
          At VN Trans Line, we take pride in providing reliable and efficient
          cement transportation services. As a leading transporter in the cement
          industry, we specialize in delivering your cement products safely and
          on time to your desired destinations.
        </p><br/>
        <p className="text-xl inline font-semibold">Meet Our Proprietors:-</p>
<br/>
        <ul className="list-disc font-bold">
          <li> Vikrant Mhaskar (CEO & Co-Founder)</li>
          <li> NItesh Ghuge (COO & Co-Founder)</li>
        </ul>
<br/>
        <p className="text-xl">
          With years of experience and a dedicated team, John and Emily lead VN
          Trans Line with a vision for excellence in logistics and customer
          satisfaction. Our commitment to quality service is driven by their
          expertise and passion for the cement transportation industry.
        </p>

        <div> </div>
        <p className="text-xl mt-4">
          Choose VN Trans Line for seamless and dependable cement transport
          services, backed by the leadership and dedication of John and Emily.
          We look forward to serving you and helping your projects thrive.
        </p>
      </div>
    </div>
  );
};

export default About;
