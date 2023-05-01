let link = document.getElementsByClassName("link");
let currentValue = 1;
function activeLink(){
	for(l of link){
		l.classList.remove("active");
	}
	event.target.classList.add("active");
	currentValue = event.target.value;
}
function backBtn(){
	// Find the current active link
	var currentLink = document.querySelector('.pagination .link.active');

	// Get the value of the next link
	var previousLink = currentLink.previousElementSibling;
  
	// If there is a next link, go to its href value
	if (previousLink) {
	  window.location.href = previousLink.querySelector('a').href;
	}
}
function nextBtn(){

	// Find the current active link
	var currentLink = document.querySelector('.pagination .link.active');

	// Get the value of the next link
	var nextLink = currentLink.nextElementSibling;
  
	// If there is a next link, go to its href value
	if (nextLink) {
	  window.location.href = nextLink.querySelector('a').href;
	}
}