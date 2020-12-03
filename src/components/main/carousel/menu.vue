<template>
<!-- 侧边导航栏组件 -->
  <div class="m-menu">
    <dl class="nav"
        @mouseleave="mouseleaveMenu"
        >
      <dt>全部分类</dt>
      <dd
        v-for="item in menuList"
        :key="item.ico"
        @mouseenter="mouseenterMenu(item.children)"
      >
        <i :class="item.ico" />
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="showDetail"
      @mouseenter="mouseenterDetail"
      @mouseleave="mouseleaveDetail"
    >
      <template v-for="(item, index) in curDetail">
          <div :key="index" class="title"> 
            <h2>{{ item.title }}</h2>
            <span>
                更多 
                <i class="arrow"></i>
            </span>
          </div>
            <span v-for="v in item.children" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/https/api';

export default {
  data() {
    return {
      isCurDetail: false,
      curDetail: null,
      // 侧边导航栏数据
      menuList:[{
        ico: "food",
        title: "美食",
        children: [
          {
            title: "美食",
            children: [
              "代金卷",
              "甜点",
              "饮品",
              "自助餐",
              "火锅",
              "日韩料理",
              "西餐",
              "聚餐宴请",
              "烧烤烤肉",
              "东北菜",
              "川湘菜",
              "江浙菜",
              "香锅烤鱼",
              "粤港菜",
              "中式烧烤/烤串",
              "西北菜",
              "咖啡酒吧茶馆",
              "云贵菜",
              " 东南亚菜",
              "海鲜",
              "素食",
              "台湾/客家菜",
              "创意菜",
              "汤/粥/炖菜",
              "蒙餐",
              "新疆菜",
              "其他美食",
              "京菜鲁菜",
            ]
          }
        ]
      },
      {
        ico: "takeout",
        title: "外卖",
        children: [
          {
            title: "外卖",
            children: ["美团外卖"]
          }
        ]
      },
      {
        ico: "hotel",
        title: "酒店 HOT",
        children: [
          {
            title: "酒店星级",
            children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
          }
        ]
      },
      {
        ico: "homestay",
        title: "民宿",
        children: [
          {
            title: "热门城市",
            children: [
              "上海",
              "成都",
              "北京",
              "重庆",
              "南京",
              "杭州",
              "广州",
              "西安",
              "武汉",
              "厦门",
              "长沙",
              "青岛",
              "深圳",
              "天津",
              "苏州"
            ]
          },
          {
            title: "热门房源",
            children: ["复式Loft", "别墅"]
          }
        ]
      },
      {
        ico: "movie",
        title: "猫眼电影",
        children: [
          {
            title: "热映电影",
            children: [
              "除暴",
              "一秒钟",
              "金刚川",
              "气·球",
              "汪汪队立大功之超能救援",
              "野性的呼唤",
              "怪物猎人",
              "疯狂原始人2",
              "如果声音不记得",
              "我和我的家乡"
            ]
          }
        ]
      },
      {
        ico: "airport",
        title: "机票 / 火车票",
        children: [
          {
            title: "机票",
            children: ["国内机票", "国际/港澳机票"]
          },
          {
            title: "火车票",
            children: ["火车票"]
          }
        ]
      },
      {
        ico: "ktv",
        title: "休闲娱乐 / KTV",
        children: [
          {
            title: "休闲娱乐",
            children : ["足疗按摩","洗浴/汗蒸","酒吧密室逃脱","轰趴馆","茶馆","私人影院","DIY手工坊","采摘/农家乐","网吧网咖","游乐游艺","VR桌面游戏","真人CS","棋牌室","其他玩乐"]
          },{
              title : "KTV",
              children : ["KTV"]
          }
        ]
      },
      {
        ico: "life",
        title: "生活服务",
        children: [{
            title : "生活服务",
            children : ["衣物/皮具洗护","家政","搬家运输","送水","充值缴费","服饰/鞋包","养护","开锁换锁","居家维修","管道疏通","家电维修清洗","电脑维修","手机维修","证件照/肖像摄影照片","冲印/图文文印","商务服务/法律服务","文化传媒机构","成人用品/情趣用品"]
        }]
      },
      {
        ico: "hair",
        title: "丽人 / 美发 / 医学美容",
        children: [{
            title : '丽人',
            children : ["美发",'美甲美睫','美容美体','医学美容','瑜伽舞蹈','瘦身纤体','韩式定妆','祛痘纹身','化妆品','养发']
        }],
      },
      {
        ico: "marry",
        title: "结婚 / 婚纱摄影 / 婚宴",
        children: [{
            title: '结婚',
            children : ['婚纱摄影','旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制','婚戒首饰','婚车租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼小礼品','更多婚礼服务']
        }],
      },
      {
        ico: "offspring",
        title: "亲子 / 儿童乐园 / 幼教",
        children: [{
            title : '儿童乐园',
            children : ['婴儿游泳','其它亲子游乐']
        },{
            title : '幼儿教育',
            children : ['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育']
        },{
            title : '亲子摄影',
            children : ['儿童摄影','孕妇写真','上门拍','其他亲子摄影'],
        },{
            title: '孕妇产护理',
            children : ['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳','月嫂','亲子购物','宝宝派对','亲子服务']
        }],
      },
      {
        ico: "sport",
        title: "运动健身 / 健身中心",
        children: [{
            title : '运动健身',
            children : ['健身中心','武术场馆','游泳馆','羽毛球馆','溜冰场','射箭馆','篮球场','网球馆','台球馆','乒乓球','足球场','高尔夫场','保龄球馆','体育场馆','马术场','壁球馆','更多运动']
        }],
      },
      {
        ico: "furniture",
        title: "家装 / 建材 / 家居",
        children: [],
      },
      {
        ico: "study",
        title: "学习培训 / 音乐培训",
        children: [],
      },
      {
        ico: "health",
        title: "医疗健康 / 宠物 / 爱车",
        children: [],
      },
      {
        ico: "bar",
        title: "酒吧 / 密室逃脱",
        children: [],
      },],
    };
  },
  created(){
    //   api.nav().then((response)=>{
    //       console.log(response);
    //       this.menuList = response;
    //   })
  },
  computed: {
      // 展示
    showDetail() {
      return this.isCurDetail || this.curDetail;
    },
  },
  methods: {
      /**
       * 鼠标移入侧边导航栏事件
       *
       * @param {Array} item 二级导航的数据
       * 移入侧边导航不同模块时对数据进行赋值
       */
    mouseenterMenu(item) {
        // 对数据进行赋值
      this.curDetail = item;
    },
    // 鼠标移出侧边导航栏事件
    mouseleaveMenu() {
        /**
         * 当鼠标移出侧边栏移入二级导航栏时不能立即触发移出事件,
         * 不然就会出现鼠标无法移入二级导航的状况，
         * 所以推入事件队列延迟执行
         */
      this.showDetailTime = setTimeout(() => {
          // 对二级导航的数据进行赋值
        this.curDetail = null;
      }, 200);
    },
    // 鼠标移入二级导航事件
    mouseenterDetail() {
        // 移入二级导航时 清除 移出侧边导航栏的 定时器
      clearTimeout(this.showDetailTime);
    },
    // 鼠标移出二级导航事件
    mouseleaveDetail() {
      this.curDetail = null;
      this.isCurDetail = false;
    },
  },
};
</script>