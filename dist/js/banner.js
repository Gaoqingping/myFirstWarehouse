"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}window.addEventListener("load",function(){new(function(){function t(e){_classCallCheck(this,t),this.ele=e,this.oUl=e.querySelector("ul"),this.oOl=e.querySelector("ol"),this.oLeftRight=e.querySelector(".arrow"),this.oUllis=e.querySelectorAll("ul li"),this.loop=0,this.loopTime=0}return _createClass(t,[{key:"init",value:function(){this.setLi(),this.setClick(),this.autoLoop(),this.overOut()}},{key:"setLi",value:function(){var o=this;this.oUllis.forEach(function(e,t){var i=document.createElement("li");i.setAttribute("name","olli"),i.setAttribute("index",t),0==t&&(i.className="active"),o.oOl.appendChild(i)})}},{key:"change",value:function(e){this.oUllis[this.loop].style.opacity=0,"right"==e&&this.loop++,"left"==e&&this.loop--,-1==this.loop&&(this.loop=this.oUllis.length-1),this.loop==this.oUllis.length&&(this.loop=0),this.oUllis[this.loop].style.opacity=1,this.setActive()}},{key:"autoLoop",value:function(){var e=this;this.loopTime=setInterval(function(){e.change("right")},3e3)}},{key:"overOut",value:function(){var e=this;this.ele.addEventListener("mouseover",function(){clearInterval(e.loopTime),e.oLeftRight.style.visibility="visible"}),this.ele.addEventListener("mouseout",function(){e.autoLoop(),e.oLeftRight.style.visibility="hidden"})}},{key:"setClick",value:function(){var o=this;this.ele.addEventListener("click",function(e){var t=(e=e||window.e).target||e.srcElement;if("arrow_left"==t.getAttribute("class")&&o.change("left"),"arrow_right"==t.getAttribute("class")&&o.change("right"),"olli"==t.getAttribute("name")){var i=t.getAttribute("index");o.oUllis[o.loop].style.opacity=0,o.loop=i,o.oUllis[o.loop].style.opacity=1,o.setActive()}})}},{key:"setActive",value:function(){var i=this;this.ele.querySelectorAll("ol li").forEach(function(e,t){e.className="",t==i.loop&&(e.className="active")})}}]),t}())(document.querySelector("#banner")).init()});