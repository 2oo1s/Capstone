import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../ShowOptions.css";
import Option from "../components/Option";

function ShowOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const duration = location.state.duration;
  const selectedData = location.state.selectedData;

  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (label) => {
    setSelectedOption(label);
    navigate("/details", {
      state: { duration: duration, selectedData: selectedData },
    });
  };

  // 지울 것! // // // // // // // // /
  console.log("duration:", duration);
  // // // // // // // // // // // //

  return (
    <div className="ShowOptions">
      <div className="about">
        <button id="back" onClick={() => navigate(-1)}>
          {`<`}
        </button>
        <text>추천된 경로들은 ... {"\uD83D\uDDFA"}</text>
      </div>
      <div className="container">
        <div className="section">
          <Option
            duration={duration}
            label="선택 1"
            checked={selectedOption === "선택 1"}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="section" id="mid">
          <Option
            duration={duration}
            label="선택 2"
            checked={selectedOption === "선택 2"}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="section">
          <Option
            duration={duration}
            label="선택 3"
            checked={selectedOption === "선택 3"}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowOptions;
