$("#gallery-wrapper").pinterest_grid({
						no_columns: 4,
						padding_x: 15,
						padding_y: 10,
						margin_left:10,
						margin_bottom: 50,
						single_column_breakpoint: 800
					});
					
						

					let str = decodeURIComponent(window.location.search);
					str = str.substr(1);
					const arr = str.split('=');
					getAjax(1);

					function getAjax(page) {
						$.ajax({
								// url: '../lib/server/goods_list.php',
								url: '/goods_list',
								data: {
									cat_one_id: arr[1],
									page: page,
									line:8,
								},
								type: 'get',
								dataType: 'json',
								success: function(res) {
									console.log(res);
									let str = '';
									res.forEach(function(item) {
										str +=
											` <article class="white-panel">
            <img src="${item.goods_big_logo}" class="thumb">
            <h1><a href="#">${item.goods_name}</a></h1>
			<p class="old_much">原价<span>￥</span> ${Math.floor(item.goods_price/2)}</p>
            <p class="much">抢购价<span>￥</span> ${item.goods_price}</p>
			<p class="detail"><a href="./detail.html?goods_id=${item.goods_id}" >立即抢购</a><p>
        </article>`;
		

									})

									$('section').html(str);
									$('.M-box').pagination({
										mode: 'fixed',
										pageCount: res[0].sumPage,
										totalData: res[0].row,
										current: res[0].page,
										showData: 6,
										size:'large',
										activeCls: 'active',
										jump: true,
										coping: true,
										homePage: '首页',
										endPage: '末页',
										prevContent: '<上页',
										nextContent: '下页>',
										jumpIptCls:'jump-ipt',
										jumpBtnCls:'jump-btn',
										callback: function(result) {
											let p = result.getCurrent();
											getAjax(p);
										}
									});
								},
								
								});
								
						$('.jump-ipt').val('输入跳转页数');
				}
				