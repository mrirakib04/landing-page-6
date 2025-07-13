import story1 from "./../assets/img/story-1.png";
import story2 from "./../assets/img/story-2.png";
import story3 from "./../assets/img/story-3.png";
import story4 from "./../assets/img/story-4.png";
import story5 from "./../assets/img/story-5.png";

const Stories = () => {
  return (
    <div className="w-full md:px-10 px-6 md:py-16 py-10 flex flex-col items-center gap-5">
      <h2 className="md:text-5xl sm:text-3xl text-2xl font-bold">
        Standard Curriculum
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="flex flex-col gap-2 lg:col-span-2 col-span-1 lg:row-span-2 rounded-xl overflow-hidden pb-5 bg-white">
          <div className="w-full relative">
            <img className="w-full object-cover" src={story1} alt="story1" />
            <p className="absolute -bottom-3 left-3 py-1 px-3 rounded-full bg-cyan-500 text-white w-fit font-medium">
              05-Octobor-2024
            </p>
          </div>
          <h4 className="text-xl font-medium mt-5 lg:px-5 px-3">
            A fun toddler coloring training on classroom
          </h4>
          <p className="mt-5 text-gray-700 lg:block hidden lg:px-5">
            Beautiful branding for changes by Never Now in Australia. changes is
            a platform for open discussion in an inclusive and collaborative
            environment, providing the...
          </p>
        </div>
        <div className="flex flex-col gap-2 col-span-1 rounded-xl overflow-hidden pb-5 bg-white">
          <div className="w-full relative">
            <img className="w-full object-cover" src={story2} alt="story2" />
            <p className="absolute -bottom-3 left-3 py-1 px-3 rounded-full bg-green-500 text-white w-fit font-medium">
              11-September-2024
            </p>
          </div>
          <h4 className="text-xl font-medium mt-5 lg:px-5 px-3">
            Find out if a school fits the family&apos;s needs
          </h4>
        </div>
        <div className="flex flex-col gap-2 col-span-1 rounded-xl overflow-hidden pb-5 bg-white">
          <div className="w-full relative">
            <img className="w-full object-cover" src={story3} alt="story3" />
            <p className="absolute -bottom-3 left-3 py-1 px-3 rounded-full bg-purple-500 text-white w-fit font-medium">
              2-March-2025
            </p>
          </div>
          <h4 className="text-xl font-medium mt-5 lg:px-5 px-3">
            Summer math & literacy centres for kids
          </h4>
        </div>
        <div className="flex flex-col gap-2 col-span-1 rounded-xl overflow-hidden pb-5 bg-white">
          <div className="w-full relative">
            <img className="w-full object-cover" src={story4} alt="story4" />
            <p className="absolute -bottom-3 left-3 py-1 px-3 rounded-full bg-blue-500 text-white w-fit font-medium">
              7-March-2025
            </p>
          </div>
          <h4 className="text-xl font-medium mt-5 lg:px-5 px-3">
            Classroom management techniques for new tutors
          </h4>
        </div>
        <div className="flex flex-col gap-2 col-span-1 rounded-xl overflow-hidden pb-5 bg-white">
          <div className="w-full relative">
            <img className="w-full object-cover" src={story5} alt="story5" />
            <p className="absolute -bottom-3 left-3 py-1 px-3 rounded-full bg-orange-500 text-white w-fit font-medium">
              2-April-2025
            </p>
          </div>
          <h4 className="text-xl font-medium mt-5 lg:px-5 px-3">
            Conversation rhymes improve kids listening
          </h4>
        </div>
      </div>
      <button className="text-lg font-medium mt-10 text-white bg-black hover:bg-white border-2 border-black py-2 px-10 rounded-xl hover:text-black duration-300">
        View All
      </button>
    </div>
  );
};

export default Stories;
