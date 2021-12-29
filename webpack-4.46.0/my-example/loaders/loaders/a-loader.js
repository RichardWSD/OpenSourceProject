function aLoader(content, map, meta) {
	console.log("开始执行aLoader Normal Loader");
	content += "aLoader]";
	// 把 content 赋值给 module.exports 属性的目的是为了导出相应的内容
	return `module.exports = '${content}'`;
}

aLoader.pitch = function(remainingRequest, precedingRequest, data) {
	console.log("开始执行aLoader Pitching Loader");
	console.log(remainingRequest, precedingRequest, data);
};

module.exports = aLoader;
