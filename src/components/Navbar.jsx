import logo from './images/HSc15.png';
import resume from './Himanshu_Singh.pdf'
import 'animate.css';

import {CgMenuRight} from 'react-icons/cg';
import {IoClose} from 'react-icons/io5';

import React, { useState } from 'react'

function Navbar() {

  // hambstat=0 closed
  const [hambState, setHambState] = useState('close');

  const handleMenu = (e)=>{
    e.preventDefault();
    console.log(e)
    console.log(e.target.id);
    console.log('hamstate',  hambState);
    hambState === 'close' ? setHambState('open') : setHambState('close');
    
  }



    return (
      <section className="navbar m-6 animate__animated animate__fadeInDown ">
          <div className="flex justify-between">
            {/* logo  */}
            <div className="flex flex-1 items-center justify-between">
              <a id='logo' href="." className="ml-6" target="_parent" rel="noopener noreferrer"><img src={logo}
                  alt="HS" className="w-12" srcSet="" /></a>

              <button name='hambtn' title='menu' id="hambtn" className={`text-3xl cursor-pointer mx-2 md:hidden block ${ hambState==='close'? '' : 'z-[3] ' }`} onClick={(e)=>handleMenu(e)}>
                  {/* <svg name="hamsvg" id='hamsvg'  className={`fill-slate-500 w-7  ${ hambState==='close'? '' : 'fill-emerald-200 z-10' } `}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                  </svg> */}
                  <CgMenuRight className={`w-9 h-9  stroke-1 ${ hambState==='close'? 'stroke-defslate' : 'hidden' }`}/>
                  <IoClose className={`w-9 h-9  stroke-1 ${ hambState==='close'? 'hidden' : 'fill-emerald-500' }`}/>
              </button>
            </div>


            {/* divide-y divide-opacity-60 divide-slate-400  border-opacity-100 border-y-2 border-slate-600 md:border-0  */}

            {/* md:opacity-100 */}


            {/* <!-- navbar on right side --> */}
            <div id="menubar"
              className="menubar mr-4 align-middle md:flex md:items-center  transition-all ease-in-out duration-500">
              <div id="menuForPC"
                className={`hidden font-calibre text-lightslate md:flex gap-3 justify-center items-center ${ hambState==='close'? '' : '' } `}>

                  <a href="#intro" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>home( )</button></a>
                
                
                  <a href="#work" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    work( )</button></a>
                
                
                  <a href="#projects" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    projects( )</button></a>
                
                
                  <a href="#contact" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    contact( )</button></a>
                
                  <a href={resume} className="" target="_blank" rel="noopener noreferrer"><button className="mx-2 text-center hover:text-emerald-300 moveup  duration-300 px-4 py-2  hover:bg-emerald-100/5 rounded border border-emerald-300/90"><span className="text-emerald-300 ">h. </span> resume( )</button></a>
              
              </div>

              <div id="menuForMob"
                className={`h-screen md:hidden  font-calibre text-lightslate  bg-zinc-800 flex flex-col justify-center items-center  gap-10  ${ hambState==='close'? 'hidden md:block' : 'w-2/3 z-[2] touch-none' } `}>
                
                  <a href="#intro" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>home( )</button></a>
                
                
                  <a href="#work" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    work( )</button></a>
                
                
                  <a href="#projects" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    projects( )</button></a>
                
                
                  <a href="#contact" className="" target="_parent" rel="noopener noreferrer"><button className="p-2 hover:text-emerald-300 moveup"><span className="text-emerald-300">h. </span>
                    contact( )</button></a>
                
                  <a href={resume} className="" target="_blank" rel="noopener noreferrer"><button className="mx-2 text-center hover:text-emerald-300 moveup  duration-300 px-4 py-2  hover:bg-emerald-100/5 rounded border border-emerald-300/90"><span className="text-emerald-300 ">h. </span> resume( )</button></a>
              
               
              </div>
            </div>
          
          </div>
      </section>
    );
}

export default Navbar;