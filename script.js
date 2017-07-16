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
	var images=["Alonso.jpg", "BakuEdit.jpg", "gallery.jpg", "hamilton.gif", "Hamilton.jpg", "Hamilton2.jpg",
			"Hamilton3.jpg", "kitten1.jpeg", "kitten2.jpeg", "kitten3.jpeg", "kitten4.jpeg", "kitten5.jpeg", 
			"kitten6.jpeg", "P1.jpg", "P1Colored.jpg", "RalfSchumacher.jpg", "RedBull.jpg", "RedBullRain2.jpg",
			"RedBullRain3.jpg", "Rosberg.jpg", "Rosberg2.jpg", "Rosberg3.jpg"];
	for(var i=0; i<images.length; i++){
		allImages = '<div class="gallery"> <a target="_blank" href='+images[i]+'> <img src='+images[i]+' class="img" id="img" alt=""> </a> </div>';
		$('#photos').append(allImages);
	}
	var $images = $(".gallery");
	
	var loaded=0;
	$images.each(function(index){
		var image=$(this);
		image.find(".img").on('load', function(){
			loaded++;
			if(loaded==images.length/2){
				show();
			}
			//$(".gallery").fadeIn("slow");
			//$(".gallery").show();
		});
	});
}
function show(){
	$(".gallery").each(function(index){
		$(this).delay(index*50).animate({opacity: 1}, 'slow', function(){
			$(this).css('visibility','visible');
		});
	});
}