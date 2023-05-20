Component({
    properties: {
        lists: {
            type: Array,
            value: []
        }
    },
    data: {
        tabBarValue: '0',
        list: [{
                value: '0',
                label: '首页',
                url: '/pages/metro/metro',
                icon: 'home'
            },
            {
                value: '1',
                label: '乘车',
                icon: 'qrcode'
            },
            {
                value: '2',
                label: '我的',
                url: '/pages/user/index',
                icon: 'user'
            },
        ],
    },

    methods: {
        onTabBarChange(event) {
            console.log(event);
            this.setData({
                tabBarValue: event.detail.value,
            });
            const pageURL = this.data.list[event.detail.value].url
            wx.switchTab({
				url: pageURL
			});
        },
    },
});