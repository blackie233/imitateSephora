//头部公告滚动效果
(function() {
	var scrollDom = document.querySelector('.header-center>ul');
	var timer = null,
		index = 0,
		length = scrollDom.children.length;
	function noticeToggle() {
		index = (index + 1) % length;
		scrollDom.style.transitionDuration = "0.4s";
		scrollDom.style.top = `-${index}00%`;
		setTimeout(function() {
			if(index === length - 1) {
				scrollDom.style.transitionDuration = "0s";
				index = 0;
				scrollDom.style.top = `0%`;
			}
		},400);
	}
	document.querySelector('.header-center').onmouseover = function() {
		clearInterval(timer);
		timer = null;
	};
	document.querySelector('.header-center').onmouseout = function() {
		timer = setInterval(noticeToggle,3000);
	}
	timer = setInterval(noticeToggle,3000);
})();