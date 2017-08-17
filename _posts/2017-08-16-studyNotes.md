---
layout: post
title: DOM<文档对象模型>(五) 学习笔记
date: 2017-08-17
categories: blog
tags: [study,note,DOM,动态创建table]
description: DOM,动态创建table
---

DOM 动态创建table

        var table = documnent.createElement("table");
        table.border = 1;
        table.width = "100%";

        var tbody = document.createElement("tbody");
        table.appendChild("tbody");
        //一行两列创建
        var row1 = document.createElement("tr");
        tbody.appendChild(row1);
        var cell1_1 = document.createElement("td");
        cell1_1.appendChild(document.createElement("Cell 1,1"));
        row1.apendChild(cell1_1);
        var cell2_1 = document.createElement("td");
        cell2_1.appendChild(document.createElement("Cell 2,1"));
        row1.appendChild(cell2_1);
        //另一种方法
        tbody.insertRow(0);
        tbody.rows[0].insertCell(0);
        tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
        tbody.rows[0].insertCell(1);
        tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));

        tbody.insertRow(1);
        tbody.rows[1].insertCell(0);
        tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
        tbody.rows[1].insertCell(1);
        tbody.rows[1].insertCell(1);
        tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
        //添加table到body
        document.body.appendChild(table);

