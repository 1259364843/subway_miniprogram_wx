const BASE_URL = "";
class MYRequest {
	request(url, method, params) {
		// 返回promise
		return new Promise((resolve, reject) => {
			// var header = {
			//     "Content-Type": "application/json",
			//     "X-Requested-With": 'XMLHttpRequest'
			// };
			// 携带token
			// 如果本地存储中存在用户信息则携带token,无则说明未登录
			// if (wx.getStorageSync("user")) {
			//     let token = JSON.parse(wx.getStorageSync("user")).token;
			//     header["Authorization"] = `Bearer ${token}`;
			// }

			wx.request({
				url: BASE_URL + url,
				method: method,
				// header: header,
				data: params,
				success: function (res) {
					resolve(res);
				},
				fail: function (err) {
					reject(err);
				},
			});
		});
	}
	get(url, params) {
		return this.request(url, "GET", params);
	}
	post(url, data) {
		return this.request(url, "POST", data);
	}
	put(url, data) {
		return this.request(url, "PUT", data);
	}
	delete(url, data) {
		return this.request(url, "DELETE", data);
	}
}
const myRequest = new MYRequest();
export default myRequest;
