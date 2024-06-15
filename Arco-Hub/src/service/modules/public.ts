import request from '@/service/request';
import URL from '@/service/url';

export default {
	// 查询字典
	getDictionaryInfo: (data: any) =>
		request({
			method: 'post',
			url: URL.PUBLIC.DICTIONARY,
			data,
		}),
		// 消息列表
	getMessageList: (data: any) =>
		request({
			method: 'post',
			url: URL.PUBLIC.MESSAGE_LIST,
			data,
		}),
};
