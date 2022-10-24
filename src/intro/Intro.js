import "./Intro.css";

function Intro() {
  return (
    <div className="Intro">
      <div className="Intro-background">
        <div className="Intro-header">
          2023.01.07.
          <br />
          우리가 기다려왔던 순간
        </div>
        <div className="Intro-title-container">
          <div className="Intro-title-initial">MH JW</div>
          <div className="Intro-title-message">WEDDING</div>
          <div className="Intro-title-names">
            유 민 희&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;이 종 욱
          </div>
        </div>
        <div className="Intro-bottom-container">
          <div className="Intro-bottom-left">
            <p>Yu Minhee&nbsp;&nbsp;Lee Jongwook</p>
          </div>
          <div className="Intro-bottom-right">
            <p>Made by&nbsp;</p>
            <p className="Intro-bottom-right-name">YGH</p>
          </div>
        </div>
      </div>
      <div className="Intro-footer">
        2023. 01. 07. SAT AM 11:00
        <br />
        더마레보호텔&웨딩
      </div>
    </div>
  );
}

export default Intro;
