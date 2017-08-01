---
layout: post
title: 引用类型(三) 学习笔记
date: 2017-08-01
categories: blog
tags: [study,note,引用类型,Function,内部属性]
description: 引用类型,Function
---

## 引用类型

函数内部属性:arguments和this
> arugements 对象是类数组对象 其中包含了传入函数的所有参数
> 对于求一个数的阶乘，会用到递归调用 需要消除紧密耦合 在修改函数名后依然能够运行
        function factorial(num){
            if(num <= 1){
                return 1;
            }
            else{
                return num * arguments.callee(num-1);
            }
        }

>this 引用函数执行环境的环境对象
>Ps:函数名仅仅是一个包含指针的变量，在不同环境执行，指向同一函数

>caller 调用当前函数的引用，全局模式中调用当前函数的值为null

函数属性和方法:
>length传入参数个数
>prototype保存实例，不可枚举
