import "./Location.css";
import imageLocation from "../images/img_location.png";

function Location() {
  return (
    <div className="location_container">
      <div className="title">LOCATION</div>
      <hr className="divider" />
      <img className="image_location" src={imageLocation} />
      <div className="shortcut_container">
        <button className="shortcut_button">네이버 지도 바로가기</button>&nbsp;
        <button className="shortcut_button">카카오맵 바로가기</button>&nbsp;
        <button className="shortcut_button">티맵 바로가기</button>
      </div>
      <div className="location_text1">경기 수원시 영통구 봉영로 1591 (TEL. 032-202-3773)</div>
      <div className="location_text2">더 마레보 호텔&웨딩 15층 Atelier. M</div>
      <div className="location_detail_container">
        <div>
          <b>주차 안내(2시간 무료)</b><br/>
          제1주차장: 트리플렉스 (수원시 영통구 매영로 345번길 7)<br/>
          제2주차장: 영통공영주차장 (수원시 영통구 봉영로 1598)
          <br/><br/>
          <b>지하철</b><br/>
          수인분당선 영통역(8번출구 도보 3분)
          <br/><br/>
          <b>버스</b><br/>
          영통역 8번출구 정류장<br/>
          &nbsp;- 시내버스: 2-1, 3, 13-1, 34-1, 203, 720-3<br/>
          &nbsp;- 시외버스: 1112, 5100, 7000, G5100, M5107<br/>
          영통랜드마크호텔 정류장(공항)<br/>
          &nbsp;- 공항버스: 4100-1<br/>
        </div>
        
        

      </div>
    </div>
  );
}

export default Location;
