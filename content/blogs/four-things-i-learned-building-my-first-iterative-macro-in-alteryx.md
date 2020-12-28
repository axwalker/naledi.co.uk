---
title: "Four things I learned building my first iterative macro in Alteryx"
date: "2019-03-25"
categories: 
  - "alteryx"
tags: 
  - "iterative"
  - "macro"
---

I've been using Alteryx for just over two and a half years now and have built several standard and batch macros, but never an iterative macro - until now.

Until fairly recently I wasn't even sure what the difference was between an iterative and a batch macro, so let me share my take on this right at the start here.

### How are iterative and batch macros different?

**Batch macros** run once for each row that they are fed. Each row of your input has a new value that affects the workflow in your macro and it will stop once it has gone through all rows. This is useful when you already know the list of variables that you will have to run through your macro, for instance if you want to call an API where you need to define the year for which you want the data to be called, but you would like all the years you can get. In this case you make a list of all the years you want for the input, package up your workflow into a batch macro and it will run once for each year in your list.

But often you might not know the list of values for which you have to run your workflow or how often you need to run it. You might only get this information by starting your workflow. In my case I was calling an API that contained an offset value. The basic API call only returned 20 records at a time and then included an offset value, that you could use to call the next 20 records. So you need to run a call, get the offset value and add it to the next call and so on.

This is what an **iterative macro** is made for. Rather than starting out with a list of values, it can take data created in your workflow and then run the next iteration based on this in a loop. In an iterative macro, you typically have one input and two outputs, one for the data you are generating and one for the data that you are sending back to the start of the workflow for the next run.

It took me quite a while to figure out how to set up my iterative macro to loop through the different offset values, and get all of our 2000+ contacts from Hubspot in 20 record increments. I learned a few things in the process, that seem pretty obvious now, but might be useful for you if you are struggling through your own iterative macro build process.

#### 1\. Configuring your output-input loop

When you set up your macro, you will have to indicate in your [Interface Designer](https://help.alteryx.com/2018.2/InterfaceDesigner.htm) pane, which of your two macro outputs is your iteration output. This one will be fed back in every loop and will act as the new input. Make sure the headers of your output exactly match the headers of your input, otherwise Alteryx won't know what to do with your new values

- ![](https://nalediholly.files.wordpress.com/2019/02/iterations.png)
    

#### 2\. Finding errors

The most difficult part of building macros (this goes for the batch variety as well) is that it is happening in a black box. It can be incredible tedious to try and find out at what point something is going wrong, because you cannot watch the records as they pass through the macro, you just see things coming out all wrong on the other side.  
  
You can just move your iterative output around, or create a new one for testing, but this won't always be a suitable method for discovering the particular error you are looking for. I discovered the [x-ray tool](https://community.alteryx.com/t5/Engine-Works-Blog/The-X-Ray-Browse-Macro-Debugging-Made-Easier/ba-p/2358), which helps you overcome this by providing small snapshots of a few rows of data wherever you place it.

![](http://community.alteryx.com/legacyfs/online/images/xraymacro.png)

I haven't been able to get the iteration output to show me any data, which is quite inconvenient, as it can be really helpful to investigate what has gone through each iteration. You can use the x-ray tool as a helper here, or just add another macro output during the build process, which receives exactly the same data as your iterative macro output.

#### 3\. Ending your iterations

You can determine a set number of times that your iterative macro should run. This is especially useful during the testing phase and to set a limit to how long a workflow should run before it shuts itself down eventually in case one of the configurations is incorrect but generally you will want something more dynamic than that. An iterative macro will run as long as the iteration output receives any data that it can feed back to the input. That means, that even if the value that you are referencing is NULL or empty, as long as there is a record, Alteryx will continue to run through the iterative loop until the max number of iterations is reached.

You should use filters and joins to make sure your workflow ends when a certain condition is met. In my use case there is another field that informs me if there is a follow-up page. As soon as that is 0 rather than 1, a series of tools prevent the offset value from being passed through the iterative loop.

![](https://nalediholly.files.wordpress.com/2019/01/ending-iterative-macro.png)

If the field 'has-more' is not true no value is passed to the left side of the join, so the right side with the offset value passes through the right output. No records reach the 'I Output' in that scenario.

#### 4\. Checking your output

This is one I have been caught out by several times. When you test your iterative macro and just view the data output you will only be shown the first line of data from each iteration output.

![](https://nalediholly.files.wordpress.com/2019/02/macro-output.png)

Why? No idea.

You can see the full result of your macro if you attach any other tool and then look at the output of your macro or just use a browse tool.

![](https://nalediholly.files.wordpress.com/2019/02/macro-output-2.png)
