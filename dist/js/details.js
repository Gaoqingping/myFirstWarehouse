"use strict";console.log(window.location.href);var result=[],str=decodeURIComponent(window.location.search.substr(1)),arr=str.split("=");$.ajax({url:"/goods_detail",type:"post",data:{goods_id:arr[1]},dataType:"json",success:function(t){console.log(t);var a;a='\t\n\t<div class="de_container w">\n\t    \x3c!-- 面包屑导航 --\x3e\n\t    <div class="crumb_wrap">\n\t        <a href="javascript:history.go(-1)">'.concat((result=t).cat_one_id,'</a> 〉 <a href="#">').concat(t.cat_two_id,'   </a> 〉 <a href="#">').concat(t.cat_three_id,'</a> \n\t    </div>\n\t    <div class="product_intro clearfix">\n\t        <div class="preview_wrap fl">\n\t            <div class="preview_img">\n\t                <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                <div class="mask"></div>\n\t                <div class="big">\n\t                    <img src="').concat(t.goods_big_logo,'" alt="..." class="bigImg">\n\t                </div>\n\t            </div>\n\t        </div>\n\t        <div class="itemInfo_wrap fr">\n\t            <div class="sku_name">\n\t               ').concat(t.goods_name,'\n\t            </div>\n\t            \n\t            <div class="summary">\n\t                <dl class="summary_price">\n\t                    <dt>价格</dt>\n\t                    <dd>\n\t                        <i class="price">').concat(t.goods_price,'</i>\n\t\n\t                        <a href="javascript:;">降价通知</a>\n\t\n\t                        <div class="remark">累计评价612188</div>\n\t\n\t                    </dd>\n\t                </dl>\n\t                <dl class="summary_promotion">\n\t                    <dt>促销</dt>\n\t                    <dd>\n\t                        满2件，总价打8.80折；满3件，总价打7.50折 详情 >>\n\t                    </dd>\n\t                </dl>\n\t                <dl class="summary_support">\n\t                    <dt>支持</dt>\n\t                    <dd>由 凡客 发货, 自营旗舰店提供售后服务. 23:54前下单，预计明天(6月6日)送达 *7天无理由退货</dd>\n\t                </dl>\n\t                <dl class="choose_color">\n\t                    <dt>选择颜色</dt>\n\t                    <dd>\n\t                        <a href="javascript:;" class="current">黑色款</a>\n\t                        <a href="javascript:;">灰色宽</a>\n\t                        <a href="javascript:;">粉色宽</a>\n\t                        <a href="javascript:;">蓝色款</a>\n\t                    </dd>\n\t                </dl>\n\t                <dl class="choose_version">\n\t                    <dt>选择型号</dt>\n\t                    <dd>\n\t                        <a href="javascript:;" class="current">加大型</a>\n\t                        <a href="javascript:;">普通型</a>\n\t                    </dd>\n\t                </dl>\n\t                <dl class="choose_type">\n\t                    <dt>购买方式</dt>\n\t                    <dd>\n\t                        <a href="javascript:;" class="current">微信</a>\n\t                        <a href="javascript:;">支付宝</a>\n\t                        <a href="javascript:;">银联</a>\n\t                    </dd>\n\t                </dl>\n\t                <div class="choose_btns">\n\t                    <div class="choose_amount">\n\t                        <input type="text" value="1">\n\t                        <a href="javascript:;" class="add">+</a>\n\t                        <a href="javascript:;" class="reduce">-</a>\n\t                    </div>\n\t                    <a href="javascript:;" class="addcar" name="inCar">加入购物车</a>\n\t                </div>\n\t            </div>\n\t        </div>\n\t    </div>\n\t\n\t\n\t    <div class="product_detail clearfix">\n\t        <div class="aside fl">\n\t            <div class="tab_list">\n\t                <ul>\n\t                    <li class="first_tab ">相关分类</li>\n\t                    <li class="second_tab current">推荐品牌</li>\n\t                </ul>\n\t            </div>\n\t            <div class="tab_con">\n\t                <ul>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price">￥').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price">').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price">').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price">').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price"><i>￥</i>').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                    <li>\n\t                        <img src="').concat(t.goods_small_logo,'" alt="...">\n\t                        <h5>').concat(t.cat_three_id,'</h5>\n\t                        <div class="aside_price">').concat(t.goods_price,'</div>\n\t                        <a href="javascript:;" class="as_addcar">加入购物车</a>\n\t                    </li>\n\t                </ul>\n\t            </div>\n\t        </div>\n\t        <div class="detail fr">\n\t            <div class="detail_tab_list">\n\t                <ul>\n\t                    <li class="current">商品介绍</li>\n\t                    <li>规格与包装</li>\n\t                    <li>售后保障</li>\n\t                    <li>商品评价（50000）</li>\n\t                    <li>手机社区</li>\n\t                </ul>\n\t            </div>\n\t            <div class="detail_tab_con">\n\t                <div class="item">\n\t                     ').concat(t.goods_introduce,"\n\t                </div>\n\t               \n\t            </div>\n\t        </div>\n\t    </div>\n\t\n\t</div>"),$(".box").html(a)}}),$(".box").on("click",'[name="inCar"]',function(){var t=getCookieObj(document.cookie);if(void 0===t.login){if(!0!==window.confirm("您还没有登录,点击确定,跳转登录页面"))return!1;window.location.href="./login.html?".concat(window.location.href)}else if("1"===t.login){if(window.location.href="./cart.html",null===localStorage.getItem("cart")){result.num=1,result.buy=!0,(a=[]).push(result)}else{var a,n=!0;(a=JSON.parse(localStorage.getItem("cart"))).forEach(function(t){t.goods_id===result.goods_id&&(t.num++,n=!1)}),!0===n&&(result.buy=!0,result.num=1,a.push(result))}localStorage.setItem("cart",JSON.stringify(a))}}),$(".box").on("click",".choose_color dd a",function(){$(this).addClass("current").siblings().removeClass("current")}),$(".box").on("click",".choose_version dd a",function(){$(this).addClass("current").siblings().removeClass("current")}),$(".box").on("click",".choose_type dd a",function(){$(this).addClass("current").siblings().removeClass("current")}),$(window).scroll(function(){$(".toTop").click(function(){$("html,body").stop().animate({scrollTop:0},1e3)})}),$(".code").hover(function(){$('[name="code"]').show()},function(){$('[name="code"]').hide()});