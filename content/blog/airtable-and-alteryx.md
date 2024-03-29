---
title: 'Airtable and Alteryx'
summary: |
  How to use the Airtable API to pull data into Alteryx for further processing.
date: '2019-02-07'
categories:
  - 'alteryx'
  - 'data'
tags:
  - 'airtable'
---

Have you heard of [Airtable](https://airtable.com/)? We've been using it at Operation Fistula for several months now and are in love with it. Airtable is a collaborative online spreadsheet tool, which allows people who don't normally work with data to create simple data bases that are easy to make, maintain and navigate. We now use it for various purposes such as:

- Planning out apps before they are put into CommCare
- Creating task lists
- Tracking time on tasks
- Submitting expenses
- Keeping track of dashboard requests
- Mapping our filing system

<n-img
src="https://nalediholly.files.wordpress.com/2019/02/airtable-example.png"
alt="A screenshot of an Airtable recording Tableau conference session reviews. It has columns for the name of the session, the difficulty rating from 1-3, a recomended rating from 1-3, Notes, the topic category and who went to see the talk."
img-class="w-full"></n-img>

An Airtable we are using to suggests talks to watch from TC18

These are just a few examples, and you will have to try it yourself to really understand the value that Airtable adds and how flexible of a tool it is. This post will explain how we pull data from Airtable into Alteryx, to prepare it for analysis in Tableau.

## Getting data out of Airtable

Collecting data is super easy in Airtable, and much of that information is happy to continue to live there as well. But at Operation Fistula we like to visualise our data in Tableau to make sure that we are getting the most use from it.

Manual downloads from Airtable are also easy, but there is currently no way of connecting it directly to Tableau for a live connection. There are a few attempts at a Web Data Connector floating about, but none of these work at the moment and development of a WDC will be difficult [until Airtable releases a metdata API.](https://community.airtable.com/t/metadata-api-for-schema-and-mutating-tables/1856)

Airtable does however have clear and comprehensive API documentation. I use Alteryx to extract data through this API and then send it straight to our Tableau Online environment.

## From Airtable to Alteryx

### Using the macro

I created a macro, which [you can download from the Alteryx gallery.](https://gallery.alteryx.com/#!app/Airtable-download/5c5aeccf826fd30988f0959e) The interface allows you to enter the API for the table you would like to access and your unique API key. You can find both of these in your [Airtable API documentation](https://airtable.com/api).

The table reference is outlined in yellow in the image below. The API is outlined in orange. In order to view this, make sure to tick the box in the top right corner, which will reveal your key.

<n-img
src="https://nalediholly.files.wordpress.com/2019/02/airtable-key.png"
alt="A screenshot of the Airtable API documentation. The left side shows that this is the authentication section. The right shows the two relevant lines of text under the heading 'Example using bearer token (recommended). The first line is outlined yellow, the second orange."
img-class="w-full"></n-img>

### How it works

The outer macro serves the sole purpose of reading in those two bits of information, then sending them through the iterative macro that is nested inside of it.

This iterative macro is needed because because Airtable only retrieves 20 records at a time, so an offset is required for pagination (Thanks to [Peter](https://twitter.com/peter_g_b), who taught me how to do this part). So the first part of the macro sends the right information through the download tool and assesses if another iteration is needed, and what information should be passed back for the next loop.

The second part of the iterative macro parses out the json into an orderly table. I have used this macro with a number of tables now and have so far not run into any issues, but it is possible that the setup of the workflow encounters problems with certain field types that we haven't used in any of the tables that I am accessing. If you come across any issues please let me know. I will endeavour to keep the macro updated.

<n-img
src="https://nalediholly.files.wordpress.com/2019/02/iterative-macro-look.png"
alt="A screenshot of the Alteryx workflow. The image is illustrative and not intended to convey the exact setup of the macro."
img-class="w-full"></n-img>

## From Alteryx to Tableau

Once through the macro I typically still have a few steps of processing that I do in Alteryx. Often, this is limited to selecting only those fields that I want to import, but if you have multi-select fields in your table these might need to be split out to be used in analysis.

<n-img
src="https://nalediholly.files.wordpress.com/2019/02/airtable-in-alteryx-1.png"
alt="A screenshot of the final Alteryx workflow, using the Airtable macro. The flow consists of the Airtable macro, A select tool and a tool that writes the results to Tableau Online."
img-class="w-1/2"></n-img>

I then use the '[Publish to Tableau Server](https://help.alteryx.com/2018.3/TableauServerPublish.htm)' tool in order to set up a new data source on our Tableau Online environment. As we don't have a way of scheduling Alteryx workflows at the moment I have all of my Airtables within one app, so that I only need to run that one app to refresh all of my Airtable data on Tableau Online.
