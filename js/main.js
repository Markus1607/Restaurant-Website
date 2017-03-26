var dots = document.getElementsByClassName('dot');
var img = document.getElementById("image-gallery");
var counter = 0;
var imgSrc = ["./img/salad.jpg", "./img/strawberry.jpg", "./img/choppingboard.jpg"];
var dot1 = dots[0];
var dot2 = dots[1];
var dot3 = dots[2];



setInterval(function(){
  img.src = imgSrc[counter];
  counter++;
  if(counter >= imgSrc.length){
    counter = 0;
  }
}, 2000);

dot1.addEventListener("click", function(){
    img.src = imgSrc[counter];
    counter++;
    if(counter >= imgSrc.length){
      counter = 0;
    }
})
