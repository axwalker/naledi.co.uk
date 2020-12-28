---
title: 'Parsing an Exasol Date in Tableau'
date: '2017-05-15'
categories:
  - 'data'
  - 'tableau'
tags:
  - 'date'
---

Today I was working with a dataset that had been loaded into our internal Exasol database that contains information on every Boris Bike rental in London between October 2016 and today (Just under 20 million records). The exact time of the rental is marked in a field called 'Timestamp', which unfortunately was imported as a string rather than a date.

The first attempt was to use the 'Change data type' option within Tableau to fix this.

![2017-05-15_17-29-02](https://nalediholly.files.wordpress.com/2017/05/2017-05-15_17-29-02.png)

At first this looks like it works. The icon changes. But when I try to use the field the following error comes up

_\[EXASOL\]\[EXASolution driver\]data exception - invalid character value for cast; Value: '22/10/2016 21:06:10' Format: 'YYYY-MM-DD HH24:MI:SS.FF6' (Session: 1567478564042626767)_

This is telling me that the format of the string I am trying to convert does not fit the format that Exasol expects. In particular, the format in the data is 'DD/MM/YYYY HH24:MI:SS.FF6'. Shown in green is the format that you need to have for Exasol to recognise it as a date.

The second attempt was to use the DATEPARSE function to manually transform the string to a date. This works by telling Tableau what the structure of my date is so that it can then recognise the different parts that make up the date. However, no DATEPARSE function, as the available functions are limited when you connect directly to a database.

The best way to solve this issue is to change the datatype directly through Exaplus so that the field comes in correctly as a datetime. If you cannot do that for any reason here is how you can do it directly in Tableau with a calculation.

![2017-05-15_17-19-53](https://nalediholly.files.wordpress.com/2017/05/2017-05-15_17-19-531.png)

Create a new calculated field, where you use the MID, LEFT and RIGHT functions to extract parts of the string and then stitch it back together. As you can see in my calculation I start off by taking the MID(\[Timestamp\], 7, 4). This means that we start at the seventh position from the left and return four characters. This gives us the year, which in the Exasol date format comes first. I then combine the different parts of the string by concatenating (+) them with the parts of the string that I need, namely the dashes that separate the year, month and day and the space that separates the date from the time. These are wrapped in single quotation marks ('') to identify them as strings.

To help me build this calculation I dragged the original string to the view as well as the new calculation, so that I could update the calculation while I worked on it.

Once I have matched the string to the format I need for Exasol I wrap the entire calculation in a DATETIME() function, which transforms the string to a date and time. I now have a new timestamp field that I can use to analyse time trends in Boris Bike rentals.
