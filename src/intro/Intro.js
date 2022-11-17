import "./Intro.css";
import IntroImage from "../images/img_intro.jpg";

function Intro() {
  return (
    <div className="intro_container">
      <img className="intro_image" src={IntroImage} alt="IntroImage" />
        <div className="image_left">
          <p>Yu Minhee&nbsp;&nbsp;Lee Jongwook</p>
        </div>
        <div className="image_right">
          <p>Made by&nbsp;</p>
          <p className="image_right_name">YGH</p>
        </div>
    </div>
  );
}

export default Intro;
