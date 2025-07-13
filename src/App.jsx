import "./App.css";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stories from "./components/Stories";
import bg from "./assets/img/bg.png";

const App = () => {
  return (
    <div className="max-w-[1480px] w-full mx-auto flex flex-col items-center">
      <div className="w-full bg-gradient-to-b from-gray-100 via-gray-100 to-orange-200">
        <Header></Header>
        <div
          style={{ background: `url(${bg})` }}
          className={`w-full bg-cover bg-center flex flex-col items-center`}
        >
          <Curriculum></Curriculum>
          <Stories></Stories>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
