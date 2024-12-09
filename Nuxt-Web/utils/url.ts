export const API_URLS = {
	// 登录
	LOGIN: {
		REGISTER: '/api/v1/web/userRegistration', // 注册
		PHONE_LOGIN: '/api/v1/web/loginByPassWord', // 手机账号密码登录
		LOGIN_VERIFY_CODE: '/api/v1/web/loginVerifyCode', // 短信验证码登登录(未注册时自动注册)
		UPDATE_PASS_WORD: '/api/v1/web/updatePassWord', // 找回密码
		SEND_VERIFY_CODE: '/api/v1/web/sendVerifyCode', // 发送验证码
	},
	// 公共
	PUBLIC: {
		GET_PROVINCE_CITIES: '/api/v1/web/provincesCities', // 获取省市区（编码）
		GET_GK_PROVINCE: '/api/v1/web/provinces', // 获取高考省份
		GET_WC: '/api/v1/web/queryWc', // 获取位次
		GET_DICTIONARIES_LIST: '/api/v1/web/getDictList', // 查询字典
		QUERY_SCHOOL_LIST_BY_NAME: '/api/v1/web/querySchoolListByName', // 查询名称过滤院校列表
		QUERY_MAJOR_LIST_BY_NAME: '/api/v1/web/queryMajorListByName', // 查询名称过滤专业列表
		QUERY_JOB_LIST_BY_NAME: '/api/v1/web/queryJobListByName', // 查询名称过滤职业列表
		QUERY_SYNTHESIS_LIST_BY_NAME: '/api/v1/web/querySynthesisListByName', // 查询名称过滤综合列表
		GET_XK_ML_LIST: '/api/v1/web/xkmlList', // 获取专业学科门类
	},
	// 用户
	USER: {
		GET_USER_INFO: '/api/v1/web/user/getUserInfo', // 获取用户信息
		SAVE_USER_INFO: '/api/v1/web/user/saveUserInfo', // 保存用户信息
		USER_FOLLOW: '/api/v1/web/user/focus', // 用户关注专业/院校
		USER_FOLLOW_COLLEGE_LIST: '/api/v1/web/user/queryFocusSchool', // 获取关注院校
		USER_FOLLOW_MAJOR_LIST: '/api/v1/web/user/queryFocusMajor', // 获取关注专业
		GET_VIP_LIST: '/api/v1/web/product/queryProduct', // 获取会员中心列表
		GET_PRE_CREATE: '/api/v1/pay/preCreate/pc', // 获取支付二维码
		GET_PAY_STATUS: '/api/v1/pay/payorder/query', // 获取支付状态
		UPLOAD_HEAD_IMG: '/api/v1/web/user/uploadHeadImg', // 更换头像
	},
	// 专业
	MAJOR: {
		GET_INDEX_HEIGH_MAY_MAJOR: '/api/v1/web/queryHighPayMajor', // 首页获取高新专业
		GET_CC_LIST: '/api/v1/web/major/queryCcList', // 获取层次列表
		GET_X_KML_LIST: '/api/v1/web/major/queryXkmlList', // 获取门类列表
		GET_ZYL_LIST: '/api/v1/web/major/queryZylList', // 切换专业类列表
		GET_MAJOR_LIST: '/api/v1/web/major/queryMajorList', // 获取专业列表
		GET_MAJOR_DETAIL: '/api/v1/web/major/queryMajorDetail', // 获取专业详情
		GET_SCHOOL_LIST: '/api/v1/web/major/querySchoolList', // 查询专业开设院校
	},
	// 学校
	COLLEGE: {
		GET_INDEX_SCHOOL_RECOMMENDATION_LIST: '/api/v1/web/querySchoolRecommendations', // 首页院校推荐
		GET_INDEX_SCHOOL_SCENERY_LIST: '/api/v1/web/querySchoolScenery', // 首页校园风光
		GET_COLLEGE_LIST: '/api/v1/web/school/querySchoolList', // 获取学校列表
		GET_COLLEGE_DETAIL: '/api/v1/web/school/querySchoolDetails', // 获取学校详情
		GET_SCHOOL_OPEN_MAJOR: '/api/v1/web/school/querySchoolMajor', // 开设专业
		SCHOOL_SCORE_GET_NF: '/api/v1/web/getDataNfBySf', // 学校分数获取年份
		SCHOOL_SCORE_KL_LIST: '/api/v1/web/school/querySchoolKl', // 院校分数科类查询
		GET_SCHOOL_SCORE: '/api/v1/web/school/querySchoolScore', // 获取学校分数
		MAJOR_SCORE_GET_NF: '/api/v1/web/getMajorDataNfBySf', // 专业分数获取年份
		MAJOR_SCORE_KL_LIST: '/api/v1/web/school/queryMajorKl', // 专业分数科类查询
		GET_MAJOR_SCORE_PC: '/api/v1/web/school/querySchoolPc', // 专业分数批次查询
		GET_MAJOR_SCORE: '/api/v1/web/school/queryMajorScore', // 获取专业分数
		PLAN_GET_NF: '/api/v1/web/getPlanNfBySf', // 招生计划获取年份
		PLAN_GET_KL: '/api/v1/web/school/querySchoolPlanKl', // 招生计划获取科类
		GET_PLAN_PC: '/api/v1/web/school/querySchoolPlanPc', // 招生计划批次查询
		GET_PLAN: '/api/v1/web/school/queryPlan', // 获取招生计划
	},
	// 更多
	MORE: {
		GET_PROFESSION: '/api/v1/web/profession/queryProfession', // 获取职业
		GET_PROFESSION_FILTERING: '/api/v1/web/profession/queryProfessionFiltering', // 过滤职业名称获取职业
		GET_PROFESSION_INFO: '/api/v1/web/profession/queryProfessionDetail', // 获取职业详情
		GET_SCHOOL_RANK: '/api/v1/web/school/querySchoolRank', // 大学排名
		GET_PCX_NF: '/api/v1/web/getPcxNf', // 根据省份 查询批次线可选年份
		GET_PCX_PC: '/api/v1/web/getPcxPc', // 根据省份 年份查询批次线可选批次
		GET_PCX_KL: '/api/v1/web/getPcxKl', // 根据省份 年份查询批次线可选科类
		GET_PCX_PC_LIST: '/api/v1/web/intelligence/queryPcx', // 获取批次线列表
		GET_RANK_NF: '/api/v1/web/getRankNf', // 根据省份查询一分一段可选年份
		GET_RANK_KL: '/api/v1/web/getRankKl', // 根据省份年份查询一分一段可选科类
		GET_RANK_WC_LIST: '/api/v1/web/intelligence/queryWcList', // 查位次列表
		GET_RANK_WC_LINE_CHART: '/api/v1/web/intelligence/queryWcLineChart', // 查位次折线图
	},
	// 测评
	EVALUATE: {
		GET_EVALUATE_LIST: '/api/v1/web/evaluation/queryEvaluationList', // 获取测评列表
		QUERY_QUESTIONS: '/api/v1/web/evaluation/queryQuestionsByEvaluationId', // 获取测评详情
		SUBMIT_EVALUATE: '/api/v1/web/evaluation/queryUserEvaluationReport', // 提交报告
		GET_EVALUATE_TIME: '/api/v1/web/evaluation/queryUserEvaluationTime', // 获取测评时间
		GET_MY_EVALUATE_LIST: '/api/v1/web/user/myEvaluation', // 获取我的测评列表
		VIEW_EVALUATE_REPORT: '/api/v1/web/evaluation/queryUserDoneEvaluationReport', // 查看报告
	},
	// 查选科
	CHECK: {
		XK_CHECK_SCHOOL: '/api/v1/web/xk/querySchoolByXk', // 选科查院校
		XK_CHECK_MAJOR: '/api/v1/web/xk/queryMajorByXk', // 选科查专业
		XK_CHECK_MAJOR_SCHOOL: '/api/v1/web/xk/queryMajorSchoolByZydm', //选科查专业_院校匹配
		QUERY_MAJOR_SUM_BY_MATCH: '/api/v1/web/xk/queryMajorSumByXkMatch', // 选科查专业各匹配度数量
		COLLEGE_CHECK_XK: '/api/v1/web/xk/queryXkBySchool', // 大学查选科
		COLLEGE_CHECK_XK_MAJOR_MATCH: '/api/v1/web/xk/queryXkMajorBySchool', // 大学查选科_专业匹配
		MAJOR_CHECK_XK: '/api/v1/web/xk/queryXkByMajor', // 专业查选科
		MAJOR_CHECK_XK_MATCH_SCHOOL: '/api/v1/web/xk/queryXkSchoolByMajor', // 专业查选科_院校匹配
		MAJOR_CHECK_XK_SCHOOL_MATCH_LIST: '/api/v1/web/xk/queryXkSchoolListByMajor', // 专业查选科_院校匹配_匹配院校列表
	},
	// 智能填报
	CHOICE: {
		GET_MAJOR_LIST: '/api/v1/web/intelligence/queryMajorList', // 专业列表
		GET_MAJOR_C_W_B_NUM: '/api/v1/web/intelligence/querySum', // 获取冲稳保数量
		ELIGIBLE_MAJOR_BY_YXMC: '/api/v1/web/intelligence/queryMajorListByYxmc', // 查询可报专业
		GET_SCHOOL_LIST: '/api/v1/web/intelligence/querySchoolList', // 院校列表
		SCHOOL_HISTORY_PLAN: '/api/v1/web/intelligence/querySchoolHistoryPlan', // 院校历年计划
		MAJOR_HISTORY_PLAN: '/api/v1/web/intelligence/queryMajorHistoryPlan', // 专业历年计划
		GET_VOLUNTEER_INFO: '/api/v1/web/intelligence/queryVolunteer', // 获取志愿表信息
		GET_FILLE_IN: '/api/v1/web/intelligence/filledIn', // 查询已填报志愿
		MAJOR_ADD_VOLUNTEER: '/api/v1/web/intelligence/fillVolunteer', // 专业添加志愿
		CHANGE_WISH_NAME: '/api/v1/web/intelligence/updateWishName', // 修改志愿表名称
		CHANGE_WISH_INFO: '/api/v1/web/intelligence/updateWishInfo', // 修改志愿表分数信息
		WISH_SORT: '/api/v1/web/intelligence/wishSort', // 志愿表排序
		WISH_EXPORT_EXCEL: '/api/v1/web/intelligence/wishExecl', // 导出志愿表excel
		WISH_EXPORT_PDF: '/api/v1/web/intelligence/wishPdf', // 导出志愿表pdf
		CLEAR_WISH: '/api/v1/web/intelligence/clearWish', // 清空志愿
		WISH_INPUT_SORT: '/api/v1/web/intelligence/wishInputSort', // 志愿表输入修改排序
		WISH_DRAG_SORT: '/api/v1/web/intelligence/wishDragSort', // 志愿表拖拽排序
		DELETE_WISH_BY_ID: '/api/v1/web/intelligence/deleteWishById', // 删除指定志愿
		GET_MY_WISH: '/api/v1/web/user/myWish', // 获取我的志愿表
		DELETE_MY_WISH: '/api/v1/web/user/delMyWish', // 删除我的志愿
		GET_ADD_WISH_PC_LIST: '/api/v1/web/user/queryAddWishPcList', //查询可新增志愿批次列表
		ADD_WISH: '/api/v1/web/user/addWish', // 新增志愿
		INDEX_TO_FILL_VOLUNTEER: '/api/v1/web/toFillVolunteer', // 首页去推荐志愿
	},
};
