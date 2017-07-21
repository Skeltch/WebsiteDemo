function openNav(){
	document.getElementById("navOverlay").style.height = "100%";
	document.getElementById("menu").style.height="0%";
}

function closeNav(){
	document.getElementById("navOverlay").style.height = "0%";
	document.getElementById("menu").style.height="1.5em";
}

//Probably get rid of this and add it for mobile instead
/*
var scrollableElement = document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

function findScrollDirectionOtherBrowsers(event){
	var delta;

	if (event.wheelDelta){
		delta = event.wheelDelta;
	}else{
		delta = -1 * event.deltaY;
	}

	if (delta < 0){
		console.log("DOWN");
		document.getElementById("menu").style.height="0%";
	}else if (delta > 0){
		console.log("UP");
		document.getElementById("menu").style.height="1.5em";
	}
}
*/
/*
$(document).on("scrollstart",function(){
	document.getElementById("menu").style.height="1.5em";
});
*/
/*

'<div class="slides">
  <div class="numbertext">' + i +' / ' + images.length + '</div>
	<img src=' + images[i] + ' style="width:100%">
</div>'
<a class="prev" onclick="changeSlides(-1)">&#10094;</a>
<a class="next" onclick="changeSlides(1)">&#10095;</a>
<div class="caption-container">
  <p id="caption"></p>
</div>
*/

function loadImages(){
	var allImages = "";
	var images=["Alonso.jpg", "BakuEdit.jpg", "gallery.jpg", "hamilton.gif", "Hamilton.jpg", "Hamilton2.jpg",
			"Hamilton3.jpg", "kitten1.jpeg", "kitten2.jpeg", "kitten3.jpeg", "kitten4.jpeg", "kitten5.jpeg", 
			"kitten6.jpeg", "P1.jpg", "P1Colored.jpg", "RalfSchumacher.jpg", "RedBull.jpg", "RedBullRain2.jpg",
			"RedBullRain3.jpg", "Rosberg.jpg", "Rosberg2.jpg", "Rosberg3.jpg"];
	for(var i=0; i<images.length; i++){
		allImages = '<div class="gallery"> <a onclick="openModal();currentSlide('+(i+1)+');"> <img src='+images[i]+' class="img" id="img" alt=""> </a> </div>';
		slideShow = '<div class="slides"> <div class="numbertext">' + (i+1) +' / ' + images.length + '</div> <img src=' + images[i] + ' class="modal-image""> </div>';
		//slideShow = '<div class="slides" style="background-image: url(Alonso.jpg); background: no-repeat center center fixed; background-size: cover; height: 80%;"> <div class="numbertext">' + i + ' / ' + images.length + '</div> </div>'; 
		$('#photos').append(allImages);
		$('.modal-content').append(slideShow);
	}
	$('.modal-content').append('<a class="prev" onclick="changeSlides(-1)">&#10094;</a> <a class="next" onclick="changeSlides(1)">&#10095;</a>');
	var images = $(".gallery");
	
	var loaded=0;
	images.each(function(index){
		var image=$(this);
		image.find(".img").on('load', function(){
			image.delay(index*50).animate({opacity: 1}, 'slow', function(){
				image.css('visibility','visible');
			});
		});
	});
	showSlides(slideIndex);
}

function openModal() {
  document.getElementById('modal').style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

var slideIndex = 1;
function changeSlides(n) {
  showSlides(slideIndex += n);
}

function changeSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}