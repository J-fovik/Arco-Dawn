import request from '@/service/request';
import URL from '@/service/url';

export default {
    // 用户登录
    login: (data: any) => request({
        method: 'post',
        url: URL.USER.LOGIN,
        data,

    }),
    // 获取用户信息
    getUserInfo: () => request({
        method: 'post',
        url: URL.USER.INFO,
        timeout: 5000
    }),
    // 修改密码
    editPassword: (data: any) => request({
        method: 'post',
        url: URL.USER.PASSWORD_EDIT,
        data
    }),
    // 用户修改
    editUser: (data: any) => request({
        method: 'post',
        url: URL.USER.USER_EDIT,
        data
    }),
    // 换token
    changeToken: (data: any) => request({
        method: 'post',
        url: URL.USER.CHANGE_TOKEN,
        data
    }),
}