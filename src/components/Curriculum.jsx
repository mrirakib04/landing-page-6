import kinder from "./../assets/img/kinder.png";
import elementary from "./../assets/img/elementary.png";
import middle from "./../assets/img/middle.png";

const Curriculum = () => {
  return (
    <div className="w-full md:px-10 px-6 md:py-16 py-10 flex flex-col items-center gap-5">
      <h2 className="md:text-5xl sm:text-3xl text-2xl font-bold">
        Standard Curriculum
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5 items-center">
        <div className="flex flex-col items-center gap-3 lg:px-5 px-3 py-10 text-center rounded-xl bg-gradient-to-b from-sky-200 via-white to-white">
          <img className="h-32 w-auto" src={kinder} alt="kinder" />
          <h3 className="lg:text-2xl text-xl mt-5 font-semibold">
            Kinder (3-6) Years
          </h3>
          <p className="text-gray-700 lg:text-base md:text-sm text-base">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mu sdis parturient
          </p>
          <button className="text-lg font-medium text-sky-500 hover:text-sky-700 duration-300">
            Read more
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 lg:px-5 px-3 py-10 text-center rounded-xl bg-gradient-to-b from-yellow-200 via-white to-white">
          <img className="h-32 w-auto" src={elementary} alt="elementary" />
          <h3 className="lg:text-2xl text-xl mt-5 font-semibold">
            Elementary School
          </h3>
          <p className="text-gray-700 lg:text-base md:text-sm text-base">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mu sdis parturient
          </p>
          <button className="text-lg font-medium text-yellow-500 hover:text-yellow-700 duration-300">
            Read more
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 lg:px-5 px-3 py-10 text-center rounded-xl bg-gradient-to-b from-purple-200 via-white to-white">
          <img className="h-32 w-auto" src={middle} alt="middle" />
          <h3 className="lg:text-2xl text-xl mt-5 font-semibold">
            Middle (10-16) Years
          </h3>
          <p className="text-gray-700 lg:text-base md:text-sm text-base">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mu sdis parturient
          </p>
          <button className="text-lg font-medium text-purple-500 hover:text-purple-700 duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
