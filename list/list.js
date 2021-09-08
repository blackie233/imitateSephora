(function() {
	var goods = [
		{name: "M.A.C",remark: "魅可热卖组合惠选套装",price: 520,avator: "images/1_n_10740_350x350.jpg"},
		{name: "SHUUEMURA",remark: "植村秀羽纱持妆粉底液",price: 430,avator: "images/1_n_11164_350x350.jpg"},
		{name: "LANCOME",remark: "兰蔻新空气轻垫菁纯粉底液",price: 650,avator: "images/1_n_11063_350x350.jpg"}
	];
	var htmlStr = '';
	productList(goods);
	
	document.querySelector('.condition-filtering-wrapper').onclick = function(e) {
		// console.log(e.target);
		if(e.target.classList.contains('condition-more-text'))
			conditiuonMore(e.target);
	};
	//更多按钮
	var indexMore = 0;
	function conditiuonMore(target) {
		target.innerText = indexMore===0 ? "收起" : '更多';
		indexMore =(indexMore + 1) % 2;
		target.parentNode.querySelector('em').classList.toggle('active');	
		document.querySelector('.condition-brank-content>input').classList.toggle('active');
		document.querySelector('.condition-all-barnks>ul').classList.toggle('active');
	}
	//商品价格比较
	var priceSign = 0;
	document.querySelectorAll('.product-list-header>ul>li').forEach(function(item) {
		item.onclick = function() {
			document.querySelectorAll('.product-list-header>ul>li').forEach(function(m) {
				m.classList.remove('active');
				m.querySelector('span').classList.remove('active');
				m.querySelector('span').classList.remove('toptolow');
				m.querySelector('span').classList.remove('lowtotop');
			});
			this.classList.add('active');
			this.querySelector('span').classList.add('active');
			if(this.classList.contains('multiple')) {
				console.log(1);
				console.log(goods);
				productList(goods);
				
				return;
			}
			if(!this.querySelector('span').classList.contains('product-list-header-price')) return;
			if(priceSign){
				this.querySelector('span').classList.remove('lowtotop');
				this.querySelector('span').classList.add('toptolow');
				priceHightoLow();
			}else {
				this.querySelector('span').classList.remove('toptolow');
				this.querySelector('span').classList.add('lowtotop');
				priceLowtoHigh();
			}
			priceSign = (priceSign + 1) % 2;
		}
	});
// 价格排序 
	var itemPrices = goods.slice(0);
	// priceRanking();
	function priceHightoLow() {
		var temp = 0;
		itemPrices.sort(function(a,b) { return b.price - a.price });
		productList(itemPrices);
	}
	function priceLowtoHigh() {
		var temp = 0;
		itemPrices.sort(function(a,b) { return a.price - b.price });
		productList(itemPrices);
	}
	// 动态渲染列表内容
	function productList(arr) {
		htmlStr = "";
		arr.forEach(function(item) {
			htmlStr += `
				<div class="product-list-item">
					<a href="../detail/detail.html">
						<img src="${item.avator}" alt="">
						<div class="buy-now">立即购买</div>
					</a>
					<span>
						<h6>${item.name}</h6>
						<a href="">${item.remark}</a>
						<span>&yen;<span>${item.price}</span>.00</span>
					</span>
				</div>
			`;
		});
		document.querySelector('.product-list-body').innerHTML = htmlStr;
	}
})();