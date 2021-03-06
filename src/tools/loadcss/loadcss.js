/**
 * @author <a href="mailto:designsor@gmail.com" target="_blank">Fuqiang[designsor@gmail.com]</a>
 * @version 20110822
 * @fileoverview 补充jquery不能$.loadcss,行内插入样式$.insertstyle
 */
(function(W,$,doc){
	//加载css
	var loadcss=function(file){
		if(GM.debug) file=GM.locality(file);
		var link=$('<link>').attr({
					type:'text/css',
					rel:'stylesheet',
					href:file+'?t='+new Date().valueOf()+'.css'
				});
		$('head').prepend(link);
	}
	
	//增加style行内样式
	var insertstyle=function(name,value){
		
	}
	
	$.extend({
		loadcss:loadcss,
		insertstyle:insertstyle
	})
	
})(window,jQuery,document);
