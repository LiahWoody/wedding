import "./Message.css";

function Message() {
  return (
    <div className="Message">
      <div className="footer_container">
        2023. 01. 07. SAT AM 11:00
        <br />
        더마레보호텔&웨딩
      </div>
      <header className="Message-header">
        <div className="Message-title">
          INVITATION
        </div>
        <div className="Message-message">
          새로운 마음과 새 의미를 간직하며
          <br />
          저희 두 사람이 새 출발의
          <br />
          첫 걸음을 내딛습니다.
          <br />
          좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록
          <br />
          축복과 격려 주시면
          <br />
          더 없는 기쁨으로 간직하겠습니다.
          <br />
        </div>
        <div className="message_member">
          <b className="message_member_highligt">이창규 · 유귀옥</b>의&nbsp;&nbsp;장남 <b className="message_member_highligt">이종욱</b>
          <br/>
          <b className="message_member_highligt">유광동 · 정미경</b>의&nbsp;&nbsp;차녀 <b className="message_member_highligt">유민희</b>
        </div>
      </header>
    </div>
  );
}

export default Message;
