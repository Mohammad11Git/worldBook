import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import { FaBarsStaggered , FaXmark } from "react-icons/fa6";
const Navbarapp = () => {
      const[isMenuOpen, setIsMenuOpen] = useState(false);
      const[isSticky, setSticky] = useState(false);

      //toggle menu
      const toggleMenu = () =>{
          setIsMenuOpen(!isMenuOpen);
      }

      useEffect( () =>{
            const handeScroll = () =>{
                  if(window.scrollY > 100){
                        setSticky(true);
                  }
                  else{
                        setSticky(false);
                  }
            }
            window.addEventListener("scroll",handeScroll);
            return () => {
                  window.addEventListener("scroll",handeScroll); 
            }
      },[])
      // navItem
       const navItem = [
             {link:"Home", path: "/"},
             {link:"Shop", path: "/shop"},
             {link:"Sell Your Book", path: "/admin/dashboard"},
             {link: "Your Favourite",path:"/Favourite"}   
       ]
  return (
        <header className='w-full z-30 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 bg-teal-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <nav className={`py-4 lg:px-24 px-4 ${ isSticky ? "sticky top-0 left-0 right-0 bg-teal-100 ": " bg-teal-100 "} `}>
                  <div className="flex justify-between items-center text-base gap-8">
                      {/*logo */}
                      <Link to="/" className="text-2xl font-bold text-blue-500 flex items-center gap-2"><FaBlog className="inline-block"/>Books</Link>
                      {/*nav Item for Large device */}
                      <ul className="md:flex space-x-12 hidden">
                        {
                              navItem.map(({link,path}) => <Link key={path} to={path} className ="block text-base text-black uppercase cursor-pointer hover:text-blue-500" > {link}</Link> )
                        }
                      </ul>
                      {/*btn for large device */}
                      <div onClick={toggleMenu} className="space-x-12 hidden lg:flex items-center">
                            <button>
                            {
                              isMenuOpen ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered className="h-5 w-5 text-black hover:text-blue-500"/>
                            }
                            </button>
                      </div>
                      {/* menu btn for the mobile devices */}
                      <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className= "text-black focus:outline-none">
                              {
                                  isMenuOpen ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered className="h-5 w-5 text-black hover:text-blue-500"/>
                              }
                        </button>
                      </div>
                  </div>
                  {/*navitem for sm devices*/}
                  <div className={`space-y-3 px-4 mt-16 py-2 bg-teal-200  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-100  ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                        {                     
                          navItem.map(({link,path}) => <Link key={path} to={path} className ="block text-base text-black uppercase cursor-pointer hover:text-blue-400" > {link}</Link> )
                        }
                  </div>
            </nav>
        </header>

      );
}
 
export default Navbarapp;