/*! Built with http://stenciljs.com */
stimg.loadComponents("xuzklrfv",function(t,e,r,n,o){var i=function(){function t(){}return t.prototype.componentDidLoad=function(){this.addIntersectionObserver()},t.prototype.componentWillUpdate=function(){this.oldSrc&&this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src},t.prototype.handleImage=function(){var t=this.el.querySelector("img");t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){t.removeAttribute("data-src")}},t.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window&&null!==this.src?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&(t.handleImage(),t.removeIntersectionObserver())}),this.io.observe(this.el.querySelector("img"))):setTimeout(function(){t.handleImage()},300)},t.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},t.prototype.render=function(){return e("img",{a:{"data-src":this.src},p:{alt:this.alt}})},t}();t["ST-IMG"]=i},["ST-IMG",[["alt",1],["el",7],["oldSrc",5],["src",1]],{}]);