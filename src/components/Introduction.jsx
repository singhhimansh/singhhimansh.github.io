import './profile/border-anim.css';
import Dp from './profile/him.jpg';

function Introduction(){

    return(
        <section className="p-20 self-start relative">
            {/* <div className=""> */}
            <div className="my-5 text-emerald-300 tracking-wider italic ">Hi, Wonderer !</div>
            <div className="my-5 relative text-slate-100/80 text-6xl tracking-widest font-mono font-black"><span className= "absolute bottom-1 -left-10 text-base text-emerald-300/80 tracking-wider ">I'm </span> Himanshu Singh</div> 
            <div className="my-5 text-slate-400 text-4xl font-bold">A developer, a learner, a dreamer.</div>
            <div className="text-slate-400 text-base w-1/2 leading-7">I'm a software developer proficient in web development skilled with Front End technologies like React.Js, TailwindCSS and Back End technologies like Django and Mysql. </div>

            <div className="profile w-full bg-red-200">
                <div className="dp">
                    <img src={Dp}  alt="Profile picture" sizes="" srcSet=""/>
                </div>
            </div>
            {/* </div> */}

        </section>

    );
}

export default Introduction;