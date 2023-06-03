import React, { useEffect } from "react";

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    // 지도 객체 생성
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    // 현재 위치 마커로 표시
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(33.450701, 126.570667),
    });
    marker.setMap(map);
  }, []);

  return <div id="map"></div>;
}

export default KakaoMap;
