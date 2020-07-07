$(".drag-wrapper").draggable();
			$(".resize-item").resizable();
			
			
			
			const cateArr = JSON.parse(localStorage.getItem('cart'));
			setPage(cateArr);

			function setPage(cateArr) {
				let NUM = 0;
				let TYPE = 0;
				let PAY = 0;

				let str1 = '';
				cateArr.forEach(function(item) {
					str1 +=
						`
				   <div class="cart-item">
                       <div class="p-checkbox">
                           <input type="checkbox" name="checked" id="" class="j-checkbox" goods_id="${item.goods_id}" ${item.buy === true ? 'checked' : ''}>
                       </div>
                       <div class="p-goods">
                           <div class="p-img">
                               <img src="${item.goods_small_logo}" alt="" style="width:100px;height:100px">
                           </div>
                           <div class="p-msg">${item.goods_name}</div>
                       </div>
                       <div class="p-price">${item.goods_price}</div>
                       <div class="p-num">
                           <div class="quantity-form">
   				<button name="lost" class="decrement" goods_id="${item.goods_id}" ${ item.num == 1 ? 'disabled' : '' }>-</button>
                               <input type="text" class="itxt" value="${item.num}">
   				<button name="odd"  class="increment" goods_id="${item.goods_id}" ${ item.num == item.goods_number ? 'disabled' : '' }>+</button>
                           </div>
                       </div>
                       <div class="p-sum">￥ ${parseFloat(item.num*item.goods_price).toFixed(2)}</div>
                       <div class="p-action"><a href="javascript:;" goods_id="${item.goods_id}" name="del">删除</a></div>
                   </div>`;
					$('.cart-item-list').html(str1);
					if (item.buy === true) {
						TYPE++;
						NUM += item.num;
						PAY += item.num * item.goods_price;
					}
				});
				let str2 = '';
				str2 +=
					`
			    <div class="select-all">
	                    <input type="checkbox" name="no" id="all" class="checkall">全不选
	                </div>
	                <div class="operation">
	                    <a href="javascript:;" class="remove-batch" name="not"> 删除选中的商品</a>
	                    <a href="javascript:;" class="clear-all" name="clear-all">清空购物车</a>
	                </div>
	                <div class="toolbar-right">
	                    <div class="amount-sum">已经选<strong>${TYPE}</strong>种商品 共<em>${NUM}</em>件</div>
	                    <div class="price-sum">总价： ￥<em>${parseFloat(PAY).toFixed(2)}</em></div>
	                    <div class="btn-area">去结算</div>
	                </div>
			   `;
				$('.cart-floatbar').html(str2);

			}
			
			
			const oDiv = document.querySelector('.cart-warp');
			oDiv.addEventListener('click', function(e) {

				// 全选
				if (e.target.getAttribute('name') === 'checkall') {
						$(".j-checkbox").prop("checked", $('[name="checkall"]').prop("checked"));
						if ($('[name="checkall"]').prop("checked")) {
							cateArr.forEach(function(item) {
								item.buy = true;
							})
						} else {
					  cateArr.forEach(function(item){
						  item.buy =false;
					  })
				}
				}




				      // 不选标签
				      if(e.target.getAttribute('name') === 'no'){
				        cateArr.forEach(function(item){
				          item.buy = false;
				        })
				      }

				//删除选中的商品
				if(e.target.getAttribute('name') === 'not'){
					console.log(123);
				  cateArr.forEach(function(item, key) {
				  	if (item.buy==true) {
				  		cateArr.splice(key, 1);
						$('.cart-item')[key].remove();
				  	}
				  })
				}

				if (e.target.getAttribute('name') === 'checked') {
					let goods_id = e.target.getAttribute('goods_id');
					cateArr.forEach(function(item) {
						if (item.goods_id === goods_id) {
							item.buy = $(e.target).prop('checked');
						}
					})
				}

				//删除按钮
				if (e.target.getAttribute('name') === 'del') {
					let bool = confirm('确定将此商品移出购物车？');
					if (bool) {
						let goods_id = e.target.getAttribute('goods_id');
						cateArr.forEach(function(item, key) {
							if (item.goods_id === goods_id) {
								cateArr.splice(key, 1);
								$('.cart-item')[key].remove();
							}
						})
					}
					

				}

				// 添加按钮
				if (e.target.getAttribute('name') === 'odd') {
					let goods_id = e.target.getAttribute('goods_id');
					cateArr.forEach(function(item, key) {
						if (item.goods_id === goods_id) {
							item.num++;
						}
						if (item.num == item.goods_number) {
							alert('抱歉,库存量不足')
						}
					})
				}

				// 减少按钮
				if (e.target.getAttribute('name') === 'lost') {
					let goods_id = e.target.getAttribute('goods_id');
					cateArr.forEach(function(item, key) {
						if (item.goods_id === goods_id) {
							item.num--;
						}
					})
				}


				//清空购物车
				if (e.target.getAttribute('name') === 'clear-all') {
					cateArr.forEach(function(item, key) {
						cateArr.length = 0;
					})
					$('.cart-item').remove();
				}


				setPage(cateArr);
				localStorage.setItem('cart', JSON.stringify(cateArr));
			})