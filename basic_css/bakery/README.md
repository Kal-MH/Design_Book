# 중심 내용

1. 이미지를 전체 배경으로 사용
2. 아이콘 폰트 사용
3. 멋진 글꼴 사용
4. 미디어 쿼리로 스마트폰에도 대응 가능
5. 표시 영역으로 스크롤하며 이동

## 1단 레이아웃

단을 여러 개 사용하지 않고 하나의 단으로만 작성한 레이아웃을 1단 레이아웃이라고 합니다. 

1단으로 구성할 경우, 필요한 정보만 압축해서 정리할 수 있기 때문에 사용자에게 알리고 싶은 부분을 포인트로 전달할 수 있습니다. 단, 제공해야 하는 컨텐츠 수가 많다면 적합하지 않은 레이아웃입니다. 따라서, 쇼핑이나 갤러리 사이트 등 아이템 목록을 제공하거나 뉴스, 블로그 사이트의 경우 다단 레이아웃이 더 좋습니다.

## 배경으로 이미지를 사용하기

- background-image: url()
    - 이미지를 불러오기 위해 url 속성값을 지정합니다.
- background-size
    - cover : 화면의 비율을 유지한 채로 이미지를 가득 채웁니다.
- background-position
    - 배경으로 불러온 이미지의 위치를 조정합니다.
    - x, y축을 기준으로 상, 하, 좌, 우(top, bottom, left, right)를 지정할 수 있습니다.

## 반응형 웹 디자인

반응형 웹 디자인이란, 디바이스 화면 크기에 따라 웹 페이지를 다르게 표현하는 것을 말합니다. 웹 페이지의 콘텐츠 내용은 크게 바뀌지 않으면서 CSS를 이용해 각 디바이스에 최적의 표현 방법으로 바꿀 수 있습니다.

 반응형 웹 디자인을 사용하면 디바이스별로 HTML을 작성할 필요가 없고, CSS만으로 디자인을 수정하는 것이어서 웹 페이지 관리가 쉽습니다. 
하지만, 모든 디바이스 설정에 세세하게 맞추는 것은 어려운 일이고, 디자인에 대해 더 많은 전문 지식이 필요해 구현 자체의 난이도가 있습니다.

### viewport

디바이스 화면 크기를 의미합니다. viewport를 설정하지 않으면 스마트폰에서도 데스크톱 화면처럼 크게 나옵니다. 따라서 <head>태그 안에 <meta>를 이용해 가로 폭을 각 디바이스에 맞춰줍니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- width=device-width : 디바이스 가로 폭에 맞춥니다.
- initial-scale=1 : 페이지 확대 비율을 1로 설정합니다.

### 반응형 적용하기

1. <link>태그를 통해서 미디어 특성에 따라 원하는 CSS파일을 적용할 수 있습니다.
    
    ```html
    <link rel="stylesheet" href="desktop.css" media="(min-width: 701px)">
    <link rel="stylesheet" href="mobile.css" media="(max-width: 700px)">
    ```
    
2. @import를 이용해서 불러올 수 있습니다.
    
    다만 이 방법은 CSS파일을 불러오는 것으로 다른 방법보다 느리기 때문에 권장하지 않습니다.
    
    ```html
    @charset "UTF-8";
    @import url("mobile.css") (max-width: 700px);
    ```
    

### 미디어 특성

- width : 화면 가로 폭
- height: 화면 세로 폭
- aspect-ratio : 화면 너비와 높이의 비율
- orientation : 화면 방향, portrait(세로 방향), landscape(가로 방향)
- resolution: 디바이스 해상도

### 브레이크 포인트

미디어 쿼리를 사용해 디바이스별로 CSS를 적용할 때, 분기점을 브레이크 포인트라고 합니다. 예를 들어 min-width: 700px이라고 정의하면 700px이 브레이크 포인트입니다.

* 반응형 참고하기 좋은 웹사이트 : [rwdb](http://rwdb.kr/), [Media Queries](https://mediaqueri.es/)

## 스크롤을 이용해 빠르게 이동하기

CSS에 추가된 기능 스크롤 스냅을 이용하면 화면 중간에서 멈췄다가 빠르게 원하는 영역으로 이동할 수 있습니다. 스크롤 스냅을 이용하기 위해서는 다음 단계를 거쳐야 합니다.

1. 이동할 요소 전체를 부모 요소로 감쌉니다.
    
    ```html
    <div class="container">
          <section class="hero">...</section>
    			<section class="menu">...</section>
    			...
    </div>
    ```
    
2. 부모 요소 속성에 스크롤 스냅을 설정합니다.
    
    ```css
    .container {
      overflow: auto;
      height: 100vh;
      scroll-snap-type: y mandatory;
    }
    ```
    
    1. scroll-snap-type: y
        1. 세로 방향으로 스크롤할 때, 빠르게 넘기거나 멈출 수 있습니다.
    2. scroll-snap-type: x
        1. 가로 방향으로 스크롤할 때, 빠르게 넘기거나 멈출 수 있습니다.
        2. 모바일용 화면 구성에 적합합니다.
    3. scroll-snap-type: both
        1. 가로, 세로 모두 움직이면서 스크롤 움직임을 제어합니다.
    4. 스크롤 위치 조정하기 위한 추가 속성을 지정할 수도 있습니다.
        1. mandatory : 어느 지점에서든 다음 영역으로 빠르게 움직입니다.
        2. proximity : 경계선 근처로 움직였을 때만 스크롤되고 그렇지 않으면 중간 지점에서 멈춥니다,
3. 자식 요소에 스크롤 스냅 속성을 지정합니다.
    
    ```css
    section {
      height: 100vh;
      scroll-snap-align: start;
    	...
    }
    ```
    
    1. scroll-snap-align : start
        1. 영역 시작점에서 스크롤이 멈춥니다.
        2. 세로로 나열되어 있다면 상단에서, 가로로 나열된 스크롤이라면 좌측에서 멈춥니다.
    2. scroll-snap-align: end 
        1. 영역 끝점에서 스크롤이 멈춥니다.
        2. 세로로 나열되어 있다면 하단에서, 가로로 나열되어 있다면 우측에서 멈춥니다.
    3. scroll-snap-align: center
        1. 영역 중간 지점에서 스크롤이 멈춥니다.

[출처 - HTML&CSS 웹디자인]
