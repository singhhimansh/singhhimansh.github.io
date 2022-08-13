
import { GoMarkGithub,GoLinkExternal } from 'react-icons/go';
import projects from './data/projects.json';

function Tabs(){
    return (
        <section id='projects' className="text-slate-400">
            <div className="my-5 flex items-center gap-4">
                <h1 className="text-slate-300 font-semibold tracking-wide text-2xl md:text-3xl whitespace-nowrap">Projects I have built</h1>
                <hr className="whitespace-nowrap w-1/6 h-1px bg-slate-400 opacity-50" />
            </div>

            <div className=''>
                { projects.map((project)=>{

                    return(
                        <div key={project.id} className={`my-24 md:my-32 lg:mx-10 h-96 relative md:grid md:grid-cols-12 gap-3 items-center select-none ${ project.id % 2 === 1 ? "text-right" : "text-left" } `}>
                         
                           <div className={`z-[1] p-5 md:p-0 h-[90%]  bg-deepocean/80 backdrop-blur-[3px] md:backdrop-blur-none md:bg-transparent absolute top-0 left-0 md:relative flex flex-col justify-center border md:border-none rounded-md border-emerald-200/40 w-full  ${ project.id % 2 === 1 ? "md:col-span-8  lg:col-span-6 md:col-end-13 lg:col-end-13" :"md:col-span-8 lg:col-span-6 md:col-start-1 "  }`}>
                                <h1 className="font-bold tracking-wider text-2xl md:text-3xl md:text-emerald-400/60 text-emerald-200/70 hover:text-emerald-300 duration-200">{project.title}</h1>
                                <h2 className="mt-1 mb-4 text-base">{project.subtitle}</h2>
                                <p className="z-[1] text-sm my-4 md:p-5 md:bg-gray-800/[74%] rounded-md text-slate-400  md:backdrop-blur-sm">{project.description}</p>
                                <div className={`text-sm flex flex-nowrap gap-5 font-mono ${ project.id % 2 === 1 ? "justify-end" : "justify-start" } `}>
                                    {
                                        project.tech.map((tech)=>{
                                            return (
                                                <h3>{tech}</h3>
                                            )
                                        })
                                    }
                                </div>
                                <div className='m-2'>
                                <a href={project.git} target="_blank" rel="noopener noreferrer"><GoMarkGithub className='inline mr-4 hover:fill-emerald-300 duration-200 w-5 h-5   '/></a>
                                <a href={project.url} target="_blank" rel="noopener noreferrer"><GoLinkExternal className='inline hover:fill-emerald-300 duration-200 w-5 h-5  '/></a>
                                </div>

                            </div>
                           
                            {/* <div className= "overflow-hidden rounded-md"> */}
                            <img className={`absolute top-0 left-0 z-0 h-[90%] rounded-lg object-fill saturate-0 hover:saturate-100 duration-200 self-center ${ project.id % 2 === 1 ? "md:col-start-1 md:col-span-8" : "md:col-start-5 md:col-span-8" }`} src={require(`${project.img}`)} alt="" />
                            {/* </div> */}


                            
                        </div>
                    );
                })
                }
            </div>



        </section>

    );
}

export default Tabs;