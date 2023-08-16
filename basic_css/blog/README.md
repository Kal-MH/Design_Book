# 미디어 쿼리

미디어 쿼리는 화면 가로 폭뿐만 아니라 높이 설정에도 사용할 수 있습니다. 예를 들어, 스마트폰을 옆으로 눕혔을 때, 화면 상단 헤더가 높으면 콘텐츠가 많이 가려져서 보기 어려워집니다.

스마트폰을 가로로 눕힌 화면 높이는 375px ~ 420px로 높이가 420px이하면 헤더를 줄이도록 설정하는 것이 좋습니다.

# 요소 꾸미기(제목, 이미지, 버튼)

### 밑줄

텍스트에 굵은 밑줄이 살짝 겹쳐 보이도록 하려면 CSS의 그라데이션 기능을 사용할 수 있습니다. 이 때, 밑줄은 컨텐츠 패딩 영역에 그려지기 때문에 padding-bottom을 사용하면 굵은 밑줄의 위치를 조정할 수 있습니다.

```css
h1 {
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
  display: inline-block;
  background-image: linear-gradient(transparent 50%, #ff6 50%);
  padding-bottom: 0.5rem;
}
```

### border-radius

border-radius는 요소 각 꼭짓점의 둥글기를 지정하는 속성입니다. 슬래시(/)로 구분해서 지정하면 타원의 원로를 따라서 둥근 모서리를 만들 수 있습니다.

```css
border-radius: 10px 20px 30px 40px / 5px 10px 50px 100px; /* 가로값 / 세로값 */
```

### CSS Shapes

CSS Shapes를 사용하면 원형, 다각형 또는 이미지 형태에 맞춰서 텍스트를 감싸듯이 배치할 수 있습니다.

```css
shape-outside: circle(); /* 원형 요소에 주어서 글자를 원형으로 감쌉니다.*/
```

### box-shadow

```css
box-shadow: 가로방향그림자위치 세로방향그림자위치 그림자흐릿한정도 그림자크기
  그림자색;
```

### 입체적 버튼

position:relative를 통해서 hover 이벤트에 버튼이 움직이는 거 같은 입체적인 동작을 줄 수 있습니다.

```css
.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  background-color: #5fb2c1;

  text-decoration: none;
  box-shadow: 0 3px #3b8a98;

  position: relative;
  top: -2px;
}

.btn:hover {
  box-shadow: 0 1px #3b8a98;
  top: -1px;
}
```

# 요소 꾸미기(목록)

번호 있는 목록의 경우, 커스텀을 위해서 counter-increment라는 것을 사용해볼 수 있습니다. counter-increment는 요소의 연속 값을 세는 속성으로 웹페이지에서 사용할 때마다 하나식 값이 늘어난 숫자를 얻을 수 있습니다.

```css
ol li {
  counter-increment: list;
  margin-bottom: 0.25rem;
  line-height: 1.25;
}

ol li::before {
  content: counter(list);
  color: #fff;
  background-color: #0bd;

  display: inline-block;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;

  line-height: 1.75;
  text-align: center;

  margin-right: 0.25rem;
  vertical-align: top;
}
```

임의의 카운터명과 함께 counter-increment 속성을 정하면 content에서 counter메서드를 통해서 값을 가져올 수 있습니다.

# 요소 꾸미기(인용문, 페이지네이션, 테두리)

### 인용문

인용문을 나타내기 위해서 가상 요소를 사용할 수 있습니다.

```css
... blockquote {
  position: relative;
  padding: 2rem;
}

blockquote::before,
blockquote::after {
  content: "";
  width: 40px;
  height: 40px;
  position: absolute;
}

blockquote::before {
  border-top: 2px solid #ccc;
  border-left: 2px solid #ccc;
  top: 0px;
  left: 0px;
}

blockquote::after {
  border-bottom: 2px solid #ccc;
  border-right: 2px solid #ccc;
  bottom: 0;
  right: 0;
}
```

가상요소에 크기를 주고 border에 색을 입혀서 인용문을 감싸는 듯이 효과를 줄 수 있습니다.

# 요소 꾸미기 (서브 메뉴, 푸터)

### 서브 메뉴

```css
<nav>
      <ul class="main-menu">
        <li><a href="#">홈</a></li>
        <li class="has-menu">
          <a href="#">서비스</a>
          <ul class="sub-menu">
            <li><a href="#">서비스 A</a></li>
            <li><a href="#">서비스 B</a></li>
            <li><a href="#">서비스 C</a></li>
          </ul>
        </li>
        <li><a href="#">회사개요</a></li>
        <li><a href="#">문의사항</a></li>
      </ul>
    </nav>
```

다음과 같이 임의로 .has-menu라는 클래스를 가진 요소 밑으로 서브 메뉴를 두는 예시를 구현해보겠습니다. 이 때, 호버 효과와 display:none 속성을 통해서 서브 메뉴를 사라졌다 다시 보이게 만들 수 있습니다.

```css
/* 서브 메뉴 */
.has-menu {
  position: relative;
}

.sub-menu {
  position: absolute;
  top: 4.5rem;
  left: 1rem;
}

.sub-menu a {
  margin: 1px;
  width: 180px;
  background: #666;
}

.has-menu .sub-menu {
  display: none;
}

.has-menu:hover .sub-menu {
  display: block;
}
```

### 푸터

콘텐츠 내용이 적어서 높이가 낮으면 푸터가 화면 중간에 나타날 수 있습니다.

이를 해결하기 위해 flex속성을 이용할 수 있습니다. flex는 flex-grow의 약자로 부모 요소에 공백이 있으면 자식 요소에 늘어나는 비율을 지정합니다. 이를 통해서 요소가 여백 부분까지 늘어나도록 비율을 지정해서 footer를 최하단에 고정시킵니다.

```css
body {
  color: #333;
  line-height: 1.6;
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
}

article {
  flex: 1;
  padding: 2rem;
}
```
