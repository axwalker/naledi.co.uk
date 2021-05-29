---
title: "Change your mark colour when using an action filter in Tableau"
summary: |
  Set up your Tableau visualisation, so that the colour of your visualisation matches the category you are filtering to. 
date: "2018-12-14"
categories: 
  - "tableau"
tags: 
  - "actions"
  - "colour"
---

### What we want to do

I recently had the chance to get quite colourful for a dashboard that we are developing at [Operation Fistula](http://www.opfistula.org). The landing page gives the user an overview of the issue areas different entrepreneurs work in, and where in the world they are active. An action filter connects the two sheets so that we can filter the map to just one issue area.

<n-img
src="https://nalediholly.files.wordpress.com/2018/08/2018-08-07_10-30-56.png"
alt="A screenshot of the Tableau dashboard, showing a map at the top with differently-sized black dots and a column chart underneath with each of the bars in a different colour of the rainbow."
img-class="w-full"></n-img>

To emphasise that this is what is happening, I wanted the marks on the map to change to the colour of the issue area when it is filtered, so that it is clear that the green dots on the map correspond to the green bar below.

<n-img
src="https://nalediholly.files.wordpress.com/2018/08/2018-08-07_10-22-21.png"
alt="A screenshot of the Tableau dashboard, showing a map at the top with differently-sized dots, which are now the same shade of green as the bar selected in the column chart underneath."
img-class="w-full"></n-img>

### How to do it

We need to create a calculation to get our action filter to behave this way. What we are telling Tableau is basically: _When just one of the issue areas is selected, then return just the one value associated with that filter, when there is more than one issue area selected, show the default black_

In a calculation it looks like this:

<n-img
src="https://nalediholly.files.wordpress.com/2018/09/2018-09-18_14-24-21.png"
alt="A screenshot of the following calculation in Tableau, called 'Issue area colours': IF ({exclude [Country] : COUNTD(Issue area and group])}) > 1 THEN 'All' else ([Issue area and group]) END."
img-class="w-full"></n-img>

Let's take that apart.

> 1\. We are creating an IF statement, that tests a condition and returns one of two values: the string 'All' or the string that corresponds to the the issue area.
> 
> 2\. When there is more than one issue area, we want to return the value 'All' (This could be any other string). The view is broken down to the country level, and each country has a different number of issue areas associated with it. So we need to use a [level of detail](https://onlinehelp.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_overview.htm) calculation to exclude the \[Country\] field from this part of the calculation or 'All' might apply to those countries that have only one issue area associated with them. By excluding \[Country\] Tableau now looks at all of the issue areas in the view and counts each unique issue area once. At the outset this is 23, as this is the total number of issue areas we have in the data.
> 
> 3\. When we apply the action filter (see below for setup details), the whole view will only show one issue area. This is when the first condition of the IF statement is no longer TRUE and the ELSE condition gets activated. Now that we only have one issue area, the calculated field will return the \[Issue area and group\] field.

So much for the calculation. The next steps are needed to complete the dashboard action setup.

> 1\. Place the newly created calculation on the colour area of the marks card on the map sheet.
> 
> 2\. Place both your sheets onto a dashboard.
> 
> 3\. Set up your [action filter](https://onlinehelp.tableau.com/current/pro/desktop/en-us/actions_filter.htm) so that when you select a bar the map is filtered to just the category that you have selected.

Now, you should see that the map colour has changed, but it will probably not be the same as the colour of the bar that you selected. That is because the colour assignment is tied to a specific field, and while you are referencing the original field \[Issue area and group\] in your calculation, it is still a new field.

So you need to go through and assign the same colours to the new field as well. This is a bit tricky, as you need to have the action filter activated and need to have the reference colour available to know what you are setting it to. There might be better ways of doing this (and if you can think of one please let me know), but I went with the following steps: 

> 1\. On the dashboard, reveal the colour legend for the map. 
> 
> 2\. Select your first bar to activate the filter, the colour legend will change to your selection. 
> 
> 3\. Double-click the legend, then double-click the dimension member and use the colour picker to get the right colour from your bar. 
> 
> 4\. Repeat for every filter selection. 
> 
> 5\. Delete the colour legend from your dashboard.

Normally you wouldn't be using as many colours as I am hopefully, so this should be a fairly efficient process. Caveat is of course that if a new dimension member is added to your data you will need to adapt the colour match manually.
