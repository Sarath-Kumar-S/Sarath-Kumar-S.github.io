

  let contactInfo=firebase.database().ref("infos");
$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'

});

let hamberger = document.querySelector('.hamberger');
let times= document.querySelector('.times');
let mobilenav= document.querySelector('.mobile-nav');
hamberger.addEventListener('click',function(){

mobilenav.classList.add('open');

});
times.addEventListener('click',function(){
  mobilenav.classList.remove('open');  

});



});
const card=document.querySelector('.aboutcard');
const container=document.querySelector('.container_card');
const title=document.querySelector('.abouttitle');
const sneaker=document.querySelector('.aboutsneaker img');
const purchase=document.querySelector('.aboutpurchase button');
const description=document.querySelector('.aboutinfo h3');
const sizes=document.querySelector('.aboutsizes');
const sizebutton=document.querySelector(".aboutsizes button");
container.addEventListener("mousemove", (e) =>{
    let xAxis=(window.innerWidth/2 - e.pageX)/75;
    let yAxis=(window.innerHeight/2 - e.pageY)/75;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter",(e)=>{
    card.style.transition='0.3s all ease';
    title.style.transform='translateZ(80px)';
    sneaker.style.transform='translateZ(70px) rotateZ(10deg)';
    description.style.transform='translateZ(60px)';
    purchase.style.transform='translateZ(50px)';
    sizes.style.transform='translateZ(60px)';
    card.style.boxShadow = '0 20px 20px rgba(72, 149, 238, 0.623) ,0px 0px 50px rgba(5, 54, 160, 0.2)';
});
container.addEventListener("mouseleave",(e)=>{
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    card.style.transition='0.5s all ease';
    sneaker.style.transform='translateZ(0px) rotateZ(0deg)';
    title.style.transform='translateZ(0)';
    purchase.style.transform='translateZ(0px)';
    description.style.transform='translateZ(0px)';
    sizes.style.transform='translateZ(0px)';
    card.style.boxShadow = '0 20px 20px rgba(0,0,0,0.2) ,0px 0px 50px rgba(0,0,0,0.2)';
});

document.querySelector(".contact").addEventListener("btn btn-primary",submitForm);
function submitForm(e){
  e.preventDefault();

  let name=document.querySelector(".name").values;
  let email=document.querySelector(".email").values;
  let message=document.querySelector(".message").values;
  console.log(name,email,message);

  saveContactInfo(name,email,message);
  document.querySelector(".contact").reset();

}

function  saveContactInfo(name,email,message){

  let newContactInfo=contactInfo.push();


  newContactInfo.set({
   username:name,
    email:email,
    message:message,



  });
}