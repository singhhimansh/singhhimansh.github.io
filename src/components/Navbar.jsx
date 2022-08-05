import logo from './images/HSc15.png';
import resume from './Himanshu_Singh.pdf'

function Navbar() {

  // function Menu(e) {

  //   let list = document.getElementById("navbarlist");
  //   let parentdiv = document.getElementById("listparentdiv");
  //   let hamburger = document.getElementById("hamburgerSVG");

  //   e.name === "menu"
  //     ? ((e.name = "menuclose"),
  //       parentdiv.classList.add("visible"),
  //       parentdiv.classList.add("opacity-100"),
  //       parentdiv.classList.remove("invisible"),
  //       hamburger.classList.add("fill-emerald-200"),
  //       hamburger.classList.remove("fill-slate-500"))
  //     : ((e.name = "menu"),
  //       parentdiv.classList.remove("opacity-100"),
  //       parentdiv.classList.remove("visible"),
  //       parentdiv.classList.add("invisible"),
  //       hamburger.classList.remove("fill-emerald-200"),
  //       hamburger.classList.add("fill-slate-500"));

  //   }




    return (
      <div className="navbar">
          <div className="m-6 flex justify-between">
            {/* logo  */}
            <div className="flex flex-1 items-center justify-between">
              <a href="." className="ml-6" target="_parent" rel="noopener noreferrer"><img src={logo}
                  alt="HS" className="w-12" srcset="" /></a>

              <button className="text-3xl cursor-pointer mx-2 md:hidden block">
                {/* <!-- <ion-icon ></ion-icon> --> */}
                <svg name="menu" id="hamburgerSVG" onclick="Menu(this)" className="fill-slate-500 w-7 hover:fill-emerald-200"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
              </button>
            </div>

            {/* <!-- navbar on right side --> */}
            <div id="listparentdiv"
              className="md:visible navbar mr-4 shadow align-middle md:flex md:items-center md:justify-between invisible z-[1] opacity-0 md:opacity-100 transition-all ease-in-out duration-500">
              <ul id="navbarlist"
                className="w-full flex flex-col md:flex-row items-center text-gray-200 bg-deepocean md:bg-none border-opacity-60 border-y-2 border-slate-600 border-solid md:border-none md:z-auto md:static absolute left-0 divide-y divide-opacity-60 divide-slate-400 md:divide-none md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[100px]">
                <li className="p-5 hover:text-emerald-300 moveup">
                  <a href="#" className="" target="_blank" rel="noopener noreferrer"><span className="text-emerald-300">h.
                    </span>home( )</a>
                </li>
                <li className="p-5 hover:text-emerald-300 moveup">
                  <a href="#" className="" target="_blank" rel="noopener noreferrer"><span className="text-emerald-300">h.</span>
                    projects( )</a>
                </li>
                <li className="p-5 hover:text-emerald-300 moveup">
                  <a href="#" className="" target="_blank" rel="noopener noreferrer"><span className="text-emerald-300">h.</span>
                    about( )</a>
                </li>
                <li className="p-5 hover:text-emerald-300 moveup">
                  <a href="#" className="" target="_blank" rel="noopener noreferrer"><span className="text-emerald-300">h.</span>
                    contact( )</a>
                </li>
                <li className=" hover:text-emerald-300 moveup border-2 border-emerald-300  font-[Poppins] duration-300 px-6 py-2  hover:bg-cyan-900 rounded">
                  <a href={resume} className="" target="_blank" rel="noopener noreferrer"><span
                      className="text-emerald-300 ">h.</span> resume( )</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }

export default Navbar;