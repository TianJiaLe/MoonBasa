
// localStorage.sex="女";
// console.log(localStorage.sex)
function getlocalStorage(key){
	//如果cookie中有数据  才可以获取数据
	if(localStorage){		
		var cookieInfo = localStorage;
		//cookie中可能会包含一些 额外的数据，这些数据特点是由   分号和空格间隔的
		//所以 先将 分号和空格  替换掉   替换成  ;
        var arr = localStorage.split(",");	
        console.log(arr);
		for(var i=0;i<arr.length;i++){
			item = arr[i].split("=");
			if(item[0] == key){
				brr = item[1];
				return JSON.parse(brr);//如果找到 我们想要的键，将值转成数组返回 
			}
		}
		//如果cookie中 没有我们想获取的键值，直接返回一个空数组
		return [];
	}
	//如果cookie中没有数据，直接返回一个空数组
	return [];
}