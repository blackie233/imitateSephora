(function() {
	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}
	var index = 0;
	document.querySelectorAll('.my-order-item').forEach(function(item,i) {
		item.onclick = function(){
			document.querySelectorAll('.my-order-item').forEach(function(item) {
				item.classList.remove('active');
			});
			this.classList.add('active');
			index = parseInt(this.dataset.id);
			var parts = document.querySelectorAll('.order-item');
			parts.forEach(function(item,i) {
				item.classList.remove('active');
			});
			if(index === 0) {
				parts[0].classList.add('active');
				return;
			}
			parts[1].classList.add('active');
		}
	});
	
	
	
	
	
	
	
	
})();