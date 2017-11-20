---
layout: post
title: 基础库版本1.6.4 '__route__' of undefined
date: 2017-11-17
categories: blog
tags: [bugfix]
description: mini_weixin
---

>error:

        WAService.js:12 Uncaught (in promise) TypeError: Cannot read property '__route__' of undefined

>solveMethod:

        加上.bind(this) this.handleCheckoutChanged.bind(this)
        
        疑似基础库修改

        getPhoneNumber 用户点击确定或者取消后回调函数使用

解决方法来自：<a href="https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5b821348ef82478527d8fdcf3af5f207&highline=__route__&token=226821302&lang=zh_CN">微信小程序论坛</a>


<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.0.js"></script>
<button onclick='btnclick()'>我是测试按钮</button>

<script type="text/javascript">
console.log(window.__wxjs_environment === 'miniprogram');
function btnclick (){
console.log(window.__wxjs_environment === 'miniprogram');
wx.miniProgram.navigateTo({url:'pages/index/index'});}
</script>
