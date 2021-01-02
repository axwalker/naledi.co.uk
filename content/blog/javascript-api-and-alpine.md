---
title: 'Using Alpine.js with the Tableau JavaScript API'
summary: |
  How to use the Airtable API to pull data into Alteryx for further processing.
date: '2021-01-02'
categories:
  - 'tableau'
---

Outline of the post 

## The Tableau JavaScript API 
If you have ever embedded a Tableau dashboard in a website you will be familiar with the basic embedding functionality available through the embed code you can access through the share options. You can even change [parameters](https://help.tableau.com/current/pro/desktop/en-us/embed_list.htm) in this code to customise aspects like which options are available through the Toolbar or if tabs should be hidden. 

<n-img
src="/blog-images/basic_embed.png"
alt="A screenshot of the Tableau Public share dialogue, with the embed code highlighted"
caption="Basic embed for your Tableau Public dashboard"></n-img>

In many cases this will meet all your needs for sharing your visualisation through a website. However, there is so much more that your Tableau visualisation can do as part of your web application. This is where the [Tableau JavaScript API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm) comes in. With this API you can set up advanced integration between your web page and visualisation, such as setting up buttons with custom functionality or filtering your visualisation with a control from your page. 

## Getting started with the Tableau JavaScript API
In order to start using the Tableau JavaScript API, it is helpful to know some HTML, CSS and JavaScript, but you can also pick it up if you are completely new to web development! If you are new to JavaScript I recommend [this excellent tutorial](https://embedding.theinformationlab.co.uk/videos) to teach you the basics without expecting any JavaScript knowledge. Based on this tutorial I was able to create some simple buttons to replicate the functionality of the toolbar while matching the style guide of the hosting webpage. The HTML and CSS aspects are glossed over a little, so it helped that I was familiar with the basics (Check out my earlier post to see how you can <a href="/blog/learn-html-and-css" target="_blank">learn the basics of HTML and CSS</a>

<n-img
src="/blog-images/tableau_buttons_example.png"
alt="A screenshot of a Tableau dashboard, embedded on an external web page. Three buttons are shown underneath the visualisation to download as an image, share online and export data. These buttons are part of the web page rather than the Tableau dashboard"
caption="Example of an embedded visualisation. The buttons interact with the dashboard but are part of the web page. [https://data.undp.org/content/assessing-covid-impacts-on-the-sdgs/](Visit data.undp.org for the interactive)"></n-img>

_The tutorial uses basic JavaScript throughout and then introduces React in one of its final videos. We believe that Alpine.js is a simpler approach that is more suited to the Tableau JavaScript API_. 
_
## Why use a framework?

## Alpine.js

## Examples

What is the Tableau Javascript API? 
What is it used for? 
What do you need to know? 
Where can you learn the basics? 

What is Alpine.js? 
Why use Apline.js in combination with Tableau API? 
Alpine vs React/Vue (link to Andres blog posts)
Why use a framework?
Examples basic js vs Alpine 
