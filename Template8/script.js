// SLIDE CONTROLS SCRIPT BELOW //
var c1 = document.getElementsByClassName('c1');
for(var i = 0; i < c1.length; i++){
    c1[i].addEventListener('click', function(){
        fun();// active class remover function.
        this.classList.add('active');
    });
}

function fun(){ //active class remover function.
    for(var i = 0;i < c1.length; i++){
        c1[i].classList.remove('active');
    }
}

    // setInterval(() => {
    //     var offset = window.pageYOffset;
    // if(offset >= 0 && offset <= 560){
    //     var active = c1[0];
    //     fun(active);
    // }else if(offset >= 560 && offset <= 560*2){
    //     var active = c1[1];
    //     fun(active);
    // }else if(offset >= 560*2 && offset <= 560*3){
    //     var active = c1[2];
    //     fun(active);
    // }else if(offset >= 560*3 && offset <= 560*4){
    //     var active = c1[3];
    //     fun(active);
    // }else if(offset >= 560*4){
    //     var active = c1[4];
    //     fun(active);
    // }
    // },100);

// SLIDE CONTROLS SCRIPT ENDS HERE //
var for_slide_control = document.getElementsByClassName('for-slide-control')[0];
var total = for_slide_control.children.length;
var for_slide = document.getElementsByClassName('for-slide')[0];


for_slide_control.children[0].addEventListener('click',function(){
    active();   //heigh-light class remover function.
    this.classList.add('heigh-light');
    for_slide.style.left = '0%';
});
for_slide_control.children[1].addEventListener('click',function(){
    active();   //heigh-light class remover function.
    this.classList.add('heigh-light');
    for_slide.style.left = '-100%';
});
for_slide_control.children[2].addEventListener('click',function(){
    active();   //heigh-light class remover function.
    this.classList.add('heigh-light');
    for_slide.style.left = -200 +(100/3) + '%';
});

function active(){  //heigh-light class remover function.
    for(var i = 0; i < total; i++){
        for_slide_control.children[i].classList.remove('heigh-light');
    }
}

setInterval(slide,5000);
var position = 0;
function slide(){
    position = position - 100/3;
    if(position <= -200){
        position = 0;
    }
    for_slide.style.left = position + '%';

    // if(position <= 0 && position >= -100){
    //     active();   //heigh-light class remover function.
    //     for_slide_control.children[0].classList.add('heigh-light');
    // }else if(position <= -100 && position >= -200){
    //     active();   //heigh-light class remover function.
    //     for_slide_control.children[1].classList.add('heigh-light');
    // }else if(position <= -200){
    //     active();   //heigh-light class remover function.
    //     for_slide_control.children[2].classList.add('heigh-light');
    // }
}

var year_controler = document.getElementsByClassName('year-controlers')[0];
var year_cards = document.getElementsByClassName('year-cards')[0];

function heigh_light_year(){    //heigh-light-year class remover function.
    for(var i = 0; i < year_controler.children.length; i++){
        year_controler.children[i].classList.remove('heigh-light-year');
    }
}

function show_year(){   //show-year class remover function.
    for(var i = 0; i < year_cards.children.length; i++){
        year_cards.children[i].classList.remove('show-year');
    }
}

//BELOW SHORT CODE IS NOT WORKING BECAUSE TIMING ISSUE...

// for(var i = 0; i < 4; i++){
//     year_controler.children[i].addEventListener('click',function(){
//         heigh_light_year(); //heigh-light-year class remover function.
//         this.classList.add('heigh-light-year');
//         show_year();    //show-year class remover function.
//         year_cards.children[i].classList.add('show-year');
//     });
// }

year_controler.children[0].addEventListener('click',function(){
    heigh_light_year(); //heigh-light-year class remover function.
    this.classList.add('heigh-light-year');
    show_year();    //show-year class remover function.
    year_cards.children[0].classList.add('show-year');
});
year_controler.children[1].addEventListener('click',function(){
    heigh_light_year(); //heigh-light-year class remover function.
    this.classList.add('heigh-light-year');
    show_year();    //show-year class remover function.
    year_cards.children[1].classList.add('show-year');
});
year_controler.children[2].addEventListener('click',function(){
    heigh_light_year(); //heigh-light-year class remover function.
    this.classList.add('heigh-light-year');
    show_year();    //show-year class remover function.
    year_cards.children[2].classList.add('show-year');
});
year_controler.children[3].addEventListener('click',function(){
    heigh_light_year(); //heigh-light-year class remover function.
    this.classList.add('heigh-light-year');
    show_year();    //show-year class remover function.
    year_cards.children[3].classList.add('show-year');
});