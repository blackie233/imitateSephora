	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}
// 选择地址
document.querySelectorAll('.receive-information-part').forEach(function(item) {
	item.onmouseover = function() {
		item.querySelector('.set-default-address').classList.add('active');
		if(item.querySelector('.receive-information-part>a').classList.contains('active')) item.querySelector('.set-default-address').classList.remove('active');
	}
	item.onmouseout = function() {
		item.querySelector('.set-default-address').classList.remove('active');
		// if(!item.classList.contains('active')) item.querySelector('.set-default-address').classList.add('active');
	}
	item.onclick = function() {
		this.parentNode.querySelectorAll('.receive-information-part').forEach(function(item) {
			item.classList.remove('active');
		});
		this.classList.add('active');
	};
});
// address 删除模态框
document.querySelectorAll('span.remove').forEach(function(item) {
	item.onclick = function() {
		console.log(1);
		document.querySelector('.remove-dialog-wrapper').classList.add("active");
		document.querySelector('.remove-dialog-close').onclick = classReomve;
		document.querySelector('.remove-dialog-cencle').onclick = classReomve;
		var that = this;
		document.querySelector('.remove-dialog-ok').onclick = function(){
			that.parentNode.parentNode.parentNode.removeChild(that.parentNode.parentNode);
			this.parentNode.parentNode.classList.remove('active');
		}
	}
});
function classReomve(){
	this.parentNode.parentNode.classList.remove('active');
}
	// 编辑地址
document.querySelectorAll('span.edit').forEach(function(item) {
	item.onclick = function() {
		document.querySelector('.editoraddd-dialog-header>span').innerText = '编辑地址';
		document.querySelector('.editoraddd-dialog-wrapper').classList.add('active');
		var form = document.forms["address"];
		form['receiveName'].value = this.parentNode.parentNode.querySelector('span.receive-name').innerText;
		regionPicker.set(this.parentNode.parentNode.querySelector('span.receive-address>span').innerText);
		form['receiveDetailedAddress'].value = this.parentNode.parentNode.querySelector('span.receive-address>a').innerText;
		form['receivePhoneNum'].value = this.parentNode.parentNode.querySelector('span.address-item-phone').innerText;
		var that = this;
		document.querySelector('.editoraddd-dialog-body-ok').onclick = function() {
			if(document.querySelector('.editoraddd-dialog-header>span').innerText !== '编辑地址') return;
			console.log(that.parentNode.parentNode.querySelector('span.receive-name'));
			that.parentNode.parentNode.querySelector('span.receive-name').innerText = form['receiveName'].value;
			that.parentNode.parentNode.querySelector('span.receive-address>span').innerText = regionPicker.get();
			that.parentNode.parentNode.querySelector('span.receive-address>a').innerText = form['receiveDetailedAddress'].value;
			that.parentNode.parentNode.querySelector('span.address-item-phone').innerText = form['receivePhoneNum'].value;
			
			exitDialog();
		};
	}
});
	
function exitDialog() {
	document.querySelector('.editoraddd-dialog-wrapper').classList.remove('active');
}
document.querySelector('.editoraddd-dialog-body-cencle').onclick = exitDialog;
document.querySelector('.btn-cencle').onclick = exitDialog;
// 新增地址
document.querySelector('.add-new-address').onclick = function() {
	//最多10个
	if(document.querySelectorAll('span.receive-information-part').length >= 10) return;
	
	document.querySelector('.editoraddd-dialog-header>span').innerText = '新增地址';
	document.querySelector('.editoraddd-dialog-wrapper').classList.add('active');
	var form = document.forms["address"];
	form.reset();
	regionPicker.reset();
	//点击确定按钮后
	document.querySelector('.editoraddd-dialog-body-ok').onclick = function() {
		if(form['receiveName'].value === "" || form['receiveDetailedAddress'].value === "" || form['receivePhoneNum'].value === "" ) return;
		// 将新增的设为默认地址 ?
		if(form['checkbox'].checked === true) {
			document.querySelectorAll('.receive-information-part>a').forEach(function(item) {
				item.classList.remove('active');
			});
		}
		if(document.querySelector('.editoraddd-dialog-header>span').innerText === '新增地址') {
			var str = `
				<span class="receive-information-part">
					<span class="receive-name" style="color: black;">${form['receiveName'].value}</span>
					<span class="receive-address">
						<span>${regionPicker.get()}</span>
						<a>${form['receiveDetailedAddress'].value}</a>
					</span>
					<span class="address-item-phone">${form['receivePhoneNum'].value}</span>
					<a class="${form['checkbox'].checked === true ? 'active' : ''}">默认地址</a>
					<div class="receive-information-part-right">
						<span class="set-default-address">设置默认地址</span>
						<span class="edit">编辑</span>
						<span class="remove">删除</span>
					</div>
				</span>
			`;
			 document.querySelector('.receive-information').innerHTML += str;
		}
		
		exitDialog();
		
	};
}
// 设为默认
document.querySelectorAll('.set-default-address').forEach(function(item) {
	item.onclick = function() {
		//去掉默认地址
		document.querySelectorAll('.receive-information-part>a').forEach(function(item) {
			item.classList.remove('active');
		});
		//给现在的加上默认地址
		this.parentNode.parentNode.querySelector('.receive-information-part>a').classList.add('active');
	};
});
var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
// console.log(threshold);
var totalHeight = document.querySelector('.shop-cart-bottom').getBoundingClientRect().height;
var scrollTop = 0;
var bottonTop =  document.querySelector('.shop-cart-bottom').offsetTop;
var threshold = document.querySelector('.shop-cart-bottom').offsetTop - screenHeight + totalHeight;
window.onscroll = function() {
	scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
	// console.log(scrollTop);
	screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if(scrollTop < threshold) document.querySelector('.shop-cart-bottom').classList.add('fixed-b');
	else document.querySelector('.shop-cart-bottom').classList.remove('fixed-b');
}

	
