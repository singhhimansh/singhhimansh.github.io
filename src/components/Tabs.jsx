
import { GoMarkGithub,GoLinkExternal } from 'react-icons/go';
import projects from './data/projects.json';

function Tabs(){
    return (

        <div className="text-slate-400">
            <h1 className="inline-block my-5 text-slate-300 font-semibold tracking-wide text-2xl md:text-3xl whitespace-nowrap">Projects i have built</h1><hr className="inline-block  whitespace-nowrap w-1/6 h-px m-4 bg-slate-400 align-middle text " />

            <div className=''>
                { projects.map((project)=>{

                    return(
                        <div key={project.id} className={`my-24 md:my-32 md:mx-10 h-96 relative md:grid md:grid-cols-12 gap-3 items-center ${ project.id % 2 === 1 ? "text-right" : "text-left" } `}>
                         
                           <div className={`z-[1] p-5 md:p-0 h-[90%]  bg-deepocean/90 md:bg-transparent absolute top-0 left-0 md:relative flex flex-col w-full  ${ project.id % 2 === 1 ? "md:col-span-8  lg:col-span-6 md:col-end-13 lg:col-end-13" :"md:col-span-8 lg:col-span-6 md:col-start-1 "  }`}>
                                <h1 className="font-bold tracking-wider text-3xl hover:text-emerald-300 duration-200">{project.title}</h1>
                                <h2 className="mt-1 mb-6 text-base">{project.subtitle}</h2>
                                <p className="z-[1] text-sm my-4 md:p-5 md:bg-gray-800 rounded-md text-slate-400">{project.description}</p>
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



        </div>

    );
}

export default Tabs;