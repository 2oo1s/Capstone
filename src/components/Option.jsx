import React from "react";
import Place from "./Place";

function Option(props) {
  return (
    <div>
      <div className="check">
        <input
          type="checkbox"
          id={props.label}
          checked={props.checked}
          onChange={() => props.onChange(props.label)}
        />
        {props.label}
      </div>
      <div>
        {props.duration === 1 ? (
          <>
            <p>Day 1</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[0]} />
              <Place kakaoId={props.placeArray[1]} />
              <Place kakaoId={props.placeArray[2]} />
            </div>
          </>
        ) : props.duration === 2 ? (
          <>
            <p>Day 1</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[0]} />
              <Place kakaoId={props.placeArray[1]} />
              <Place kakaoId={props.placeArray[2]} />
            </div>
            <p>Day 2</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[3]} />
              <Place kakaoId={props.placeArray[4]} />
              <Place kakaoId={props.placeArray[5]} />
            </div>
          </>
        ) : (
          <>
            <p>Day 1</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[0]} />
              <Place kakaoId={props.placeArray[1]} />
              <Place kakaoId={props.placeArray[2]} />
            </div>
            <p>Day 2</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[3]} />
              <Place kakaoId={props.placeArray[4]} />
              <Place kakaoId={props.placeArray[5]} />
            </div>
            <p>Day 3</p>
            <div className="summary">
              <Place kakaoId={props.placeArray[6]} />
              <Place kakaoId={props.placeArray[7]} />
              <Place kakaoId={props.placeArray[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Option;
