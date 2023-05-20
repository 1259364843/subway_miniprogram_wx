// pages/user/index.js
import {
    getQRcode
} from '../../service/api_qr'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userDetail: {}
    },
    onTabLogin() {
        wx.navigateTo({
            url: './subPages/login/index',
        })
    },
    onTapQRcode: async () => {
        console.log(1);
        const res = await getQRcode()
        console.log(res);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.getStorage({
            key: 'userDetail',
            success: res => {
                console.log(res.data);
                this.setData({
                    userDetail: res.data
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getTabBar().init();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})