import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WordCloud from "react-d3-cloud";
import KakaoMap from "../components/KakaoMap";
import DayBtn from "../components/DayBtn";
import Route from "../components/Route";
import "../DetailRoute.css";

function DetailRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const duration = location.state.duration;
  const finalData = location.state.finalData;

  const [selectedDay, setSelectedDay] = useState(1);

  let durationStr;
  if (duration === 1) {
    durationStr = "당일치기";
  } else if (duration === 2) {
    durationStr = "1박 2일";
  } else if (duration === 3) {
    durationStr = "2박 3일";
  }

  const data = useMemo(
    () => [
      { text: finalData.startDate, value: 50 },
      { text: durationStr, value: 400 },
      { text: finalData.location, value: 300 },
      { text: finalData.with, value: 600 },
      ...finalData.themes.map((theme) => ({ text: theme, value: 3000 })),
    ],
    [
      finalData.startDate,
      durationStr,
      finalData.location,
      finalData.with,
      finalData.themes,
    ]
  );

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="DetailRoute">
      <div className="about">
        <button id="back" onClick={() => navigate(-1)}>
          {`<`}
        </button>
        <text>자세한 경로는 ... </text>
      </div>
      <div className="info">
        <div id="left">
          <div id="lTop">
            <DayBtn duration={duration} onDayClick={handleDayClick} />
          </div>
          <div id="lMiddle">
            <text># 키워드</text>
            <div className="wordcloud">
              <MemoizedWordCloud data={data} />
            </div>
          </div>
          <div id="lDown">
            <Route selectedDay={selectedDay} />
          </div>
        </div>

        <div id="right">
          <KakaoMap />
        </div>
      </div>
    </div>
  );
}

const MemoizedWordCloud = React.memo(({ data }) => (
  <WordCloud
    data={data}
    width={200}
    height={120}
    padding={4}
    fontSize={(word) => Math.log2(word.value) * 1.7}
    rotate={0}
    font="sunflowerL"
    fill={"#FAAC58"}
  />
));

export default DetailRoute;
