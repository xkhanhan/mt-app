<template>
<!-- 头部左半部分城市和个人信息 -->
    <div class="m-geo">
        <div class='position'>
               <i class="el-icon-location" /><span>{{ $store.state.position }}</span>
               <router-link class="changeCity" :to="{name : 'changeCity'}">切换城市</router-link>
               <span>
                   [
                   <a href="">门头沟区</a>
                   <a href="">大厂回族自治县  </a>
                   <a href="">廊坊  </a>
                   ]
               </span>
        </div>
        <div class="m-user">
            <router-link class="lgoin" :to="{name : 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name : 'register'}">注册</router-link>
        </div>
    </div>
</template>

