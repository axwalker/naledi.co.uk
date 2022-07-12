---
title: 'Using Alpine.js with the Tableau JavaScript API'
summary: |
  How to use Alpine.js and the Tableau JavaScript API to embed Tableau dashboards in your web pages
date: '2021-01-03'
categories:
  - 'tableau'
  - 'webdev'
---

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>

Tableau lets you embed your dashboards in web pages with the [Tableau JavaScript API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm). Today we'll show you how to use Alpine.js to empower the Tableau JavaScript API with even less code.

## The Tableau JavaScript API

If you have ever embedded a Tableau dashboard in a website you will be familiar with the basic embedding functionality. This is available through the share options, where you will find the generated embed code. You can even change [parameters](https://help.tableau.com/current/pro/desktop/en-us/embed_list.htm) in this code to customise aspects, such as which options are available through the toolbar or if tabs should be hidden.

![A screenshot of the Tableau Public share dialogue, with the embed code highlighted](/blog-images/basic_embed.png)

(Basic embed for your Tableau Public dashboard)

In many cases this will meet all your needs for sharing your visualisation through a website. However, there is so much more that your Tableau visualisation can do as part of your web application. This is where the [Tableau JavaScript API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm) comes in. With this API you can set up advanced integration between your web page and visualisation, such as setting up buttons with custom functionality or filtering your visualisation with a control from your page.

## Getting started with the Tableau JavaScript API

In order to start using the Tableau JavaScript API, it is helpful to know some HTML, CSS and JavaScript, but you can also pick it up if you don't know these languages! If you are new to the JavaScript API I recommend [this excellent tutorial](https://embedding.theinformationlab.co.uk/videos). It teaches you the basics without expecting any JavaScript knowledge. Based on this tutorial I was able to create some simple buttons to replicate the functionality of the Tableau toolbar while matching the style of the hosting webpage. The HTML and CSS aspects are glossed over a little in the tutorial, so it helped that I was familiar with the fundamentals (Check out my earlier post to see how you can <a href="/blog/learn-html-and-css" target="_blank"> learn HTML and CSS</a>).

![A screenshot of a Tableau dashboard, embedded on an external web page. Three buttons are shown underneath the visualisation to download as an image, share online and export data. These buttons are part of the web page rather than the Tableau dashboard](https://naledi.co.uk/blog-images/tableau_buttons_example.png)

(Example of an embedded visualisation. The buttons interact with the dashboard but are part of the web page.
<a href="https://data.undp.org/content/assessing-covid-impacts-on-the-sdgs/" target="_blank">
Visit data.undp.org to see the full page</a>)

The Tableau JavaScript API tutorial mentioned above uses basic JavaScript throughout and then introduces React in one of its final videos. Instead of React, this post suggests the use of Alpine.js as an approach that is more suited for use with Tableau JavaScript API.

## What is Alpine.js?

[Alpine.js](https://github.com/alpinejs/alpine) is a library that helps you to keep your JavaScript and HTML closer together. With basic JavaScript, you have `<script>` sections (or separate JavaScript files) that control the interactive aspects of your page - including reacting to user inputs and dynamically changing what's displayed on your webpage. It can be difficult to keep your HTML and JavaScript correctly aligned without some additional help. This is where Alpine comes in.

Let's look at a basic example of a counter to see what this means. We show a number that you increment or decrement by pressing the plus or minus buttons.

<div x-data="{ counter: 0 }" class="flex items-center py-4 space-x-4">
  <button x-on:click="counter = Math.max(0, counter - 1)" class="inline-flex items-center justify-start  px-5 py-1.5 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 md:text-lg">-</button>
  <span x-text="counter" class="px-4 py-1.5 border border-gray-300 rounded-full "></span>
  <button x-on:click="counter++" class="inline-flex items-center justify-start  px-5 py-1.5 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 md:text-lg">+</button>
</div>

**Code without Alpine.js:**

```html
<div>
  <button id="decrement">-</button>
  <span id="counter-value">0</span>
  <button id="increment">+</button>
</div>

<script>
  let counter = 0
  const decrementButton = document.getElementById('decrement')
  const incrementButton = document.getElementById('increment')
  const counterDisplay = document.getElementById('counter-value')

  decrementButton.addEventListener('click', () => {
    counter--
    counterDisplay.innerText = counter
  })
  incrementButton.addEventListener('click', () => {
    counter++
    counterDisplay.innerText = counter
  })
</script>
```

In basic JavaScript, we have to add `id` attributes to each HTML element, then reference them in a separate `<script>` tag and add what are called 'event listeners' to make the appropriate changes to the counter value.

**Code with Alpine.js:**

```html
<div x-data="{ counter: 0 }">
  <button x-on:click="counter--">-</button>
  <span x-text="counter"></span>
  <button x-on:click="counter++">+</button>
</div>
```

Now with Alpine.js we can write our JavaScript directly within our HTML. We use the `x-data` to make an Alpine 'component' with some initial data attached to it - we set `counter` to `0`. Then we have two buttons which decrease/increase this counter respectively using the `x-on:click` attribute. Finally, we show the value of this counter in the middle using `x-text`. Each of these `x-` attributes are called 'directives', and they're what we'll be using in combination with Tableau.

## Why use Alpine.js with Tableau?

You can use the Tableau JavaScript API without Alpine, as demonstrated by [various examples in Tableau's documentation](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_samples.htm). However, writing these can be fiddly and the resulting code can be hard to read and understand. This can get further complicated when you are embedding multiple dashboards in the same web page. Alpine.js solves both of these problems because it is:

- **Declarative:** You define the behaviour you want directly on the elements (eg. a button) that are shown to the user.
- **Scoped:** Each Tableau dashboard embed will be its own Alpine component, so the data and buttons associated with each embed can't clash with each other.

## Using Alpine with Tableau

We'll use the example of adding custom export buttons taken from [Tableau's documentation](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_samples.htm) to demonstrate how to use Alpine with the Tableau JavaScript API. The code we've used from the Tableau documentation has been modified slightly to be more up to date with modern browsers. Let's see how the embed can be done both with and without Alpine.js.

**Embed result:**

<div
  x-data="{
    viz:undefined,
    url:'https://public.tableau.com/views/USPopulationProjections-MakeoverMonday452018/Ageingpopulation?:language=en-GB&:display_count=y&:origin=viz_share_link',
    options:{ hideTabs: true }
  }"
  x-init="viz = new tableau.Viz($refs.dashboard, url, options)"
>
  <div x-ref="dashboard"></div>

  <div
    class="flex flex-col items-stretch mt-6 space-y-2 md:items-center md:space-y-0 md:flex-row md:space-x-4 md:mx-auto"
  >
    <button
      class="flex md:inline-flex items-center justify-center px-5 py-1.5 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 transform hover:-translate-x-0.5 transition hover:-translate-y-0.5 hover:shadow-lg"
      x-on:click="viz.showExportPDFDialog()"
    >
      Export to PDF
    </button>
    <button
      class="flex md:inline-flex items-center justify-center px-5 py-1.5 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 transform hover:-translate-x-0.5 transition hover:-translate-y-0.5 hover:shadow-lg"
      x-on:click="viz.showExportCrossTabDialog()"
    >
      Export to CSV
    </button>
    <button
      class="flex md:inline-flex items-center justify-center px-5 py-1.5 font-medium text-white border border-transparent rounded-3xl bg-primary-500 hover:bg-primary-500 transform hover:-translate-x-0.5 transition hover:-translate-y-0.5 hover:shadow-lg"
      x-on:click="viz.exportCrossTabToExcel()"
    >
      Export to Excel
    </button>
  </div>
</div>

<div class="w-full h-1 my-4"></div>

**Code without Alpine.js:**

```html
<script
  type="text/javascript"
  src="https://public.tableau.com/javascripts/api/tableau-2.min.js"
></script>

<div id="vizContainer"></div>

<div
  class="flex flex-col items-center mt-6 space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:mx-auto"
>
  <button onclick="exportToPDF();">Export to PDF</button>
  <button onclick="exportToCSV();">Export to CSV</button>
  <button onclick="exportToExcel();">Export to Excel</button>
</div>

<script type="text/javascript">
  let viz

  function initViz() {
    if (viz) return
    const containerDiv = document.getElementById('vizContainer')
    const url =
      'https://public.tableau.com/views/USPopulationProjections-MakeoverMonday452018/Ageingpopulation?:language=en-GB&:display_count=y&:origin=viz_share_link'
    const options = { hideTabs: true }

    viz = new tableau.Viz(containerDiv, url, {})
  }

  function exportToPDF() {
    viz.showExportPDFDialog()
  }

  function exportToCSV() {
    viz.showExportCrossTabDialog()
  }

  function exportToExcel() {
    viz.exportCrossTabToExcel()
  }

  initViz()
</script>
```

<div class="w-full h-1 my-4"></div>

**Code with Alpine:**

```html
<script
  src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js"
  defer
></script>
<script
  type="text/javascript"
  src="https://public.tableau.com/javascripts/api/tableau-2.min.js"
></script>

<div
  x-data="{
    viz: undefined,
    url: 'https://public.tableau.com/views/USPopulationProjections-MakeoverMonday452018/Ageingpopulation?:language=en-GB&:display_count=y&:origin=viz_share_link',
    options: { hideTabs: true }
  }"
  x-init="viz = new tableau.Viz($refs.dashboard, url, options)"
>
  <div x-ref="dashboard"></div>

  <div>
    <button x-on:click="viz.showExportPDFDialog()">Export to PDF</button>
    <button x-on:click="viz.showExportCrossTabDialog()">Export to CSV</button>
    <button x-on:click="viz.exportCrossTabToExcel()">Export to Excel</button>
  </div>
</div>
```

Immediately you'll see that the Alpine version is much more concise. Let's walk through how it works by looking at the `x-` directives used:

1. `x-data` is used with various data being set:
   1. `viz`: this is the variable that holds our Tableau viz. We set it to `undefined` first and we'll see it getting set shortly.
   2. `url`: the share link for our Tableau dashboard.
   3. `options`: any extra embed options we want to provide.
2. `x-init` is used to actually create the Tableau visualisation with the url and options we defined above. We also pass it a reference to the the html div we want the dashboard to be placed in.
3. `x-ref` is used to mark the div that was used in step (2) as `$refs.dashboard`.
4. `x-on:click` is used on each button in turn with the corresponding export function.

There are [many more directives in Alpine.js](https://github.com/alpinejs/alpine#learn) that could be used for more complicated solutions like custom filter lists.

## What about other libraries like React or Vue?

[React](https://reactjs.org/) and [Vue](https://vuejs.org/) are JavaScript libraries that solve the same problems as Alpine.js. However, for small projects like embedding some Tableau dashboards, Alpine.js can be considerably easier to set up and use.

<div class="w-full h-1 my-4"></div>

_This post is a collaboration with [Andrew Walker](https://twitter.com/axwdev)._
