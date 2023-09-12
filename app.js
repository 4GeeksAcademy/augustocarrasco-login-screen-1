const start = document.getElementsByClassName('start1');
const submit = document.getElementsByClassName('submit1');
const rect1 = document.getElementsByClassName('rect1');
const rect2 = document.getElementsByClassName('rect2');
const rect5 = document.getElementsByClassName('rect5');
const rect6 = document.getElementsByClassName('rect6');

const card1 = document.getElementsByClassName('card1');
const card2 = document.getElementsByClassName('card2');
const welcome = document.getElementsByClassName('welcome');
const circle = document.getElementsByClassName('movingcircle')
const img1 = document.getElementsByClassName('img1')
const img2 = document.getElementsByClassName('img2')


start[0].addEventListener('click',phase1);

function phase1(){
    rect1[0].classList.add('mdown');
    rect2[0].classList.add('mright');
    card1[0].classList.add('foutc1');
    card2[0].classList.add('finc22');
    img1[0].classList.add('img1an');
    img2[0].classList.add('img2an');
}

submit[0].addEventListener('click', phase2);

function phase2(){
    rect5[0].classList.add('mup');
    rect6[0].classList.add('mleft');
    card2[0].classList.add('finc222');
    var aux = document.getElementById('username').value;
    var name = 'Nameless User!'
    if (aux != '') name =aux;
    welcome[0].innerHTML = '<h3>Welcome back</h3><h3>'+name+'</h3>'
    welcome[0].classList.add('finw');
    circle[0].classList.add('movingcircleanimation');
    img1[0].classList.add('img1ran');
    
    
}

