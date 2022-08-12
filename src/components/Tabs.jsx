import { GoMarkGithub,GoLinkExternal } from 'react-icons/go';
import React, { useState } from 'react';


export default function Tabs(){

    const [worktab, setworktab] = useState(1);



    function handleWorkDisplay(e) {

        setworktab(e.target.id);
        
    }




    return (
        <div className="WorkTabs">
            <div className="my-5 flex items-center gap-4">
                <h1 className="text-slate-300 font-semibold tracking-wide text-2xl md:text-3xl whitespace-nowrap">I have worked at</h1>
                <hr className="whitespace-nowrap w-1/6 h-1px bg-slate-400 " />
            </div>

            <div className="w-3/4 h-80 m-16 flex gap-3 text-slate-400 bg-emerald-100/5 rounded-md ">
                <div className="Workbutton flex flex-col text-sm ">
                    <button key="1" id='1' onClick={(e)=>handleWorkDisplay(e)} className=" p-3 px-4  w-full text-left border-l rounded-tl-md  border-emerald-300/25 whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300">SGS School</button>
                    <button key="2" id='2' onClick={(e)=>handleWorkDisplay(e)} className="p-3 px-4 w-full text-left border-l border-emerald-300/25 whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300">Next</button>
                </div>

                <div className="Workdisplay">
                    <div key="1" id='1' className={`m-2 pr-3 ${ worktab === 1 ? "visible":"invisible"  }  `}>
                        <h1 className=" mb-4 font-semibold text-2xl text-slate-300/90">School website designed</h1>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quas impedit nobis deleniti itaque, odio suscipit vero, animi ratione dolor veniam neque incidunt fugiat porro error nihil ipsam cupiditate ad cum id voluptatibus deserunt quos culpa. Ab praesentium porro atque error maiores commodi, illo fuga deserunt ea odio saepe similique! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum soluta facere dolores reprehenderit sequi quis suscipit illo earum quam, animi ea doloremque voluptas cum est iure dignissimos nam dolorem at!</p>
                        <div className="m-3">
                            <a href="https://github.com/singhhimansh/SGS-School" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='inline mr-4 hover:fill-emerald-300 duration-200 w-5 h-5   '/></a>
                            <a href="https://sgsschool.in/" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='inline hover:fill-emerald-300 duration-200 w-5 h-5  '/></a>
                        </div>

                    </div>
                    <div key="2" id='2' className={`m-2 pr-3 ${ worktab === 2 ? "visible":"invisible"}`} >
                        <h1 className=" mb-4 font-semibold text-2xl text-slate-300/90">Next work</h1>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quas impedit nobis deleniti itaque, odio suscipit vero, animi ratione dolor veniam neque incidunt fugiat porro error nihil ipsam cupiditate ad cum id voluptatibus deserunt quos culpa. Ab praesentium porro atque error maiores commodi, illo fuga deserunt ea odio saepe similique! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum soluta facere dolores reprehenderit sequi quis suscipit illo earum quam, animi ea doloremque voluptas cum est iure dignissimos nam dolorem at!</p>
                        <div className="m-3">
                            <a href="https://github.com/singhhimansh/SGS-School" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='inline mr-4 hover:fill-emerald-300 duration-200 w-5 h-5   '/></a>
                            <a href="https://sgsschool.in/" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='inline hover:fill-emerald-300 duration-200 w-5 h-5  '/></a>
                        </div>

                    </div>
                </div>

            </div>




        </div>

    );
}