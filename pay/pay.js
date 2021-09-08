(function() {
	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}
	// 计时器
	// var specitifyTime = new Date(2021,0,1,0,0,0);
	// var oneHour = new Date(2021,0,1,2,0,0);
	var timer = null;
	// var diff =oneHour.getTime() - specitifyTime.getTime();
	// diff = Math.ceil(diff / 1000);
	var diff = 7200;
	function countDown(){
		var second = diff % 60;
		document.querySelector('.second').innerText = second;
		var minute = Math.floor(diff / 60 % 60);
		document.querySelector('.minute').innerText = minute;
		var hour = Math.floor(diff / 3600);
		document.querySelector('.hours').innerText = hour;
		diff -= 1;
		if(diff === 0) {
			clearInterval(timer);
			timer = null;
		}
	}
	timer = setInterval(function() {
		countDown();
	},1000);
	
	// 切换支付方式
	document.querySelector('.pay-method').onclick = function(e) {
		// console.log(e.target);
		if(e.target.classList.contains('pay-method-item'))
			payMethodToggle(e.target);
	};
	function payMethodToggle(target) {
		target.parentNode.querySelectorAll('.pay-method-item').forEach(function(item) {
			item.classList.remove('active');
		});
		target.classList.add("active");
		target.parentNode.parentNode.querySelectorAll('.pay-method-body>div').forEach(function(item,i) {
			item.classList.remove('active');
			if(i === parseInt(target.dataset.id)) item.classList.add('active');
			
			
		});
	}

})();