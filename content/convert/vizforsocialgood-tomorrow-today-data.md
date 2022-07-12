---
title: '#VizForSocialGood - Tomorrow Today Data'
summary: |
  Understand the data preparation process and download the Alteryx workflow and data to the 2017 #VizForSocialGood project for 'Tomorrow Today'.
date: '2018-02-01'
categories:
  - 'alteryx'
  - 'data'
tags:
  - 'vizforsocialgood'
---

If you have worked with data provided by UK government before you will know what a pain it can be. Results are provided in Excel sheets, typically split over several tabs, and with lots of formatting that makes it easy to read in the file but difficult to use in Tableau.

But I don't want to complain too much. Here in the UK we have pretty fantastic access to public data, making it easy for those who are interested to perform their own analyses and hold government accoutable. I am currently working in Germany and data availability here doesn't even come close, especially at the national level.

The current [#Vizforsocialgood project](https://www.vizforsocialgood.com/join-a-project/2018/1/1/tomorrow-today-papa-baiden) for [Tomorrow Today](http://www.papabaiden.com/) supplies public data on homelessness figures and information about vacant properties on the Local Authority level. I've cleaned this data and created matching shapefiles in Alteryx and want to make the results available to anyone else who is taking part.

Initially I had thought this would be a quick project, but it ended up taking quite a lot of time due to some quirks in the data. Northumberland nearly made me cry.

Just a disclaimer here that **I do not guarantee the results are accurate**. I did whatever checks I could but I didn't want to delay this too much longer since the deadline for the project is coming up soon, so something might have slipped through in the process. If you notice any issues, please let me know and I will correct them.

I am making my Alteryx workflow available to anyone who would like to check my workings or make alterations for their own analysis. As each sheet in the vacant dwelling file was slightly different I opted to just copy and paste the process before unioning them and adapting this slightly for each sheet that needed it, rather than building a macro that accounted for these differences. With more time this would definitely be something I would change.

The links to the data and the Alteryx workflow are at the end of this post, but before heading over there, here are some notes on the data that you should consider before using it:

- In 2009 there was a bit of a Local Authority reshuffle. Some smaller authorities were combined into larger areas and were assigned new ONS codes. Some of the pre-2009 data uses these original LAs. I have opted to apply the new classifications also to the pre 2009 data and sum the numbers up. I used [This lookup table](https://nalediholly.files.wordpress.com/2018/02/lookup-table-2009-la-changes.xlsx 'Lookup table 2009 LA changes') as a reference to do this (This was the main headache in getting these different files together).
- There are several fields that estimate the number of vacant dwellings. They differ in three ways
  - Ownership: Are the properties owned by the Local Authority or by a housing association? There is no seperate count for privately owned vacant dwellings but these seem to be included in the "All" category.
  - Duration: Long-term empty properties are classified as such after being "unoccupied and substantially unfurnished"  for six months.
  - General needs: These numbers do not include retirement or supported housing.
- The homelessness data and vacant dwelling data is originally provided in two distinct files. I have combined the two to have all numbers for each LA for each year. However, much of the homelessness data is only available for 2016, while vacancy data goes back a few years.
- I did not include any information from the qualitative report that is also provided as part of the data.
- The number of homeless people is in many cases an estimate. It looks like the minority of authorities conducted actual street counts. This is marked in the Excel file but I didn't mark it in the final results file. Be aware that there are many reasons to be cautious around the accuracy of these numbers. Councils cannot always be aware of every homeless person in the area, and might be interested in underrepresenting the numbers.

**You can download the Alteryx workflow and files [here](https://drive.google.com/drive/folders/1QUY83IYZj9_t7VBSMmysYohOK6Hsgz_V?usp=sharing)**

**Three files are available to download:**

1. a file (csv or tde) with all the basic data
2. a shapefile on the county level
3. a shapefile on the LA level



_02.02.2018: Small edit made as there were a few LAs that had escaped being converted to the new grouping. New files and workflow uploaded as v2_
