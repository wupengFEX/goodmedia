(function(a,b,d,e){var c=function(){d("img").each(function(){var g=this.src.toUpperCase();if(g.substring(g.length-3,g.length)=="PNG"){var f=d("<span>").css({width:this.offsetWidth,height:this.offsetHeight,display:"inline-block",cursor:(this.parentElement.href)?"hand":""}).attr({title:this.alt||this.title||"","class":this.className});f[0].style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+this.src+'", sizingMethod="scale")';d(this).replaceWith(f)}})};d.extend({fixpng24:c});if(d.browser.msie&&d.browser.version==6){d(function(){d.fixpng24();e.execCommand("BackgroundImageCache",false,true)})}})(window,GM,jQuery,document);