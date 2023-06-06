import React, { useEffect } from "react";

const { kakao } = window;

function KakaoMap(props) {
  useEffect(() => {
    const container = document.getElementById("map");

    if (props.responseData && Array.isArray(props.responseData)) {
      const markerPositions = props.responseData.map((item) => {
        const latitude = item.latitude;
        const longitude = item.longitude;
        return new kakao.maps.LatLng(latitude, longitude);
      });

      const bounds = new kakao.maps.LatLngBounds();
      markerPositions.forEach((position) => {
        bounds.extend(position);
      });

      // 계산한 중점을 좌표 중심으로 설정
      const center = getCenter(bounds);

      const options = {
        center: center,
        level: 10,
      };

      const map = new kakao.maps.Map(container, options);

      props.responseData.forEach((place, index) => {
        const latitude = place.latitude;
        const longitude = place.longitude;

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(latitude, longitude),
        });

        marker.setMap(map);
      });
    }
  }, [props.responseData]);

  // 표시한 장소들의 중심을 계산
  function getCenter(bounds) {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const centerLat = (ne.getLat() + sw.getLat()) / 2;
    const centerLng = (ne.getLng() + sw.getLng()) / 2;
    return new kakao.maps.LatLng(centerLat, centerLng);
  }

  return <div id="map"></div>;
}

export default KakaoMap;
