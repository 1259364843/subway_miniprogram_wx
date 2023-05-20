Component({
    properties: {
        lists: {
            type: Array,
            value: []
        }
    },
    data: {
        tabBarValue: 0,
        list: [{
                value: 0,
                label: '首页',
                url: '/pages/metro/metro',
                icon: 'home'
            },
            {
                value: 1,
                label: '站点列表',
                url: '/pages/stationList/index',
                icon: 'view-list'
            },
            {
                value: 2,
                label: '我的',
                url: '/pages/user/index',
                icon: 'user'
            },
        ],
    },

    methods: {
        init() {
            const page = getCurrentPages().pop();
			this.setData({
				tabBarValue: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		},
        onTabBarChange(event) {
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