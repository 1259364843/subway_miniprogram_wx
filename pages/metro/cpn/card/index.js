Component({
    properties: {
        lists: {
            type: Array,
            value: []
        }
    },
    data: {
        img1: 'https://tdesign.gtimg.com/miniprogram/images/example1.png',
        img2: 'https://tdesign.gtimg.com/miniprogram/images/example2.png',
        img3: 'https://tdesign.gtimg.com/miniprogram/images/example3.png',
    },
    methods: {
        onTapGridItem: function (event) {
            const pageName = event.currentTarget.dataset.pagename.slice(10)
            console.log(pageName);
            // const pageUrl = `/pages/metro/subPage/index`
            const pageUrl = `/pages/metro/subPage/${pageName}/index`
            wx.navigateTo({
                url: pageUrl,
            })
        }
    }
});