---
layout: post
title: DOM<文档对象模型>(一) 学习笔记
date: 2017-08-12
categories: blog
tags: [study,note,DOM,文档写入,文档信息,查找元素]
description: DOM,文档写入,文档信息,查找元素
---

文档写入:

        document.write("<script type="text/javascript">"+"需要写入的script内容"+"<\/script>");    ps:注意转义字符"<\/script>".

Element类型：
>nodeType = 1
>nodeName = 元素标签名
>nodeValue = null
>parentNode = Document或者Element

验证标签名需要转大小写
        
        if(element.tagName.toLowerCase == "div"){
        //操作
        }

HTML元素:
id title lang dir className 

获取特性: 

        var div = document.ElementById("myDiv");
        div.getAttribute("id"); // myDiv
        div.getAttribute("class");//class
        div.getAttribute("tittle");//tittle
        div.getAttribute("dir");//dir

设置特性:

        div.setAttribute("id","someOtherId");
        div.setAttribute("class" , "ft");

        div.myColor = "red";
        div.getAttribute("myColor");// null(IE除外)

移除特性:

        div.removeAttribute("class");

attributes属性:
        
> NamedNodeMap作为该属性的动态集合,类似于 NodeList 
> 
> 元素每一个特性都有一个Attr节点表示
> 

拥有的方法:

> getNamedItem(name) 返回该节点

> removeNamedItem(name) remove节点

> setNamedItem(name) set节点

> item(pos) 返回数字pos位置节点

>element.attributes[i].specified //通过setAttribute()方法或者HTML设置了相应的特性

创建元素:
        
        var div = document.createElement("div");
        div.id = "myDiv";
        div.className = "box";

添加元素到文档树中:

        document.body.appendChild(div);

>不能设置动态创建的<iframe>元素name特性

>不能通过表单的reset()方法重设动态创建的<input
>元素

>动态创建的type特性值为reset的<button>元素重设不了表单

元素子节点:

        var element = document.createElement("div");
        element.className = "message";
        var textNode = document.createTextNode("<strong> Hello </strong> world!~");
        element.appendChild(textNode);
        document.body.appendChild(element);

规范化文本节点:

>如果在一个包含两个火多个文本节点的父元素上调用normalize()方法，会将所有文本节点合并成一个节点,结果节点的nodeValue值等于将合并前每个文本节点的nodeValue的值拼接起来的值。

        var element = document.createElement("div");
        element.className = "message";
        var textNode = document.createTextNode("<strong> Hello </strong> world!~");
        element.appendChild(textNode);
        document.body.appendChild(element);
        var textNode1 = document.createTextNode("hi~~");
        element.appendChild(textNode1);
        //主要合并节点
        element.normalize();