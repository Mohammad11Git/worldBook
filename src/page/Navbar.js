import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Cookies from "js-cookie";
import { Avatar, Dropdown, Spinner } from "flowbite-react";
import axios from "axios";

const Navbarapp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isSticky, setSticky] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const fullName = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).name
    : "";
  const email = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).email
    : "";

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    const firstNameInitial = names[0].charAt(0);
    const lastNameInitial = names[names.length - 1].charAt(0);
    const initials = firstNameInitial + lastNameInitial;
    return initials;
  };

  useEffect(() => {
    const handeScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handeScroll);
    return () => {
      window.addEventListener("scroll", handeScroll);
    };
  }, []);
  // navItem
  const navItem = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Your Favourite", path: "/Favourite" },
    { link: "Search", path: "/Search" },
  ];

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:5000/logout", { token });
      Cookies.remove("token");
      localStorage.removeItem("userInfo");
      setToken(null);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <header className="w-full z-30 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 bg-teal-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-teal-100 "
            : " bg-teal-100 "
        } `}
      >
        <div className="flex justify-between items-center text-base ">
          {/*logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-500 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/*nav Item for Large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-500"
              >
                {" "}
                {link}
              </Link>
            ))}
          </ul>
          {/*btn for large device */}
          {/* login & signup */}
          {!token ? (
            <div className="hidden space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <Link to="sign-up">
                <h2 className="bg-blue-400 px-5 py-2 rounded text-white  flex justify-center items-center w-20 hover:bg-blue-300 transition-all ease-linear  ">
                  Signup
                </h2>
              </Link>
              <Link to="Login">
                <h2 className="bg-blue-400 px-5 py-2 rounded text-white  flex justify-center items-center w-20 hover:bg-blue-300 transition-all ease-linear  ">
                  Login
                </h2>
              </Link>
            </div>
          ) : null}
          {/* Avatar */}
          {token ? (
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <div>
                  <Avatar
                    className="block cursor-pointer select-none"
                    placeholderInitials={getInitials(fullName)}
                    rounded
                  />
                </div>
              )}
            >
              <Dropdown.Header>
                <span className="block text-sm">{fullName}</span>
                <span className="block truncate text-sm font-medium">
                  {email}
                </span>
              </Dropdown.Header>
              {/* <Dropdown.Item>Dashboard</Dropdown.Item> */}
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item
                className="flex gap-2 items-center"
                disabled={isLoading}
                onClick={() => handleLogout()}
              >
                {isLoading && (
                  <Spinner color="info" aria-label="Info spinner example" />
                )}
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : null}

          {/* menu btn for the mobile devices */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black hover:text-blue-500" />
              )}
            </button>
          </div>
        </div>
        {/*navitem for sm devices*/}
        <div
          className={`space-y-3  px-4 mt-16 py-5 bg-teal-200  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-100  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-black uppercase cursor-pointer hover:text-blue-400"
            >
              {" "}
              {link}
            </Link>
          ))}
          <hr className="text-blue-500" />
          {!token ? (
            <div className=" flex  gap-2 ">
              <Link to="sign-up">
                <h2 className="bg-blue-400 px-5 py-2 rounded text-white  flex justify-center items-center w-20 hover:bg-blue-300 transition-all ease-linear  ">
                  Signup
                </h2>
              </Link>
              <Link to="Login">
                <h2 className="bg-blue-400 px-5 py-2 rounded text-white  flex justify-center items-center w-20 hover:bg-blue-300 transition-all ease-linear  ">
                  Login
                </h2>
              </Link>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbarapp;
