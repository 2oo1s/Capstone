import React, { useEffect, useState } from "react";
import axios from "axios";

function Place({ kakaoId }) {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.209.235.204:8000/place_info/${kakaoId}`
        );
        setThumbnail(response.data.thumbnail);
        setTitle(response.data.title);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [kakaoId]);

  return (
    <div className="Place">
      <div id="image">
        <img src={thumbnail} alt="no Img" />
      </div>
      <div id="name">{title}</div>
    </div>
  );
}

export default Place;
