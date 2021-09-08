var list = [
	{title :"KENZO", remark: "凯卓舒缓白莲花漾面膜惠选", price: 470.00, img: "src='images/1_n_10275_180x180.jpg'"},
	{title :"SHISEIDO", remark: "资生堂红颜激活精华Ⅲ露", price: 590.00, img: "src='images/1_n_11063_180x180.jpg'"},
	{title :"Fresh", remark: "馥蕾诗红茶酵母搅萃精华液", price: 320.00, img: "src='images/1_n_10990_180x180.jpg'"},
	{title :"MENARDSP", remark: "美音阿朵BASUNESS", price: 580.00, img: "src='images/1_n_09749_180x180.jpg'"},
	{title :"MARUBI", remark: "完美日本酒域龄冰肌精华液", price: 689.00, img: "src='images/1_n_11013_180x180.jpg'"},
	{title :"DrJart", remark: "蒂佳婷修复新活舒缓面贴膜", price: 158.00, img: "src='images/1_n_10640_180x180.jpg'"},
	{title :"CHA LING", remark: "茶灵泡沫洁颜膏", price: 300.00, img: "src='images/1_n_10754_180x180.jpg'"},
	{title :"Sulwhasoo", remark: "雪花秀顺行柔和洁颜油", price: 320.00, img: "src='images/1_n_08536_180x180.jpg'"}
];
var html = '';
for(var i = 0; i < list.length; i++) {
	html += "<div><a href=''>";
	html += "<span>";
	html += "<h6>" + list[i].title +"</h6>";
	html += "<span>" + list[i].remark +"</span>";
	html += "<span>&yen;" + list[i].price +"</span>";
	html += "<image " + list[i].img +" />";
	html += "</span>";
	html += "</a></div>";
}
// console.log(html)
document.querySelector(".hufu-wrapper div.moban-menu").innerHTML = html;
//猜你喜欢
var guessLikeList = [
	{title: "CLINIQUE", remark: "倩碧花漾胭脂(小雏菊腮红)", price: "145.00", img: "images/1_n_10694_280x280.jpg"},
	{title: "SHISEIDO", remark: "资生堂悦薇珀翡水乳惠选套组", price: "1440.00", img: "images/1_n_11092_280x280.jpg"},
	{title: "3CE", remark: "三细玉单色腮红", price: "104.00", img: "images/1_n_07499_280x280.jpg"},
	{title: "LANCOME", remark: "兰蔻持妆清透粉底液", price: "430.00", img: "images/1_n_11116_280x280.jpg"},
	{title: "SEPHORACOLLECTION", remark: "丝芙兰丰盈密润唇釉", price: "99.00", img: "images/1_n_08592_280x280.jpg"},
	{title: "SWPHORACOLLECTION", remark: "丝芙兰蚕丝面膜片装", price: "250.00", img: "images/1_n_09790_280x280.jpg"},
	{title: "SK-II", remark: "SK-II PITERA经典体验套装", price: "690.00", img: "images/1_n_09089_280x280.jpg"},
	{title: "3CE", remark: "三熹玉 九色纷呈眼影盘", price: "230.00", img: "images/1_n_11011_280x280.jpg"},
	{title: "SEPHORACOLLECTION", remark: "丝芙兰单色闪耀小眼影", price: "59.00", img: "images/1_n_07783_280x280.jpg"},
	{title: "LANCOME", remark: "兰蔻清透水漾防晒乳", price: "650.00", img: "images/1_n_11143_280x280.jpg"},
	{title: "SHISEIDO", remark: "安热沙水能户外清透防晒乳", price: "298.00", img: "images/1_n_10821_280x280.jpg"},
	{title: "SEPHORACOLLECTION", remark: "丝芙兰染唇膏", price: "109.00", img: "images/1_n_11131_280x280.jpg"},
	{title: "SHISEIDO", remark: "资生堂新艳阳夏震效水动力防", price: "380.00", img: "images/1_n_11006_280x280.jpg"},
	{title: "MAKEUPFOREVER", remark: "玫珂菲全新无痕蜜粉", price: "380.00", img: "images/1_n_10865_280x280.jpg"},
	{title: "SEPHORACOLLECTION", remark: "丝芙兰柔和面部眼部卸妆水", price: "208.00", img: "images/1_n_10657_280x280.jpg"},
	{title: "LANCOME", remark: "兰蔻菁纯柔雾哑光唇膏", price: "285.00", img: "images/1_n_09437_280x280.jpg"},
	{title: "3CE", remark: "三熹玉九色纷呈眼影盘", price: "230.00", img: "images/1_n_07641_280x280.jpg"},
	{title: "ESTEELAUDER", remark: "雅诗兰黛特润修护激活精华露", price: "900.00", img: "images/1_n_11004_280x280.jpg"},
	{title: "LANCOME", remark: "兰蔻新清莹柔肤水", price: "435.00", img: "images/1_n_10780_280x280.jpg"},
	{title: "WEI", remark: "蔚蓝之美晶透莹亮精选面膜", price: "99.00", img: "images/2_n_09027_280x280.jpg"},
];
var guessLikeHtml = "";
for(var i = 0;i < guessLikeList.length; i++) {
	guessLikeHtml += "<div>";
	guessLikeHtml += "<a href=''><img class='wow pulse' src=" + guessLikeList[i].img + " /></a>";
	guessLikeHtml += "<span>";
	guessLikeHtml += "<h6 class='wow pulse'>" + guessLikeList[i].title + "</h6>";
	guessLikeHtml += "<a href=''>" + guessLikeList[i].remark + "</a>";
	guessLikeHtml += "<span class='wow pulse'>&yen;" + guessLikeList[i].price + "</span>";
	guessLikeHtml += "</span>";
	guessLikeHtml += "</div>";
};
document.querySelector(".guess-like-wrapper div.guess-like-content").innerHTML = guessLikeHtml;
	
//全部品牌选项卡	
(function() {
	function allBranksToggle() {
		if(this.classList.contains("title-right-strong")) return;
		this.parentNode.querySelector("span.title-right-strong").classList.remove("title-right-strong");
		this.classList.add("title-right-strong");
		
		document.querySelector(".all-branks-content>div.all-branks-right-show").classList.remove("all-branks-right-show");
		document.querySelectorAll(".all-branks-content>div")[this.index + 1].classList.add("all-branks-right-show");
	}
	var branksTitleRight = document.querySelectorAll(".all-branks>.moban-title>span.title-right>span");
	branksTitleRight.forEach(function(item,i) {
		item.index = i;
		item.onclick = allBranksToggle;
	});
})();

//banner轮播图
(function() {
	var banner = document.querySelector(".banner");
	var index = 1;
	var timer = null;
	var indicators = banner.querySelectorAll(".banner-indicator>.indicator");
	var toggleLeft = banner.querySelector(".toggle-left");
	var toggleRight = banner.querySelector(".toggle-right");
	var isToggling = false;
	var length = banner.querySelector('.banner-main').children.length;
	function bannerToggle(nextIndex){
		index = nextIndex;
		isToggling = true;
		var scrollDom = document.querySelector('.banner-main');
		scrollDom.style.transitionDuration = "0.5s";
		scrollDom.style.left = `-${nextIndex}00%`;
		//指示器切换
		document.querySelector('.banner-indicator>.active').classList.remove("active");
		var i = index;
		if(i === length - 1) i = 1;
		else if (i === 0) i = length - 2;
		indicators[i - 1].classList.add('active');
		
		setTimeout(function() {
			if( nextIndex === length - 1 ) {
				scrollDom.style.transitionDuration = "0s";
				index = 1;
				scrollDom.style.left = `-100%`;
			}
			if(nextIndex === 0) {
				scrollDom.style.transitionDuration = "0s";
				index = length - 2;
				scrollDom.style.left = `-${index}00%`;
			}
			isToggling = false;
		},500);
	}
	banner.onmouseover = function() {
		clearInterval(timer);
		timer = null;
	};
	banner.onmouseout = function() {
		timer = window.setInterval(function() {
			bannerToggle(index + 1);
		},3000);
	};
	// for(var i = 0; i < items.length;i++) {
	// 	indicators[i].index = i;
	// 	indicators[i].onclick = function() {
	// 		if(this.classList.contains("active")) return;
	// 		bannerToggle(this.index);
	// 	};
	// }
	toggleLeft.onclick = function() {
		if(isToggling) return;
		bannerToggle( index - 1);
	}
	toggleRight.onclick = function() {
		if(isToggling) return;
		bannerToggle( index + 1);
	}
	timer = setInterval(function() {
		bannerToggle(index + 1);
	},3000);
	//点击指示器切换轮播图
	indicators.forEach(function(item, i) {
		item.index = i;
		item.onclick = function() {
			if( isToggling || this.classList.contains('active')) return;
			bannerToggle(this.index + 1);
		}
	});
})();

//全部品牌轮播图
(function() {
	var allBranksChange = document.querySelectorAll('.all-branks-left>a');
	var index = 0;
	function allBranksToggle() {
		allBranks((index + 1) % allBranksChange.length);
	}
	var timer = setInterval(allBranksToggle, 3000);
	var allBranksLeft = document.querySelector('.allbranks-lt');
	var allBranksRight = document.querySelector('.allbranks-gt');
	allBranksLeft.onclick = function() {
		allBranks(Math.abs((index - 1) % allBranksChange.length));
	};
	allBranksRight.onclick = function() {
		allBranks((index + 1) % allBranksChange.length);
	};
	function allBranks(thisindex) {
		allBranksChange[index].classList.remove('show');
		index = thisindex;
		allBranksChange[index].classList.add('show');
	}
	document.querySelector('.all-branks-content').onmouseover = function() {
		clearInterval(timer);
		timer = null;
	}
	document.querySelector('.all-branks-content').onmouseout = function() {
		timer = setInterval(allBranksToggle, 3000);
	}
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
	window.onmousewheel = function() {
		if(timer !== null) {
			clearInterval(timer);
			timer = null;
		}
	};
	backTop.onclick = function() {
		timer = setInterval(function() {
			var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
			if(scrollTop <= 8) {
				clearInterval(timer);
				timer = null;
				window.scrollTo(0,0);
				return;
			}
			window.scrollTo(0,Math.ceil(scrollTop * 0.9));
		},10);
	}
})();
//左右联动 
(function() {
	
	setTimeout(function() {
		var fixedLeft = document.querySelector('.fixed-left'),
			parts = document.querySelectorAll('.part');
			threshold = 1500;
		var onscrollHandler = window.onscroll;
		var thresholds = [],
			threshol = null;
		var timer = null;
		var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
		var indicators = fixedLeft.querySelectorAll('.fixed-left>div');
		for(var i = 0; i < parts.length; i++) {
			threshol = parts[i].getBoundingClientRect().top + scrollTop;
			thresholds.push(Math.ceil(threshol));
			if( i === parts.length -1) {
				thresholds.push(Math.ceil(threshol + parts[i].getBoundingClientRect().height) );
				// console.log(thresholds);
			}
		}
		window.onscroll = function() {
			if(onscrollHandler !== null) onscrollHandler(); 
			var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
			if (scrollTop >= threshold) fixedLeft.classList.add('fixed-show');
			else fixedLeft.classList.remove('fixed-show');
			// 右绑定左
			var nowTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
			for(var i = 0; i < indicators.length;i++) {indicators[i].classList.remove('active');}
			if( nowTop < thresholds[0] || nowTop > thresholds[thresholds.length -1]) return;
			for(var i = 0; i < thresholds.length - 1; i++) {
				if( nowTop >= (thresholds[i]) && nowTop < thresholds[i+1]) {
					indicators[i].classList.add('active');
					break;
				}
			}
		};
		//左关联右
		document.onmousewheel = function() {
			if(timer !== null) {
				clearInterval(timer);
				timer = null;
			}
		};
		for(var i = 0; i < indicators.length; i++) {
			indicators[i].index = i ;
			indicators[i].onclick = function() {
			// for(var)
				var targetY = thresholds[this.index];
				this.classList.add('active');
				timer = setInterval(function() {
					var nowTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
					var distence =(nowTop - targetY)*0.2;
					if( Math.abs(distence) <= 10) {
						scrollTo(0,targetY);
						clearInterval(timer);
						setTimeout(function(){timer = null;},3);
						return;
					}
					window.scrollTo(0,nowTop - distence);
				},30);
			};
		}
	},2000);
})();	
//菜单吸顶
(function() {
	var search = document.querySelector('.fixed-search');
	var onscrollHandler = window.onscroll;
	var threshold = 500;
	window.onscroll = function() {
		if(onscrollHandler !== null) onscrollHandler();
		var scrollTop = document.documentElement.scrollTop || window.scrollYOffice || document.body.scrollTop;
		if(scrollTop > threshold) document.querySelector('.fixed-search-wrapper').classList.add('search-show');
		else document.querySelector('.fixed-search-wrapper').classList.remove('search-show');
	
		
	}
})();
