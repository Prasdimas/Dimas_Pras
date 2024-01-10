import React from "react";
import { resume,experience } from "../../data/resume";
const ExperienceCard = ({ company, position, location, period, responsibilities }) => (
  <div className="border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-5">
    <h1 className="text-[1.4rem] font-semibold sm:text-xl">{position}</h1>
    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">{company}</span>
    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">{location}</span>
    <br/>.
    <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">{period}</span>
    <ul className="list-disc list-inside text-[.9rem] text-gray-500">
      {responsibilities.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

const EducationCard = ({ title, company, period, description }) => (
  <div className="border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-5">
    <h1 className="text-[1.4rem] font-semibold sm:text-xl">{title}</h1>
    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">{company}</span>
    <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base p-4">{period}</span>

    <ul className="list-disc list-inside text-[.9rem] text-gray-500">
      {description.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);
const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              PENDIDIKAN
            </legend>
            <div className="relative">
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              {resume.map((item, index) => (
      <EducationCard
        key={index}
        title={item.university || item.school || item.training}
        company={item.university ? 'Universitas' : item.school ? 'Sekolah' : 'Pelatihan'}
        period={item.period || ''}
        description={item.thesis || item.major ? item.skills : item.certifications}
      />
    ))}
    </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              PENGALAMAN
            </legend>
            <div className=" relative">
              {/* design */}

              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              {experience.map((job, index) => (
      <ExperienceCard
        key={index}
        company={job.company}
        position={job.position}
        location={job.location}
        period={job.period}
        responsibilities={job.responsibilities}
      />
    ))}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
