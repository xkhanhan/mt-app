<template>
<!-- 头部导航右半部分导航 -->
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link :to="{ name: '#' }">我的美团</router-link>
        <dl>
          <dd><router-link :to="{ name: '#' }">我的订单</router-link></dd>
          <dd><router-link :to="{ name: '#' }">我的收藏</router-link></dd>
          <dd><router-link :to="{ name: '#' }">抵用卷</router-link></dd>
          <dd><router-link :to="{ name: '#' }">账户设置</router-link></dd>
        </dl>
      </li>
      <li>
        <router-link :to="{ name: '#' }">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{ name: '#' }">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{ name: '#' }">美团餐饮商户中心</router-link>
          </dd>
          <dd><router-link :to="{ name: '#' }">登录商家中心</router-link></dd>
          <dd><router-link :to="{ name: '#' }">美团智能收银</router-link></dd>
          <dd><router-link :to="{ name: '#' }">我想合作</router-link></dd>
          <dd><router-link :to="{ name: '#' }">手机免费开网店</router-link></dd>
          <dd><router-link :to="{ name: '#' }">餐饮代理商招募</router-link></dd>
          <dd><router-link :to="{ name: '#' }">商家申请开票</router-link></dd>
          <dd>
            <router-link :to="{ name: '#' }">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{ name: '#' }">美团规则</router-link>
        <dl>
          <dd><router-link :to="{ name: '#' }">规则中心</router-link></dd>
          <dd><router-link :to="{ name: '#' }">规则目录</router-link></dd>
          <dd><router-link :to="{ name: '#' }">规则评议院</router-link></dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{ name: '#' }">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd><router-link :to="{name : '#'}">国际机票</router-link></dd>
            <dd><router-link :to="{name : '#'}">火车票</router-link></dd>
            <dd><router-link :to="{name : '#'}">民宿</router-link></dd>
            <dd><router-link :to="{name : '#'}">经济型酒店</router-link></dd>
            <dd><router-link :to="{name : '#'}">主题酒店</router-link></dd>
            <dd><router-link :to="{name : '#'}">商务酒店</router-link></dd>
            <dd><router-link :to="{name : '#'}">公寓</router-link></dd>
            <dd><router-link :to="{name : '#'}">豪华酒店</router-link></dd>
            <dd><router-link :to="{name : '#'}">客栈</router-link></dd>
            <dd><router-link :to="{name : '#'}" >青年旅舍</router-link></dd>
            <dd><router-link :to="{name : '#'}">度假酒店</router-link></dd>
            <dd><router-link :to="{name : '#'}">别墅</router-link></dd>
            <dd><router-link :to="{name : '#'}">农家院</router-link></dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd><router-link :to="{name : '#'}">烤鱼</router-link> </dd>
            <dd><router-link :to="{name : '#'}">特色小吃</router-link> </dd>
            <dd><router-link :to="{name : '#'}">烧烤</router-link> </dd>
            <dd><router-link :to="{name : '#'}">自助餐</router-link> </dd>
            <dd><router-link :to="{name : '#'}">火锅</router-link> </dd>
            <dd><router-link :to="{name : '#'}">代金卷</router-link> </dd>
          </dl>
          <dl class="movie">
            <dt>看电影 </dt>
            <dd><router-link :to="{name : '#'}">热门电影</router-link> </dd>
            <dd><router-link :to="{name : '#'}">热映电影</router-link> </dd>
            <dd><router-link :to="{name : '#'}">热映电影口碑榜</router-link> </dd>
            <dd><router-link :to="{name : '#'}">最受期待电影</router-link> </dd>
            <dd><router-link :to="{name : '#'}">国内票房榜</router-link> </dd>
            <dd><router-link :to="{name : '#'}">北美票房榜</router-link> </dd>
            <dd><router-link :to="{name : '#'}">电影票房榜</router-link> </dd>
          </dl>
          <dl class="app">
              <dt>手机应用</dt>
              <dd><img src="@/assets/img/logo.png" alt=""/></dd>
                 <dd><img src="@/assets/img/dianping.png" alt=""/></dd>
                <dd><img src="@/assets/img/maoyan.png" alt=""/></dd>
                <dd><img src="@/assets/img/waimai.png" alt=""/></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
