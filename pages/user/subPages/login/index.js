// pages/user/subPages/login/index.js
import SparkMD5 from 'spark-md5'
import {
    userLogin
} from '../../../../service/api_login'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userDetail: {},
        phoneNumber: '',
        textPassword: ''
    },
    // 登录
    async onTabLoginBtn() {
        const password = SparkMD5.hash(this.data.textPassword)
        const param = {
            mobile: this.data.phoneNumber,
            password
        }
        if (password !== '') {
            const {
                data: {
                    data
                }
            } = await userLogin(param)
            this.setData({
                userDetail: data
            })
            wx.setStorage({
                key: "userDetail",
                data: data
            })
        }
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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