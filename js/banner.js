window.addEventListener('load',function(){
	
	class Banner{
		constructor(ele) {
		   this.ele = ele;
		   this.oUl = ele.querySelector('ul');
		   this.oOl = ele.querySelector('ol');
		   this.oLeftRight = ele.querySelector('.arrow');
		   this.oUllis = ele.querySelectorAll('ul li');
		   
		   this.loop = 0; 
		   this.loopTime = 0; 
		}
		
		// 定义初始化函数
		init(){
		    this.setLi();
		    this.setClick();
		    this.autoLoop();
		    this.overOut();
		}
		
		// 生成焦点按钮
		setLi(){
		    
		    this.oUllis.forEach((item,key)=>{
				
		        const li = document.createElement('li');
		    
		        li.setAttribute('name' , 'olli');
		
		        li.setAttribute('index' , key);
		        
		        if(key==0){
		            li.className = 'active';
		        }
		        this.oOl.appendChild(li);
		    })
		}
		
		
		//左右切换
		change(arrow){
		   
		    this.oUllis[this.loop].style.opacity = 0;
		
		    if(arrow == 'right'){
		        this.loop++;
		    }
		
		    if(arrow == 'left'){
		        this.loop--;
		    }
			
		    if(this.loop == -1){
		        this.loop = this.oUllis.length-1 ;
		    }
			
		    if(this.loop == this.oUllis.length){
		        this.loop = 0;
		    }
		
		    this.oUllis[this.loop].style.opacity = 1;

		    this.setActive();
		
		}
		
		autoLoop(){
		    this.loopTime = setInterval(()=>{
		        this.change('right');
		    } , 3000)
		}
		
		overOut(){
		    this.ele.addEventListener('mouseover' , ()=>{
		        clearInterval(this.loopTime);
				this.oLeftRight.style.visibility="visible";
		    })
		    this.ele.addEventListener('mouseout' , ()=>{
		        this.autoLoop();
				this.oLeftRight.style.visibility="hidden";
		    })
		}
		
		//点击事件
		setClick(){
		  
		    this.ele.addEventListener('click' , (e)=>{
				//获取左右切换按钮
				var e =e || window.e;
				let eTag =e.target||e.srcElement;
				
		        if(eTag.getAttribute('class') == 'arrow_left'){
		            this.change('left');
		        }
		
		        if(eTag.getAttribute('class') == 'arrow_right'){
		            this.change('right');
		        }
				
				//获取焦点按钮
		        if(eTag.getAttribute('name') == 'olli'){
		            let k = eTag.getAttribute('index');
		            
		            this.oUllis[this.loop].style.opacity = 0;
		            
		            this.loop = k ;
		            this.oUllis[this.loop].style.opacity = 1;
		
		            this.setActive();
		        }
		    })  
		}
		
		//改变焦点按钮样式
		setActive(){
		    const oOllis = this.ele.querySelectorAll('ol li');
		    oOllis.forEach((item,key)=>{
		        item.className = '';
		        if(key == this.loop){
		            item.className = 'active';
		        }
		    })        
		}
	}
	
	
	
	
	
	
	
	
	
	//实例化
	const oDiv = document.querySelector('#banner');
	const oBanner = new Banner(oDiv);
	oBanner.init();
	
})