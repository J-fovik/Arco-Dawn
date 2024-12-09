export default defineNuxtPlugin(() => {
	// 用户信息
	const { userInfo } = useUser();
	// 创建插件
	return {
		provide: {
			zsMsg: (type: MsgType, content: string, callBack?: () => void) => {
				// 创建key
				const key = Symbol();
				// 设置
				userInfo.value.msgMap.set(key, {
					type,
					content,
				});
				// 添加定时器移除
				setTimeout(() => {
					userInfo.value.msgMap.delete(key);
					callBack && callBack();
				}, 3000);
			},
		},
	};
});
