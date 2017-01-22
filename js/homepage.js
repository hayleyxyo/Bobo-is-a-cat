$(document).ready(start);

var timeOut = false;

function start() {
	$(".sideBar").click(sideBarButton);
	$(".sideBar a").click(scrollDownToPage);
	$(".sideBar").mouseleave(hideSideBar)
}

function sideBarButton(event) {
	event.preventDefault();
	hideSideBar();
	$(this).addClass("open", 1000);
	}


	// $(".sideBar").removeClass("open");
	// $(this).toggleClass("open", 1000);
	// $(this.children[0]).toggleClass("open");

	// if (!timeOut) {
	// 	timeOut = window.setTimeout(function() {
	// 		timeOut = null;
	// 		$(this).toggleClass("open", 1000);
	// 		$(this.children[0]).toggleClass("open");
	// 	}, 1000);
	// }

function hideSideBar() {
	$(".sideBar").removeClass("open");
}

function scrollDownToPage() {
	var goTo = $($(this).attr('href'));
	var offset = goTo.offset();
	$("body").animate({scrollTop:goTo.offset().top}, 1000);
	$(".sideBar").removeClass("open");
	$(".sideBar i").removeClass("open");
}
