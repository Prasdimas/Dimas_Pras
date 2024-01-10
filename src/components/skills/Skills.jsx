import React from "react";

import SkillBox from "../../chip/SkillBox";

import {
  SiJavascript,
  SiTailwindcss,
  SiWordpress,
  SiMysql,
  SiExpress,
  SiReact,
  SiPhp,
  SiCodeigniter,
  SiFigma,
  SiGoogleadsense,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>           
          {/* right box */}
          <div className="right relative flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="flex gap-10">
              <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"Mysql"}
              />
                            <SkillBox
                logo={<SiTailwindcss />}
                black={"white"}
                white={"black"}
                skill={"Taillwind CSS"}
              />
              <SkillBox
                className=""
                logo={
                  <SiWordpress/>
                }
                black={"white"}
                white={"black"}
                skill={"Wordpress"}
              />
              <SkillBox
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"Javascript"}
              />
              <SkillBox
                logo={<SiReact />}
                black={"white"}
                white={"black"}
                skill={"React JS"}
              />
            </div>
            <div className="flex gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"white"}
                white={"black"}
                skill={"Express"}
              />
                            <SkillBox
                logo={<SiPhp />}
                black={"white"}
                white={"black"}
                skill={"PHP"}
              />
              <SkillBox
                className=""
                logo={
                  <SiCodeigniter/>
                }
                black={"white"}
                white={"black"}
                skill={"Codeigniter"}
              />
              <SkillBox
                logo={<SiFigma />}
                black={"white"}
                white={"black"}
                skill={"Figma"}
              />
              <SkillBox
                logo={<SiGoogleadsense />}
                black={"white"}
                white={"black"}
                skill={"Google Adsense"}
              />
            </div>
          </div>
        </div>
              </div>
      </div>
    </div>
  );
};

export default Skills;
