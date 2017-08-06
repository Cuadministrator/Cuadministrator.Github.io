---
layout: post
title: 面向对象的程序设计(三) 学习笔记
date: 2017-08-06
categories: blog
tags: [study,note,BOM,窗口,对话框]
description: BOM,窗口,对话框
---

## BOM
窗口关系以及框架:

标签:

<frame></frame>

<frameset></frameset>

获取窗口位置:

        关于浏览器兼容
        var leftPos = (typeof window.screenLeft == "number")?windows.screenLeft:windows.screeX;

        var topPos = (typeof window.screenTop == "number")?window.screenTop:window.screenY;

移动窗口:
(对最外层的windw对象使用, ie7+会禁用该方法)

        window.moveBy() //在水平和垂直方向上移动的像素数
        window.moveTo() //新位置的X,Y坐标

移动端布局窗口,渲染后实际页面的大小:
>document.documentElement.clientWidth
>document.documentElement.clientHeight

移动端布局视口的信息:
>document.body.clientWidth
>document.body.clientHeight

设置超时调用 window对象的 setTimeout()方法
    
    var setTime = setTimeout(function(){
        alert("error!");
    },2000);
    clearsetTimeout(setTime);

>Ps:setInterval()设置间歇调用也同理;尽量不使用间歇调用;

对话框:

>alert("") //单纯的对话框

>confirm("") //不单纯的对话框QWQ,有cancel和ok

>prompt("")//有ok 和cancel,可以输入文本

        if(confirm("are you sure ?")){
            alert("");
        }else{
            alert("");
        }

        var result = prompt("what is your name ?");
        if(result!=null){
            alert("");
        }
