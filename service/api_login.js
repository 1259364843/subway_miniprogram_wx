import myRequest from './index';

/**
 * 1.用户登录
 */
export function userLogin(param) {
    const {
        mobile,
        password
    } = param
    return myRequest.post(`/platform/users/auth/login`, {
        mobile,
        password,
        type: 1
    })
}