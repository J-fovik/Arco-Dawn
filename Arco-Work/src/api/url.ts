import request, { baseURL } from './axios.config'
export const baseAddress = baseURL
export const getMenuList = (data?: object) => {
	return request({
		url: '/getMenuList',
		method: 'post',
		data,
	});
}
export const getTableList = (data?: object) => {
	return request({
		url: '/getTableList',
		method: 'post',
		data,
	});
}
export const login = (data?: object) => {
	return request({
		url: '/login',
		method: 'post',
		data,
	});
}
export const getMenuListByRoleId = '/getMenusByRoleId'
