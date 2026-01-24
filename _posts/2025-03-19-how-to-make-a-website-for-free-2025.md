---
date: 2025-03-19 19:22:44
layout: post
title: How to make a website for free (2025)
subtitle: Ever wondered how you can make a website with little programming
  background? Have you hated the idea of using Wix or Squarespace, finding it
  really restrictive (and costly)? In this article, I will run through how to
  create static sites easily and for free.
description: Ever wondered how you can make a website with little programming
  background? Have you hated the idea of using Wix or Squarespace, finding it
  really restrictive (and costly)? In this article, I will run through how to
  create static sites easily and for free.
image: /assets/img/uploads/purpose-of-a-website-media-heroes-banner-1.webp
optimized_image: /assets/img/uploads/purpose-of-a-website-media-heroes-banner-1.webp
category: tutorial
tags:
  - website
  - tutorial
  - programming
author: Josh
paginate: false
---
# I﻿ntroduction

T﻿his walkthrough will be for setting up STATIC sites only. Static sites are sites that do not update regularly based on user input (ie people who visit the site cannot change what's on it). Static sites are usually for blogs and portfolios only, they can have redirect urls and usually do not require a virtual machine (VM) to create.\
I﻿n the past, static sites are hardcoded by HTML(for words), CSS(for style) and JS(for logic). Hence, you often had to hire a web dev to create a website for you (even a simple static site). Today, however, advanced no-code tools, languages and templates have been developed by the dev community making this extremely easy! All it takes is just 5 simple steps.

# S﻿ourcing for templates

N﻿o one likes to hard code websites, especially non-techies. Luckily, there are many templates online. Personally, I suggest using Jekyll templates (any other templates work as well). These templates are essentially pre built projects filled with HTML,CSS, JS files that adhere to the master doc. To copy it, the easiest way is to fork a github repository into your own repository.

# U﻿nderstanding the code

T﻿he downside of templates is they tend to be outdated, some of the tools may use may have undergone an update, we have to check for that for the program to run.

* P﻿ersonally, I like to open github desktop, then open the project into a code editor (i use vscode but there are other more advanced ones like windsurfer).
* O﻿pen deepseek on another tab
* T﻿est every part of the project slowly, use deepseek to analyse the error, then work on it
* A﻿fter some back and forth, once the program works locally, push the commits to github through the github desktop
* K﻿ey errors to take note of (AI may not catch them): Different versions= different documents and syntax, update the syntax as necesssary. Also, different functionalities as well, take note if there is a need to change the 'tool' used.

A﻿fter solving these issues. You can simply host the website on github pages but if you would like a better but still free option, i recommend netlify.

# Finding a host

T﻿here are many hosts out there, but for static sites, free hosting should be the key (static sites do not need a lot of resources). I recommend netlify or github pages. Netlify is harder to setup but there are many pre built functionalities you can add to your site which would require hard coding on github (if using github pages).



# C﻿MS

C﻿MS aka Content Management System basically makes it such that non-programmers can edit the website without even touching the code (or entering a code editor). How it works is that it provides a much more user friendly interface for people to write things in (depends on the functionalities of the CMS). In some instances, there can be many different admins of a website which can all write in it...

I﻿n my case, I used Decap CMS since it was easily integrated with netlify. Additionally, my template had pre-built instructions for the CMS integration so it was a no-brainer. However, if your chosen template does not have CMS instructions (under readme.md or config.yml), you can write it yourself according to the docs with the help of deepseek, its not too complicated.



# D﻿omain name

T﻿he easiest step, buy a domain name, follow the instructions of whatever host you are using (to redirect the domain name), and you are all set. I recommend namecheap, because its cheap, do not overthink this step, it does not really matter who is the provider of the domain name, all you need is for your domain name to be officially registered.



# C﻿onclusion

I﻿ strongly recommend developing your own website, it provides an infinite amount of flexibility because you own your own code. If you want to add new features, you can do it anytime and are not limited by the ecosystem of the design site you use (why subscribe to wix, paying them to trap you with the limited functionalities they provide ). Furthermore, you OWN your code, no one can take it away from you and it will never be compromised.

T﻿he whole 5 step process is built on a more complex JAMstack philosophy. In the past, after manually writing the code, you manually commit it (through terminal), then manually update and build your website which takes a lot of time. After your website is built you realise you need to make small adjustments (you will not be able to envision the site with code easily) and the whole process repeats, taking forever. \
W﻿ith the hosts I mentioned, after committing your code to your repository, it automatically rebuilds the site in seconds. With the CMS, all edits will automatically be pushed back to github and rebuilt instantly to the website. With the array of open-source templates, you do not have to start from 0. \
W﻿ith all this set up, all you have to do is enter your CMS, make changes and it will immediately reflect on your site!\
\
S﻿ide note: This is my first post, I'm trying to get better at explaining things.. so if there is any part which you do not understand feel free to ask me, I'm more than happy to help!