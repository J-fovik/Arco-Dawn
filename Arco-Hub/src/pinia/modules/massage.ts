import dayjs from 'dayjs';
import { shallowRef } from 'vue';
import { defineStore } from 'pinia';
import { useIntervalFn } from '@vueuse/core';
import { useAsyncData } from '@/hooks';
import { Notification } from '@arco-design/web-vue';
import { URL, curryingRequest } from '@/service';

export const useMessageStore = defineStore('message', () => {
	// 记录最新消息时间
	let newMessageDate = '';
	// 消息数量
	const messageNum = shallowRef(0);
	// 轮训查询消息
	const { pause, resume } = useIntervalFn(() => initMessageData(), 60 * 1000, {
		immediate: false,
	});
	// 消息列表
	const { data: messageList, initData: initMessageData } = useAsyncData(async () => {
		// 暂停
		pause();
		// 请求
		// const { res, err } = await curryingRequest({
		// 	url: URL.PUBLIC.MESSAGE_LIST,
		// 	data: {
		// 		pagingOrNot: '1',
		// 		pageSize: 6,
		// 		currentPage: 1,
		// 	},
		// });
		// if (err) return [];

		const data = {
			msgList: [] as any,
			totalCount: 8,
		};
		// 处理错误
		// 开始
		resume();
		// 记录最新消息时间
		if (data.msgList.length) {
			// 没有最新消息时间，则赋值
			if (!newMessageDate) {
				newMessageDate = data.msgList[0].createTime;
			} else {
				// 有最新消息时间且不等于返回的最新时间，提示
				if (newMessageDate !== data.msgList[0].createTime) {
					// 记录的最新时间小于返回的最新时间，表示有新消息
					if (dayjs(newMessageDate).isBefore(dayjs(data.msgList[0].createTime))) {
						// 通知
						Notification.info({
							title: '通知',
							content: '你有新的信息！',
							duration: 5000,
							closable: true,
						});
					}
				}
			}
		}
		// 消息数量
		messageNum.value = data.totalCount;
		// 返回处理后的数据
		return data.msgList;
	});
	// 暴露API
	return {
		messageNum,
		messageList,
		initMessageData,
		pause,
	};
});
