---
layout: post
title: DOM<文档对象模型>(四) 学习笔记
date: 2017-08-15
categories: blog
tags: [study,note,DOM,分割文本节点,Comment类型,cdataSection,DocumentType,动态脚本]
description: DOM,分割文本节点,Comment类型,cdataSection,DocumentType,动态脚本
---

分割文本节点:
        
        splitText()

Comment类型:
        
        注释在DOM中以该类型表示
        nodeType = 8
        nodeName = #comment
        nodeValue 的值是注释的内容
        parentNode 是Document或者Element
        无子节点

CDATASection类型:

        nodeType = 4
        nodeName = #cdata-section
        nodeValue值为 CDATA区域内的内容
        parentNode可能是Document或者Element
        无子节点

DocumentType类型:

        nodeTyoe = 10
        nodeName = doctype名称
        nodeValue = null
        parentNode = Document
        无子节点

DocumentFragment类型
Attr类型

DOM操作技术:

动态脚本
        
        <script type="text/javascript" src="client.js"></script>



