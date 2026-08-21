"use client";

import React from "react";
import { contactInfo } from "@/lib/constants";
import "animate.css";

export const EmailSidebar: React.FC = () => {
  return (
    <div className="w-6 h-[359px] fixed bottom-0 right-14 flex flex-col justify-between invisible md:visible animate__animated animate__fadeInUp">
      <div className="moveup rotate-90">
        <span className="moveup text-[13px] tracking-widest font-mono text-lightslate hover:text-emerald-300 hover:fill-emerald-300">
          <a
            title={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactInfo.email}
          </a>
        </span>
      </div>
      <div>
        <hr className="h-28 mt-4 mr-3 border-r-2 border-t-0 border-solid border-lightslate" />
      </div>
    </div>
  );
};
