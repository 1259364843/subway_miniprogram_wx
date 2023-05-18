// pages/metro/metro.js
import {
    getHomeDetail
} from "../../service/api_home"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 导航菜单
        navigations: [],
        current: 0,
        autoplay: true,
        duration: 500,
        interval: 5000,
        swiperList: []
    },
    onTapStationList(){
        wx.navigateTo({
            url: "/pages/metro/subPage/with-icon/index",
        });
    },
    onTap(e) {
        const {
            index
        } = e.detail;

        console.log(index);
    },
    onChange(e) {
        const {
            current,
            source
        } = e.detail;
    },
    onImageLoad(e) {
        console.log(e.detail.index);
    },
    onTapHome() {
        wx.navigateTo({
            url: '../home/home',
        })
    },
    onTapHome2() {
        wx.navigateTo({
            url: '/pages/metro/subPage/lineList/index',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.getNavigations()
        const {
            data: {
                data
            }
        } = await getHomeDetail()
        let list = []
        data.topBanners.map(i => {
            list.push({
                value: i.image,
                ariaLabel: i.title
            })
        })
        this.setData({
            swiperList: list
        })
    },
    // 获取首页菜单
    async getNavigations() {
        var that = this;
        wx.request({
            url: 'https://cdmetro.cnzhiyuanhui.com/op/navigations?language=zh',
            success: (res) => {
                console.log(res);
                that.setData({
                    navigations: res.data.data
                })
            }
        })

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