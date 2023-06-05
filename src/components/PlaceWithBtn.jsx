import React from "react";

function PlaceWithBtn() {
  return (
    <div className="PlaceWithBtn">
        <div>
            <button id="modify">재추천</button>
            <button id="delete">삭제</button>
        </div>
      <div id="image">
      
      </div>
      <div className="placeinfo">
        <div id="name"></div>
        <div id="address"></div>
      </div>
    </div>
  );
}

export default PlaceWithBtn;
