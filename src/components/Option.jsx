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
              <Place />
              <Place />
              <Place />
            </div>
          </>
        ) : props.duration === 2 ? (
          <>
            <p>Day 1</p>
            <div className="summary">
              <Place />
              <Place />
              <Place />
            </div>
            <p>Day 2</p>
            <div className="summary">
              <Place />
              <Place />
              <Place />
            </div>
          </>
        ) : (
          <>
            <p>Day 1</p>
            <div className="summary">
              <Place />
              <Place />
              <Place />
            </div>
            <p>Day 2</p>
            <div className="summary">
              <Place />
              <Place />
              <Place />
            </div>
            <p>Day 3</p>
            <div className="summary">
              <Place />
              <Place />
              <Place />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Option;
