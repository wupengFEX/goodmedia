(function(a,c){var b=function(j,i,h,e){var g=["北京|昌平区,朝阳区,崇文区,大兴区,东城区,丰台区,海淀区,门头沟区,石景山区,通州区,西城区,宣武区","长春|朝阳区,二道区,高新区,宽城区,绿园区,南关区","长沙|芙蓉区,开福区,天心区,雨花区,岳麓区","常州|湖塘镇,天宁区,新北区,钟楼区","成都|成华区,金牛区,锦江区,郫县,青羊区,温江县,武侯区,新都区","大连|甘井子区,金州区,开发区,沙河口区,西岗区,中山区","东莞|东城区,虎门镇,南城区,石碣镇,石龙镇,莞城区,万江区","佛山|禅城区,南海区,顺德区","福州|仓山区,鼓楼区,鼓楼新区,晋安区,马尾区,台江区","广州|白云区,番禺区,海珠区,花都区,黄埔区,开发区,荔湾区,萝岗区,天河区,越秀区,增城区","哈尔滨|道里区,道外区,开发区,南岗区,松北区,香坊区,平房区","杭州|滨江区,拱墅区,江干区,西湖区,下城区,萧山区,上城区","呼和浩特|回民区,新城区","济南|高新区,槐荫区,历城区,历下区,市中区,天桥区","嘉兴|秀城区","昆明|盘龙区,五华区,西山区","兰州|城关区,七里河区,西固区","南京|白下区,鼓楼区,建邺区,江宁区,秦淮区,下关区,玄武区,雨花台区","南宁|江南区","宁波|海曙区,江北区,江东区,鄞州区,镇海区","青岛|城阳区,李沧区,市北区,市南区,四方区","上海|宝山区,长宁区,虹口区,黄浦区,嘉定区,金山区,静安区,卢湾区,闵行区,南汇区,浦东区,浦东新区,浦西区,普陀区,青浦区,松江区,徐汇区,杨浦区,闸北区,奉贤区,黄埔区","深圳|宝安区,福田区,龙岗区,罗湖区,南山区,盐田区","沈阳|大东区,和平区,皇姑区,沈河区,铁西区,于洪区","石家庄|长安区,开发区,桥东区,桥西区,新华区,裕华区","苏州|沧浪区,常熟市,工业园区,金阊区,昆山市,平江区,太仓市,吴中区,相城区","太原|小店区","唐山|开平区","天津|东丽区,和平区,河北区,河东区,河西区,红桥区,蓟县,静海县,南开区","温州|龙湾区,鹿城区,瓯海区,瑞安市,永嘉县,新城区","无锡|城东区,城中区,崇安区,惠山区,江阴市,南长区,南闸镇,青阳镇,霞客镇,新区,宜兴市,滨湖区","武汉|汉口区,汉阳区,洪山区,江岸区,江汉区,青山区,武昌区","西安|霸桥区,碑林区,长安区,莲湖区,未央区,新城区,雁塔区,高新区","厦门|海沧区,湖里区,集美区,思明区,同安区","烟台|福山区,开发区,莱山区,芝罘区","郑州|二七区,管城区,惠济区,金水区,郑东新区,中原区","重庆|巴南区,大渡口,江北区,九龙坡区,南岸区,沙坪坝区,渝北区,渝中区","珠海|斗门区,拱北区,金湾区,香洲区"];function f(k){$.each($(k).children(),function(l,m){if(m.value==0){m.parentNode.removeChild(m)}})}function d(k,n){var m=$(k).get()[0];if(m){m=m.getElementsByTagName("option");for(var l=0;l<m.length;l++){if(m[l].value==n){$(k).get()[0].selectedIndex=l;f(k);break}}}}return{init_city:function(o,n){var m=this;$(j).append('<option value="0">城市</option>');for(var k=0;k<g.length;k++){var l=g[k].split("|")[0];$(j).append('<option value="'+l+'">'+l+"</option>")}$(i).append('<option value="0">城区</option>');if(o){d(j,o);m.init_cityzone()}if(o&&n){d(i,n)}},init_cityzone:function(){if($(j).val()!=0){f(j);for(var m=0;m<g.length;m++){var l=g[m].split("|"),o=l[0];if($(j).val()!=o){continue}var n=l[1].split(",");if($(j).val()==o){$(i).html("");$(i).append('<option value="0">请选择城区</option>');for(var k=0;k<n.length;k++){$(i).append('<option value="'+n[k]+'">'+n[k]+"</option>")}}}}},init:function(l,m){var k=this;k.init_city(h,e);$(j).change(k.init_cityzone);$(i).change(function(){var n=$(j).val()+" "+$(i).val();if(l){l(n)}});if(m){m()}}}};if(c&&c.widget){c.widget.cityzone=b}})(window,GM);