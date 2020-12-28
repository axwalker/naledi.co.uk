---
title: "How to interpret a linear regression line in Tableau"
date: "2017-10-22"
categories: 
  - "tableau"
tags: 
  - "regression"
  - "statistics"
---

Have you ever used the Tableau regression line from the analytics tab? It's easy to create. All you need is a scatterplot, then navigate to the analytics tab, drag out a trend line and drag it onto the relevant regression type. We will stick to the linear regression for now.

![Regression line](https://nalediholly.files.wordpress.com/2017/09/regression-line1.jpg)

So our scatterplot has now been given a regression line. But what does this actually mean? You can spend years studying the science of regression. Really, I spent an entire semester of my MSc doing it and could definitely have used more time. But you can learn the basics very quickly. If you want to create a reliable linear regression in your analysis I would recommend you read up a little about it as there are some rules around what type of data can and cannot (statistically) be used in a regression. Tableau doesn't really care about these and will calculate a line for you regardless. You may have a fantastic p-value and R-Squared but if the model is based on data that doesn't lend itself to a linear regression this will be meaningless.

If you are looking for a statistically valid regression to actually try to predict an outcome you may also want to calculate this in an external tool, such as Alteryx, or use the Tableau connections with R and Python, as this will give you more flexibility around your model creation.

But drawing a quick regression line can still be useful to get a sense of the relationship between two variables. Or perhaps you just want to get a better understanding of a regression line someone else has built in Tableau. For that purpose I have put together an overview page.

![Regression explanation](https://nalediholly.files.wordpress.com/2017/10/regression-explanation.jpg)
