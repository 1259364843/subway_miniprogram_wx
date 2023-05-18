// pages/metro/subPage/SiteDetails/index.js
import {
    getStationDetail,
    getStationTrains,
    getStationTransferGuidance
} from '../../../../service/api_station'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShowStaionInput: true,
        currentTab: "1",
        stationNo: "0137", //站点ID
        stationDetail: {}, //站点详情
        trainList: [], //列车列表
        visible: false,
        tabValue: "01", //tab栏默认值
        shops: [], //商业信息
        imgVisible: false,
        showIndex: false,
        closeBtn: false,
        deleteBtn: false,
        images: [],
        guidance: {}, //乘换引导
        lineColors: [{
                line: "01",
                color: "#222a8c",
            },
            {
                line: "02",
                color: "#eb5a35",
            },
            {
                line: "03",
                color: "#d5006a",
            },
            {
                line: "04",
                color: "#00aa58",
            },
            {
                line: "05",
                color: "#a23e92",
            },
            {
                line: "06",
                color: "#be7331",
            },
            {
                line: "07",
                color: "#6dc6d6",
            },
            {
                line: "08",
                color: "#a6c214",
            },
            {
                line: "09",
                color: "#f1ad17",
            },
            {
                line: "10",
                color: "#0050a3",
            },
            {
                line: "17",
                color: "#87e0aa",
            },
            {
                line: "18",
                color: "#006268",
            },
        ]
    },
    onTabsClick2(event) {
        this.setData({
            currentTab: event.detail.value
        })
    },
    onStationId(event) {
        this.setData({
            stationNo: event.detail.value
        })
    },
    onClickImg() {
        this.setData({
            showIndex: true,
            imgVisible: true,
        });
    },
    onTabsChange(event) {
        // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },
    handlePanelClick(event) {
        console.log(event);
    },
    onTabsClick(event) {
        console.log(event);
        this.setData({
            tabValue: event.detail.value
        })
        // 请求对应站点信息
        console.log(event.detail.value);
        const {
            stationNo
        } = this.data.stationDetail.stationDirecInfo.filter(i => i.lineNo === event.detail.value)[0]
        this.setData({
            stationNo: stationNo
        })
        this.handleSearch()
    },
    onChange(e) {
        const {
            index
        } = e.detail;

        console.log('change', index);
    },

    onDelete(e) {
        const {
            index
        } = e.detail;

        Toast({
            context: this,
            selector: '#t-toast',
            message: `删除第${index + 1}个`,
        });
    },

    onClose(e) {
        const {
            trigger
        } = e.detail;
        console.log(trigger);
        this.setData({
            imgVisible: false,
        });
    },
    hanldeFinish(event) {
        // 倒计时结束,重新请求数据
        this.handleSearch()
    },
    async handleSearch() {
        if(this.data.stationNo === "") return;
        const {
            data: {
                data
            }
        } = await getStationDetail(this.data.stationNo);
        const {
            data: {
                data: {
                    list
                }
            }
        } = await getStationTrains(this.data.stationNo)
        const rawShops = data.facilities.shops.split("\\n");
        let shops = rawShops.map(item => {
            return item.split("\\t")
        })
        this.setData({
            stationDetail: data,
            trainList: list,
            shops: shops
        })
    },
    // 乘换引导
    async hanldeLink(event) {
        const {
            currentTarget: {
                dataset: {
                    item
                }
            }
        } = event
        const res = await getStationTransferGuidance(this.data.stationDetail.stationNo, item.trainList[0].endStationNo, this.data.tabValue)
        console.log(res);
        this.setData({
            visible: true,
            guidance: res.data.data
        })
    },
    onVisibleChange(e) {
        this.setData({
            visible: e.detail.visible,
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('acceptDataFromOpenerPage', (data) => {
            const stationNo = data.data
            // 获取传递过来的站点No
            this.setData({
                stationNo: stationNo,
                isShowStaionInput: false
            })
        })
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.handleSearch()
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