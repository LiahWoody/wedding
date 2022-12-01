import "./NavigationModal.css";
import Modal from "./Modal";
import { format } from "react-string-format";

function NavigationModal({ onClose, title, appName }) {
  const triplexLat = "37.25274996130871";
  const triplexLng = "127.07081853066171";
  const publicParkingLat = "37.25318939988978";
  const publicParkingLng = "127.07420334915199";
  const marevoLat = "37.2535350739379";
  const marevoLng = "127.07254951991133";

  const map = {
    kakao: {
      car: "kakaomap://route?ep={0},{1}&name={2}&by=CAR",
      pub: "kakaomap://route?ep={0},{1}&name={2}&by=PUBLICTRANSIT",
    },
    naver: {
      car: "nmap://route/car?dlat={0}&dlng={1}&dname={2}",
      pub: "nmap://route/public?dlat={0}&dlng={1}&dname={2}",
    },
    tmap: {
      car: "tmap://?rGoY={0}&rGoX={1}&rGoName={2}",
      pub: "tmap://?rGoY={0}&rGoX={1}&rGoName={2}",
    },
  };

  var app;
  switch (appName) {
    case "kakao":
      app = map.kakao;
      break;
    case "naver":
      app = map.naver;
      break;
    case "tmap":
      app = map.tmap;
      break;
    default:
      return;
  }
  const href = (scheme, lat, lng, dname) => {
    window.location.href = format(scheme, lat, lng, dname);
  };

  return (
    <Modal onClose={onClose}>
      <h4>{title}</h4>
        <div
          className="navi_text"
          onClick={() => {
            href(app.car, triplexLat, triplexLng, "트리플렉스");
          }}
        >
          제1주차장 - 트리플렉스
        </div>
        <div
          className="navi_text"
          onClick={() => {
            href(app.car, publicParkingLat, publicParkingLng, "영통공영주차장");
          }}
        >
          제2주차장 - 영통공영주차장
        </div>
        <div
          className="navi_text"
          onClick={() => {
            href(app.pub, marevoLat, marevoLng, "더마레보호텔&웨딩");
          }}
        >
          더마레보호텔(주차불가)
        </div>
    </Modal>
  );
}

export default NavigationModal;
