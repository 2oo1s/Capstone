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

      const center = getCenter(bounds);

      const options = {
        center: center,
        level: 9,
      };

      const map = new kakao.maps.Map(container, options);

      const overlays = [];

      props.responseData.forEach((place, index) => {
        const latitude = place.latitude;
        const longitude = place.longitude;

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(latitude, longitude),
        });

        marker.setMap(map);

        // 장소명 오버레이
        const overlayContent = `<div class="overlay">${place.title}</div>`;
        const overlayPosition = marker.getPosition();

        const overlay = new kakao.maps.CustomOverlay({
          content: overlayContent,
          position: overlayPosition,
          yAnchor: 2.5,
          map: map, // 오버레이를 지도에 표시
        });

        overlays.push(overlay);

        kakao.maps.event.addListener(marker, "click", function () {
          bringOverlayToFront(overlay);
        });
      });

      function bringOverlayToFront(clickedOverlay) {
        overlays.forEach((overlay) => {
          if (overlay === clickedOverlay) {
            overlay.setZIndex(1);
          } else {
            overlay.setZIndex(0);
          }
        });
      }
    }
  }, [props.responseData]);

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
