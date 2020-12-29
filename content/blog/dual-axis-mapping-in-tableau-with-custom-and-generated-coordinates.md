---
title: 'Dual axis mapping in Tableau with custom and generated coordinates'
summary: |
  How to set up your Tableau map with custom and generated coordinates (versions 2018.1 - 2020.3).
date: '2018-07-02'
categories:
  - 'tableau'
---

One of the improvements that came with Tableau 2018.1 is the ability to create a dual axis map with both generated and custom latitudes and longitudes in Tableau. Setting this up works slightly differently to how you might expect.

### What does this mean?

Even before Tableau 2018.1 you could create multiple map layers by duplicating either the latitude or longitude on the rows/columns and select these to be a dual axis, then control individually what level of detail should be shown on each of the marks cards. For instance you could show the complete country outline on one level, and then on the second marks card include a lower level, to show just the active regions.

<n-img
src="https://nalediholly.files.wordpress.com/2018/06/2018-06-29_18-39-12.png"
caption="One marks card has only country on detail, the other also region, highlighting all the regions in the dataset"></n-img>

You could do the same thing with latitudes and longitudes that were generated outside of Tableau (i.e. store locations, cities not recognised by Tableau - for more information see my post on [mapping in Tableau](https://nalediholly.wordpress.com/2017/09/22/why-is-your-map-not-working-an-introduction-to-mapping-in-tableau/)). However, when it came to combining generated with custom coordinates, Tableau would go on strike.

Today at work I needed to visualise some cities and their regions in Madagascar. Tableau recognised Madagascar regions, if the field is assigned the geographical role of 'State/Province' but the city coordinates were brought in separately. A perfect use case for the extended dual axis mapping support.

### How does it work?

I tried setting up my dual axis as I would with two fields of the same type, by adding my custom longitude field to the columns, next to the generated longitude field. This resulted in the same behaviour as it always had, making the map disappear and just treating the fields as numerical, rather than geographical fields, and creating two scatterplots (or one, when you dual axis them).

![2018-06-29_16-37-16](https://nalediholly.files.wordpress.com/2018/06/2018-06-29_16-37-16.png)

Looking at the screenshot in the feature preview, we can see however, that the setup is slightly different. All that is needed are the following steps:

1. Place the longitude field on the columns twice
2. Create a dual axis from these fields
3. Place the custom latitude and longitude on to one of the marks card, together with the dimension that specifies how to split these up

In my case I wanted to have the shapes of the regions shown (generated coordinates), with dots for each of the cities (custom coordinates). This was only possible by having the custom latitude/longitude on the rows/columns and the generated ones on the marks card. It did not draw the shapes the other way around, and would only show points.

<n-img
src="https://nalediholly.files.wordpress.com/2018/06/2018-06-29_16-37-33.png"
caption="Place two fields of the same latitude/longitude"></n-img>

<n-img
src="https://nalediholly.files.wordpress.com/2018/06/2018-06-29_16-38-101.png"
caption="Place the other fields on one of the marks cards"></n-img>

<n-img
src="https://nalediholly.files.wordpress.com/2018/06/2018-06-29_16-38-24.png"
caption="Dual axis"></n-img>
