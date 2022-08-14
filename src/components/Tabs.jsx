import { GoMarkGithub,GoLinkExternal } from 'react-icons/go';
import React, { useState } from 'react';
import 'animate.css';



export default function Tabs(){

    const [worktab, setworktab] = useState(1);

    // console.log(worktab);



    function handleWorkDisplay(e) {
        // e.preventDefault();
        // console.log(e.target.id);
        setworktab(e.target.id);
        // console.log('worktab', worktab);
        
    }




    return (
        <section id='work' className="WorkTabs my-40">

            {/* heading */}
            <div className="my-5 flex items-center gap-4">
                <h1 className=" text-lightestslate font-calibre text-3xl md:text-4xl font-semibold capitalize tracking-wide whitespace-nowrap">I have worked at</h1>
                <hr className="whitespace-nowrap w-1/6 h-1px bg-slate-400 opacity-60 " />
            </div>

            {/* Tabs */}
            <div className="md:w-3/4 h-80 my-20 md:m-16 flex gap-2 md:gap-3 text-slate-400 bg-emerald-100/5 rounded-md ">
                {/* tab buttons list */}
                <div className="Workbutton flex flex-col text-xs md:text-sm ">
                    <button key={1} id='1' onClick={(e)=>handleWorkDisplay(e)} className={`p-3 px-4  w-full text-left  rounded-tl-md  whitespace-nowrap  hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${ worktab == 1 ? "text-emerald-300 border-l-2  border-emerald-400":"border-l border-emerald-300/25"  }`}>SGS School</button>
                    <button key={2} id='2' onClick={(e)=>handleWorkDisplay(e)} className={`p-3 px-4 w-full text-left whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${ worktab == 2 ? "text-emerald-300 border-l-2 border-emerald-400":"border-l border-emerald-300/25"  }`}>Next</button>
                    
                </div>

                {/* content display window */}
                <div className=" Workdisplay relative">
                    <div key={1} id='1' className={`m-2 pr-4 w-full absolute ${ worktab == 1 ? "visibile animate__animated animate__fadeIn ":"invisible"  }  `}>
                        <h1 className="mb-2 md:mb-4 text-lightslate font-semibold text-lg md:text-2xl">School website</h1>
                        <ul className="text-sm ml-4 list-outside marker:text-cyan-300 list-disc">
                            <li className="">Display information related to the institute which includes management team, infrastructure conatact details and other.</li>
                            <li className="">Carousel  showing pictures of events</li>
                            <li className="">Designed with React.js, TailwindCss and AnimateCss</li>
                        </ul>
                        <div className="m-3">
                            <a href="https://github.com/singhhimansh/SGS-School" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='inline mx-4 hover:fill-emerald-300  w-5 h-5   '/></a>
                            <a href="https://sgsschool.in/" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='inline hover:fill-emerald-300  w-5 h-5  '/></a>
                        </div>

                    </div>
                    <div key={2} id='2' className={`m-2 pr-3  ${ worktab == 2 ? "visibile animate__animated animate__fadeIn":"invisible"} `} >
                        <h1 className="mb-2 md:mb-4 text-lightslate font-semibold text-lg md:text-2xl text-slate-300/90">Next at yours company</h1>
                        <p className="text-sm">This section will show a glimpse of projects i would be doing at yours company. Wanna discuss the project? Tap on the below button. </p>
                        <button className="m-5 px-4 py-2 text-sm border border-emerald-300 rounded-md hover:bg-emerald-100/10 hover:border-emerald-500 hover:text-lightslate"><a href="mailto:s.himanshusingh56@gmail.com" target="_blank" rel="noopener noreferrer">Say Hello</a></button>
                    </div>
                </div>
            </div>
      </section>

    );
}