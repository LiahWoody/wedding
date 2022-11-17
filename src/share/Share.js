import "./Share.css";
import iconKakao from "../images/ic_kakaotalk.png";
import iconCopy from "../images/ic_copy.png";

function Share() {
  return (
    <div className="share_container">
      <div className="share_button_container">
        <img className="share_icon" src={iconCopy} />
        링크 복사하기
      </div>
      &nbsp;&nbsp;
      <div className="share_button_container">
        <img className="share_icon" src={iconKakao} />
        카카오톡 공유하기
      </div>
    </div>
  );
}

export default Share;
