	// 设定验证码
			let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789';
			console.log($('[name="agr"]').attr("checked"));
			var phone=$('#phone');
			var prompt1=$('#prompt1');
			phone.focus(function()
			{
			    $('#div1').show();
			    phone.css('borderColor','#67a1e2');
			    prompt1.text('请输入账号');
			});
			phone.blur(function()
			{
			    phone.css('borderColor','#ddd');
			    if(this.value=="")
			    {
			        prompt1.text("账号不能为空");
			    }else{
					 $('#div1').hide();
				}
			})
			
			
				
			
			//密码验证
			var pwd=$('#password');
			var prompt=$('#prompt3');
			var rag3=/^\w{8,20}$/;
			var rag4=/^\d{8,20}$/;
			var rag5=/^[A-z0-9]{8,10}$/;
			var rag6=/^[A-z0-9]{10,19}$/;
			pwd.focus(function()
			{
			    $('#div3').show();
			    pwd.css('borderColor','#67a1e2');
			    $('#div3').css('width',216);
			    prompt.text("请设置登录密码");
			    $('#grade1').css('backgroundColor','#F1D0B9');
			    $('#grade2').css('backgroundColor','#F1D0B9');
			    $('#grade3').css('backgroundColor','#F1D0B9');
			})
			pwd.blur(function()
			{
			    pwd.css('backgroundColor','#ddd');
			    if(this.value=="")
			    {
			        prompt.text("请设置登录密码");
			        $('#div3').css('width',216);
			    }
			    else
			    {
			        if(rag3.test(this.value)==true)
			        {
			            if(rag4.test(this.value)==true)
			            {
			                prompt.text("密码过于简单，有被盗风险");
			                $('#div3').css('width',216);
			            }
			            if(rag4.test(this.value)==false)
			            {
			                $('#div3').hide();
			            }
			            if(rag5.test(this.value)==true)
			            {
			                if(rag4.test(this.value)==true)
			                {
			                    $('#grade1').css('backgroundColor','#ff893a');
			                }
			                else
			                {
			                    $('#grade1').css('backgroundColor','#ff893a');
			                    $('#grade2').css('backgroundColor','#ff893a');
			                }
			            }
			            if(rag6.test(this.value)==true)
			            {
			                if(rag4.test(this.value)==true)
			                {
			                    $('#grade1').css('backgroundColor','#ff893a');
			                }
			                else
			                {
			                    $('#grade1').css('backgroundColor','#ff893a');
			                    $('#grade2').css('backgroundColor','#ff893a');
			                    $('#grade3').css('backgroundColor','#ff893a');
			                }
			            }
			        }
			        else
			        {
			            prompt.text("密码需为8-20个字符,由字母、数字和符号组成。");
			            $('#div3').css('width',300);
			        }
			    }
			})
			
			// 确认密码验证
			var pwds=$('#password1');
			var prompt4=$('#prompt4');
			pwds.focus(function()
			{
			    $('#div4').show();
			    prompt4.text("请再次输入密码");
			});
			pwds.blur(function()
			{
			    if(this.value=="")
			    {
			        prompt4.text("确认密码不能为空");
			    }
			    else
			    {
			        if(this.value==pwd.val())
			        {
			           $('#div4').hide();
			        }
			        else
			        {
			            prompt4.text("您两次输入的密码不一致");
			        }
			    }
			})
			
			if($('[name="agr"]').attr("checked")==undefined){
							  $("#btn").attr("disabled","true");
							  $("#btn").attr("disabled",true);
							  $("#btn").attr("disabled","disabled");
								  
			}else{  
							  $("#btn").removeAttr("disabled");
							  $("#btn").attr("disabled",false);
			}
			
			function setVc() {
			  let newStr = '';
			  for (let i = 1; i <= 6; i++) {
			    let num = parseInt(Math.random() * str.length);
			    if (newStr.indexOf(str[num]) === -1) {
			      newStr += str[num];
			    } else {
			      i--;
			    }
			  }
			  return newStr;
			}
			
			$('[name="vc2"]').html( setVc() ).css("fontSize","20px");
			
			$('[name="vc2"]').click(function(){
			  $(this).html( setVc() );
			})
			
			$('[type="button"]').click(function () {
			  
			  
			  let username = $('[name="username"]').val();
			  let userpwd1 = $('[name="userpwd1"]').val();
			  let userpwd2 = $('[name="userpwd2"]').val();
			  
			  
			 
			  
						  
			let uservc = $('[name="vc1"]').val();
			if( uservc.toLowerCase() !== $('[name="vc2"]').html().toLowerCase()){
			  $('#div2').show();
			  $('.text').css('borderColor','#67a1e2');
			  $('#prompt2').text('验证码不正确');
			  return false;
			}
			
			 	
			
			
			  // $.ajax({
			  //     url:'../lib/server/goods_res.php',
				 //  // url:'/goods_res',
			  //     type:'post',
			  //     data:{userName:username,userPwd:userpwd1},
			  //     dataType:'json',
			  //     success:function(res){
			  //       if(res == '1'){
			  //         window.alert('注册成功,点击确定,跳转首页');
			  //         window.location.href = './index.html';
			  //       }else if(res == '0'){
			  //         window.alert('注册失败');
			  //       }
			  //     }
			  // })
			register()
			})
			
			
			/**
			 * 注册的主方法
			 */
			function register() {
			   
			        // 定义一个空数组
			        let arr = [];
			        if(localStorage.user) {
			            arr = eval(localStorage.user);
			            for(e in arr) {
			                // 取出数据判断是否注册过
			                if($('[name="username"]').val().trim() == arr[e].loginName) {
			                    alert('该账号已被注册');
			                    clear();
			                    return;
			                }
			            }
			        }
			        const user = {
			            'loginName': $('[name="username"]').val(),
			            'loginPsd':  $('[name="userpwd1"]').val()
			        };
			        // 添加数据
			        arr.push(user);
			        localStorage.user = JSON.stringify(arr);
			        alert('注册成功');
			        window.location.href="./login.html";
			        clear();
			    
			}
			
			/**
			 * 清空数据
			 * 等同于
			 * document.getElementById("loginName").value="";
			 * document.getElementById("loginPsd").value="";
			 */
			function clear() {
			    $('[name="username"]').val("");
			    $('[name="userpwd1"]').val("");
			    $('[name="userpwd2"]').val("");
			}