---
layout: post
title: BOM<浏览器对象模型>(二) 学习笔记
date: 2017-08-07
categories: blog
tags: [study,note,BOM,location]
description: BOM,location
---

## BOM
location：
｝
>提供与当前窗口加载文档相关信息，以及导航功能

>location.

>hash 返回URL中的hash,不含散列返回空字符串

>host 返回服务器名称和端口号

>hostname 返回不带端口号的名称

>href 返回当前加载页面URL == toString()

>path 返回URL中目录和文件名

>port 返回端口号

>+protocol 返回页面使用协议

>search 返回URL查询字符串

Navigator对象:

screen对象:

history对象

客户端检测:

确定对象是否能够排序 
        
        function isSort(){
            return typeof object.sort = "function";
        }