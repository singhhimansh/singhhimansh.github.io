
import React, { useState } from 'react'

import Intro from './Introduction';
import Pallets from './Pallets';
import Tabs from './Tabs';
import logo from './data/img/logo/HSc15.png';
// import resume from './Himanshu-Singh-resume.pdf'
import 'animate.css';
import Navbar from './Navbar';
import Tilt from 'react-parallax-tilt';

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiLinktree } from "react-icons/si";
import {CgMenuRight} from 'react-icons/cg';
import {IoClose} from 'react-icons/io5';
import { resume } from './utils';

function Home() {

  const [hambState, setHambState] = useState('close');

  const skills= ["react","next","react-query","Typescript","mui","js","html","css","tailwind",'bootstrap',"github","mysql","python","photoshop",]

  const handleMenu = (e)=>{
    e.preventDefault();
    console.log(e)
    console.log(e.target.id);
    console.log('hamstate',  hambState);
    hambState === 'close' ? setHambState('open') : setHambState('close');
    
  }
  
  return (
    <div id='home' className='Home relative'>

      {/* navbar <Navbar  /> */}

      <section className="navbar p-9   animate__animated animate__fadeInDown ">
        <div className="flex flex-1 justify-between">
          {/* logo  */}
          <a id='logo' href="." className="ml-2" target="_parent" rel="noopener noreferrer"><img  src={logo} alt="HS" className={`w-12 ${ hambState==='close'? '' : ' ' }`} srcSet="" /></a>

          <div className='menuContent'>
                {/* for pc */}
              <div id="menuForPC"
                className={`hidden mr-7 font-calibre  text-lightslate md:flex gap-3 justify-center items-center ${ hambState==='close'? '' : '' } `}>

                  <a href="#intro" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>home( )</button></a>
                
                
                  <a href="#work" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    work( )</button></a>
                
                
                  <a href="#projects" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    projects( )</button></a>
                
                
                  <a href="#contact" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    contact( )</button></a>
                
                  <a href={resume()} className="" target="_blank" rel="noopener noreferrer"><button className="mx-2 text-center hover:text-emerald-300 moveup  duration-300 px-4 pb-1 pt-2 hover:bg-emerald-100/5 rounded border border-emerald-300/90"><span className="text-emerald-300 ">h. </span> resume( )</button></a>
              
              </div>

                {/* for phone */}
              <div id="menubar"
                className="align-middle md:flex md:items-center  transition-all ease-in-out duration-500">
                
                <button name='hambtn' title='menu' id="hambtn" className={`relative text-3xl cursor-pointer mx-2 md:hidden block ${ hambState==='close'? '' : 'z-20 ' }`} onClick={(e)=>handleMenu(e)}>
                  <CgMenuRight className={`w-9 h-9  stroke-1 ${ hambState==='close'? 'stroke-defslate' : 'hidden' }`}/>
                  <IoClose className={` w-9 h-9  stroke-1 ${ hambState==='close'? 'hidden ' : 'fill-emerald-600/70 animate__animated animate__rotateIn animate__faster' }`}/>
                </button>

                <div id="menuForMob"
                  className={`h-screen md:hidden fixed z-10  font-calibre text-lightslate  bg-navyshadow border-l border-l-lightestnavy/80 flex flex-col justify-center items-center  gap-10   ${ hambState==='close'? 'hidden top-0 right-0 ' : 'w-2/3  top-0 right-0 touch-none duration-200 ease-in-out transition-all' } `}>
                  
                    <a href="#intro" className="" target="_parent" rel="noopener noreferrer"><button onClick={()=> setHambState('close')} className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>home( )</button></a>
                  
                  
                    <a href="#work" className="" target="_parent" rel="noopener noreferrer"><button onClick={()=> setHambState('close')} className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                      work( )</button></a>
                  
                  
                    <a href="#projects" className="" target="_parent" rel="noopener noreferrer"><button onClick={()=> setHambState('close')} className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                      projects( )</button></a>
                  
                  
                    <a href="#contact" className="" target="_parent" rel="noopener noreferrer"><button onClick={()=> setHambState('close')} className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                      contact( )</button></a>
                  
                    <a href={resume()} className="" target="_blank" rel="noopener noreferrer"><button onClick={()=> setHambState('close')} className="mx-2 text-center hover:text-emerald-300 moveup  duration-300 px-4 py-2  hover:bg-emerald-100/5 rounded border border-emerald-300/90"><span className="text-emerald-300 ">h. </span> resume( )</button></a>
                
                
                </div>

              </div>
            
          </div>

        </div>
      </section>


          {/* leftside: social media links */}
      <div className="fixed bottom-0 left-14 invisible md:visible animate__animated animate__fadeInUp">
        <ul className="w-5 flex flex-col">
          <li name="github" className="py-3 moveup">
            <a title='Github' href="https://github.com/singhhimansh/" target="_blank" className="hover:text-emerald-300">
              <FaGithub className='w-5 h-5 fill-lightslate hover:fill-emerald-300'/></a>
          </li>


          <li name="linkedin" className="py-3 moveup">
            <a title='Linkedin' href="https://www.linkedin.com/in/singhhimansh/" target="_blank" className="hover:fill-emerald-300"><FaLinkedin className='w-5 h-5 fill-lightslate hover:fill-emerald-300'/> </a>
          </li>

          <li name="instagram" className="py-3 moveup">
            <a title='Instagram' href="https://www.instagram.com/himanshhh_/" target="_blank" className="">
            <GrInstagram className='w-5 h-5 fill-lightslate hover:fill-emerald-300'/></a>
          </li>


          <li name="facebook" className="py-3 moveup">
            <a title='Facebook' href="https://www.facebook.com/him.signum/" target="_blank" className=""><FaFacebook className='w-5 h-5 fill-lightslate hover:fill-emerald-300' /></a>
          </li>


          <li name="linktree" className="py-3 moveup">
            <a title="linktree" href="https://linktr.ee/himanshhh_" target="_blank" className="">
              <SiLinktree className='w-5 h-5 fill-lightslate hover:fill-emerald-300' /></a>
          </li>

          <li>
            <hr className="h-28 mt-4 mr-2 border-r-2 border-t-0 border-solid border-lightslate" />
          </li>
        </ul>
      </div>

          {/* rightside: mail */}
      <div className="w-6  h-[359px] fixed bottom-0 right-14 flex flex-col justify-between invisible md:visible animate__animated animate__fadeInUp">
        <div className="moveup rotate-90">
          <span className="moveup text-[13px] tracking-widest font-mono text-lightslate hover:text-emerald-300 hover:fill-emerald-300 ">
            <a className="" title='s.himanshusingh56@gmail.com' href="mailto:s.himanshusingh56@gmail.com" target="_blank" rel="noopener noreferrer">
            {/* <SiGmail className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/> */}
             s.himanshusingh56@gmail.com
            </a>
          </span>
        </div>
        <div className="">
          <hr className="h-28 mt-4 mr-3 border-r-2 border-t-0 border-solid border-lightslate" />
        </div>
      </div>

      <main className='flex justify-center border-0 border-cyan-400 '>

        <div className={`w-11/12 md:w-8/12 md:px-2 border-0 border-purple-600  flex flex-col ${ hambState==='close'? 'z-0' : '-z-10 blur-md scroll' } `}>
          
          {/* introduction */}
          <Intro />

          {/* Technologies and Skills */}
          <section className='my-28 self-start justify-center '>
                <div className="my-5 flex items-center gap-4">
                  <h1 className=" capitalize text-lightestslate font-calibre text-3xl md:text-4xl font-semibold tracking-wide  whitespace-nowrap">Technologies I know</h1>
                  <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-50" />
                </div>

              {/* <Tilt tiltEnable='false' > */}
              
                <div className="lg:w-3/5 mt-20 md:mt-28 flex flex-row flex-wrap gap-x-2 gap-y-3 md:gap-x-6 md:gap-y-8 ">
                  {
                    skills.map((skill)=>{
                      return (
                        <Tilt scale='1.4' tiltMaxAngleX={50} tiltMaxAngleY={50} transitionSpeed={2500}>
                      <img className='w-12 shrink m-3 object-scale-down grayscale hover:grayscale-0 hover:scale-105 transition ' title={skill}  src={require(`./data/img/skills/${skill}.png`)} alt="" />
                      </Tilt>
                      )
                    })
                  }
                </div>
                {/* </Tilt> */}
          </section>


          {/* work experiences  */}
          <Tabs />

          {/* Projects  */}
          <Pallets />

          {/* Interests  */}

          {/* contacts details  */}
          <section id='contact' className='my-36 md:w-2/3 font-calibre gap-10 flex flex-col items-center self-center'>
            <div className="my-5 w-full flex items-center justify-center gap-4">
                  <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
                  <h1 className=" text-lightestslate font-calibre text-3xl md:text-4xl font-semibold capitalize tracking-wide whitespace-nowrap">Get in touch</h1>
                  <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
            </div>

            <p className="mb-4 w-5/6 md:w-full text-lg text-defslate text-center first-letter:text-xl first-letter:font-medium first-letter:text-emerald-400 first-line:text-emerald-400/80">Hey there. Since you have reached down here, implies you must have liked my work. I always look forward to work on new, exciting projects. So whether you want to discuss some project or just wanna say hi, I would love to get back to you.</p>
            
            <a href="mailto:s.himanshusingh56@gmail.com" className=''><button className="p-2 px-4  text-slate-400 text-center border-2 border-emerald-400/90 rounded-md hover:bg-emerald-100/5 hover:text-lightestslate animate__animated animate__pulse animate__infinite">Say Hello</button></a>

          </section>


          {/* copyright */}
          <section id="copyright" className="copyright m-10 mb-5 flex justify-center text-slate-400" >
            <div className="flex flex-col items-center">
                <ul className="flex gap-6 md:gap-16 md:invisible">
                  <li name="github" className="py-3 moveup">
                    <a href="https://github.com/singhhimansh/" target="_blank" className="hover:text-emerald-300">
                      <FaGithub className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/></a>
                  </li>

                  <li name="linkedin" className="py-3 moveup">
                    <a href="https://www.linkedin.com/in/singhhimansh/" target="_blank" className="hover:fill-emerald-300"><FaLinkedin className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/> </a>
                  </li>



                  <li name="instagram" className="py-3 moveup">
                    <a href="https://www.instagram.com/himanshhh_/" target="_blank" className="">
                    <GrInstagram className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/></a>
                  </li>


                  <li name="facebook" className="py-3 moveup">
                    <a href="https://www.facebook.com/him.signum/" target="_blank" className=""><FaFacebook className='w-5 h-5 fill-slate-500 hover:fill-emerald-300' /></a>
                  </li>


                  <li name="linktree" className="py-3 moveup">
                    <a href="https://linktr.ee/himanshhh_" target="_blank" className="">
                      <SiLinktree className='w-5 h-5 fill-slate-500 hover:fill-emerald-300' /></a>
                  </li>
                </ul>
                
                <div className="mt-3 w-full flex flex-nowrap gap-4 items-center opacity-50 ">
                  <hr className='w-8 md:w-28 h-px' />
                  <h1 className="text-xs font-mono uppercase tracking-widest text-slate-400">Himanshu Singh</h1>
                  <hr className='w-8 md:w-28 h-px' />
                </div>
            </div>
          </section>


        </div>
      </main>

    </div>
  );
}

export default Home;
