const items = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const close = aside.querySelector('span');

for (let el of items) {
  el.addEventListener('mouseenter', function () {
    el.querySelector('video').play();
  });

  el.addEventListener('mouseleave', function () {
    el.querySelector('video').pause();
  });

  el.addEventListener('click', function () {
    console.log('click');
    let tit = el.querySelector('h2').innerText;
    let txt = el.querySelector('p').innerText;
    let vidSrc = el.querySelector('video').getAttribute('src');

    aside.querySelector('h1').innerText = tit;
    aside.querySelector('p').innerText = txt;
    aside.querySelector('video').setAttribute('src', vidSrc);

    aside.querySelector('video').play();
    aside.classList.add('on');
  });

  close.addEventListener('click', function () {
    aside.classList.remove('on');
    aside.querySelector('video').pause();
  });
}
