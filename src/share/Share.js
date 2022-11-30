import "./Share.css";
import { useState, useEffect } from "react";
import Toast from "../toast/Toast";
import copyToClipboard from "../modal/CopyToClipboard";
import iconShareIOS from "../images/ic_share_ios.png";
import iconShareAOS from "../images/ic_share_android.png";
import iconCopy from "../images/ic_copy.png";

function Share() {
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: "이종욱 ❤️ 유민희의 모바일 청첩장",
        url: "https://liahwoody.github.io/wedding",
      });
    } else {
      copyToClipboard("https://liahwoody.github.io/wedding");
      handleToast("링크가 복사되었습니다");
    }
  };

  const userAgent = navigator.userAgent.toLowerCase();
  var shareImage;
  if (
    userAgent.indexOf("iphone") > -1 ||
    userAgent.indexOf("ipad") > -1 ||
    userAgent.indexOf("ipod") > -1 ||
    userAgent.indexOf("safari") > -1
  ) {
    shareImage = iconShareIOS
  } else {
    shareImage = iconShareAOS
  }

  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지

  const handleToast = (text) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(text);
    }
  };

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [ToastStatus]);
  return (
    <div className="share_container">
      <div
        className="share_button_container"
        onClick={() => {
          copyToClipboard("https://liahwoody.github.io/wedding");
          handleToast("복사 되었습니다");
        }}
      >
        <img className="share_icon" src={iconCopy} />
        링크 복사하기
      </div>
      &nbsp;&nbsp;
      <div
        className="share_button_container"
        onClick={() => {
          share();
        }}
      >
        <img className="share_icon" src={shareImage} />
        청첩장 공유하기
      </div>
      {ToastStatus && (
        <>
          <Toast msg={ToastMsg} />
        </>
      )}
    </div>
  );
}

export default Share;
