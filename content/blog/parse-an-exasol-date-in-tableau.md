---
title: 'Parsing an Exasol Date in Tableau'
summary: |
  How to set up a calculation in Tableau to translate a string into a recognised date for Exasol. 
date: '2017-05-15'
categories:
  - 'data'
  - 'tableau'
tags:
  - 'date'
---

Today I was working with a dataset that had been loaded into our internal Exasol database that contains information on every Boris Bike rental in London between October 2016 and today (Just under 20 million records). The exact time of the rental is marked in a field called 'Timestamp', which was imported as a string rather than a date. In order to investigate trends over time in Tableau, this needs to be converted to a date. 

The first attempt was to use the 'Change data type' option within Tableau to fix this.

![2017-05-15_17-29-02](https://nalediholly.files.wordpress.com/2017/05/2017-05-15_17-29-02.png)

At first this looks like it works. The icon changes and indicates that the field is now a date. But when I try to use the field the following error comes up

_\[EXASOL\]\[EXASolution driver\]data exception - invalid character value for cast; Value: <span class="text-yellow-500 font-bold">'22/10/2016 21:06:10'</span> Format: <span class="text-green-500 font-bold">'YYYY-MM-DD HH24:MI:SS.FF6'</span> (Session: 1567478564042626767)_

This is telling me that the format of the string I am trying to convert does not fit the format that Exasol expects. In particular, the format in the data is <span class="text-yellow-500 font-bold">_'DD/MM/YYYY HH24:MI:SS.FF6'_</span>. Shown in <span class="text-green-500 font-bold">green</span> is the format that you need to have for Exasol to recognise it as a date.

The second attempt was to use the DATEPARSE function to manually transform the string to a date. This works by telling Tableau what the structure of my date is so that it can then recognise the different parts that make up the date. However, no DATEPARSE function, as the available functions are limited when you connect directly to a database.

The best way to solve this issue is to change the datatype directly through Exaplus so that the field comes in correctly as a datetime. If you cannot do that, here is how you can do it directly in Tableau with a calculation.

## Setting up the calculationpcon

![2017-05-15_17-19-53](https://nalediholly.files.wordpress.com/2017/05/2017-05-15_17-19-531.png)

Create a new calculated field, where you use the MID, LEFT and RIGHT functions to extract parts of the string and then stitch it back together. As you can see in my calculation: 
1. I start off by taking the MID(\[Timestamp\], 7, 4). This means that we start at the seventh position from the left and return four characters. This gives us the year, which in the Exasol date format comes first. 
2. I then combine the different parts of the string by concatenating (+) them with the parts of the string that I need, namely the dashes that separate the year, month and day and the space that separates the date from the time. These are wrapped in single quotation marks ('') to identify them as strings.
3. Once I have matched the string to the format I need I wrap the entire calculation in a DATETIME() function, which transforms the string to a date and time.

To help me build this calculation I dragged the original string to the view as well as the new calculation, so that I could see the results of the calculation while I worked on it.
