function openNav(){
	document.getElementById("navOverlay").style.height = "100%";
	document.getElementById("menubtn").style.visibility="hidden";
	document.getElementById("menu").style.visibility="hidden";
}

function closeNav(){
	document.getElementById("navOverlay").style.height = "0%";
	document.getElementById("menubtn").style.visibility="visible";
	document.getElementById("menu").style.visibility="visible";
}

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
		document.getElementsByClassName("menu").style.visibility="hidden";
   } else {
		document.getElementsByClassName("menu").style.visibility="visible";
   }
   lastScrollTop = st;
}, false);

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
