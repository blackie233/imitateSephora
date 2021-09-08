	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}