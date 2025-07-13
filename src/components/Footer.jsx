import logo from "./../assets/img/logo.png";
import facebook from "./../assets/img/fb.png";
import dribble from "./../assets/img/dribble.png";
import google from "./../assets/img/google+.png";
import twitter from "./../assets/img/twitter.png";

const Footer = () => {
  return (
    <div className="md:py-16 py-10 px-10 bg-sky-500 w-full flex items-start flex-wrap gap-10 sm:justify-around justify-start">
      <div className="flex flex-col gap-5 w-ful">
        <div className="flex items-center gap-3">
          <img
            className="h-full w-auto bg-white p-1 rounded-2xl"
            src={logo}
            alt="logo"
          />
          <h2 className="md:text-4xl text-3xl text-white font-semibold">
            Kids <br /> Education
          </h2>
        </div>
        <p className="text-gray-300 max-w-xs">
          Pizza ipsum dolor meat lovers buffalo. Deep dolor roll melted bacon
          Bianca pan bacon pineapple Aussie. Mayo rib sauce Hawaiian meatball.
        </p>
      </div>
      <div className="flex flex-col items-start gap-5 text-nowrap w-ful">
        <h4 className="text-2xl font-medium text-white">About School</h4>
        <ul className="flex flex-col items-start gap-2 text-lg font-normal">
          <li>
            <a
              className="text-white hover:text-black duration-300"
              href="./../../index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-black duration-300"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-black duration-300"
              href="#Facilities"
            >
              Facilities
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-black duration-300"
              href="#Admission"
            >
              Admission
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-5 text-nowrap w-ful">
        <h4 className="text-2xl font-medium text-white">Keep In Touch</h4>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="h-8 w-auto shadow-md shadow-gray-500"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="https://dribbble.com/" target="_blank">
            <img
              className="h-8 w-auto shadow-md shadow-gray-500"
              src={dribble}
              alt="dribble"
            />
          </a>
          <a href="https://x.com/" target="_blank">
            <img
              className="h-8 w-auto shadow-md shadow-gray-500"
              src={twitter}
              alt="twitter"
            />
          </a>
          <a href="https://www.google.com/" target="_blank">
            <img
              className="h-8 w-auto shadow-md shadow-gray-500"
              src={google}
              alt="google"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
