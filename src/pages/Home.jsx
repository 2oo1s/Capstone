import { useNavigate } from "react-router-dom";

import "../css/Home.css";
import "../fonts/fonts.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="title">
        <h1>
          ------------------------
          <br />
          Trip to Jeju
          <br />
          ------------------------
        </h1>
      </div>
      <br />
      <div id="how">
        <text>
          예정된 여행에 대한 간단한 정보를 선택해주시면
          <br />
          그에 맞는 <b id="emp">3가지 여행 경로</b>를 추천해드려요.
          <br />그 중 마음에 드는 경로를 선택하시면 전체 경로를 보여드릴게요!
        </text>
      </div>
      <button
        id="start"
        onClick={() => {
          navigate("/checkinfo");
        }}
      >
        정보 선택하러 가기
      </button>
      {/* <button
        id="start"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </button>
      <div className="member">
        <button id="join">회원가입</button>
        <button
          id="nonmember"
          onClick={() => {
            navigate("/checkinfo");
          }}
        >
          비회원
        </button>
      </div> */}
    </div>
  );
}

export default Home;
