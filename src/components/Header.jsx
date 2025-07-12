import { PiListBold } from "react-icons/pi";
import logo from "./../assets/img/logo.png";
import boy from "./../assets/img/hero-kids.png";
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
        <button className="md:block hidden py-1 px-8 rounded-xl bg-orange-400 text-white duration-500 shadow-md hover:shadow-gray-500 hover:bg-green-400 text-xl font-medium">
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
      <div className="pt-12 pb-0 flex md:flex-row flex-col-reverse items-center justify-center gap-10">
        <div className="flex flex-col md:items-start gap-3 items-center">
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold md:text-left text-center">
            <p className="text-yellow-500">Empowering</p>
            students from small age
            <p className="text-sky-500">towards vision</p>
          </h2>
          <p className="text-gray-700 md:text-left text-center">
            With the courage, Confidence, Creativity and Compassion to make
            their Unique Contribution in a Diverse and Dynamic World.
          </p>
          <button className="py-2 px-8 rounded-xl bg-black text-white duration-500 shadow-md hover:shadow-gray-500 hover:bg-green-700 text-xl font-medium">
            Enroll Now
          </button>
        </div>
        <div className="sm:w-2/3 w-4/5 flex md:justify-end justify-center mx-auto">
          <img className="w-4/5" src={boy} alt="boy" />
        </div>
      </div>
    </header>
  );
};

export default Header;
