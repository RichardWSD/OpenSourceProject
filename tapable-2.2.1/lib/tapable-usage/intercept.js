const { SyncHook } = require("../index");

// 实例化一个加速的hook
const accelerate = new SyncHook(["newSpeed"]);

// 注册第一个回调，加速时记录下当前速度
accelerate.tap("LoggerPlugin", (newSpeed) =>
  console.log("LoggerPlugin", `加速到${newSpeed}`)
);

accelerate.intercept({
	call: (newSpeed) => {
		console.log("Starting to test speed " + newSpeed);
	},
	register: (tapInfo) => {
		// tapInfo = { type: "promise", name: "GoogleMapsPlugin", fn: ... }
		console.log(`${tapInfo.name} is register`, tapInfo);
		return tapInfo; // may return a new tapInfo object
	},
  tap: (tapInfo) => {
    console.log(`${tapInfo.name} is tap`, tapInfo);
  },
  loop: (...args) => {
    console.log('loop is working', args);
  }
})

// 触发一下加速事件，看看效果吧
accelerate.call(500);
