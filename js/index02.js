			    $('[name="login"]').click(function(){
			      window.location.href = `./pages/login.html?${window.location.href}`;
			    })
				
				
			    $('[name="back"]').click(function(){
			      setCookies('login' , '清除cookie' , -1);
			      window.alert('您已经退出登录!');
			    })
				
				
			    $('[name="buyCar"]').click(function(){
			      const cookieObj = getCookieObj(document.cookie);
			      if(cookieObj['login'] === undefined){
			          let bool = window.confirm('您未登录,点击确定,跳转登录页面');
			          if(bool === true){
			            window.location.href = `./pages/login.html?${window.location.href}`;
			          }
			      }else if( cookieObj['login'] === '1' ){
			          window.location.href = './pages/cart.html';
			      }
			    })
				
				
				
				
			var flag = true;
						toggleTool();
						
						function toggleTool() {
						    if ($(window).scrollTop() >= $(".shortcut").height()){
						        $('.fixedtool').fadeIn();
						    } else {
						        $('.fixedtool').fadeOut();
						    };
						}
						
						$(window).scroll(function() {
							if ($(window).scrollTop() >= $(".shortcut").height()) {
								$("#nav").addClass("fixed");
								$("#banner").css("marginTop", $("#nav").height() + 10);
							} else {
								$("#nav").removeClass("fixed");
								$("#banner").css("marginTop", 10);
							}
							$('.toTop').click(function() {
								$("html,body").stop().animate({
									scrollTop: 0
								}, 1000);
							})
						    toggleTool();
						    if (flag) {
						        $('.floor').each(function(i, ele) {
						            if ($(window).scrollTop() >= $(ele).offset().top-300) {
						                $('.fixedtool li').eq(i).addClass("current").siblings().removeClass();
						
						            }
						        })
						    }
						
						});
						$('.fixedtool li').click(function() {
						    flag = false;
						    var current = $('.floor').eq($(this).index()).offset().top-300;
						    $("body, html").stop().animate({
						        scrollTop: current
						    }, function() {
						        flag = true;
						    });
						    $(this).addClass("current").siblings().removeClass();
						})
				
				$('.closePic ').click(function() {
					$('#welcome').hide();
				})
				
				setTimeout(function() {
					$('#welcome').hide();
				}, 3000)
				
				$('#nav>ul>li').hover(function() {
					$(this).children('ol').stop().slideDown(300).css('backgroundColor', "#ffffff")
				}, function() {
					$(this).children('ol').stop().slideUp(300)
				})
				
				$('.code').hover(function() {
					$('[name="code"]').show();
				}, function() {
					$('[name="code"]').hide();
				})
				
				
				$('.shoppingcart').hover(function() {
					$('.shoppingcartBox').stop().show();
				}, function() {
					$('.shoppingcartBox').stop().hide();
				});
				
				$(".tab-item").mouseenter(function() {
					$(this).addClass("active").siblings().removeClass("active");
					var idx = $(this).index();
					$(".main").eq(idx).addClass("selected").siblings().removeClass("selected");
				});
				
				
				$(".left_btn>li").mouseenter(function() {
					$(".center_goods>li:eq(" + $(this).index() + ")").show().siblings().hide();
				});
				 $(".right_btn>li").mouseenter(function() {
					$(".center_goods>li").eq($(this).index() + 8).show().siblings().hide();
				});
				
				$('.pants_goods ul li').mouseenter(function() {
					$('.pants_pic img').eq($(this).index()).css({
						"transition": "2s",
						'transform': 'scale(1.3,1.3)'
					})
				}) 
				$('.pants_goods ul li').mouseleave(function() {
					$('.pants_pic img').eq($(this).index()).css({
						"transition": "2s",
						'transform': 'scale(1,1)'
					})
				})
				
				
				
				lazyLoadInit({
					coverColor: "white",
					coverDiv: "",
					offsetBottom: 0,
					offsetTopm: 0,
					showTime: 500,
				
				});