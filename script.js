function openNav(){
	document.getElementById("navOverlay").style.height = "100%";
	document.getElementById("menu").style.height="0%";
}

function closeNav(){
	document.getElementById("navOverlay").style.height = "0%";
	document.getElementById("menu").style.height="5%";
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
			document.getElementById("menu").style.height="5%";
        }

    }

document.getElementById("name").children[0].className +=" load";