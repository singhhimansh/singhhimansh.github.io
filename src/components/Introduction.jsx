import './profile/border-anim.css';
import Dp from './profile/him.jpg';
import 'animate.css';

function Introduction(){

    return(
        <section id='intro' className=" md:h-screen z-0 border-0 border-white flex justify-center animate__animated animate__slideInUp animate__slow ">
            <div className=" h-2/3 my-36 -mt-12  md:-mt-4  mb-48 border-0 border-green-400 self-center  flex flex-col md:flex-row gap-36 md:gap-0 ">
                    <div className="relative border-0 border-yellow-400">
                        <div className="my-5 text-emerald-300 tracking-wider italic ">Hi, Wonderer ! <span className="md:invisible">My name is </span> </div>
                        <div className=" relative text-lightestslate  text-5xl md:text-[70px] font-calibre font-bold "><span className= "absolute bottom-4 -left-8 text-base text-emerald-300/80 tracking-wider invisible md:visible ">I'm </span> Himanshu Singh</div> 
                        <div className="mb-5 text-defslate text-4xl md:text-5xl font-calibre font-bold">A developer, learner, dreamer.</div>
                        <div className="text-defslate text-lg font-calibre  md:w-3/5 leading-7">I'm a software developer proficient in web development skilled with Front End technologies like React.Js, TailwindCSS and Back End technologies like Django and Mysql.</div>
                    </div>

                    <div className=" profile self-center md:self-end ">
                        <div className="dp content-center">
                            <img src={Dp}  alt="Profile picture" sizes="" srcSet=""/>
                        </div>
                    </div>
            </div>
        </section>

           

    );
}

export default Introduction;