function openNav(){
	document.getElementById("navOverlay").style.height = "100%";
	document.getElementById("menu").style.height="0%";
}

function closeNav(){
	document.getElementById("navOverlay").style.height = "0%";
	document.getElementById("menu").style.height="1.5em";
}

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
function loadImages(){
	var allImages = "";
	
	for(var i=0; i<3; i++){
		allImages += `
			<div class="gallery" style="display: inline-block;">
		<a target="_blank" href="gallery.jpg">
			<img src="gallery.jpg" class="img" alt="">
		</a>
	</div>
	<div class="gallery" style="display: inline-block;">
		<a target="_blank" href="gallery.jpg">
			<img src="Hamilton.jpg" class="img" alt="">
		</a>
	</div>
	<div class="gallery" style="display: inline-block;">
		<a target="_blank" href="gallery.jpg">
			<img src="Hamilton3.jpg" class="img" alt="">
		</a>
	</div>
	<div class="gallery" style="display: inline-block;">
		<a target="_blank" href="gallery.jpg">
			<img src="Rosberg3.jpg" class="img" alt="">
		</a>
	</div>
	`
		//allImages += '<div class="gallery" style="display: inline-block;"> <a target="_blank" href="gallery.jpg"> <img src="gallery.jpg" class="img" alt=""> </a> </div>';
	}
	$('#photos').append(allImages);
}