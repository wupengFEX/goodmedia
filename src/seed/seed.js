/**
 * @author fuqiang[designsor@gmail.com]
 * @version 20110915
 * @fileoverview 动米网种子文件
 */
(function(W,$,doc){

	 W.GMDEBUG={
		 host:'http://172.16.2.215/gm/',
		 aver:W.location.href.match('debug')
	 }
		
	 var basehost,
	 		 debughost=W.GMDEBUG.host+'src/',
	 		 version='20110915',
	 		 loadtype='normal',
	 		 scripts=$('script'),
			 onlinejs='GM-min.js',
			 debuglist=[
			 	'core/GMcore.js',
				'tooloverlay/overlay.js',
				'tools/carousel/carousel.js',
				'tools/bubble/bubble.js',
				'tools/switchable/switchable.js',
				'tools/temp/temp.js',
				'tools/cookie/cookie.js',
				'tools/loadcss/loadcss.js',
				'widget/ie6fix/ie6fix.js',
				'widget/console/console.js',
				'widget/detercopy/detercopy.js'
			 ],
			 putjs=function(type){
					var fn={
						debug:function(){
							$.each(debuglist,function(i,path){
									doc.write('<script charset="utf-8" type="text/javascript" src="'+debughost+path+'"></script>');
							});
						},
						normal:function(){
							doc.write('<script charset="utf-8" type="text/javascript" src="'+basehost+onlinejs+'?t='+version+'.js"></script>');
						}
					}
					if(type) fn[type]();
			 };

		scripts.each(function(i,script){
				var src=$(script).attr('src');
				if(src){
					var index=src.lastIndexOf('seed-min.js');
					if(index!=-1){
						basehost=src.slice(0,index);
						return false;
					}
				}
			});

		if(!basehost) throw 'base path not found';
		
		if(W.GMDEBUG.aver) loadtype='debug';
		
		putjs(loadtype);

})(window,jQuery,document);