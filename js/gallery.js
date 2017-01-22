$(document).ready(start);

function start(){
	resizeImage();
	$(window).resize(resizeImage);
}

function resizeImage() {
	$(".imageDiv, .imageHoverDiv").height($(".imageDiv").width());
}
