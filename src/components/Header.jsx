import { PiListBold } from "react-icons/pi";
import logo from "./../assets/img/logo.png";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="w-full md:px-10 px-6 py-6">
      <nav className="flex items-center justify-between">
        <a className="flex items-center gap-1" href="./../../index.html">
          <img className="h-8 w-auto" src={logo} alt="logo" />
          <h2 className="md:text-3xl font-semibold md:block hidden">SCHOOL</h2>
        </a>
        <ul className="md:flex items-center gap-5 text-lg font-medium hidden">
          <li>
            <a
              className="text-yellow-500 hover:text-black duration-300"
              href="./../../index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-sky-500 hover:text-black duration-300"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-cyan-500 hover:text-black duration-300"
              href="#Facilities"
            >
              Facilities
            </a>
          </li>
          <li>
            <a
              className="text-indigo-500 hover:text-black duration-300"
              href="#Admission"
            >
              Admission
            </a>
          </li>
        </ul>
        <button className="md:block hidden py-1 px-8 rounded-xl bg-orange-400 text-white duration-500 shadow-2xl hover:bg-green-400 text-xl font-medium">
          Contact
        </button>
        <button
          onClick={toggleNav}
          className="relative md:hidden block text-3xl "
        >
          <PiListBold></PiListBold>
        </button>
        {showNav && (
          <ul className="md:hidden flex-col p-5 border-2 rounded-2xl bg-gray-100 items-start gap-3 text-lg font-medium flex absolute top-16 right-3">
            <button className="py-1 px-8 rounded-xl bg-orange-400 text-white duration-500 shadow-2xl hover:bg-green-400 text-xl font-medium">
              Contact
            </button>
            <li>
              <a
                className="text-yellow-500 hover:text-black duration-300"
                href="./../../index.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-sky-500 hover:text-black duration-300"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-cyan-500 hover:text-black duration-300"
                href="#Facilities"
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 hover:text-black duration-300"
                href="#Admission"
              >
                Admission
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
