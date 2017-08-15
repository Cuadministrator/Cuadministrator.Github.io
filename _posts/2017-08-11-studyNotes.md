---
layout: post
title: DOM<文档对象模型>(二) 学习笔记
date: 2017-08-11
categories: blog
tags: [study,note,DOM,文档写入,文档信息,查找元素]
description: DOM,文档写入,文档信息,查找元素
---

文档信息:

>获取文档标题: document.tittle

>获取文档URL: document.URL

>获取文档域名: document.domain

>获取来源页面URL: document.referrer

>设置了松散的domain属性后不能设置紧绷的domain属性

查找元素:
>getElementById() 和 getElementByTagName()

>byId通常用于id查找 tagname通常用于取得单选按钮 

>所有的单选按钮具有相同的name特性，可以相同name不同id

DOM一致性检测：
>document.implementation.hasFeature("功能","版本号")

文档写入:
>document.write();
