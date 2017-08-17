---
layout: post
title: DOM<文档对象模型>(六) 学习笔记
date: 2017-08-17
categories: blog
tags: [study,note,DOM扩展,选择符API,元素遍历,HTML5,焦点管理,兼容模式,插入标记,自定义数据属性,专有扩展]
description: DOM扩展,选择符API,元素遍历,HTML5,焦点管理,兼容模式,插入标记,自定义数据属性,专有扩展
---

选择符API:

>QuerySelector()方法
        //取得body元素
        var body = document.querySelector("body");
        //取得id为myDiv的元素
        var myDiv = document.querySlector("#myDiv");
        //取得名称为"selected"类的第一个元素
        var selected = document.querySelector(".selected");
        //取得类为"button"的第一个图像元素
        var button = document.querySelector("img.button")

>querySelectorAll()方法
        //取得取得某个div中em元素
        var ems = document.getElementById("myDiv").querySelectorAll("em");
        //取得类为"selected"的所有元素
        var selecteds = odcument.querySelectorAll(".selected");
        //取得所有p元素中的strong元素
        var strongs = document.querySelectorAll("p strong");

>matchesSelector()方法

元素遍历:
        
        var i,
        len,
        child = element.firstChild;
        while(child != element.lastChild){
                processChild(child);
                child = child.nextElementSibling;
        }

HTML5:

与类相关的扩充方法:
>getElementsByClassName();
        var allCurrentUsernames = document.getElementsByClassName("username current");
        //取得ID为 myDiv 的元素中带类名 selected的所有元素
        var selected = document.getElementById("myDiv").getElementsByClassName("select");

classList属性:
        
        //判断元素中是否包含既定的类名
        if(div.classList.contains("bd") && !div.classList.contains("disabled")){
                //执行操作
        }
        for(var i = 0, len = div.classList.length; i < len ;i++){
                doSometing(div.classList[i]);
        }

焦点管理:

>document.activeElement 
        //检查文档是否获得了焦点,用户是否在与页面交互
        var button = document.getElementById("mybutton");
        button.focus();
        alert(document.hasFocus());

兼容模式:
        
        document.compatMode = "CSSlCompat" //标准模式  "BackCompat" //兼容模式

head 属性:

        var head = document.getElementByTagName("head") || document.head;

字符集属性:

        document.charset = "UTF-16";//"UTF-8";

自定义数据属性:

        var div = document.getElementById("myDiv");
        //获取值
        var appId = div.dataset.appId;
        var myName = div.dataset.myName;
        //设置值
        div.dataset.appId = 12345;
        div.dataset.myName = "michael";
        //判断myName是否存在
        if(div.dataset.myName){
                alert("hello! "+ div.dataset.myName);
        }

插入标记

innerHTML属性:

>插入script 元素
        //设置一个隐藏的input,在不影响页面布局情况下插入script
        div.innerHTML = "<input type=\"hidden\"><script defer>alert("Hi!")<\/script>";

在插入HTML字符串之前尽量手工检查一下文本内容

outerHTML属性:

        div.outerHTML = "<p>This is a paragraph.</p>";

insertAdjacentHTML():

        element.insertAdjacentHTML("","<p>This is a paragraph.</p>") 
        /*
        beforebegin 当前元素前插入紧邻同辈元素
        afterbegin 在当前元素之下插入一个新子元素 或 在第一个子元素后插入一个新的子元素
        beforeend 插入一个新的子元素 或 在最后一个子元素后插入一个新的子元素
        afterend 在当前元素后插入一个同辈元素
        */

循环添加innerHTML 

        var itemHTML = "";
        for(var i = 0 ; i < value.length ;i++){
                itemHTML += "<li>"+ value[i] + "</li>";
        }
        ul.innerHTML = itemHTML;

滚动页面scrollIntoView():

        document.forms[0].scrollIntoView(true or false);
        //true 顶部和视口平齐, false 调用元素尽可能出现在视口中

专有扩展:

文档模式:
        
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" >







