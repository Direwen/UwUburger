// AOS animation initialization

AOS.init();

// Loading

  var loader ;


  function loadNow(opacity){
    if(opacity<=0){
      displayContent();
    }
    else{
      loader.style.opacity=opacity;
      window.setTimeout(function()
      {
        loadNow(opacity - 0.05)
      },100);

    }
  }
////////////
function displayContent() {

  loader.style.display='none';

  document.getElementById('main-body-container').style.display='block';
}


document.addEventListener("DOMContentLoaded",function()
{
  loader=document.getElementById('loader');
  loadNow(1.1);
});

//slider

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

let slider = document.querySelector('.swiper-container');
let seemoreDiv = document.querySelector('.seemore');

function seemoreOpen(){
  seemoreDiv.style.marginTop = "-2px";
  
}

function seemoreClose(){
  seemoreDiv.style.marginTop = "-20px";
}

// //Earth cursor effect
const earth = document.querySelector('.earth');
const map = document.querySelector('.map');

//Moving animation
map.addEventListener('mousemove', (e)=>{
  let xAxis = (window.innerWidth /2 - e.pageX) /6;
  let yAxis = (window.innerHeight /2 - e.pageY) /6;
  earth.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;  
});

//ANimate in
map.addEventListener('mouseenter', e=>{
  earth.style.transition = "all .4s ease";
});

//animate out

map.addEventListener('mouseleave', e=>{
  earth.style.transition = "all .4s ease";
  earth.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

let order_link = document.getElementById('order-link');
let order_container_home = document.querySelector('#order-container');

order_link.addEventListener('click', function(){
  // alert('kfoas');
  order_container_home.style.display = `block`;
  order_container_home.style.opacity = 1;
})

  let form1 = document.querySelector('#order-container #form1');
  let form2 = document.querySelector('#order-container #form2');
  let btn1 = document.querySelector('#order-container .btn1');
  let btn2 = document.querySelector('#order-container .btn2');
  let btn3 = document.querySelector('#order-container .btn3');
  let order_container = document.querySelector('.order-container');
  // let ico = document.querySelector('.order-icon');
  let x = document.querySelector('#order-container .x');
  let progressing1 = document.querySelector('#order-container .ichi .progressing');
  let progressing2 = document.querySelector('#order-container .ni .progressing');
  let progressing3 = document.querySelector('#order-container .san .progressing');

btn1.addEventListener('click',function(){
    
    form1.style.display = "none";
    form1.style.opacity = 0;
    // // address.style.animation = `anime1 .5s forwards`;
    // document.querySelector('.progress-col:nth-child(2)').style.backgroundColor=`var(--green2)`;
    // progressing1.style.animation = `anime1 .5s forwards`;
  })  


  x.addEventListener('click', function(){
    
    order_container.style.display = `none`;
    progressing1.style.animation = `anime2 .5s forwards`;
    progressing2.style.animation = `anime2 .5s forwards`;
    progressing3.style.animation = `anime2 .5s forwards`;
    form2.style.display = "none";
    form2.style.opacity = 0;
    form3.style.display = "none";
    form3.style.opacity = 0;
    form1.style.display = "block";
    form1.style.opacity = 1;
    document.querySelector('.progress-col:nth-child(3)').style.backgroundColor=`var(--primary-light)`;
    document.querySelector('.progress-col:nth-child(2)').style.backgroundColor=`var(--primary-light)`;
  })

  function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    },500);
}





