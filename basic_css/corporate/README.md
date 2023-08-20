# 주요 내용

## 그래프로 한눈에 보기 쉬운 데이터 만들기

자바스크립트 라이브러리를 통해서 웹 페이지에 필요한 여러 그래프를 그릴 수 있습니다.

- Chartist.js
  - 적용하는 법
    - Chartist.js의 본체가 되는 js파일을 간단히 html script태그로 불러올 수 있습니다. 추가로 미리 준비된 css파일을 포함해서 기본적으로 스타일이 적용된 그래프를 그릴 수 있습니다.
      ```jsx
      <!DOCTYPE html>
      <html lang="ko">
          <head>
      			...

          <!-- CSS -->
              ...
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
              <link href="css/style.css" rel="stylesheet">
          </head>

      	<body>
          <!-- Chartist -->
              <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
              <script src="js/script.js"></script>
      	</body>
      </html>
      ```
  - html 작성
    그래프를 표시하기 위해서는 html에 공간 요소를 추가하면 됩니다.
    ```jsx
    <div class="home-chart">
      <div class="pie-chart"></div>
    </div>
    ```
  - js 작성
    그래프를 구성할 때는 그래프에 들어갈 데이터와 어떤 그래프로 표시할 것인지 정해야 합니다.
    원 그래프를 예시로 살펴보면 Chartist.js는 그래프 데이터와 그래프 option값을 다음과 같이 정할 수 있습니다.
    ```jsx
    // PIE CHART
    var pieData = {
      labels: ["웹디자이너", "웹개발자", "서버 엔지니어", "영업직"],
      series: [14, 9, 8, 6],
    };

    var pieOptions = {
      width: "100%",
      height: "440px",
    };

    new Chartist.Pie(".pie-chart", pieData, pieOptions);
    ```
- Chart.js
  그래프 작성용 자바스크립트 라이브러리로 막대그래프, 원그래프, 꺽인선 그래프 등 다양한 종류를 제공하며, 반응형 웹사이트에서도 사용이 가능합니다. 또한 애니메이션 적용도 가능합니다.
- Frappe Charts

## flex를 이용해 요소를 나란히 배치하기

데모 사이트의 경우, 그래프와 텍스트를 옆으로 나란히 배치했습니다. 이렇게 1차원 레이아웃에 쓸 수 있는 css 속성으로 `display: flex`가 있습니다.

또한 `flex-direction: row-reverse`와 같은 속성을 통해서 배치된 요소들이 모두 같은 순서로 있는 것이 아닌, 역순으로 바꿀 수 있습니다.

- html은 콘텐츠 구조를 결정하기 위한 언어입니다. html 요소 자체의 순서를 바꿔서 표현할 수 있지만, 제대로 된 HTML 구조를 설계하는 것이 더 중요하기 때문에 현재 예시에서처럼 제목과 본문, 그리고 본문을 설명하는 이미지가 있는 흐름으로 정하고 css를 통해서 위치를 바꾸는 것이 좋습니다.

```jsx
<section class="wrapper content">
  <div class="home-text">
    <h2 class="title">당신의 생활 방식에 맞는 스타일로 일할 수 있습니다.</h2>
    <p>
      자사는 도쿄, 오사카 등 각지에 사무실이 있으며 원격 근무도 가능합니다. 원격
      근무로 활약중인 사원은 전체 약 1/3로, 매년 증가하고 있습니다. 재택, 공유
      사무실 등 당신이 가장 집중할 수 있는 곳에서 근무하기 바랍니다.
    </p>
  </div>
  <div class="home-chart">
    <div class="bar-chart"></div>
    <p>원격 근무 사원 수 추이</p>
  </div>
</section>
```

```css
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 1rem;
}

.flex-reverse {
  flex-direction: row-reverse;
}
```

## 폼 구성하기

### 체크박스

체크 박스를 구성할 때, <label>태그로 감싸게 되면 따로 for속성이나 id속성을 설정하지 않아도 <label>태그 내 텍스트까지 클릭할 수 있는 범위가 됩니다.

```html
<label>
  <input type="checkbox" />
  <span>도쿄</span>
</label>
```

### 속성 셀렉터

- 요소명[속성명=”속성 값”]
  해당 속성 값을 가진 요소에 스타일을 적용합니다.
  ```html
  input[type="email"] { background: pink; }
  ```
- 요소명[속성명~=”속성 값”]
  여러 속성 값 중 해당 속성 값을 포함하는 요소에 스타일을 적용합니다.
  ```html
  <li class="pink list">목록 아이템 pink, list</li>
  <li class="pink">목록 아이템 pink</li>
  <li class="list">목록 아이템 list</li>
  ```
  ```html
  li[class~="pink"] { background: pink; /* pink 클래스를 갖는 모든 요소에
  적용됩니다. */ }
  ```
  만약, `li[class="pink"]`라고 했다면 `<li class="pink">목록 아이템 pink</li>` 요소에만 스타일이 적용됩니다.
- 요소명[속성명|=”속성 값”]
  해당 속성 값과 일치하거나 하이픈(-)으로 연결된 경우 하이픈 이전에 값이 해당 속성 값과 일치하는 요소에 스타일을 적용합니다.
  ```html
  <li class="list">목록 아이템 list</li>
  <li class="list-a">목록 아이템 list-a</li>
  <li class="item">목록 아이템 item</li>
  ```
  ```html
  li[class|="list"] { background: pink; /* list, list-a 요소에 스타일이
  적용됩니다. */ }
  ```
- 요소명[속성명^=”속성 값”]
  해당 값으로 시작하는 속성 값을 가진 요소에 대해 스타일을 적용합니다.
  ```html
  <a href="index.html">동일 웹사이트 내 링크</a>
  <a href="http://example.com">외부 링크(http)</a>
  <a href="https://example.com">외부 링크(https)</a>
  ```
  ```html
  a[href^="http"] { background: pink; /* http, https 요소에 스타일이 적용됩니다.
  */ }
  ```
  위 예시에서는 href속성에 대해서 http로 시작하는 모든 요소(http, https)에 대해서 배경색이 pink로 설정됩니다.
- 요소명[속성명$=”속성 값”]
  해당 값으로 끝나는 속성 값을 가진 요소에 대해 스타일을 적용합니다. 주로 파일 확장자명에 따라 다른 스타일을 적용할 때 사용됩니다.
  ```html
  <a href="index.html">동일 웹사이트 내 링크</a>
  <a href="http://example.com">외부 링크(http)</a>
  <a href="example-file.pdf">PDF 파일</a>
  ```
  ```html
  a[href$="pdf"] { background: pink; }
  ```
- 요소명[속성명*=”속성 값”]
  해당 값을 포함하는 속성 값을 가진 모든 요소에 대해 스타일을 적용합니다. 특정 URL, 클래스명이 있으면 이를 포함한 전체 아이콘을 적용하는 등 여러 가지로 활용할 수 있습니다.
  ```html
  <a href="index.html">동일 웹사이트 내 링크</a>
  <a href="https://twitter.com/webcreatorbox/">웹 크리에이터 박스의 트위터</a>
  <a href="https://twitter.com/chibimana">개인용 트위터</a>
  ```
  ```html
  a[href*="twitter"] { background: pink; }
  ```

[출처 - 완성된 웹사이트로 배우는 HTML&CSS 웹 디자인]
