(function(c,d,a){var b=function(){return{exports:{init:function(){a.selectTag=function(g,h){var e=document.getElementById("tags").getElementsByTagName("li");var f=e.length;for(i=0;i<f;i++){e[i].className=""}h.parentNode.className="selectTag";for(i=0;j=document.getElementById("tagContent"+i);i++){j.style.display="none"}document.getElementById(g).style.display="block"};d(function(){var e=d("#J_Q"),g="请输入关键字",f=d.analyse(a.location.search.slice(1))["s"];if(f){e.val(decodeURIComponent(f))}else{e.val(g)}e.focus(function(){var h=d.trim(e.val());if(h==g){d(this).val("")}});e.blur(function(){var h=d.trim(e.val());if(h==""){d(this).val(g)}});d("#J_Search").submit(function(){var h=d.trim(e.val());if(h==""||h=="请输入关键字"){alert("请输入搜索条件");return false}})})}}}}();if(c&&c.apps){c.apps.idongmi=b}})(GM,jQuery,window);