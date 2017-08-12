---
layout: post
title: DOM<文档对象模型>(一) 学习笔记
date: 2017-08-09
categories: blog
tags: [study,note,DOM,]
description: DOM,
---

Node类型:

>节点类型,除了IE以外都可以访问到该类型

>节点关系，每个节点中有一个NodeList对象，访问NodeList中的对象
        var firstChild = someNode.childNodes[0];
        var secondChild = someNode.childNodes.item(1);
        var count = someNode.length;

>转化NodeList为数组
        var arrayofNodeList = Array.protoType.slice.call(someNode.childNodes,0);

