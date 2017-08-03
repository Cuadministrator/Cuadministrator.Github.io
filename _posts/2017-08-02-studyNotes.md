---
layout: post
title: 面向对象的程序设计(一) 学习笔记
date: 2017-08-02
categories: blog
tags: [study,note,属性类型,原型模式(prototype)]
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

原型模式:
>prototype 该属性是一个指针，指向一个对象，这个对象是包含可以有特定类型的所有实例共享的属性和方法，作用是可以让所有实例共享它所包含的属性和方法。

