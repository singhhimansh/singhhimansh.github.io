import { GoLinkExternal } from "react-icons/go";
import { TbBrandGithub } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { MdCalendarMonth } from "react-icons/md";

import React, { useState } from "react";
import "animate.css";
import experience from "./data/experience.js";

export default function Tabs() {
  const [worktab, setworktab] = useState(experience.length);

  const getExperienceDuration = (work) => {
    const startDate = new Date(work.start);
    const endDate = work.end ? new Date(work.end) : new Date();
    const diff = endDate.getTime() - startDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30),
    );
    return `${years > 0 ? `${years} years` : ""} ${
      months > 0 ? `${months} months` : ""
    }`;
  };

  function handleWorkDisplay(e) {
    // e.preventDefault();
    // console.log(e.target.id);
    setworktab(e.target.id);
    // console.log('worktab', worktab);
  }

  return (
    <section id="work" className="WorkTabs my-40">
      {/* heading */}
      <div className="my-5 flex items-center gap-4">
        <h1 className=" text-lightestslate font-calibre text-3xl md:text-4xl font-semibold capitalize tracking-wide whitespace-nowrap">
          I have worked at
        </h1>
        <hr className="whitespace-nowrap w-1/6 h-1px bg-slate-400 opacity-60 " />
      </div>

      {/* Tabs */}
      <div className="md:w-3/4 lg:w-4/5 min-h-[420px] md:min-h-[385px] lg:min-h-[320px] my-20 md:m-16 flex gap-2 md:gap-3 text-slate-400 bg-emerald-100/5  rounded-md ">
        {/* tab buttons list */}
        <div className=" flex flex-col text-xs md:text-sm ">
          {experience?.map((work) => {
            return (
              <button
                key={work.id}
                id={work.id}
                onClick={(e) => handleWorkDisplay(e)}
                className={`p-3 px-4  w-full text-left ${
                  work.id == experience.length ? "rounded-tl-md" : ""
                }  whitespace-nowrap  hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${
                  worktab == work.id
                    ? "text-emerald-300 border-l-2  border-emerald-400"
                    : "border-l border-emerald-300/25"
                }`}
              >
                <img
                  className="w-4 h-4 mr-1 inline rounded-md"
                  src={work.favicon}
                  alt=""
                />{" "}
                {work.company}
              </button>
            );
          })}

          <button
            key={experience.length + 1}
            id={experience.length + 1}
            onClick={(e) => handleWorkDisplay(e)}
            className={`p-3 px-4 w-full text-left whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${
              worktab == experience.length + 1
                ? "text-emerald-300 border-l-2 border-emerald-400"
                : "border-l border-emerald-300/25"
            }`}
          >
            <img
              className="w-4 h-4 mr-1 inline rounded-md"
              src={
                "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-next-icon-image_1197594.jpg"
              }
              alt=""
            />{" "}
            Next
          </button>
        </div>

        {/* content display window */}
        <div className="w-full min-h-full relative ">
          {experience?.map((work) => {
            return (
              <div
                key={work.id}
                id={work.id}
                className={`m-2 pr-4 w-full  ${
                  worktab == work.id
                    ? " animate__animated animate__fadeIn "
                    : "hidden"
                }  `}
              >
                <h1 className=" text-lightslate font-semibold text-lg md:text-xl tracking-wide">
                  {work.title}
                </h1>
                <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-1 lg:gap-2 mt-1 mb-2 text-nowrap  md:mb-4 pr-2 ">
                  <p className="text-sm col-span-1">{work.designation}</p>

                  <p className="text-sm  flex items-center gap-1 col-span-1">
                    <MdCalendarMonth className="inline-block w-4 h-4" />
                    {work.start} - {work.end === "" ? "Present" : work.end}
                  </p>
                  <p className="text-sm flex items-center gap-1 col-span-1">
                    <MdLocationOn className="inline w-4 h-4" />
                    {work.location}
                  </p>
                  <p className="text-sm  flex items-center gap-1 col-span-1">
                    <span className="bg-cyan-500/40 px-2 text-cyan-200 rounded ">
                      {/* <GoClock className="inline w-4 h-4 pb-1" /> */}
                      {getExperienceDuration(work)}
                    </span>
                  </p>
                </div>

                <ul className="text-sm ml-4 list-outside tracking-wide  marker:text-cyan-300 list-disc">
                  {work?.discription.map((disc, idx) => (
                    <li key={idx} className="">
                      {disc}
                    </li>
                  ))}
                </ul>
                <div className="m-3 px-2 gap-3 flex">
                  {work.git && (
                    <a
                      href={work.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithub className="inline hover:fill-emerald-300  w-5 h-5   " />
                    </a>
                  )}
                  {work.website && (
                    <a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GoLinkExternal className="inline hover:fill-emerald-300  w-5 h-5  " />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          <div
            key={experience.length + 1}
            id={experience.length + 1}
            className={`m-2 pr-3  ${
              worktab == experience.length + 1
                ? "visibile animate__animated animate__fadeIn"
                : "invisible"
            } `}
          >
            <h1 className="mb-2 md:mb-4 text-lightslate font-semibold text-lg md:text-xl text-slate-300/90">
              Next at yours company
            </h1>
            <p className="text-sm">
              This section will show a glimpse of projects i would be doing at
              yours company. Wanna discuss the project? Tap on the below
              button.{" "}
            </p>
            <button className="m-5 px-4 py-2 text-sm border border-emerald-300 rounded-md hover:bg-emerald-100/10 hover:border-emerald-500 hover:text-lightslate">
              <a
                href="mailto:s.himanshusingh56@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
