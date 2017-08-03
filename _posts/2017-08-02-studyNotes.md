---
layout: post
title: 面向对象的程序设计 学习笔记
date: 2017-08-01
categories: blog
tags: [study,note,属性类型]
description: 属性类型
---

## 属性类型

Object.defineProperty()方法修改属性默认特性。
属性:
>Configurable 能否通过delete删除属性来重定义

>Enumerable 能否通过for-in循环返回属性

>Writable 能否修改属性值

>Value 属性的数据值

Example:
        
        var person = {};
        Object.defineProperty(person,"name",{
            weitable:false,
            value:"susan"
        });
        person.name = "tom";
        alert(person.name);//susan

访问器属性:
>

