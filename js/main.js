(function(){
	
	var dots = document.getElementsByClassName('dot');
	var img = document.getElementById("image-gallery");
	var counter = 0;
	var imgSrc = [ "./img/strawberry.jpg","http://bigironfarmshow.com/wp-content/uploads/2012/10/Pancakes.jpg", "http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg"];
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

})();