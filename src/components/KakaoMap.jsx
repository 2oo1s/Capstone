import React, { useEffect } from "react";

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    // 현재 위치 정보 받기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // 현재 위치 정보로 지도 정보 받기
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 4,
        };

        // 지도 객체 생성
        const container = document.getElementById("map");
        const map = new kakao.maps.Map(container, options);

        // 현재 위치 마커로 표시
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(latitude, longitude),
        });
        marker.setMap(map);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return <div id="map"></div>;
}

export default KakaoMap