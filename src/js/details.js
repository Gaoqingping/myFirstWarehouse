console.log(window.location.href);
		let result = [];
		
		let str = decodeURIComponent(window.location.search.substr(1));
		const arr = str.split('=');
		
		
		$.ajax({
		  // url:'../lib/server/goods_detail.php',
		  url:'/goods_detail',
		  type:'post',
		  data:{goods_id : arr[1]},
		  dataType : 'json',
		  success : function(res){
		    console.log(res);
		
		    result = res;
		
		    let str = '';
		    str = `	
	<div class="de_container w">
	    <!-- 面包屑导航 -->
	    <div class="crumb_wrap">
	        <a href="javascript:history.go(-1)">${res.cat_one_id}</a> 〉 <a href="#">${res.cat_two_id}   </a> 〉 <a href="#">${res.cat_three_id}</a> 
	    </div>
	    <div class="product_intro clearfix">
	        <div class="preview_wrap fl">
	            <div class="preview_img">
	                <img src="${res.goods_small_logo}" alt="...">
	                <div class="mask"></div>
	                <div class="big">
	                    <img src="${res.goods_big_logo}" alt="..." class="bigImg">
	                </div>
	            </div>
	        </div>
	        <div class="itemInfo_wrap fr">
	            <div class="sku_name">
	               ${res.goods_name}
	            </div>
	            
	            <div class="summary">
	                <dl class="summary_price">
	                    <dt>价格</dt>
	                    <dd>
	                        <i class="price">${res.goods_price}</i>
	
	                        <a href="javascript:;">降价通知</a>
	
	                        <div class="remark">累计评价612188</div>
	
	                    </dd>
	                </dl>
	                <dl class="summary_promotion">
	                    <dt>促销</dt>
	                    <dd>
	                        满2件，总价打8.80折；满3件，总价打7.50折 详情 >>
	                    </dd>
	                </dl>
	                <dl class="summary_support">
	                    <dt>支持</dt>
	                    <dd>由 凡客 发货, 自营旗舰店提供售后服务. 23:54前下单，预计明天(6月6日)送达 *7天无理由退货</dd>
	                </dl>
	                <dl class="choose_color">
	                    <dt>选择颜色</dt>
	                    <dd>
	                        <a href="javascript:;" class="current">黑色款</a>
	                        <a href="javascript:;">灰色宽</a>
	                        <a href="javascript:;">粉色宽</a>
	                        <a href="javascript:;">蓝色款</a>
	                    </dd>
	                </dl>
	                <dl class="choose_version">
	                    <dt>选择型号</dt>
	                    <dd>
	                        <a href="javascript:;" class="current">加大型</a>
	                        <a href="javascript:;">普通型</a>
	                    </dd>
	                </dl>
	                <dl class="choose_type">
	                    <dt>购买方式</dt>
	                    <dd>
	                        <a href="javascript:;" class="current">微信</a>
	                        <a href="javascript:;">支付宝</a>
	                        <a href="javascript:;">银联</a>
	                    </dd>
	                </dl>
	                <div class="choose_btns">
	                    <div class="choose_amount">
	                        <input type="text" value="1">
	                        <a href="javascript:;" class="add">+</a>
	                        <a href="javascript:;" class="reduce">-</a>
	                    </div>
	                    <a href="javascript:;" class="addcar" name="inCar">加入购物车</a>
	                </div>
	            </div>
	        </div>
	    </div>
	
	
	    <div class="product_detail clearfix">
	        <div class="aside fl">
	            <div class="tab_list">
	                <ul>
	                    <li class="first_tab ">相关分类</li>
	                    <li class="second_tab current">推荐品牌</li>
	                </ul>
	            </div>
	            <div class="tab_con">
	                <ul>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price">￥${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price">${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price">${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price">${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price"><i>￥</i>${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                    <li>
	                        <img src="${res.goods_small_logo}" alt="...">
	                        <h5>${res.cat_three_id}</h5>
	                        <div class="aside_price">${res.goods_price}</div>
	                        <a href="javascript:;" class="as_addcar">加入购物车</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	        <div class="detail fr">
	            <div class="detail_tab_list">
	                <ul>
	                    <li class="current">商品介绍</li>
	                    <li>规格与包装</li>
	                    <li>售后保障</li>
	                    <li>商品评价（50000）</li>
	                    <li>手机社区</li>
	                </ul>
	            </div>
	            <div class="detail_tab_con">
	                <div class="item">
	                     ${res.goods_introduce}
	                </div>
	               
	            </div>
	        </div>
	    </div>
	
	</div>`;
		        
		        $('.box').html(str);
		  }
		})
		
	
		$('.box').on('click' , '[name="inCar"]' , function(){
		
		    const cookieObj = getCookieObj(document.cookie);
		    if( cookieObj.login === undefined ){
		        let bool = window.confirm('您还没有登录,点击确定,跳转登录页面');
		        if(bool === true){
		          window.location.href = `./login.html?${window.location.href}`;
		        }else{
		          return false;
		        }
		    }else if(cookieObj.login === '1'){
		        window.location.href = './cart.html';
		        if(localStorage.getItem('cart') === null  ){
		          result.num = 1;     // 购买数量信息,第一次默认是1
		          result.buy = true   // 默认当前商品是购买状态
		          var arr = [];
		          arr.push(result);
		          
		        }else{
		         
		          let bool = true;
		          var arr = JSON.parse(localStorage.getItem('cart')) ;
		
		          // 循环遍历这个数组
		          arr.forEach(function(item){
		            if(item.goods_id === result.goods_id){
		                item.num++;
		                bool = false;
		            }
		          })
		          
		         
		          if(bool === true){
		            result.buy = true;
		            result.num = 1;
		            arr.push(result);   // 在最后新增数据
		          }
		
		        }
		        localStorage.setItem('cart' , JSON.stringify(arr) );
		    }
		})
		
		
		
		
		$('.box').on('click','.choose_color dd a',function(){
			$(this).addClass('current').siblings().removeClass("current");
		})
				$('.box').on('click','.choose_version dd a',function(){
					$(this).addClass('current').siblings().removeClass("current");
				})	
				$('.box').on('click','.choose_type dd a',function(){
					$(this).addClass('current').siblings().removeClass("current");
				})	
				
		$(window).scroll(function(){
			$('.toTop').click(function(){
				$("html,body").stop().animate({scrollTop:0},1000);
				
				// $(window).scrollTop(0);
			})
		})
		$('.code').hover(function(){
			$('[name="code"]').show();
		},function(){
			$('[name="code"]').hide();
		})