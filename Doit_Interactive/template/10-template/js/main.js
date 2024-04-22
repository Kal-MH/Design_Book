const circle = document.querySelector('#circle');
const articles = document.querySelectorAll('article');

for(let el of articles) {
    el.addEventListener('mouseenter', function () {
        circle.style.animationPlayState = 'paused';
    })

    el.addEventListener('mouseleave', function () {
        circle.style.animationPlayState = 'running';
    })
}