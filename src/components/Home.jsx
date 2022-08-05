// import './css/Home.css';
import Navbar from './Navbar';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiLinktree } from "react-icons/si";
// import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <div className="Home">
          {/* Navigationbar  */}
      <Navbar />

          {/* leftside: social media links */}
      <div className="fixed bottom-0 left-14">
        <ul className="w-5 flex flex-col">
          <li name="github" className="py-3 moveup">
            <a href="https://github.com/singhhimansh/" target="_blank" className="hover:text-emerald-300">
              <FaGithub className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/></a>
          </li>

          {/* <svg
                className="fill-slate-500 hover:fill-emerald-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg> */}

          <li name="linkedin" className="py-3 moveup">
            <a href="https://www.linkedin.com/in/singhhimansh/" target="_blank" className="hover:fill-emerald-300"><FaLinkedin className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/> </a>
          </li>

          {/* <svg
                className="fill-slate-500 hover:fill-emerald-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg> */}

          <li name="instagram" className="py-3 moveup">
            <a href="https://www.instagram.com/himanshhh_/" target="_blank" className="">
            <GrInstagram className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/></a>
          </li>

          {/* <svg className="fill-slate-500 hover:fill-emerald-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg> */}

          <li name="facebook" className="py-3 moveup">
            <a href="https://www.facebook.com/him.signum/" target="_blank" className=""><FaFacebook className='w-5 h-5 fill-slate-500 hover:fill-emerald-300' /></a>
          </li>

          {/* <svg
                className="fill-slate-500 hover:fill-emerald-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg> */}

          <li name="linktree" className="py-3 moveup">
            <a href="https://linktr.ee/himanshhh_" target="_blank" className="">
              <SiLinktree className='w-5 h-5 fill-slate-500 hover:fill-emerald-300' /></a>
          </li>

          {/* <svg className='fill-slate-500 hover:fill-emerald-300' viewBox="-7.19 -5.39 814.38 679.39"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m297.53 18.87c-13.49-24.26-48.54-24.26-62.02 0l-231.91 420.58c-10.79 21.57 5.39 45.83 29.66 45.83h156.4v159.06c0 16.18 13.49 29.66 29.67 29.66h91.68c16.18 0 29.66-13.48 29.66-29.66v-159.06h-43.14c-18.88 0-32.36-13.48-35.06-29.66 0-5.39 0-10.78 2.7-16.23l129.44-234.55z" />
                <path
                  d="m502.47 18.87c13.49-24.26 48.54-24.26 62.02 0l231.91 420.58c10.79 21.57-5.39 45.83-29.66 45.83h-153.71v159.06c0 16.18-13.48 29.66-29.69 29.66h-97.05c-16.18 0-29.66-13.48-29.66-29.66v-159.06h43.15c18.87 0 32.35-13.48 35.05-29.66 0-5.39 0-10.78-2.7-16.23l-129.43-234.49z" />
              </svg> */}



          <li>
            <hr className="h-28 mt-4 mr-2 border-r-2 border-t-0 border-solid border-slate-500" />
          </li>
        </ul>
      </div>

          {/* rightside: mail */}
      <div className="w-6 h-80 fixed bottom-0 right-14 flex flex-col justify-between">
        <div className="moveup rotate-90">
          <span className="moveup tracking-widest text-slate-500 hover:text-emerald-300 hover:fill-emerald-300 ">
            <a className="" href="mailto:hsingh2@ch.iitr.ac.in" target="_blank" rel="noopener noreferrer">
            {/* <SiGmail className='w-5 h-5 fill-slate-500 hover:fill-emerald-300'/> */}
             hsingh2@ch.iitr.ac.in
            </a>
          </span>
        </div>
        <div className=" text-white">
          <hr className="h-28 mt-4 mr-3 border-r-2 border-t-0 border-solid border-slate-500" />
        </div>
      </div>

      <main>
          {/* Name in middle */}
        <h1 className="mt-20 text-center text-sky-500 text-base">Hi Wonderer!</h1>
        <h1 className="mt-10 text-center text-sky-400 text-2xl">
          I'm Himanshu Singh
        </h1>
        <h1 className="mt-10 text-center text-sky-400 text-xl">
          This site is under developement. Coming live soon!
        </h1>

          {/* aboutme  */}

          {/* experiences  */}

          {/* Projects  */}

          {/* skills Table */}

          {/* Interests  */}

          {/* contacts details  */}
      </main>

          {/* copyright  */}

    </div>
  );
}

export default Home;
