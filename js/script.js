const burger = document.querySelector('#burger'),
    header = document.querySelector('.header'),
    overlay = document.querySelector('.header_overlay'),
    item1 = document.querySelector('.item1'),
    item2 = document.querySelector('.item2'),
    item3 = document.querySelector('.item3'),
    item4 = document.querySelector('.item4'),
    item5 = document.querySelector('.media__a'),
    item6 = document.querySelector('.media__Btn'),
    item7 = document.querySelector('.item5')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})
overlay.addEventListener('click', function () {
    header.classList.toggle('open')
})

// banner change
let image = document.getElementById('img'),
    images = ['./img/banner-1.jpg','./img/banner-2.jpg','./img/banner-3.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random() * 3)
    image.src = images[random]
}, 2000)

// chefs img change
let chImage = document.getElementById('chefs__img'),
    chImages = ['./img/chef-1.jpg','./img/chef-2.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random() * 2)
    chImage.src = chImages[random]
}, 2000)

// awards img change
let awImage = document.getElementById('awards__img'),
    awImages = ['./img/awards-1.jpg','./img/awards-2.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random() * 2)
    awImage.src = awImages[random]
}, 2000)

// banner3 img change
let bImage = document.getElementById('banner3__img'),
    bImages = ['./img/banner3.jpg','./img/banner3-1.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random() * 2)
    bImage.src = bImages[random]
}, 2500)