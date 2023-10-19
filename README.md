# Trip To Jeju 🍊

사용자가 예정된 여행에 대한 간단한 정보를 선택하면 그에 맞는 제주도 여행 경로 3가지를 추천해주는 프로그램입니다.

## 화면 구성

메인 화면, 정보 선택 화면, 추천된 3가지 여행 경로를 요약해서 보여주는 화면, 3가지 중 선택된 경로에 대한 전체 경로를 보여주는 화면
<br/>

-> 총 4페이지로 이루어져 있습니다.

### `Home page`

![localhost_3000_](https://github.com/2oo1s/Capstone-TripToJeju-Frontend/assets/90839206/b6be8796-0b13-4220-b6eb-1d5a5b94eab4)

### `CheckInfo page`

![localhost_3000_checkinfo](https://github.com/2oo1s/Capstone-TripToJeju-Frontend/assets/90839206/8a0b201b-08d9-4d25-9880-1a8e6f1e5b99)|![localhost_3000_ (3)](https://github.com/2oo1s/Capstone-TripToJeju-Frontend/assets/90839206/79646e27-9fe0-4976-80aa-3e35e4dadcfd)
--- | --- | 

좌측 사진은 정보 선택 전 화면, 우측 사진은 정보 선택 후 화면입니다.

### `ShowOptions page`

![localhost_3000_ (1)](https://github.com/2oo1s/Capstone-TripToJeju-Frontend/assets/90839206/fd282522-7067-4fe8-82ce-7176d1765ed6)

추천된 3가지 여행 경로를 요약해서 보여줍니다.
<br/>

하루 일정 중 3가지 장소를 랜덤으로 보여주며, 사용자가 3가지 선택지 중 마음에 드는 경로를 선택하면 해당 경로에 대한 전체 경로를 보여주는 화면으로 넘어가게 됩니다.

### `DetailRoute page`

![localhost_3000_details](https://github.com/2oo1s/Capstone-TripToJeju-Frontend/assets/90839206/b7277762-95bd-40b2-8a23-efff44d4fcba)

3가지 여행 경로 중 사용자가 선택한 경로에 대한 전체 경로를 보여줍니다.
<br/>

좌측 상단에는 날짜별로 일정을 확인할 수 있는 버튼이 있고, 중앙에는 예정된 여행에 대한 키워드가, 하단에는 날짜별 전체 일정이 보여집니다.
<br/>
우측에는 Kakaomap API를 사용하여 불러온 지도 위에 마커와 이동경로를 표시하여 사용자에게 경로를 가시적으로 제공합니다.
