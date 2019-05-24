$(function(){
	$.ajax({
		type:"get",					//请求方法
		url:"js/homepage.json",			//接口
		async:true,					//是否异步
		success:function (data) {	//请求成功执行
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    autoplay:true,
		    autoplay: {
		        disableOnInteraction: false,
		    },
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    
		    // 如果需要滚动条
		    scrollbar: {
		      el: '.swiper-scrollbar',
		    },
	   })
//			console.log(data.Shoetype[0])
//			console.log(data.shangpin[0])
			/*$.each(data.Shoetype1,function (i,t) {
				$("<li class='Extention'><a href='#'>"+t+"</a></li>").appendTo('.nav-pills1')
				$('.Extention').css({
					"display":"inline-block",
					"text-decoration":"none",
					"width":"66px",
					"height":"50px",
					"padding-left":"15px",
					"padding-right":"15px",
					"line-height":"50px",
					 "float":"left"
				})
				$('.Extention a').css({
					"display":"inline-block",
					"width":"36px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold"
				})
			})
			$.each(data.Shoetype2,function (i,t) {
				$("<li class='Extention'><a href='#'>"+t+"</a></li>").appendTo('.nav-pills2')
				$('.Extention').css({
					"display":"inline-block",
					"text-decoration":"none",
					"width":"66px",
					"height":"50px",
					"padding-left":"15px",
					"padding-right":"15px",
					"line-height":"50px",
					 "float":"left"
				})
				$('.Extention a').css({
					"display":"inline-block",
					"width":"36px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold"
				})
				$('.Extention:eq(5)').css({
					"display":"inline-block",
					"width":"72px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold",
					"padding-left":"15px",
					"padding-right":"15px"
				})
				$('.Extention:eq(5) a').css({
					"display":"inline-block",
					"width":"72px",
					"height":"50px",
					"color":"white",
					"font-size":"18px",
					"font-weight":"bold",
				})
			})*/
			$.each(data.Carefulrecommendationtop,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left",
					"font-weight":"bold"
				})
				$('.drop-down-menu-body-left-content:eq(3)').append("<div id='line'></div>")
				$('#line').css({
					"display":"block",
					"width":"30px",
					"height":"1px",
					"background-color":"#C7CBCC",
					"margin-left":"0px",
					"margin-top":"10px",
					"margin-right":"0px"
				})
			})
			$.each(data.Carefulrecommendationbottom,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(0)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.footwear,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(1)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.clothes,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(2)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.Accessories,function (i,t) {
				$("<div class='drop-down-menu-body-left-content'><a href='#'>"+t+"</a></div>").appendTo('.drop-down-menu-body-left ul:eq(3)')
				$('.drop-down-menu-body-left-content').css({
					"text-decoration":"none",
					"text-align":"left",
					"margin-top":"3%"
				})
				$('.drop-down-menu-body-left-content a').css({
					"font-size":"13px",
					"text-align":"left"
				})
			})
			$.each(data.RelatedSearches,function (i,t) {
				$("<li><a href='#'>"+t+"</a></li>").appendTo('.search-word:eq(0) ul')
				$('.search-word:eq(0) ul li').css({
					"width":"80px",
					"height":"22px",
					"padding":"4px 0px",
					"word-break": "break-word",
					"display":"inline-block"
				})
				$('.search-word:eq(0) ul li a').css({
					"width":"80px",
					"height":"14px",
					"font-size":"12px",
					"color":"#999",
					"line-height":"14px",
					"overflow":"hidden",
					"text-overflow":"ellipsis",
					"white-space":"nowrap",
					"text-align":"left",
					"display":"inline-block"
				})
			})
		},
		error:function (sd) {			//请求失败执行
			console.log(sd)
		}
	});
	console.log($('.drop-down-menu-body-left-content:eq(3)'))
	$('.Extention:eq(5)').css({
		"display":"inline-block",
		"width":"72px",
		"height":"50px",
		"color":"white",
		"font-size":"18px",
		"font-weight":"bold",
		"padding-left":"15px",
		"padding-right":"15px"
	})
	$('.Extention:eq(5) a').css({
		"display":"inline-block",
		"width":"72px",
		"height":"50px",
		"color":"white",
		"font-size":"18px",
		"font-weight":"bold",
	})
	$(".Extention:not(:eq(5))").mouseenter(function(){
		$(".drop-down-menu").stop()
		$(".drop-down-menu").slideDown();
	}).mouseleave(function () {
		$(".drop-down-menu").stop()
		$(".drop-down-menu").slideUp();
	});
	$(".drop-down-menu").mouseenter(function(){
		$(this).stop()
		$(this).slideDown();
	}).mouseleave(function () {
		$(this).stop()
		$(this).slideUp();
	});
	$('.search-word:eq(0)').css({
		"width":"80px",
		"height":"268px",
		"display":"inline-block",
		"margin-right":"30px",
		"float":"left",
		"text-align":"left",
		"font-size":"12px",
		"word-break": "break-word"
	});
	$('.search-word:eq(1)').css({
		"width":"180px",
		"height":"26px",
		"display":"inline-block",
		"float":"left",
		"text-align":"left",
		"font-size":"12px",
		"word-break": "break-word"
	});
	$('.title:eq(0)').css({
		"width":"80px",
		"height":"16px",
		"display":"inline-block",
		"margin-bottom":"10px",
		"text-align":"left",
		"font-size":"14px",
		"font-weight":"bold",
		"line-height":"16px"
	});
	$('.title:eq(1)').css({
		"width":"180px",
		"height":"16px",
		"display":"inline-block",
		"margin-bottom":"10px",
		"text-align":"left",
		"font-size":"14px",
		"font-weight":"bold",
		"line-height":"16px"
	});
	$('#keyword').focus(function(){
		$('.search-box').prop('style',"display:inline-block;");
		$('.search-clear2').prop('style',"display:inline-block;");
	}).blur(function(){
		$('.search-box').prop('style',"display:none;");
		$('.search-clear2').prop('style',"display:none;");
	});
	var timer;
	$('.header-cart a').mouseenter(function () {
		$('.header-cart a i').prop('style',"background-image: url(img/commodityL.png);width: 44px;height: 32px;margin-top: 0px;margin-left: 15px;")
	}).mouseleave(function () {
		timer && clearTimeout(timer);
		timer = setTimeout(function () {
			$('.header-cart a i').prop('style',"background-image: url(img/commodity.png);width: 20px;height: 20px;margin-top: 6px;margin-left: 14px;")
		},2000);
	});
	$('.banner-close').on('click',function () {
		$('.banner-fixed-bottom').prop('style','display: none;');
	});
	$('.item-info').mouseenter(function () {
		$('.item-info a').css({
			"color":"rgb(130,131,133)"
		})
		$('.item-info a span img').prop("src","img/jt-b-h.png")
	}).mouseleave(function () {
		$('.item-info a').css({
			"color":"rgb(255,255,255)"
		})
		$('.item-info a span img').prop("src","img/jt-b.png")
	});
	$('.cms-html-edit:eq(0)').css({
		"word-break":"normal",
		"width":"100%",
		"overflow":"hidden",
		"padding-top":"80px",
		"z-index":"1"
	});
	$('.article-kv:eq(0)').css({
		"word-break":"normal",
		"width":"100%",
		"height":"100%",
		"display":"block",
		"position":"relative"
	});
	$('.article-kv .kv-container:eq(0)').css({
		"width":"100%"
	});
	$('.swiper-container:eq(0)').css({
		"margin-left":"auto",
		"margin-right":"auto",
		"position":"relative",
		"overflow":"hidden",
		"z-index":"-1",
		"display":"block",
		"word-wrap":"break-word",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%"
	});
	$('.swiper-wrapper:eq(0)').css({
		"width":"100%",
		"position":"relative"
	});
	$('.item-info:eq(0)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(1)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(2)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.item-info:eq(3)').css({
		"align-items":"flex-end",
		"flex-direction":"column",
		"position":"absolute",
		"left":"inherit",
		"right":"12%",
		/*"top": 63%;*/
		"top":"inherit",
		"bottom":"22%",
		"width":"30%",
		"height":"73px",
		"color":"#000",
		"font-family":"'adihrg','PingFangSC-Regular','Hiragino Sans GB','微软雅黑','Microsoft YaHei',sans-serif",
		"font-size":"12px",
		"font-weight":"400",
		"letter-spacing":"normal",
		"line-height":"1.2",
		"word-break":"normal",
		"word-wrap":"break-word",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(255,255,255,0)"
	});
	$('.btn-have-opacity:eq(0)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(0)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(1)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(1)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(2)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(2)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(3)').css({
		"margin-top":"15px",
		"margin-left":"0px",
		"margin-right":"0px",
		"margin-bottom":"0px",
		"width":"auto",
		"max-width":"none",
		"min-width":"auto",
		"height":"48px",
		"min-height":"30px",
		"padding-top":"0px",
		"padding-bottom":"0px",
		"padding-left":"21px",
		"padding-right":"21px",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"align-content":"center",
		"background-attachment":"scroll",
		"background-clip":"border-box",
		"background-color":"rgb(0,0,0)",
		"background-origin":"padding-box",
		"background-image":"none",
		"background-position-x":"0%",
		"background-position-y":"0%",
		"background-repeat-x":"initial",
		"background-repeat-y":"initial",
		"background-size":"auto",
		"border-bottom-color":"rgb(255,255,255)",
		"border-bottom-left-radius":"0px",
		"border-bottom-right-radius":"0px",
		"border-bottom-style":"none",
		"border-bottom-width":"none",
		"border-image-outset":"0px",
		"border-image-repeat":"stretch",
		"border-image-slice":"100%",
		"border-image-width":"1",
		"border-left-color":"rgb(255,255,255)",
		"border-left-style":"none",
		"border-left-width":"0px",
		"border-right-color":"rgb(255,255,255)",
		"border-right-style":"none",
		"border-right-width":"0px",
		"border-top-color":"rgb(255,255,255)",
		"border-top-left-radius":"0px",
		"border-top-right-radius":"0px",
		"border-top-style":"none",
		"border-top-width":"0px",
		"box-shadow":"none",
		"color":"rgb(255,255,255)",
		"cursor":"pointer",
		"display":"flex",
		"font-style":"normal",
		"font-weight":"500",
		"justify-content":"flex-start",
		"letter-spacing":"2px",
		"line-height":"50px",
		"outline-color":"initial",
		"outline-style":"none",
		"outline-width":"0px",
		"overflow-x":"visible",
		"overflow-y":"visible",
		"position":"absolute",
		"right":"0px",
		"bottom":"0px",
		"text-align":"left",
		"-moz-text-decoration-color":"initial",
		"-moz-text-decoration-line":"none",
		"-moz-text-decoration-line":"solid",
		"text-rendering":"optimizelegibility",
		"-moz-text-size-adjust":"100%",
		"text-transform":"uppercase",
		"touch-action":"manipulation",
		"transform":"translate(-3px,-3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s 0.1s 0.1s",
		"transition-property":"transform,color,border,background",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)",
		"-moz-user-select":"none",
		"vertical-align":"middle",
		"white-space":"nowrap",
		"word-wrap":"break-word",
		"word-break":"normal",
		"zoom":"1",
		"-webkit-font-smoothing":"antialiased",
		"-webkit-tap-highlight-color":"rgba(0,0,0,0)"
	});
	$('.Outsidetheborder:eq(3)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #000",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.article-kv:eq(1)').css({
		"position":"relative",
		"width":"100%",
		"margin":"0 auto",
		"margin-bottom":"24px"
	});
	$('.article-kv .kv-container:eq(1)').css({
		"width":"100%"
	});
	$('.swiper-container:eq(1)').css({
		"margin-left":"auto",
		"margin-right":"auto",
		"position":"relative",
		"overflow":"hidden",
		"z-index":"-1"
	});
	$('.swiper-wrapper:eq(1)').css({
		"position":"relative",
		"width":"100%",
		"height":"100%",
		"z-index":"1",
		"display":"flex",
		"transition-property":"transform",
		"box-sizing":"content-box"
	});
	$('.article-kv:eq(1) .kv-container .swiper-slide').css({
		"position":"relative",
		"width":"1357px",
		"height":"100%"
	});
	$('.article-kv:eq(1) .kv-container .swiper-slide .item-info').css({
		"display":"-webkit-flex",
		"flex-direction":"column",
		"align-items":"flex-start",
		"position":"absolute",
		"bottom":"22%",
		"left":"12%",
		"width":"30%"
	});
	$('.btn-have-opacity:eq(4)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(4)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
	$('.btn-have-opacity:eq(5)').css({
		"margin":"0",
		"margin-top":"15px",
		"min-width":"auto",
		"width":"auto",
		"font-size":"15px",
		"font-family":"'adineueproblack','微软雅黑','PingFangSC-Regular','Hiragino Sans GB','Microsoft YaHei',sans-serif",
		"background-color":"#fff",
		"height":"48px",
		"line-height":"50px",
		"overflow":"visible",
		"position":"relative",
		"text-align":"left",
		"transform":"translate(-3px,-3px)",
		"font-weight":"500",
		"min-height":"30px",
		"color":"#000",
		"border-color":"#fff",
		"letter-spacing":"2px",
		"display":"inline-flex",
		"justify-content":"flex-start",
		"align-content":"center",
		"padding":"0 21px",
		"text-transform":"uppercase",
		"text-decoration":"none",
		"cursor":"pointer",
		"transition":"transform .1s cubic-bezier(0.3,0,0.45,1),color .1s cubic-bezier(0.3,0,0.45,1),border .1s cubic-bezier(0.3,0,0.45,1),background .1s cubic-bezier(0.3,0,0.45,1)",
		"white-space":"nowrap",
		"vertical-align":"middle",
		"border":"0",
		"touch-action":"manipulation",
		"user-select":"none",
		"border-radius":"0"
	});
	$('.Outsidetheborder:eq(5)').css({
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0",
		"left":"0",
		"box-shadow":"inset 0 0 0 1px #fff",
		"content":"",
		"display":"block",
		"transform":"translate(3px,3px)",
		"transition-delay":"initial",
		"transition-duration":"0.1s 0.1s",
		"transition-property":"transform, -webkit-transform",
		"transition-timing-function":"cubic-bezier(0.3,0,0.45,1)"
	});
})