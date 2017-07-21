function openModal() {
  document.getElementsByClassName('modal').style.display = "block";
}

function closeModal() {
  document.getElementsByClassName('modal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function changeSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}