---
title: "Next level LOD filtering in Tableau"
date: "2017-09-05"
categories: 
  - "tableau"
tags: 
  - "filter"
  - "lod"
  - "parameter"
---

I recently was asked to create a visualisation that would allow a sales person to see all leads in the system that were associated with the same company and what status these leads were currently assigned. Easy enough. The second request, was to be able to filter the company based on the presence of just one lead with a specific status. As the status is assigned at the lead level but the filter should be applied at the company level I had to create a level of detail calculation and a parameter to do this.

First I created a parameter with a string data type, making use of the ‘Add from Field’ option to bring in all statuses. I also included an additional value called ‘All’ as I want to be able to show the list of companies unfiltered by status.

![1](https://nalediholly.files.wordpress.com/2017/09/1.png)

Next, I used this parameter in a calculation. In my chart, this will be used as a filter to only show the TRUE values.

![2](https://nalediholly.files.wordpress.com/2017/09/2.png)

- If the parameter is set to ‘All’, each row is assigned a TRUE value, so everything will be shown.
- If the status assigned to a lead is the same as the parameter value chosen, the calculation will return a TRUE value. However, this will be at the row level, which is why a level of detail calculation is wrapped around the IF statement
- The LOD takes the maximum value of the IF statement at the company level. This means if there is just one true value on the lead level, the entire company value will be TRUE (The maximum of a boolean is TRUE)

As you can see below, the companies are marked as TRUE or FALSE on a company level if there is just one lead present that is the same as the parameter value. If we move this calculation to the filter shelf and set this to only show TRUE values, Company B will no longer be shown.

![3](https://nalediholly.files.wordpress.com/2017/09/3.png)
