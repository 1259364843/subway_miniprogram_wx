// pages/metro/subPage/lineList/index.js
const chineseNumber = '一二三四五六七八九十'.split('');

const generateTree = function (deep = 0, count = 10, prefix) {
    const ans = [];

    for (let i = 0; i < count; i += 1) {
        const value = prefix ? `${prefix}-${i}` : `${i}`;
        const rect = {
            label: `选项${chineseNumber[i]}`,
            value,
        };

        if (deep > 0) {
            rect.children = generateTree(deep - 1, 10, value);
        }
        ans.push(rect);
    }

    return ans;
};
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: generateTree(1),
        value: ['01', '0143'],
        // 线路信息
        lineList: [{
                label: "1号线",
                value: "01",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "2号线",
                value: "02",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "3号线",
                value: "03",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "4号线",
                value: "04",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "5号线",
                value: "05",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "6号线",
                value: "06",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "7号线",
                value: "07",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "8号线",
                value: "08",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "9号线",
                value: "09",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "10号线",
                value: "10",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "17号线",
                value: "17",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            },
            {
                label: "18号线",
                value: "18",
                children: [{
                    label: "五根松",
                    value: "0143",
                }]
            }
        ]
    },
    onChange(e) {
        this.setData({
            value: e.detail.value,
        });
    },
    handleClickTo() {
        wx.navigateTo({
            url: `../with-icon/index`,
        });
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