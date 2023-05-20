const image = "https://tdesign.gtimg.com/miniprogram/images/example2.png";
const items = new Array(12).fill({
        label: "标题文字",
        image,
    },
    0,
    12
);

Page({
    offsetTopList: [],
    data: {
        // 线路信息
        lineList: [{
                label: "一号线",
                title: "一号线",
                badgeProps: {},
                items: [{
                        "label": "韦家碾",
                        "value": "0120"
                    },
                    {
                        "label": "升仙湖",
                        "value": "0121"
                    },
                    {
                        "label": "火车北站",
                        "value": "0122"
                    },
                    {
                        "label": "人民北路",
                        "value": "0123"
                    },
                    {
                        "label": "文殊院",
                        "value": "0124"
                    },
                    {
                        "label": "骡马市",
                        "value": "0125"
                    },
                    {
                        "label": "天府广场",
                        "value": "0126"
                    },
                    {
                        "label": "锦江宾馆",
                        "value": "0127"
                    },
                    {
                        "label": "华西坝",
                        "value": "0128"
                    },
                    {
                        "label": "省体育馆",
                        "value": "0129"
                    },
                    {
                        "label": "倪家桥",
                        "value": "0130"
                    },
                    {
                        "label": "桐梓林",
                        "value": "0131"
                    },
                    {
                        "label": "火车南站",
                        "value": "0132"
                    },
                    {
                        "label": "高新",
                        "value": "0133"
                    },
                    {
                        "label": "金融城",
                        "value": "0134"
                    },
                    {
                        "label": "孵化园",
                        "value": "0135"
                    },
                    {
                        "label": "锦城广场",
                        "value": "0136"
                    },
                    {
                        "label": "世纪城",
                        "value": "0137"
                    },
                    {
                        "label": "天府三街",
                        "value": "0138"
                    },
                    {
                        "label": "天府五街",
                        "value": "0139"
                    },
                    {
                        "label": "华府大道",
                        "value": "0140"
                    },
                    {
                        "label": "四河",
                        "value": "0141"
                    },
                    {
                        "label": "广都",
                        "value": "0142"
                    },
                    {
                        "label": "五根松",
                        "value": "0143"
                    },
                    {
                        "label": "华阳",
                        "value": "0144"
                    },
                    {
                        "label": "海昌路",
                        "value": "0145"
                    },
                    {
                        "label": "广福",
                        "value": "0146"
                    },
                    {
                        "label": "红石公园",
                        "value": "0147"
                    },
                    {
                        "label": "麓湖",
                        "value": "0148"
                    },
                    {
                        "label": "武汉路",
                        "value": "0149"
                    },
                    {
                        "label": "天府公园",
                        "value": "0150"
                    },
                    {
                        "label": "西博城",
                        "value": "0151"
                    },
                    {
                        "label": "广州路",
                        "value": "0152"
                    },
                    {
                        "label": "兴隆湖",
                        "value": "0153"
                    },
                    {
                        "label": "科学城",
                        "value": "0154"
                    }
                ]
            },
            {
                label: "二号线",
                title: "二号线",
                // icon: "app",
                badgeProps: {
                    // dot: true,
                },
                items: [{
                        "label": "犀浦",
                        "value": "0221"
                    },
                    {
                        "label": "天河路",
                        "value": "0222"
                    },
                    {
                        "label": "百草路",
                        "value": "0223"
                    },
                    {
                        "label": "金周路",
                        "value": "0224"
                    },
                    {
                        "label": "金科北路",
                        "value": "0225"
                    },
                    {
                        "label": "迎宾大道",
                        "value": "0226"
                    },
                    {
                        "label": "茶店子客运站",
                        "value": "0227"
                    },
                    {
                        "label": "羊犀立交",
                        "value": "0228"
                    },
                    {
                        "label": "一品天下",
                        "value": "0229"
                    },
                    {
                        "label": "蜀汉路东",
                        "value": "0230"
                    },
                    {
                        "label": "白果林",
                        "value": "0231"
                    },
                    {
                        "label": "中医大省医院",
                        "value": "0232"
                    },
                    {
                        "label": "通惠门",
                        "value": "0233"
                    },
                    {
                        "label": "人民公园",
                        "value": "0234"
                    },
                    {
                        "label": "天府广场",
                        "value": "0235"
                    },
                    {
                        "label": "春熙路",
                        "value": "0236"
                    },
                    {
                        "label": "东门大桥",
                        "value": "0237"
                    },
                    {
                        "label": "牛王庙",
                        "value": "0238"
                    },
                    {
                        "label": "牛市口",
                        "value": "0239"
                    },
                    {
                        "label": "东大路",
                        "value": "0240"
                    },
                    {
                        "label": "塔子山公园",
                        "value": "0241"
                    },
                    {
                        "label": "成都东客站",
                        "value": "0242"
                    },
                    {
                        "label": "成渝立交",
                        "value": "0243"
                    },
                    {
                        "label": "惠王陵",
                        "value": "0244"
                    },
                    {
                        "label": "洪河",
                        "value": "0245"
                    },
                    {
                        "label": "成都行政学院",
                        "value": "0246"
                    },
                    {
                        "label": "大面铺",
                        "value": "0247"
                    },
                    {
                        "label": "连山坡",
                        "value": "0248"
                    },
                    {
                        "label": "界牌",
                        "value": "0249"
                    },
                    {
                        "label": "书房",
                        "value": "0250"
                    },
                    {
                        "label": "龙平路",
                        "value": "0251"
                    },
                    {
                        "label": "龙泉驿",
                        "value": "0252"
                    }
                ],
            },
            {
                label: "三号线",
                title: "三号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "成都医学院",
                        "value": "0312"
                    },
                    {
                        "label": "石油大学",
                        "value": "0313"
                    },
                    {
                        "label": "钟楼",
                        "value": "0314"
                    },
                    {
                        "label": "马超西路",
                        "value": "0315"
                    },
                    {
                        "label": "团结新区",
                        "value": "0316"
                    },
                    {
                        "label": "锦水河",
                        "value": "0317"
                    },
                    {
                        "label": "三河场",
                        "value": "0318"
                    },
                    {
                        "label": "金华寺东路",
                        "value": "0319"
                    },
                    {
                        "label": "植物园",
                        "value": "0320"
                    },
                    {
                        "label": "军区总医院",
                        "value": "0321"
                    },
                    {
                        "label": "熊猫大道",
                        "value": "0322"
                    },
                    {
                        "label": "动物园",
                        "value": "0323"
                    },
                    {
                        "label": "昭觉寺南路",
                        "value": "0324"
                    },
                    {
                        "label": "驷马桥",
                        "value": "0325"
                    },
                    {
                        "label": "李家沱",
                        "value": "0326"
                    },
                    {
                        "label": "前锋路",
                        "value": "0327"
                    },
                    {
                        "label": "红星桥",
                        "value": "0328"
                    },
                    {
                        "label": "市二医院",
                        "value": "0329"
                    },
                    {
                        "label": "春熙路",
                        "value": "0330"
                    },
                    {
                        "label": "新南门",
                        "value": "0331"
                    },
                    {
                        "label": "磨子桥",
                        "value": "0332"
                    },
                    {
                        "label": "省体育馆",
                        "value": "0333"
                    },
                    {
                        "label": "衣冠庙",
                        "value": "0334"
                    },
                    {
                        "label": "高升桥",
                        "value": "0335"
                    },
                    {
                        "label": "红牌楼",
                        "value": "0336"
                    },
                    {
                        "label": "太平园",
                        "value": "0337"
                    },
                    {
                        "label": "川藏立交",
                        "value": "0338"
                    },
                    {
                        "label": "武侯立交",
                        "value": "0339"
                    },
                    {
                        "label": "武青南路",
                        "value": "0340"
                    },
                    {
                        "label": "双凤桥",
                        "value": "0341"
                    },
                    {
                        "label": "龙桥路",
                        "value": "0342"
                    },
                    {
                        "label": "航都大街",
                        "value": "0343"
                    },
                    {
                        "label": "迎春桥",
                        "value": "0344"
                    },
                    {
                        "label": "东升",
                        "value": "0345"
                    },
                    {
                        "label": "双流广场",
                        "value": "0346"
                    },
                    {
                        "label": "三里坝",
                        "value": "0347"
                    },
                    {
                        "label": "双流西站",
                        "value": "0348"
                    }
                ],
            },
            {
                label: "四号线",
                title: "四号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "万盛",
                        "value": "0413"
                    },
                    {
                        "label": "杨柳河",
                        "value": "0414"
                    },
                    {
                        "label": "凤溪河",
                        "value": "0415"
                    },
                    {
                        "label": "南熏大道",
                        "value": "0416"
                    },
                    {
                        "label": "光华公园",
                        "value": "0417"
                    },
                    {
                        "label": "涌泉",
                        "value": "0418"
                    },
                    {
                        "label": "凤凰大街",
                        "value": "0419"
                    },
                    {
                        "label": "马厂坝",
                        "value": "0420"
                    },
                    {
                        "label": "非遗博览园",
                        "value": "0421"
                    },
                    {
                        "label": "蔡桥",
                        "value": "0422"
                    },
                    {
                        "label": "中坝",
                        "value": "0423"
                    },
                    {
                        "label": "成都西站",
                        "value": "0424"
                    },
                    {
                        "label": "清江西路",
                        "value": "0425"
                    },
                    {
                        "label": "文化宫",
                        "value": "0426"
                    },
                    {
                        "label": "西南财大",
                        "value": "0427"
                    },
                    {
                        "label": "草堂北路",
                        "value": "0428"
                    },
                    {
                        "label": "中医大省医院",
                        "value": "0429"
                    },
                    {
                        "label": "宽窄巷子",
                        "value": "0430"
                    },
                    {
                        "label": "骡马市",
                        "value": "0431"
                    },
                    {
                        "label": "太升南路",
                        "value": "0432"
                    },
                    {
                        "label": "市二医院",
                        "value": "0433"
                    },
                    {
                        "label": "玉双路",
                        "value": "0434"
                    },
                    {
                        "label": "双桥路",
                        "value": "0435"
                    },
                    {
                        "label": "万年场",
                        "value": "0436"
                    },
                    {
                        "label": "槐树店",
                        "value": "0437"
                    },
                    {
                        "label": "来龙",
                        "value": "0438"
                    },
                    {
                        "label": "十陵",
                        "value": "0439"
                    },
                    {
                        "label": "成都大学",
                        "value": "0440"
                    },
                    {
                        "label": "明蜀王陵",
                        "value": "0441"
                    },
                    {
                        "label": "西河",
                        "value": "0442"
                    }
                ],
            },
            {
                label: "五号线",
                title: "五号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "华桂路",
                        "value": "0521"
                    },
                    {
                        "label": "柏水场",
                        "value": "0522"
                    },
                    {
                        "label": "廖家湾",
                        "value": "0523"
                    },
                    {
                        "label": "北部商贸城",
                        "value": "0524"
                    },
                    {
                        "label": "幸福桥",
                        "value": "0525"
                    },
                    {
                        "label": "九道堰",
                        "value": "0526"
                    },
                    {
                        "label": "杜家碾",
                        "value": "0527"
                    },
                    {
                        "label": "大丰",
                        "value": "0528"
                    },
                    {
                        "label": "石犀公园",
                        "value": "0529"
                    },
                    {
                        "label": "皇花园",
                        "value": "0530"
                    },
                    {
                        "label": "陆家桥",
                        "value": "0531"
                    },
                    {
                        "label": "泉水路",
                        "value": "0532"
                    },
                    {
                        "label": "洞子口",
                        "value": "0533"
                    },
                    {
                        "label": "福宁路",
                        "value": "0534"
                    },
                    {
                        "label": "五块石",
                        "value": "0535"
                    },
                    {
                        "label": "赛云台",
                        "value": "0536"
                    },
                    {
                        "label": "北站西二路",
                        "value": "0537"
                    },
                    {
                        "label": "西北桥",
                        "value": "0538"
                    },
                    {
                        "label": "花牌坊",
                        "value": "0539"
                    },
                    {
                        "label": "抚琴",
                        "value": "0540"
                    },
                    {
                        "label": "中医大省医院",
                        "value": "0541"
                    },
                    {
                        "label": "青羊宫",
                        "value": "0542"
                    },
                    {
                        "label": "省骨科医院",
                        "value": "0543"
                    },
                    {
                        "label": "高升桥",
                        "value": "0544"
                    },
                    {
                        "label": "科园",
                        "value": "0545"
                    },
                    {
                        "label": "九兴大道",
                        "value": "0546"
                    },
                    {
                        "label": "神仙树",
                        "value": "0547"
                    },
                    {
                        "label": "石羊立交",
                        "value": "0548"
                    },
                    {
                        "label": "市一医院",
                        "value": "0549"
                    },
                    {
                        "label": "交子大道",
                        "value": "0550"
                    },
                    {
                        "label": "锦城大道",
                        "value": "0551"
                    },
                    {
                        "label": "锦城湖",
                        "value": "0552"
                    },
                    {
                        "label": "大源",
                        "value": "0553"
                    },
                    {
                        "label": "民乐",
                        "value": "0554"
                    },
                    {
                        "label": "骑龙",
                        "value": "0555"
                    },
                    {
                        "label": "警官学院",
                        "value": "0556"
                    },
                    {
                        "label": "二江寺",
                        "value": "0557"
                    },
                    {
                        "label": "南湖立交",
                        "value": "0558"
                    },
                    {
                        "label": "怡心湖",
                        "value": "0559"
                    },
                    {
                        "label": "龙马路",
                        "value": "0560"
                    },
                    {
                        "label": "回龙",
                        "value": "0561"
                    }
                ]
            },
            {
                label: "六号线",
                title: "六号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "望丛祠",
                        "value": "0621"
                    },
                    {
                        "label": "和平街",
                        "value": "0622"
                    },
                    {
                        "label": "郫筒",
                        "value": "0623"
                    },
                    {
                        "label": "蜀新大道",
                        "value": "0624"
                    },
                    {
                        "label": "檬梓",
                        "value": "0625"
                    },
                    {
                        "label": "尚锦路",
                        "value": "0626"
                    },
                    {
                        "label": "红高路",
                        "value": "0627"
                    },
                    {
                        "label": "天宇路",
                        "value": "0628"
                    },
                    {
                        "label": "犀浦",
                        "value": "0629"
                    },
                    {
                        "label": "兴业北街",
                        "value": "0630"
                    },
                    {
                        "label": "梓潼宫",
                        "value": "0631"
                    },
                    {
                        "label": "侯家桥",
                        "value": "0632"
                    },
                    {
                        "label": "兴盛",
                        "value": "0633"
                    },
                    {
                        "label": "青杠",
                        "value": "0634"
                    },
                    {
                        "label": "西华大道",
                        "value": "0635"
                    },
                    {
                        "label": "金府",
                        "value": "0636"
                    },
                    {
                        "label": "星河",
                        "value": "0637"
                    },
                    {
                        "label": "西南交大",
                        "value": "0638"
                    },
                    {
                        "label": "沙湾",
                        "value": "0639"
                    },
                    {
                        "label": "西北桥",
                        "value": "0640"
                    },
                    {
                        "label": "人民北路",
                        "value": "0641"
                    },
                    {
                        "label": "梁家巷",
                        "value": "0642"
                    },
                    {
                        "label": "前锋路",
                        "value": "0643"
                    },
                    {
                        "label": "建设北路",
                        "value": "0644"
                    },
                    {
                        "label": "新鸿路",
                        "value": "0645"
                    },
                    {
                        "label": "玉双路",
                        "value": "0646"
                    },
                    {
                        "label": "牛王庙",
                        "value": "0647"
                    },
                    {
                        "label": "顺江路",
                        "value": "0648"
                    },
                    {
                        "label": "三官堂",
                        "value": "0649"
                    },
                    {
                        "label": "东光",
                        "value": "0650"
                    },
                    {
                        "label": "琉璃场",
                        "value": "0651"
                    },
                    {
                        "label": "琉三路",
                        "value": "0652"
                    },
                    {
                        "label": "金石路",
                        "value": "0653"
                    },
                    {
                        "label": "金融城东",
                        "value": "0654"
                    },
                    {
                        "label": "中和",
                        "value": "0655"
                    },
                    {
                        "label": "张家寺",
                        "value": "0656"
                    },
                    {
                        "label": "兰家沟",
                        "value": "0657"
                    },
                    {
                        "label": "回龙",
                        "value": "0658"
                    },
                    {
                        "label": "钓鱼嘴",
                        "value": "0659"
                    },
                    {
                        "label": "松林",
                        "value": "0660"
                    },
                    {
                        "label": "秦皇寺",
                        "value": "0661"
                    },
                    {
                        "label": "西博城",
                        "value": "0662"
                    },
                    {
                        "label": "天府商务区",
                        "value": "0663"
                    },
                    {
                        "label": "杭州路",
                        "value": "0664"
                    },
                    {
                        "label": "昌公堰",
                        "value": "0665"
                    },
                    {
                        "label": "沈阳路",
                        "value": "0666"
                    },
                    {
                        "label": "麓山大道",
                        "value": "0667"
                    },
                    {
                        "label": "万安",
                        "value": "0668"
                    },
                    {
                        "label": "蒲草塘",
                        "value": "0669"
                    },
                    {
                        "label": "龙灯山",
                        "value": "0670"
                    },
                    {
                        "label": "新川路",
                        "value": "0671"
                    },
                    {
                        "label": "新通大道",
                        "value": "0672"
                    },
                    {
                        "label": "观东",
                        "value": "0673"
                    },
                    {
                        "label": "陆肖",
                        "value": "0674"
                    }
                ]
            },
            {
                label: "七号线",
                title: "七号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "火车北站",
                        "value": "0721"
                    },
                    {
                        "label": "驷马桥",
                        "value": "0722"
                    },
                    {
                        "label": "府青路",
                        "value": "0723"
                    },
                    {
                        "label": "八里庄",
                        "value": "0724"
                    },
                    {
                        "label": "二仙桥",
                        "value": "0725"
                    },
                    {
                        "label": "理工大学",
                        "value": "0726"
                    },
                    {
                        "label": "崔家店",
                        "value": "0727"
                    },
                    {
                        "label": "双店路",
                        "value": "0728"
                    },
                    {
                        "label": "槐树店",
                        "value": "0729"
                    },
                    {
                        "label": "迎晖路",
                        "value": "0730"
                    },
                    {
                        "label": "成都东客站",
                        "value": "0731"
                    },
                    {
                        "label": "大观",
                        "value": "0732"
                    },
                    {
                        "label": "狮子山",
                        "value": "0733"
                    },
                    {
                        "label": "四川师大",
                        "value": "0734"
                    },
                    {
                        "label": "琉璃场",
                        "value": "0735"
                    },
                    {
                        "label": "三瓦窑",
                        "value": "0736"
                    },
                    {
                        "label": "火车南站",
                        "value": "0737"
                    },
                    {
                        "label": "神仙树",
                        "value": "0738"
                    },
                    {
                        "label": "高朋大道",
                        "value": "0739"
                    },
                    {
                        "label": "太平园",
                        "value": "0740"
                    },
                    {
                        "label": "武侯大道",
                        "value": "0741"
                    },
                    {
                        "label": "龙爪堰",
                        "value": "0742"
                    },
                    {
                        "label": "东坡路",
                        "value": "0743"
                    },
                    {
                        "label": "文化宫",
                        "value": "0744"
                    },
                    {
                        "label": "金沙博物馆",
                        "value": "0745"
                    },
                    {
                        "label": "一品天下",
                        "value": "0746"
                    },
                    {
                        "label": "茶店子",
                        "value": "0747"
                    },
                    {
                        "label": "花照壁",
                        "value": "0748"
                    },
                    {
                        "label": "西南交大",
                        "value": "0749"
                    },
                    {
                        "label": "九里堤",
                        "value": "0750"
                    },
                    {
                        "label": "北站西二路",
                        "value": "0751"
                    }
                ]
            },
            {
                label: "八号线",
                title: "八号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "十里店",
                        "value": "0821"
                    },
                    {
                        "label": "理工大学",
                        "value": "0822"
                    },
                    {
                        "label": "东郊记忆",
                        "value": "0823"
                    },
                    {
                        "label": "杉板桥",
                        "value": "0824"
                    },
                    {
                        "label": "万年路",
                        "value": "0825"
                    },
                    {
                        "label": "双桥路",
                        "value": "0826"
                    },
                    {
                        "label": "东大路",
                        "value": "0827"
                    },
                    {
                        "label": "净居寺",
                        "value": "0828"
                    },
                    {
                        "label": "东光",
                        "value": "0829"
                    },
                    {
                        "label": "东湖公园",
                        "value": "0830"
                    },
                    {
                        "label": "川大望江校区",
                        "value": "0831"
                    },
                    {
                        "label": "倪家桥",
                        "value": "0832"
                    },
                    {
                        "label": "芳草街",
                        "value": "0833"
                    },
                    {
                        "label": "永丰",
                        "value": "0834"
                    },
                    {
                        "label": "九兴大道",
                        "value": "0835"
                    },
                    {
                        "label": "高朋大道",
                        "value": "0836"
                    },
                    {
                        "label": "殷家林",
                        "value": "0837"
                    },
                    {
                        "label": "庆安",
                        "value": "0838"
                    },
                    {
                        "label": "石羊",
                        "value": "0839"
                    },
                    {
                        "label": "三元",
                        "value": "0840"
                    },
                    {
                        "label": "顺风",
                        "value": "0841"
                    },
                    {
                        "label": "珠江路",
                        "value": "0842"
                    },
                    {
                        "label": "川大江安校区",
                        "value": "0843"
                    },
                    {
                        "label": "文星",
                        "value": "0844"
                    },
                    {
                        "label": "莲花",
                        "value": "0845"
                    }
                ]
            },
            {
                label: "九号线",
                title: "九号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "黄田坝",
                        "value": "0921"
                    },
                    {
                        "label": "成都西站",
                        "value": "0922"
                    },
                    {
                        "label": "培风",
                        "value": "0923"
                    },
                    {
                        "label": "机投桥",
                        "value": "0924"
                    },
                    {
                        "label": "武青南路",
                        "value": "0925"
                    },
                    {
                        "label": "簇桥",
                        "value": "0926"
                    },
                    {
                        "label": "华兴",
                        "value": "0927"
                    },
                    {
                        "label": "太平寺",
                        "value": "0928"
                    },
                    {
                        "label": "三元",
                        "value": "0929"
                    },
                    {
                        "label": "锦城大道",
                        "value": "0930"
                    },
                    {
                        "label": "孵化园",
                        "value": "0931"
                    },
                    {
                        "label": "心岛",
                        "value": "0932"
                    },
                    {
                        "label": "金融城东",
                        "value": "0933"
                    }
                ]
            },
            {
                label: "十号线",
                title: "十号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "太平园",
                        "value": "1021"
                    },
                    {
                        "label": "簇锦",
                        "value": "1022"
                    },
                    {
                        "label": "华兴",
                        "value": "1023"
                    },
                    {
                        "label": "金花",
                        "value": "1024"
                    },
                    {
                        "label": "双流机场1航站楼",
                        "value": "1025"
                    },
                    {
                        "label": "双流机场2航站楼",
                        "value": "1026"
                    },
                    {
                        "label": "双流西站",
                        "value": "1027"
                    },
                    {
                        "label": "应天寺",
                        "value": "1028"
                    },
                    {
                        "label": "黄水",
                        "value": "1029"
                    },
                    {
                        "label": "花源",
                        "value": "1030"
                    },
                    {
                        "label": "新津站",
                        "value": "1031"
                    },
                    {
                        "label": "花桥",
                        "value": "1032"
                    },
                    {
                        "label": "五津",
                        "value": "1033"
                    },
                    {
                        "label": "儒林路",
                        "value": "1034"
                    },
                    {
                        "label": "刘家碾",
                        "value": "1035"
                    },
                    {
                        "label": "新平",
                        "value": "1036"
                    }
                ]
            },
            {
                label: "十七号线",
                title: "十七号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "金星",
                        "value": "1721"
                    },
                    {
                        "label": "黄石",
                        "value": "1722"
                    },
                    {
                        "label": "市五医院",
                        "value": "1723"
                    },
                    {
                        "label": "凤溪河",
                        "value": "1724"
                    },
                    {
                        "label": "温泉大道",
                        "value": "1725"
                    },
                    {
                        "label": "明光",
                        "value": "1726"
                    },
                    {
                        "label": "九江北",
                        "value": "1727"
                    },
                    {
                        "label": "白佛桥",
                        "value": "1728"
                    },
                    {
                        "label": "机投桥",
                        "value": "1729"
                    }
                ]
            },
            {
                label: "十八号线",
                title: "十八号线",
                // icon: "app",
                badgeProps: {},
                items: [{
                        "label": "火车南站",
                        "value": "1821"
                    },
                    {
                        "label": "孵化园",
                        "value": "1822"
                    },
                    {
                        "label": "锦城广场东",
                        "value": "1823"
                    },
                    {
                        "label": "世纪城",
                        "value": "1824"
                    },
                    {
                        "label": "海昌路",
                        "value": "1825"
                    },
                    {
                        "label": "西博城",
                        "value": "1826"
                    },
                    {
                        "label": "兴隆",
                        "value": "1827"
                    },
                    {
                        "label": "三岔",
                        "value": "1829"
                    },
                    {
                        "label": "天府机场1号2号航站楼",
                        "value": "1832"
                    },
                    {
                        "label": "天府机场北",
                        "value": "1833"
                    }
                ]
            },
        ],
        sideBarIndex: 0,
        scrollTop: 0,
        categories: [{
                label: "选项一",
                title: "标题一",
                icon: "app",
                badgeProps: {},
                items,
            },
            {
                label: "选项二",
                title: "标题二",
                icon: "app",
                badgeProps: {
                    dot: true,
                },
                items: items.slice(0, 9),
            },
            {
                label: "选项三",
                title: "标题三",
                icon: "app",
                badgeProps: {},
                items: items.slice(0, 9),
            },
            {
                label: "选项四",
                title: "标题四",
                icon: "app",
                badgeProps: {
                    count: 6,
                },
                items: items.slice(0, 6),
            },
            {
                label: "选项五",
                title: "标题五",
                icon: "app",
                badgeProps: {},
                items: items.slice(0, 3),
            },
        ],
    },
    onShow() {
        this.getTabBar().init();
    },
    // 点击站点名称
    handleClickItem(event) {
        const stationNo = event.currentTarget.dataset.id
        // 跳转详情页面
        wx.navigateTo({
            url: '/pages/metro/subPage/SiteDetails/index',
            success: function (res) {
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('acceptDataFromOpenerPage', {
                    data: stationNo
                })
            }
        })
    },
    onLoad() {
        const query = wx.createSelectorQuery().in(this);
        const {
            sideBarIndex
        } = this.data;

        query
            .selectAll(".title")
            .boundingClientRect((rects) => {
                this.offsetTopList = rects.map((item) => item.top);
                this.setData({
                    scrollTop: rects[sideBarIndex].top,
                });
            })
            .exec();
    },
    onSideBarChange(e) {
        const {
            value
        } = e.detail;

        this.setData({
            sideBarIndex: value,
            scrollTop: this.offsetTopList[value],
        });
    },
    onScroll(e) {
        const {
            scrollTop
        } = e.detail;
        const threshold = 50; // 下一个标题与顶部的距离

        if (scrollTop < threshold) {
            this.setData({
                sideBarIndex: 0,
            });
            return;
        }

        const index = this.offsetTopList.findIndex(
            (top) => top > scrollTop && top - scrollTop <= threshold
        );

        if (index > -1) {
            this.setData({
                sideBarIndex: index,
            });
        }
    },
});