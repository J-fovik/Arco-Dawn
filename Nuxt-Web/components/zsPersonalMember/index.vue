<template>
	<div>
		<a-list :loading="loading" :bordered="false">
			<img src="/images/vip.png" class="w-full" alt="" />
			<div class="flex items-center justify-around relative top-[-90px]">
				<div
					v-for="(item, index) in form.memberList"
					:key="index"
					:class="`text-[${item.color}] `"
					class="w-[260px] rounded-[8px] flex items-center flex-col card-box-shadow"
					:style="{ background: item.background }"
				>
					<div class="flex-1 flex items-center flex-col justify-center text-center">
						<div class="flex-1 mt-[30px]">
							<div class="text-[18px] font-bold">
								<i class="iconfont" :class="item.icon" />
								{{ item.remark }}
							</div>
							<div class="text-[50px] font-[1000] mt-[30px]">
								{{ item.sellingPrice }}<span class="text-[14px]">元</span>
							</div>
							<del class="">全国统一零售价：{{ item.originalPrice }}元</del>
							<div class="mt-[30px]">有效期截至: {{ item.validityPeriod }}</div>
							<div
								class="rounded-[8px] w-[200px] h-[40px] leading-[40px] text-center text-[18px] font-bold mt-[20px] cursor-pointer"
								:class="`bg-[${item.isHave == '1' ? '' : item.color}] `"
								:style="{
									color: item.isHave == '1' ? item.color : '#ffffff',
								}"
								@click="
									item.isHave == '1'
										? ''
										: determineLogin(() => {
												(form.memberModal = true), setSelectRow(item);
										  })
								"
							>
								{{ item.isHave == '1' ? '已开通' : '立即开通' }}
							</div>
						</div>
						<div class="mt-[40px] w-[260px] h-[340px] bg-white p-[0px_20px] text-left">
							<div v-for="(o, i) in item.equity" :key="i" class="mt-[30px]">
								<div class="text-[#999] text-[12px]">{{ o.name }}</div>
								<div v-for="v in o.list" :key="v" class="mt-[5px]">
									<i class="iconfont icon-duihao text-[#7C92FF] mr-[2px]" />
									<span class="text-[#333] text-[14px]">{{ v }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-[#F5F5F5] rounded-[8px] p-[20px] leading-[18px] relative top-[-40px]">
				<div>
					<span class="font-bold">1. 购买提示：</span>
					<span
						>高考出分前，地区及高考年份不可修改，选科、分数可任意修改；高考出分后，仅允许修改一次选科，仅允许修改两次分数。</span
					>
				</div>
				<div>
					<span class="font-bold">2. 使用时间：</span>
					<span>有效期截至2025-08-31。</span>
				</div>
				<div>
					<span class="font-bold">3. 适用对象：</span>
					<span
						>普通类文理科考生、新高考选科类考生（提前批次及艺术体育类考生暂不适用）。</span
					>
				</div>
				<div>
					<span class="font-bold">4. 适用平台：</span>
					<span
						>使用购买账号(手机号)登录毕业之家-升学规划官网(www.biye.cc)及毕业之家-升学规划小程序，均可享受志愿填报VIP服务。</span
					>
				</div>

				<div>
					<span class="font-bold">5. 温馨提示：</span>
					<span
						>本系统仅提供志愿填报参考服务，招生计划与录取数据请以学校官方或考试院公布为准。正式填报请前往考试院官网，并根据官方信息，做好志愿核对。</span
					>
				</div>
			</div>
		</a-list>
		<!-- 会员购买 -->
		<zs-modal align-center :show="form.memberModal">
			<zs-buy-member
				:data="selectRow"
				@success="setSelectRow({}, () => ((form.memberModal = false), getMemberList()))"
			/>
		</zs-modal>
	</div>
</template>
<script setup lang="ts" name="ZsPersonalMember">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { determineLogin } = useUser();
// loading
const [loading, setLoading] = useBasicsState(false);
// form
const { form } = useForm(() => ({
	list: [
		{ background: '#F2F5FF', color: '#7C92FF', icon: 'icon-huiyuankax' },
		{ background: '#EFF8FF', color: '#5AB9FF', icon: 'icon-pinpaix' },
		{ background: '#FFF7F0', color: '#FFA864', icon: 'icon-huiyuanzunxiangx' },
	],
	memberList: [] as any,
	memberModal: false,
}));
// 当前数据
const selectRow = ref({} as any);
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	selectRow.value = row;
	if (callBack) callBack();
};
// 获取会员列表
const getMemberList = async () => {
	// 开启loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.USER.GET_VIP_LIST, {
		body: {},
	});
	// 关闭loading
	setLoading(false);
	form.value.memberList = res.data.map((o: any, i: any) => {
		return {
			...o,
			background: form.value.list[i].background,
			color: form.value.list[i].color,
			icon: form.value.list[i].icon,
		};
	});
};
getMemberList();
</script>
