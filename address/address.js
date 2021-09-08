(function() {
	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}
	//右侧地址
	document.querySelector('.my-address-wrapper').onclick = function(e) {
		if(e.target.classList.contains('address-item-remove'))
			removeDom(e.target);
		else if(e.target.classList.contains('address-item-setdefault'))
			setDefalutAddress(e.target);
		else if(e.target.classList.contains('address-item-edit'))
			editAddress(e.target);
		else if(e.target.classList.contains('add-address'))
			addAddress(e.target);
	};
	// address 删除模态框
	function removeDom(target) {
		document.querySelector('.remove-dialog-wrapper').classList.add("active");
		function classReomve(){
			this.parentNode.parentNode.classList.remove('active');
		}
		document.querySelector('.remove-dialog-close').onclick = classReomve;
		document.querySelector('.remove-dialog-cencle').onclick = classReomve;
		document.querySelector('.remove-dialog-ok').onclick = function(e){
			target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
			e.target.parentNode.parentNode.classList.remove('active');
		}
		calculateTotal();
	}
	
	// 编辑地址
	function editAddress(target) {
		document.querySelector('.editoraddd-dialog-header>span').innerText = '编辑地址';
		document.querySelector('.editoraddd-dialog-wrapper').classList.add('active');
		var form = document.forms["address"];
		form['receiveName'].value = target.parentNode.parentNode.querySelector('h6').innerText;
		regionPicker.set(target.parentNode.parentNode.querySelector('.address-item-receivePegion').innerText);
		form['receiveDetailedAddress'].value = target.parentNode.parentNode.querySelector('.address-item-full-address').innerText;
		form['receivePhoneNum'].value = target.parentNode.parentNode.querySelector('.address-item-phone').innerText;
	
		document.querySelector('.editoraddd-dialog-body-ok').onclick = function() {
			if(document.querySelector('.editoraddd-dialog-header>span').innerText === '修改地址') {
				target.parentNode.parentNode.querySelector('h6').innerText = form['receiveName'].value;
				target.parentNode.parentNode.querySelector('.address-item-receivePegion').innerText = regionPicker.get();
				target.parentNode.parentNode.querySelector('.address-item-full-address').innerText = form['receiveDetailedAddress'].value;
				target.parentNode.parentNode.querySelector('.address-item-phone').innerText = form['receivePhoneNum'].value;
			}
			exitDialog();
		};
	
	}
	function exitDialog() {
		document.querySelector('.editoraddd-dialog-wrapper').classList.remove('active');
	}
	document.querySelector('.editoraddd-dialog-body-cencle').onclick = exitDialog;
	document.querySelector('.btn-cencle').onclick = exitDialog;
	//新增地址
	function addAddress() {
		//最多10个
		if(document.querySelectorAll('.address-item').length >= 10) return;
		
		document.querySelector('.editoraddd-dialog-header>span').innerText = '新增地址';
		document.querySelector('.editoraddd-dialog-wrapper').classList.add('active');
		var form = document.forms["address"];
		form.reset();
		regionPicker.reset();
		//点击确定按钮后
		document.querySelector('.editoraddd-dialog-body-ok').onclick = function() {
			if(form['receiveName'].value === "" || form['receiveDetailedAddress'].value === "" || form['receivePhoneNum'].value === "" ) return;
			if(form['checkbox'].checked === true) {
				document.querySelectorAll('.address-item-defaultadd').forEach(function(item) {
					item.classList.remove('active');
				});
				document.querySelectorAll('.address-item-setdefault-wrapper').forEach(function(item) {
					if(item.querySelector('.address-item-setdefault') === null) item.innerHTML = `<span class="address-item-setdefault">设为默认</span>`;
				});
			}
			if(document.querySelector('.editoraddd-dialog-header>span').innerText === '新增地址') {
				var str = `
					<div class="address-item">
						<h6>${form['receiveName'].value}</h6>
						<span class="address-item-defaultadd ${form['checkbox'].checked === true ? 'active' : ''}">默认地址</span>
						<span class="address-item-address">
							<span class="address-item-receivePegion">${regionPicker.get()}</span>
							<span class="address-item-full-address">${form['receiveDetailedAddress'].value}</span>
						</span>
						<span class="address-item-phone">${form['receivePhoneNum'].value}</span>
						<div class="address-item-right">
							<span class="address-item-remove"></span>
							<div class="address-item-setdefault-wrapper">
								
							</div>
							<span class="address-item-edit">编辑地址</span>
						</div>
					</div>
				`;
				 document.querySelector('.address-main').innerHTML += str;
			}
			
			exitDialog();
			
		};
	}
	// 设为默认
	function setDefalutAddress(target) {
		//去掉默认地址
		document.querySelectorAll('.address-item-defaultadd').forEach(function(item) {
			item.classList.remove('active');
		});
		//给现在的加上默认地址
		target.parentNode.parentNode.parentNode.querySelector('.address-item-defaultadd').classList.add('active');
		setTimeout(function() {
			target.parentNode.removeChild(target);
		},0);
		//给其他项加上设为默认地址
		var addHtml = `<span class="address-item-setdefault">设为默认</span>`;
		document.querySelectorAll('.address-item-defaultadd').forEach(function(item) {
			if(item.classList.contains('active')) return;
			item.parentNode.querySelector('.address-item-setdefault-wrapper').innerHTML = addHtml;
		});
	}
	
	
	
	
})();