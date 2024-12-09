export default () => {
	// 请求插件
	const { $zsFetch, $zsMsg } = useNuxtApp();
	// 路由信息
	const router = useRouter();
	// 用户信息
	const userInfo = useState<any>('userInfo', () => ({
		provinceModel: false, // 选择省份模态框
		loginModal: false, // 登录注册模态框
		loginType: '1', // 登录类型（登录1/修改密码2/注册3）
		userInfoModal: false, // 用户信息模态框
		userInfoModalName: '完善学生信息', // 用户信息模态框名称
		loading: false, // loading
		loadingContent: '正在加载...', // loading文本
		msgMap: new Map(), // 消息提示
	}));
	// 获取用户信息
	const getUserInfo = async () => {
		// 存在token查询
		if (useCookie('token')?.value) {
			// 请求
			const [err, res] = await $zsFetch(API_URLS.USER.GET_USER_INFO, {}, { isMsg: false });
			// 处理错误
			if (err) {
				// 清除token
				useCookie('token').value = '';
				// 返回
				return false;
			}
			// 设置用户信息
			userInfo.value = {
				...userInfo.value,
				...res.data,
			};
			// 返回
			return true;
		}
		console.log(userInfo.value);

		return false;
	};
	/**
	 * 跳转验证
	 */
	const determineLogin = async (callBack?: () => void) => {
		// 未登录
		if (!userInfo.value.phone) {
			// 提示登录
			// $zsMsg('waring', '请先登录！');
			userInfo.value.loginModal = true;
			return;
		}
		// 登录后未完善信息
		if (!userInfo.value.score) {
			// 提示完善信息！
			// $zsMsg('waring', '请完善信息！');
			userInfo.value.userInfoModal = true;
			return;
		}
		// 如果提供了回调函数，并且有参数，则调用回调函数并传递参数
		callBack && callBack();
	};

	// 退出登录
	const logoutUser = async () => {
		// 恢复默认值
		userInfo.value = {
			provinceModel: false, // 选择省份模态框
			loginModal: false, // 登录注册模态框
			loginType: '1', // 登录类型（登录1/修改密码2/注册3）
			userInfoModal: false, // 用户信息模态框
			userInfoModalName: '完善学生信息', // 用户信息模态框名称
			loading: false, // loading
			loadingContent: '正在加载...', // loading文本
			msgMap: new Map(), // 消息提示
			province: Local.get('province') ?? '',
		} as any;
		// 清除cookie
		useCookie('token').value = '';
		// 退出成功提示
		$zsMsg('success', '退出登录成功！');
		// 回到首页
		await navigateTo('/');
		router.go(0);
	};
	// 暴露API
	return { userInfo, getUserInfo, determineLogin, logoutUser };
};
