---
layout: post
title: failed to push some refs to
date: 2017-07-27
categories: blog
tags: [git]
description: git push failed
---

遇到问题如下：

>--$ git push origin master</br>

>--Counting objects: 4, done.

>--Delta compression using up to 4 threads.

>--Compressing objects: 100% (4/4), done.

>--Writing objects: 100% (4/4), 427 bytes|0 bytes/s, done.

>--Total 4 (delta 2), reused 0 (delta 0)

>--remote: Resolving deltas: 100% (2/2), completed with 2 local objects.

>--remote: error: GH007: Your push would publish a private email address.

>--remote: You can make your email public or disable this protection by visiting:
>--remote: http://github.com/settings/emails

>--To https://github.com/Cuadministrator/Cuadministrator.Github.io.git

>--! [remote rejected] master -> master (push declined due to email privacy restrictions)

>--error: failed to push some refs to 'https://github.com/Cuadministrator/Cuadministrator.Github.io.git'

 主要问题：

>--! [remote rejected] master -> master (push declined due to email privacy restrictions)
 解决方法：

 方法一:

 Github->settings->Block command line pushes that expose my email(该选项前的复选框勾掉)

 方法二(未尝试):

 --git config --global user.email

 --git config --global user.email username@users.noreply.github.com

 --git commit --amend --reset-author

 --git push

 [参考方案](https://stackoverflow.com/questions/43378060/meaning-of-the-github-message-push-declined-due-to-email-privacy-restrictions)