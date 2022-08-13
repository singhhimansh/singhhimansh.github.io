import './profile/border-anim.css';
import Dp from './profile/him.jpg';
import 'animate.css';

function Introduction(){

    return(
        <section id='intro' className=" md:h-screen  border-0 border-white flex justify-center animate__animated animate__slideInUp animate__slow ">
            <div className=" h-2/3 my-36 -mt-12  md:-mt-4  mb-48 border-0 border-green-400 self-center  flex flex-col md:flex-row gap-36 md:gap-0 ">
                    <div className="relative border-0 border-yellow-400">
                        <div className="my-5 text-emerald-300 tracking-wider italic ">Hi, Wonderer ! <span className="md:invisible">My name is </span> </div>
                        <div className="my-5 relative text-slate-100/80 text-4xl md:text-6xl md:tracking-widest  font-mono font-black"><span className= "absolute bottom-1 -left-10 text-base text-emerald-300/80 tracking-wider invisible md:visible ">I'm </span> Himanshu Singh</div> 
                        <div className="my-5 text-slate-400 text-3xl md:text-4xl font-bold">A developer, a learner, a dreamer.</div>
                        <div className="text-slate-400 text-base md:w-1/2 leading-7">I'm a software developer proficient in web development skilled with Front End technologies like React.Js, TailwindCSS and Back End technologies like Django and Mysql.</div>
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