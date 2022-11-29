import "./Share.css";
import { useState, useEffect } from "react";
import Toast from "../toast/Toast";
import copyToClipboard from "../modal/CopyToClipboard";
import iconKakao from "../images/ic_kakaotalk.png";
import iconCopy from "../images/ic_copy.png";

function Share() {
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
      <div className="share_button_container">
        <img className="share_icon" src={iconKakao} />
        카카오톡 공유하기
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
