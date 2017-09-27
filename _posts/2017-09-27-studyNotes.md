---
layout: post
title: es6 学习笔记
date: 2017-09-27
categories: blog
tags: [study,note,es6,块级作用域]
description: es6
---

>let 和 var
        let作用于块级作用域 var作用于全局作用域

        在for循环中, let更为适用

        未申明变量时使用var 变量值为undefined 使用let 变量值报错

        let const 暂时性死区, 绑定区域不受外部影响

        let会使 typeof报错，先申明变量后使用

        let不能再相同作用于中，重复申明同一个变量

>块级作用域内声明函数 类似于var 提升到全局作用域 或者 函数作用域的头部

        块级作用域申明函数 使用 let xx = function(){}

        do获取跨级作用域的返回值 let xx = do {let x = f(); x= x+1;}

        tip: for循环中 循环内部为子作用域 循环变量为父作用域

>const 申明一个只读常量 常量值无法改变

        只在块级作用域有效 不可重复申明

        申明一个对象为常量 可以添加属性，但是不能改变对象  const foo={} foo = {} //erro

        ps: const 主要的作用是变量指向的内存地址不能变，但是对于数组和对象 实际是保存只想这个内存地址的指针 const只能保证指针固定，指向的数据结构可以改变，对象可以添加属性。

        冻结对象: const foo =  Object.freeze({});
        
        完全冻结(冻结对象 冻结属性): 
        var constantize = (obj) =>{
                Object.freeze(obj);
                Object.keys(obj).forEach((key, i) => {
                        if( typeof obj[key] === 'object' ){
                                constantize( obj[key]);
                        }
                });
        }




       
