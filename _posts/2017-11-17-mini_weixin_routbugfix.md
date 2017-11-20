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