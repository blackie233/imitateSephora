
(function() {
	document.querySelector('.detail-content-wrapper').onclick = function(e){
		if(e.target.classList.contains('promotion-detail'))
			promotionDetailToggle(e.target);
		else if(e.target.classList.contains('notshow'))
			imgToggle(e.target);
		// else if(e.target.classList.contains('product-right-btn-increase'))
		// 	btnIncrease(e.target);
		// else if(e.target.classList.contains('product-right-btn-decrease'))
		// 	btnDecrease();
	};
	
	var mask = document.querySelector('.product-detail-images-mask'),
		zoomSmall = document.querySelector('.product-detail-images-small'),
		zoomBig = document.querySelector('.product-detail-images-big'),
		zoomSmallW = zoomSmall.getBoundingClientRect().width,
		zoomSmallH = zoomSmall.getBoundingClientRect().height,
		zoomW = document.querySelector('.product-detail-images-show').getBoundingClientRect().width,
		zoomH = document.querySelector('.product-detail-images-show').getBoundingClientRect().height,
		ratio = 3, minRatio = 1, maxRatio = 6, left = 0, top = 0;
		
	// 图片切换
	function imgToggle(target) {
		target.parentNode.parentNode.querySelectorAll('.product-detail-images-whitemask').forEach(function(item) {
			item.classList.add('notshow');
		});
		document.querySelectorAll('.product-detail-images-show>img').forEach(function(item) {
			item.classList.remove('active');
		});
		var imgToggle = document.querySelectorAll('.product-detail-images-show>img')[target.dataset.id];
		imgToggle.classList.add('active');
		zoomBgImgToggle.call(imgToggle);
		setTimeout(function() {
			target.classList.remove('notshow');
		},0);
	}
	// 放大镜
	document.querySelector('.product-detail-images-show>img.active').onload = zoomBgImgToggle;
	function zoomBgImgToggle() {
		zoomSmall.style.backgroundImage = `url(${this.src})`;
		zoomSmall.style.backgroundSize = `${this.width}px ${this.height}px`;
		zoomBig.style.backgroundImage = `url(${this.src})`;
		zoomBig.style.backgroundSize = `${this.width * ratio}px ${this.height * ratio}px`;
	}
	mask.onmousemove = function(e) {
		left = e.offsetX - zoomSmallW / 2;
		top =  e.offsetY - zoomSmallH / 2;
		if(left < 0 ) left = 0;
		if(top < 0) top = 0;
		if(left + zoomSmallW > zoomW) left = zoomW - zoomSmallW;
		if(top + zoomSmallH > zoomH) top = zoomH - zoomSmallH;
		zoomSmall.style.left = left +'px';
		zoomSmall.style.top = top + 'px';
		zoomSmall.style.backgroundPosition = `-${left}px -${top}px`;
		zoomBig.style.backgroundPosition = `-${left * ratio}px -${top * ratio}px`;
	};
	
	//促销详情
	function promotionDetailToggle(target) {
		target.querySelector('em').classList.toggle('direction-toggle');
		target.querySelector('.promotion-detail-body-wrapper').classList.toggle('active');
	}
	//数量变化和加减按钮
	var countNum = parseInt(document.querySelector('.product-right-count>span').innerText);
	document.querySelector('.product-right-btn-increase').onclick = function() {
		this.parentNode.querySelector('.product-right-btn-decrease>em').classList.add('active');
		if(countNum === 5) return;
		countNum += 1;
		this.parentNode.parentNode.querySelector('span').innerText = countNum;
		if(countNum === 5) this.querySelector('em').classList.add('active');
	};
	document.querySelector('.product-right-btn-decrease').onclick = function() {
		this.parentNode.querySelector('.product-right-btn-increase>em').classList.remove('active');
		if(countNum === 1) return;
		countNum = countNum - 1;
		this.parentNode.parentNode.querySelector('span').innerText = countNum;
		if(countNum === 1) this.querySelector('em').classList.remove('active');
	};
	// 规格样式切换
	document.querySelectorAll('.product-right-type-choice>span').forEach(function(item) {
		item.onclick = function() {
			document.querySelectorAll('.product-right-type-choice>span').forEach(function(item) {
				item.classList.remove('choice-this');
			});
			this.classList.add('choice-this');
		}
	});
})();
// 回到顶部
(function() {
	var fixedInfo = document.querySelector(".fixed-info"),
		backTop = fixedInfo.querySelector(".info-backtop"),
		timer = null,
		threshold = 800;
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
		// console.log(scrollTop);
		if (scrollTop >= threshold) fixedInfo.classList.add('fixed-show');
		else fixedInfo.classList.remove('fixed-show');
	};
	// window.onmousewheel = function() {
	// 	if(timer !== null) {
	// 		clearInterval(timer);
	// 		timer = null;
	// 	}
	// };
	backTop.onclick = function() {
		timer = setInterval(function() {
			var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
			if(scrollTop <= 10) {
				clearInterval(timer);
				timer = null;
				window.scrollTo(0,0);
				return;
			}
			window.scrollTo(0,Math.ceil(scrollTop * 0.9));
		},10);
	}
})();
