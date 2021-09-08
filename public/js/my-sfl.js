//我的丝芙兰左侧导航栏
	document.querySelector('.myaddress-sephora').onclick = function(e) {
		if(e.target.classList.contains('myaddress-sephora-menu-title'))
			subShow(e.target);
	};
	function subShow(target) {
		target.parentNode.querySelector('.address-sub').classList.toggle('active');
	}
	