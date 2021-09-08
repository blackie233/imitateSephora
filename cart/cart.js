(function () {
	//判断用户是否登录
	if(Cookies.get('userPhone') === undefined) {
		window.location.replace('../login/login.html');
	}
	var shopCar = document.querySelector(".shopcar-main");
	shopCar.onclick = function(e){
		if(e.target.classList.contains('btn-decrease'))
			btnDecrease(e.target);
		else if(e.target.classList.contains('btn-increase'))
			btnIncrease(e.target);
		else if(e.target.classList.contains('btn-check'))
			checkBox(e.target);
		else if(e.target.classList.contains('btn-del')) 
			removeDom(e.target);
	};
	// 加减按钮
	function btnDecrease(target) {
		var count = parseInt(target.parentNode.querySelector('.goods-count').innerText) - 1;
		//解除禁用
		target.parentNode.querySelector('.btn-increase').disabled = false;
		target.disabled = count === 1;
		//dom对象数量更改
		target.parentNode.querySelector('.goods-count').innerText = count;
		subTotal(target);
		calculateTotal();
	}
	function btnIncrease(target) {
		var count = parseInt(target.parentNode.querySelector('.goods-count').innerText) + 1;
		//解除禁用
		target.parentNode.querySelector('.btn-decrease').disabled = false;
		var maxCount = target.parentNode.parentNode.dataset.max;
		target.disabled = !(maxCount - count );
		//dom对象数量更改
		target.parentNode.querySelector('.goods-count').innerText = count;
		subTotal(target);
		calculateTotal();
	}
	
	//删除按钮
	function removeDom(target) {
		document.querySelector('.remove-dialog-wrapper').classList.add("active");
		function classReomve(){
			this.parentNode.parentNode.classList.remove('active');
		}
		document.querySelector('.remove-dialog-close').onclick = classReomve;
		document.querySelector('.remove-dialog-cencle').onclick = classReomve;
		document.querySelector('.remove-dialog-ok').onclick = function(e){
			target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
			bottonTop =  document.querySelector('.shop-cart-bottom').offsetTop;
			e.target.parentNode.parentNode.classList.remove('active');
		}
		calculateTotal();
	}
	// 全选全不选
	(function() {
		document.querySelectorAll('.btn-checkall').forEach(function(item) {
			item.onclick = function() {
				// console.log(item);
				var checkBoxs = document.querySelectorAll('.checkbox');
				document.querySelectorAll(".btn-checkall").forEach(function(item) {
					item.checked = this.checked;
				},this);
				document.querySelectorAll('.btn-checkall').forEach(function(item) {
					item.classList.toggle("checked");
				},this);
				// console.log(this);
				document.querySelectorAll('.btn-check').forEach(function(item) {
					item.checked = this.checked;
					item.classList.toggle('checked',this.checked);
				},this);
				calculateTotal();
			}
		});
	})();

	//自动全选
	function checkBox(target) {
		target.classList.toggle('checked');
		var unchecked = document.querySelectorAll('.shop-good input:not(.checked)');
		document.querySelectorAll(".btn-checkall").forEach(function(item) {
			item.checked = unchecked.length === 0;
		});
		document.querySelectorAll('.btn-checkall').forEach(function(item) {
			item.classList.toggle("checked", unchecked.length === 0);
		});
		calculateTotal();
	}
	
	//小计
	function subTotal(target) {
		var count = parseInt(target.parentNode.querySelector('.goods-count').innerText);
		var price = parseInt(target.parentNode.parentNode.parentNode.querySelector('.price').innerText)
		var total = count * price;
		target.parentNode.parentNode.parentNode.querySelector('.price-count').innerText = total.toFixed(2);
	}
	//总计
	function calculateTotal() {
		var total = 0,
			quantity = 0;
		var buy = document.querySelectorAll('.shop-good>.checked');
		buy.forEach(function(item) {
			total += parseInt(item.parentNode.querySelector('.price-count').innerText);
			quantity += parseInt(item.parentNode.querySelector('.goods-count').innerText);
		});
		document.querySelector('.shop-confirm-total').innerText = total;
		document.querySelector('.shop-total').innerText = total;
		document.querySelector('.shop-confirm-count').innerText = quantity;
	}
	
	//总计吸底
	var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
	// console.log(threshold);
	var totalHeight = document.querySelector('.shop-cart-bottom').getBoundingClientRect().height;
	var scrollTop = 0;
	var bottonTop =  document.querySelector('.shop-cart-bottom').offsetTop;
	var threshold = bottonTop - screenHeight + totalHeight;
	window.onscroll = function() {
		scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
		// console.log(scrollTop);
		screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
		threshold = bottonTop - screenHeight + totalHeight;
		if(scrollTop < threshold) document.querySelector('.shop-cart-bottom').classList.add('fixed-b');
		else document.querySelector('.shop-cart-bottom').classList.remove('fixed-b');
	}
	// window.onscroll = debounce(function(e) {
		
	// },100);
	
	// 加防抖   但效果不好
	// function debounce(fun,time) {
	// 	var timer = null;
	// 	that = this;
	// 	return function(e) {
	// 		if(timer !== null) {
	// 			clearTimeout(timer);
	// 			timer = null;
	// 		}
	// 		timer = setTimeout(function() {
	// 			fun.call(that,e);
	// 		},time);
	// 	}
	// }
})();
//猜你喜欢
(function() {
	var domToggle = document.querySelector('.guess-youlike-content>.items-wrapper');
	var toggleNum = Math.ceil(domToggle.children.length / 5) ;
	var index = 0;
	document.querySelector('.btn-guess-you-like-toggle>.btn-last').onclick = function() {
		if(index === 0) return;
		console.log(index);
		document.querySelector('.btn-guess-you-like-toggle>.btn-next').classList.remove('disable');
		index =(index - 1)% toggleNum ;
		domToggle.style.left = `-${index}00%`;
		if(index === 0) this.classList.add('disable');
	}
	document.querySelector('.btn-guess-you-like-toggle>.btn-next').onclick = function() {
		if(index === toggleNum - 1) return;
		
		document.querySelector('.btn-guess-you-like-toggle>.btn-last').classList.remove('disable');
		index = (index + 1)% toggleNum;
		domToggle.style.left = `-${index}00%`;
		if(index === toggleNum - 1)	this.classList.add('disable');
		 
	}
})();
