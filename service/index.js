import {
    BASE_URL
} from './BASE.js'
class MYRequest {
    request(url, method, params) {
        // 返回promise
        return new Promise((resolve, reject) => {
            let header = {
                "Content-Type": "application/json",
                "X-Requested-With": 'XMLHttpRequest',
                "source": "CD-METRO-APP",
                "system": "android",
                "appVersion": "202304231",
                "deviceId": "00000000-6e1a-5d7e-6e1a-5d7e00000000",
                "user": "external",
                "vendor": "XiaomiMI 9",
                "system-version": "12",
                "language": "zh"
            };
            // 携带token
            // 如果本地存储中存在用户信息则携带token,无则说明未登录
            if (wx.getStorageSync("userDetail")) {
                console.log();
                const {
                    token,
                    userId
                } = wx.getStorageSync("userDetail")
                header["token"] = token;
                header["userid"] = userId;
            }
            console.log(header);

            wx.request({
                url: BASE_URL + url,
                method: method,
                header: header,
                data: params,
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                }
            })
        })

    }
    get(url, params) {
        return this.request(url, 'GET', params);
    }
    post(url, data) {
        return this.request(url, 'POST', data);
    }
    put(url, data) {
        return this.request(url, 'PUT', data);
    }
    delete(url, data) {
        return this.request(url, 'DELETE', data);
    }
}
const myRequest = new MYRequest();
export default myRequest;