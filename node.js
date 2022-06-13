let btn = document.getElementById('btn');
let img = document.getElementById('img');
let head = document.getElementById('header');
let banner = document.getElementById('banner')
let para = document.getElementById('para');
let heading = document.getElementById('heading');
let para1 = document.getElementById('para1')
let footer = document.getElementById('footer')

img.addEventListener('click', toggleimage);

function toggleimage(e) {
    if (img.src.match('/light-mode.svg')) {
        img.src = '/dark-mode.svg'
        head.style.backgroundColor = '#333333'
        banner.style.backgroundColor = 'white'
        para.style.color = 'black'
        heading.style.color = 'black'
        para1.style.color = 'black'
        footer.style.backgroundColor = '#333333'
    } else {
        img.src = '/light-mode.svg'
        head.style.backgroundColor = '#233056';
        banner.style.backgroundColor = 'black'
        footer.style.backgroundColor = '#233056'
        para.style.color = 'white'
        heading.style.color = 'white'
        para1.style.color = 'white'
    }
}