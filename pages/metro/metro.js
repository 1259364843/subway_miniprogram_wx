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
            // url: "/pages/metro/subPage/webView/index",
            url: "/pages/metro/subPage/with-icon/index",
        });
    },
    // 轮播图点击
    onSwiperTap(event) {
        const {
            index
        } = event.detail;

        const pageURL = this.data.swiperList[index].url
        console.log(pageURL);
        if (pageURL.startsWith('http')) {
            wx.navigateTo({
                url: "/pages/metro/subPage/webView/index",
                success: function (res) {
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('webViewPages', {
                        data: pageURL
                    })
                }
            })
            return;
        }
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
                ariaLabel: i.title,
                url: i.url
            })
        })
        this.setData({
            swiperList: list,
            midBanners: data.midBanners
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
    onTapMidBanner(event) {
        console.log(event);
        const {
            url
        } = event.currentTarget.dataset;
    
        const pageURL = url
        console.log(pageURL);
        if (pageURL.startsWith('http')) {
            wx.navigateTo({
                url: "/pages/metro/subPage/webView/index",
                success: function (res) {
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('webViewPages', {
                        data: pageURL
                    })
                }
            })
            return;
        }
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