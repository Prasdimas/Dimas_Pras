import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/CV_Dimas.pdf";
import Profile from "../../assets/Profile.png";

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-cyan-100 to-cyan-300`}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, Saya Dimas Prasetyo
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Wordpress Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Wordpress Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-blue-700 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Saya adalah Dimas Prasetyo, lulusan Teknik Informatika Universitas Semarang dengan pengalaman dalam pengembangan website frontend (React.js) dan backend (Node.js/PHP), serta keahlian dalam pembuatan website WordPress dan pemasangan iklan di platform seperti Facebook, Instagram, dan Google.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="#contact"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Prasdimas">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dimas-prasetyo0163">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prasdimas10?igsh=MXZ2ZXM3dHlqejNrdA==">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100075478271473&mibextid=ZbWKwL">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[50%] rounded-lg border-solid border-4 border-indigo-500  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={Profile}
              // src={mine}
              alt="Dimas Prasetyo Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
