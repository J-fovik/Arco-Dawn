<template>
	<div>
		<!-- 账号信息 -->
		<div class="text-[24px] leading-[28px] font-bold">账号信息</div>
		<div
			class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer mt-[20px]"
		>
			<div class="listItem">
				<div>头像：</div>
				<div class="w-[40px] ml-[20px]">
					<a-upload
						action="/"
						:file-list="fileList"
						:show-file-list="false"
						@change="uploadImg"
					>
						<template #upload-button>
							<div class="relative header">
								<div v-if="headerImg">
									<img
										:src="headerImg"
										class="w-[40px] h-[40px] rounded-[50%] cursor-pointer"
										alt=""
									/>
								</div>
								<div v-else>
									<img
										src="/images/avatar.png"
										class="w-[40px] h-[40px] rounded-[50%] cursor-pointer"
										alt=""
									/>
								</div>
								<div
									class="overlay text-[#fff] text-center leading-[40px] text-[12px]"
								>
									更换
								</div>
							</div>
						</template>
					</a-upload>
				</div>
			</div>
			<div class="listItem">
				<div>账号：</div>
				<div class="ml-[20px]">{{ hidePhoneFormat(userInfo.phone) }}</div>
			</div>
			<div class="listItem justify-between">
				<div class="f-c-c">
					<div>密码：</div>
					<div class="ml-[20px]">******</div>
				</div>
				<div
					class="text-[#FFA864]"
					@click="(userInfo.loginType = '2'), (userInfo.loginModal = true)"
				>
					修改密码
				</div>
			</div>
		</div>

		<!-- 学生信息 -->
		<div class="text-[24px] font-bold mt-[40px] flex items-center justify-between">
			<div>学生信息</div>
			<div
				class="bg-[#FFF7F0] text-[#FFA864] p-[5px_5px] f-c-c rounded-[4px] cursor-pointer"
				@click="
					(userInfo.userInfoModalName = '编辑学生信息'), (userInfo.userInfoModal = true)
				"
			>
				<div class="f-c-c"><i class="iconfont icon-chuangzuo font-bold" /></div>
				<div class="text-[14px] ml-[10px]">编辑信息</div>
			</div>
		</div>
		<div
			class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer mt-[20px]"
		>
			<div class="listItem">
				<div>姓名：</div>
				<div class="ml-[20px]">{{ textFormat(userInfo.nickName) }}</div>
			</div>
			<div class="listItem">
				<div>性别：</div>
				<div class="ml-[20px]">{{ textFormat(userInfo.sex) }}</div>
			</div>
			<div class="listItem">
				<div>高考省份：</div>
				<div>{{ textFormat(userInfo.province) }}</div>
			</div>
			<div class="listItem">
				<div>高考年份：</div>
				<div>{{ textFormat(userInfo.gkYear) }}</div>
			</div>
			<div class="listItem">
				<div>所在地区：</div>
				<div>
					{{
						userInfo.cityName
							? `${userInfo.stateName}/${userInfo.cityName}/${userInfo.districtName}`
							: '-'
					}}
				</div>
			</div>
			<div class="listItem">
				<div>就读中学：</div>
				<div>{{ textFormat(userInfo.highSchool) }}</div>
			</div>
			<div class="listItem">
				<div>选科信息：</div>
				<div>{{ textFormat(userInfo.xk) }}</div>
			</div>
			<div class="listItem">
				<div>高考分数：</div>
				<div>{{ textFormat(userInfo.score) + '分' }}</div>
			</div>
			<div class="listItem">
				<div>省排名：</div>
				<div>{{ textFormat(turnThousandth(userInfo.wc)) + '位' }}</div>
			</div>
			<div class="flex items-center leading-[50px] border-none">
				<div>考试类型：</div>
				<div>{{ textFormat('普通类') }}</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts" name="ZsPersonalData">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo, getUserInfo } = useUser();
const headerImg = ref(userInfo.value.header || '/images/avatar.png');
const fileList = ref([] as any);
// 上传图片
const uploadImg = async (files: Array<any>) => {
	// 转form ofetch 使用 'Content-type': 'multipart/form-data', 不行
	const formData = new FormData();
	formData.append('file', files.at(-1).file);
	const [err, res] = await $zsFetch(API_URLS.USER.UPLOAD_HEAD_IMG, {
		body: formData,
	});
	// 处理错误
	if (err) return;
	headerImg.value = res.data;
	fileList.value = [{ url: res.data }]; // 更新 fileList 以显示新图片
	getUserInfo(); // 获取最新用户信息
};
</script>
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
	border-left: 1px solid var(--color-neutral-3);
	border-right: 1px solid var(--color-neutral-3);
}
.listItem {
	@apply flex items-center leading-[50px] border-dashed border-b-[1px] border-[#EDEDED];
}
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色蒙层 */
	border-radius: 50%;
	display: none; /* 默认不显示 */
}

/* 当鼠标悬停时显示蒙层 */
.header:hover .overlay {
	display: block;
}
</style>
