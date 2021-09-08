//搜索栏输入框默认文字切换
(function() {
	var searchInputDefaultText = [
		'七夕爱礼速达',
		'香氛不拘一格'
	];
	var index = 0, timer = null;
	var searchInput = document.querySelector('.search-btn-wrapper>input');
	// console.log(searchInput);
	function textToggle() {
		searchInput.placeholder = searchInputDefaultText[index];
		index = (index + 1) % searchInputDefaultText.length;
	}
	timer = setInterval(textToggle,3000);
	searchInput.onfocus = function() {
		clearInterval(timer);
		timer = null;
		searchInput.placeholder = "";
	};
	searchInput.onblur = function() {
		timer = setInterval(textToggle,3000);
	}
})();







