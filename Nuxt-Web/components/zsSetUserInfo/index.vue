<template>
	<div class="bg-white p-[30px_50px] rounded-[5px_5px] w-[900px]">
		<div class="flex justify-between items-center cursor-pointer mb-[10px]">
			<h1>{{ userInfo.userInfoModalName }}</h1>
			<icon-close size="20" @click="emits('cancel')" />
		</div>
		<a-form
			ref="formRef"
			:model="form"
			label-align="right"
			size="large"
			auto-label-width
			:rules="rules"
			@keyup.enter="validateData"
		>
			<a-grid :cols="2" :colGap="12" :rowGap="12">
				<template v-if="userInfo.userInfoModalName === '完善学生信息'">
					<a-grid-item>
						<a-form-item label="手机号:" field="phone" :validate-trigger="['blur']">
							<a-input
								v-model.trim="form.phone"
								disabled
								allow-clear
								placeholder="请输入手机号"
							/>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="姓名:" :validate-trigger="['blur']">
							<a-input
								v-model.trim="form.nickName"
								allow-clear
								placeholder="请输入姓名"
							/>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="所在地区:">
							<zs-select-address
								v-model="form.localArea"
								:data="provinceCityList"
							></zs-select-address>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="性别:">
							<a-select
								v-model="form.sex"
								placeholder="请选择性别"
								allow-clear
								:options="SEX_OPTIONS"
							/>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="就读中学:" :validate-trigger="['blur']">
							<a-input
								v-model.trim="form.highSchool"
								allow-clear
								placeholder="请输入就读中学"
							/>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="所在班级:" :validate-trigger="['blur']">
							<a-input
								v-model.trim="form.locationClass"
								allow-clear
								placeholder="请输入所在班级"
							/>
						</a-form-item>
					</a-grid-item>
				</template>
				<a-grid-item>
					<a-form-item
						label="高考省份:"
						help="注：高考省份和高考年份—旦确认将不可修改"
						field="province"
						:validate-trigger="['blur']"
					>
						<a-select
							v-model="form.province"
							placeholder="请选择高考省份"
							allow-clear
							:disabled="isDisabledProvince"
							:options="provinceList"
							@change="changeProvince"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item>
					<a-form-item label="高考年份:" field="gkYear" :validate-trigger="['blur']">
						<a-select
							v-model="form.gkYear"
							placeholder="请选择高考年份"
							allow-clear
							:disabled="isDisabledProvince"
							:options="GK_DATE_OPTIONS()"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="24">
					<a-form-item label="考试类型:" required>
						<a-radio v-model="form.uType">普通类</a-radio>
					</a-form-item>
				</a-grid-item>
				<template v-if="form.gkms === '3+3'">
					<a-grid-item :span="24">
						<a-form-item label="选择科目(6选3):" required>
							<a-checkbox-group
								:max="3"
								v-model="form.subjectList"
								@change="changeSubject"
							>
								<template
									v-for="item in form.province === '浙江'
										? SUBJECT_OPTIONS
										: SUBJECT_OPTIONS.slice(0, 6)"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<a-space
												align="start"
												class="rounded-[4px] p-[10px_20px] text-center border"
												:class="{
													'border-[#1677ff] bg-[#F2F5FF]': checked,
												}"
											>
												{{ item.label }}
											</a-space>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
					</a-grid-item>
				</template>
				<template v-if="form.gkms === '3+1+2'">
					<!-- 首选科目 -->
					<a-grid-item :span="24">
						<a-form-item label="首选科目(2选1):" required>
							<a-checkbox-group
								:max="1"
								v-model="form.firstSubjectList"
								@change="changeFirstSubject"
							>
								<template
									v-for="item in FIRST_CHOICE_SCIENCES_OPTIONS"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<a-space
												align="start"
												class="rounded-[4px] p-[10px_20px] text-center border"
												:class="{
													'border-[#1677ff] bg-[#F2F5FF]': checked,
												}"
											>
												{{ item.label }}
											</a-space>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
					</a-grid-item>
					<!-- 次选科目 -->
					<a-grid-item :span="24">
						<a-form-item label="次选科目(4选2):" required>
							<a-checkbox-group
								:max="2"
								v-model="form.secondSubjectList"
								@change="changeSecondSubject"
							>
								<template
									v-for="item in SECOND_CHOICE_SCIENCES_OPTIONS"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<a-space
												align="start"
												class="rounded-[4px] p-[10px_20px] text-center border"
												:class="{
													'border-[#1677ff] bg-[#F2F5FF]': checked,
												}"
											>
												{{ item.label }}
											</a-space>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
					</a-grid-item>
				</template>
				<!-- 高考分数 -->
				<a-grid-item>
					<a-form-item label="高考分数:" field="score" :validate-trigger="['input']">
						<a-input-number
							v-model.trim="form.score"
							:precision="0"
							:min="0"
							:max="750"
							hide-button
							allow-clear
							placeholder="请输入高考分数"
							@input="changeScore"
						>
							<template #append>
								<div>分</div>
							</template>
						</a-input-number>
					</a-form-item>
				</a-grid-item>
				<a-grid-item>
					<a-form-item label="省排名:" required>
						<a-input-number
							v-model.trim="form.wc"
							readonly
							hide-button
							placeholder="预估位次（自动换算）"
						>
							<template #append>
								<div>位</div>
							</template>
						</a-input-number>
					</a-form-item>
				</a-grid-item>
			</a-grid>
		</a-form>
		<div class="flex justify-center items-center mt-[30px]">
			<a-button
				size="large"
				class="submit"
				@click="validateData"
				:disabled="isDisabled"
				:loading="loading"
				>保存信息</a-button
			>
		</div>
	</div>
</template>

<script lang="ts" setup name="ZsSetUserInfo">
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { userInfo, getUserInfo } = useUser();
// loading
const [loading, setLoading] = useBasicsState(false);
// 用户信息
const { provinceCityList, provinceList } = useWebsiteInformation();
// 表单
const { form, formRef } = useForm(() => ({
	phone: userInfo.value.phone ?? '',
	nickName: '',
	localArea: '',
	sex: '',
	highSchool: '',
	locationClass: '',
	province: '',
	gkYear: getGkYear(), // 默认高考年份
	uType: true,
	subjectList: [],
	firstSubjectList: [],
	secondSubjectList: [],
	gkms: '',
	score: undefined,
	wc: undefined,
}));
const isDisabled = computed(() => !form.value.wc);
// 是否禁用省份
const isDisabledProvince = computed(() => {
	return (
		userInfo.value.score &&
		userInfo.value.score != '' &&
		userInfo.value.province &&
		userInfo.value.province != ''
	);
	// return false;
});
// 表单验证
const rules = {
	phone: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('请输入手机号');
			if (value && !phoneRule(value)) callback('请输入正确的手机号');
		},
	},
	province: {
		required: true,
		message: '请选择高考省份',
	},
	gkYear: {
		required: true,
		message: '请选择高考年份',
	},
	score: {
		required: true,
		message: '请输入分数',
	},
};
// 切换省份
const changeProvince = (e: any) => {
	// 赋值高考模式
	form.value.gkms = findOptions(provinceList.value, e)?.gkms;
	// 清空选科、分数以及位次
	form.value.subjectList = [];
	form.value.firstSubjectList = [];
	form.value.secondSubjectList = [];
	form.value.score = undefined;
	form.value.wc = undefined;
};
// 切换3+3模式选科
const changeSubject = () => {
	if (form.value.subjectList.length === 3 && form.value.score) {
		// 查询位次
		getEstimatedWc();
	}
};
// 切换首选科目
const changeFirstSubject = () => {
	// 清空分数以及位次
	form.value.score = undefined;
	form.value.wc = undefined;
	if (
		form.value.firstSubjectList.length === 1 &&
		form.value.secondSubjectList.length === 2 &&
		form.value.score
	) {
		// 查询位次
		getEstimatedWc();
	}
};
// 切换次选科目
const changeSecondSubject = () => {
	if (form.value.secondSubjectList.length === 2 && form.value.score) {
		// 查询位次
		getEstimatedWc();
	}
};
// 改变分数
const changeScore = (e: any) => {
	form.value.score = e;
	// 清空位次
	form.value.wc = undefined;
	if (e > 100) {
		// 查询位次
		getEstimatedWc();
	}
};
// 获取预估位次
const getEstimatedWc = async () => {
	// 选科
	const xkList =
		form.value.gkms === '3+3'
			? form.value.subjectList
			: [...form.value.firstSubjectList, ...form.value.secondSubjectList];
	// 未选省份
	if (!form.value.province) {
		// 提示
		return $zsMsg('error', '请选择省份');
	}
	if (['3+1+2', '3+3'].includes(form.value.gkms)) {
		if (xkList.length != 3) {
			// 提示
			return $zsMsg('error', '请选择对应数量科目');
		}
	}
	// 未填分数提示
	if (!form.value.score) {
		// 提示
		return $zsMsg('error', '请输入分数');
	}
	const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_WC, {
		method: 'POST',
		body: {
			score: form.value.score,
			province: form.value.province,
			xk: xkList.join('/'),
		},
	});
	// 处理错误
	if (err) return;
	form.value.wc = res.data ?? '';
};
// 父组件方法
const emits = defineEmits(['cancel', 'success']);
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (form.value.gkms === '3+3' && form.value.subjectList.length !== 3) {
			return $zsMsg('error', '请选择对应数量科目');
		}
		if (
			form.value.gkms === '3+1+2' &&
			(form.value.firstSubjectList.length !== 1 || form.value.secondSubjectList.length !== 2)
		) {
			return $zsMsg('error', '请选择对应数量科目');
		}
		if (!form.value.wc) {
			return $zsMsg('error', '未查询到对应位次');
		}
		// 保存信息
		saveUserInfo();
	});
};

// 保存信息
const saveUserInfo = async () => {
	// 登录loading
	setLoading(true);
	const result = form.value;
	// 选科
	const xkList =
		result.gkms === '3+3'
			? result.subjectList
			: [...result.firstSubjectList, ...result.secondSubjectList];
	const [err, res] = await $zsFetch(API_URLS.USER.SAVE_USER_INFO, {
		method: 'POST',
		body: {
			nickName: result.nickName,
			sex: result.sex,
			province: result.province,
			gkYear: result.gkYear,
			score: result.score,
			wc: result.wc,
			localArea: result.localArea,
			highSchool: result.highSchool,
			locationClass: result.locationClass,
			xk: xkList.join('/'),
			uType: '0',
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 提示保存成功
	$zsMsg('success', '保存成功');
	// 保存省份
	Local.set('province', result.province);
	// 登录loading
	setLoading(false);
	await getUserInfo();
	// 触发成功
	emits('success');
};
// 存在信息回显数据
if (userInfo.value.score) {
	const xkList = userInfo.value.xk.split('/');
	// 是否为3+1+2
	const isSpecial = userInfo.value.gkms === '3+1+2' && ['物', '史'].includes(xkList[0]);
	form.value = {
		...form.value,
		...userInfo.value,
		subjectList: isSpecial ? [] : xkList,
		firstSubjectList: isSpecial ? [xkList[0]] : [], // 回显首选学科
		secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : [], // 回显次选学科
		gkYear: userInfo.value.gkYear.toString(),
		localArea: userInfo.value.district,
	};
} else {
	(form.value.province = userInfo.value.province),
		(form.value.gkms = findOptions(provinceList.value, userInfo.value.province)?.gkms);
}
</script>
<style scoped>
.submit {
	width: 240px;
	color: white;
	height: 48px;
	background: #7c92ff;
}
.submit:hover {
	width: 240px;
	color: white;
	height: 48px;
	background: #7c92ff;
}
:deep(.arco-form-item-message-help) {
	color: red;
}
</style>
