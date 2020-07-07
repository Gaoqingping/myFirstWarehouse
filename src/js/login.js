$('form').submit(function(e) {
				e.preventDefault();

				let username = $('[name="username"]').val();
				let userpwd = $('[name="userpwd"]').val();

				$('[name="username"]').keyup(function() {
					let username = $('[name="username"]').val();
					let userpwd = $('[name="userpwd"]').val();
					if (username == "") {
						$('[name="nameTip"]').html("！用户名不能为空")
					} else {
						$('[name="nameTip"]').html("")
					}
				})

				$('[name="userpwd"]').keyup(function() {
					let username = $('[name="username"]').val();
					let userpwd = $('[name="userpwd"]').val();
					if (userpwd == "") {
						$('[name="pwdTip"]').html("！密码不能为空")
					} else {
						$('[name="pwdTip"]').html("")
					}
				})

				if (username == "") {
					$('[name="nameTip"]').html("！用户名不能为空")
				} else {
					$('[name="nameTip"]').html()
				}
				if (userpwd == "") {
					$('[name="pwdTip"]').html("！密码不能为空")
				} else {
					$('[name="pwdTip"]').html()
				}
				
				
				
				login();


				// $.ajax({
				// 	url: '../lib/server/goods_login.php',
				// 	// url: '/goods_login',
				// 	type: 'post',
				// 	data: {
				// 		userName: username,
				// 		userPwd: userpwd
				// 	},
				// 	dataType: 'json',
				// 	success: function(res) {
				// 		if (res == '1') {
				// 			window.alert('您登录成功,点击返回');
				// 		// let str = decodeURIComponent(window.location.search);
				// 		// console.log(decodeURIComponent(window.location.search));
				// 		// str = str.substr(1);
				// 			// window.location.href = str;
							
				// 			window.history.back();
				// 			setCookies('login', 1, 7 * 24 * 60 * 60);

				// 		} else if (res == '0') {
				// 			window.alert('您登录失败,请继续检查用户名或密码');
				// 		}
				// 	}
				// })
				
				

			})

			//记住登录名和密码
			var remname = document.querySelector('[name="username"]');
			var rempsw = document.querySelector('[name="userpwd"]');
			var remember = document.querySelector('[name="rem_login"]');
			if (localStorage.getItem('username') && localStorage.getItem('userpsw')) {
				remname.value = localStorage.getItem('username');
				rempsw.value = localStorage.getItem('userpsw');
				remember.checked = true;
			}
			remember.addEventListener('change', function() {
				if (this.checked) {
					localStorage.setItem('username', remname.value)
					localStorage.setItem('userpsw', rempsw.value)
				} else {
					localStorage.removeItem('username');
					localStorage.removeItem('userpsw');
				}
			})
			
			
			/**
			 * 登录的主方法
			 */
			function login() {
				if (localStorage.user) {
					// 从localStorage取出键为user的数据模型
				let	arr = eval(localStorage.user);
					let k = 0;
					// 循环取出，可用其他方法代理，数据量多的情况下，不建议使用for循环
					for (var e in arr) {
						// 判断用户名，密码是否和localStorage中的数据一致，兼容性写法必须添加trim(),不需要兼容可以不写
						if ($('[name="username"]').val().trim() == arr[e].loginName) {
							if ($('[name="userpwd"]').val().trim() == arr[e].loginPsd) {
								alert('登录成功');
								// 成功后清除用户名和密码
								clear();
								k = 0;
								
				// window.history.back();
				window.location.href = '../pages/index.html'
				setCookies('login', 1, 7 * 24 * 60 * 60);
								
								return;
							} else {
								alert('密码错误');
								// 失败后清除用户名和密码
								clear();
								k = 0;
								return;
							}
						} else {
							k = 1;
						}
					}
					if (k == 1) {
						alert('用户名不存在');
						clear();
					}
				} else {
					alert('用户名不存在，正在跳转到注册页面！');
					window.location.href = "./register.html";
					clear();
				}
			}
			/**
			 * 清空数据
			 * 等同于
			 * document.getElementById("loginName").value="";
			 * document.getElementById("loginPsd").value="";
			 */
			function clear() {
				$('[name="username"]').val("");
				$('[name="userpwd"]').val("");
			}