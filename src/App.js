import './App.css';
import { FaNpm } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";
import { GiOwl } from "react-icons/gi";
import { GrWordpress } from "react-icons/gr";
import Image  from './components/men-CuWGShr9.png';


function App() {
  return (
    <div className="App">
    <header>
        <h2>WORKOUT</h2>
        <div className="free">
            <ul>
                <li>Home</li>
                <li>Programs</li>
            </ul>
            <button className='sun'><GoSun /></button>
            <button className='moon'><LuMoon /></button>
            <button className="btn_join"><a href="">Join Free</a></button>
        </div>
    </header>
    <div className="line">
    </div>
    <div className="work_out">
        <div className="text">
            <h1>WORKOUT <br />WITH ME</h1>
            <p>A hugo selection of health and fitness content,heathly recipes and transformation <br />stories to help you get fit and stay fit!</p>
            <button>Join club now</button>
        </div>
        <img src={Image} alt="" />
        <div className="featured">
            <h3>AS FEATURED IN</h3>
            <div className="icons">
              <button><FaNpm /></button>
              <button><FaApple /></button>
              <button><FaGithubAlt /></button>
              <button><GiOwl /></button>
              <button><DiVisualstudio /></button>
              <button><GrWordpress /></button>
            </div>
        </div>
    </div>
    <div className="start">
      <h1>Not sure where to start?</h1>
      <p className='programs'>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
      <div className="cards">
        <div className="card">
          <h3>Workout Videos</h3>
          <p>Access to hundreds of free, full-length <br />workout videos. →</p>
        </div>
        <div className="card">
          <h3>Workout Programs</h3>
          <p>Affordable and effective workout <br />programs. →</p>
        </div>
        <div className="card">
          <h3>Meal Plans</h3>
          <p>Plans built with registered dietitians <br />and nutritionists. →</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;