(function() {
	// 输入框样式
	var iconClears = document.querySelectorAll('.clear-icon');
	var inputItems = document.querySelectorAll('.input-item>input');
	
	for(var i = 0; i < inputItems.length; i++) {
		inputItems[i].onfocus = function(e) {
			this.parentNode.classList.add('active');
			this.parentNode.querySelector('.clear-icon').classList.add('clear-show');
			this.parentNode.querySelector('.clear-icon').classList.remove('error');
			this.parentNode.querySelector('.clear-icon').classList.remove('clear-yes');
			document.querySelector('.login-tips').classList.remove('active');
			document.querySelector(".input-name").parentNode.style.borderBottom = "";
			document.querySelector(".input-pwd").parentNode.style.borderBottom = "";
			//点击 × 清空input
			var that = this;
			this.parentNode.querySelector('.clear-icon').onclick = function() {
				that.value = "";
			}
			// e.stopPropagation();
		};
		inputItems[i].onblur = function() {
			this.parentNode.classList.remove('active');
			this.parentNode.querySelector('.clear-icon').classList.remove('clear-show');
		};
	}	
	//输入值激活登录按钮
	for(var i = 0; i < inputItems.length; i++) {
		inputItems[i].oninput = function() {
			var name = document.querySelector(".input-name").value;
			var pwd = document.querySelector('.input-pwd').value;
			var btnLogin = document.querySelector('.btn-login');
			if(document.querySelector('.agree-check').checked === false) return;
			if(name === "" || pwd === "") {
				btnLogin.disabled = true;
			}else {
				btnLogin.disabled = false;
			}
			if(!btnLogin.disabled) {
				btnLogin.classList.add('btn-login-black');
			}else {
				btnLogin.classList.remove('btn-login-black');
			}
		};
	}
	// 同意政策激活按钮
	document.querySelector('.agree-check').onchange = function() {
		var btnLogin = document.querySelector('.btn-login');
		btnLogin.disabled = !this.checked;
	};
	// 按钮悬停变色
	var btnLogin = document.querySelector('.btn-login');
	btnLogin.onmouseover = function() {
		if(!btnLogin.disabled) {
			btnLogin.classList.add('btn-login-red');
		}
	};
	btnLogin.onmouseout = function() {
		btnLogin.classList.remove('btn-login-red');
	};
	//登录验证
	btnLogin.onclick = function() {
		var name = document.querySelector(".input-name").value;
		var pwd = document.querySelector('.input-pwd').value;
		if(name !== Cookies.get('userPhone')) {
			document.querySelector('.login-tips').innerText = '请填写邮箱或手机';
			document.querySelector('.login-tips').classList.add('active');
			document.querySelector(".input-name").parentNode.querySelector('.clear-icon').classList.add('error');
		}else if(pwd !== Cookies.get('userPwd')) {
			document.querySelector('.login-tips').innerText = '账户名与密码不匹配,请重新输入';
			document.querySelector('.login-tips').classList.add('active');
			document.querySelector(".input-name").parentNode.querySelector('.clear-icon').classList.add('clear-yes');
			document.querySelector(".input-name").parentNode.style.borderBottom = "1px solid green";
			document.querySelector(".input-pwd").parentNode.querySelector('.clear-icon').classList.add('error');
			document.querySelector(".input-pwd").parentNode.style.borderBottom = "1px solid red";
		}
		// 登录跳转
		if(name === Cookies.get('userPhone') && pwd === Cookies.get('userPwd')) {
			Cookies.set('username','张三');
			var referrerRegister = document.referrer === Cookies.get('registerHref');
			var referrer = ( document.referrer === window.location.href || referrerRegister )? '../home/index.html' : document.referrer;
			window.location.replace(referrer);
		}
	};
})();