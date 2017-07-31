---
layout: post
title: 引用类型(一) 学习笔记
date: 2017-07-30
categories: blog
tags: [study,note,引用类型,Array]
description: 引用类型
---

## 引用类型
>当属性名中有空格的时候，可通过 xxx["first name"] = xxx; 来进行访问 通常通过xxx.xxx来访问

数组Array:

>数组Array.length属性可通过设置在数组末尾移除或者添加新项

>数组包含项有上限

>检测数组 Array.isArray(value) //多框架数组传递有具有不同的构造函数的问题 value instanceof Array 

>Array.jion("value")方法 通过 value 来分隔数组中的数组项全部输出

>数组作为栈来使用 Array.pop()  Arrya.push()

重排序方法：
>Array.reverse() 反转数组项顺序

>Array.sort() 比较字符串 对自动调用数据项.toString()方法，可以接受一个比较函数作为参数，以便我们指定哪个值位于哪个值前面。
		function compare(value1 ,value2){
			if(value1 < value2){
				return -1;
			}
			else if(value1 > value2){
				return 1;
			}
			esle{
				return 0;
			}
		}
>Array.sort(compare); 由大到小输出

>Array.concat()数组拼接，构建新数组

>Array.slice(value1,value2)数组截取，value1到value2 构建新数组

>Array.splice()数组插入
>删除(Starvalue1,Endvalue2..)
>插入(Starvalue1,0,insert1,insert2...)
>替换(Starvalue1,Endvalue2,insert1,insert2..)

>Array.concat()数组拼接，构建新数组
