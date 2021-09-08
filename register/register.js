var inputItems = document.querySelectorAll('.input-item>input');
for(var i = 0; i < inputItems.length; i++) {
	inputItems[i].onfocus = function(e) {
		this.parentNode.querySelector('.error-mropt').classList.remove('active');
		this.parentNode.querySelector('.clear-icon').classList.remove("error");
		this.parentNode.classList.add('active');
		this.parentNode.querySelector('.clear-icon').classList.add('clear-show');
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
var inputs = document.querySelectorAll('.input-item>input').value;
var phoneNum = document.querySelector('.phone-num');
var checkImg = document.querySelector('.checking-img');
var inputPwd = document.querySelector('.input-item>.input-pwd');
var inputPwdCon = document.querySelector('.input-pwd-confirm');
var btnCheck = document.querySelector('.btn-check');
var btnRegister = document.querySelector('.register-btn');
var check = '';
// 按钮改变颜色
btnCheck.onmouseover = function() {
	if(!btnCheck.disabled) {
		btnCheck.classList.add('btn-login-red');
	}
};
btnCheck.onmouseout = function() {
	btnCheck.classList.remove('btn-login-red');
};
btnRegister.onmouseover = function() {
	if(!btnRegister.disabled) {
		btnRegister.classList.add('btn-login-red');
	}
};
btnRegister.onmouseout = function() {
	btnRegister.classList.remove('btn-login-red');
};
// 激活按钮
var phone = "",pwd = "",pwdConfirm = "", msgProv = "";
inputItems.forEach(function(item) {
	item.oninput = debounce(function(e) {
		phone = document.querySelector(".phone-num").value;
		pwd = document.querySelector('.input-item>.input-pwd').value;
		pwdConfirm = document.querySelector('.input-pwd-confirm').value;
		msgProv = document.querySelector('.msg-prov').value;
		//激活获取验证码按钮
		if(item.classList.contains('checking-img')) {
			check = checkImg.value;
			if(check) {
				btnCheck.disabled = false;
			}else {
				btnCheck.disabled = true;
			}
			if(!btnCheck.disabled) {
				btnCheck.classList.add('btn-login-black');
			}
		}
		// 激活登录注册按钮
		if(phone === "" || pwd === "" || pwdConfirm === "" || msgProv === "") return;
		btnRegister.disabled = false;
		if(!btnRegister.disabled) {
			btnRegister.classList.add('btn-login-black');
		}else {
			btnRegister.classList.remove('btn-login-black');
		}
	},500);
});
// 防抖
function debounce(fun, time) {
	var timer = null;
	return function(e) {
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		var that = this;
		timer = setTimeout(function() { fun.call(that,e) },time);
	}
}

var checkAgree = document.querySelector('.agree-check');
btnRegister.onclick = function() {
	if(btnRegister.disabled) return;
	if(!checkAgree.checked) return;
	// 判断
	if(phoneNum.value.length < 5) {
		document.querySelector('.phone-tips').classList.add('active');
		document.querySelector('.phone-tips').parentNode.querySelector('.clear-icon').classList.add("error");
	}else if(inputPwd.value.length < 2) {
		document.querySelector('.pwd-tips').classList.add('active');
		document.querySelector('.pwd-tips').parentNode.querySelector('.clear-icon').classList.add("error");
	}else if(inputPwdCon.value !== inputPwd.value ) {
		document.querySelector('.pwd-tips2').classList.add('active');
		document.querySelector('.pwd-tips2').parentNode.querySelector('.clear-icon').classList.add("error");
	}
	// 注册存值
	phone = document.querySelector(".phone-num").value;
	Cookies.set('userPhone',phone);
	pwd = document.querySelector('.input-item>.input-pwd').value;
	Cookies.set('userPwd',pwd);
	Cookies.set('registerHref',window.location.href);
	alert("注册成功！现在去登录！");
	window.location.replace('../login/login.html');
};
