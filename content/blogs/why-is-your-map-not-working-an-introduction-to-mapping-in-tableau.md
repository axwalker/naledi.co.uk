---
title: "Why is your map not working? – An introduction to mapping in Tableau"
date: "2017-09-22"
categories: 
  - "tableau"
tags: 
  - "mapping"
  - "spatial"
---

Mapping in Tableau isn’t complicated but I have experienced that people tend to stumble over some of the same issues at the start.

**How Tableau maps**

To map locations in Tableau you will need a latitude and a longitude field. You can think of a map as a scatterplot, with an image of the world as a background. Many geographical locations are recognized natively in Tableau. The range and detail of recognized locations will depend on the country that is being mapped, and the database of recognised locations is expanded all the time. For the UK, the smallest geographical level recognized is the postcode area, which is represented by the first three characters of a postcode. You will also only be able to make filled maps for certain geographical levels and regions. Tableau will usually automatically recognise a geographical field if it fits naming conventions. For instance if you are importing a field called ‘Country’, which is in a string format this should typically be recognised and automatically assigned the right field type. You will then see that latitude and longitude fields have been generated automatically and are shown in cursive alongside your other measures. If it is not automatically assigned to the right geographical type you can do this yourself just as you would change other field types.

You can also bring in your own latitude and longitude fields if you are locating things that aren’t in the Tableau database. This could for instance be locations of shop branches, national parks or Walrus hangout spaces.

![Walrus hangouts](https://nalediholly.files.wordpress.com/2017/09/walrus-hangouts.jpg)

Again, latitude or longitude will typically be recognised automatically as geographical fields, but where they are not, make sure to set them to be a decimal number and then assign them the geographical type of latitude/longitude respectively.

**I see the map but where are my dots?**

So you want to map the countries of Europe. You have dragged in your latitude and longitude fields (or double-clicked them, which makes them go to the right place) and a map is shown. But rather than having a map for every country you are just getting one lonely dot or no dots at all. If you are bringing in your lat and long fields Tableau will by default show their averages. You will also need to tell Tableau how to break them down though. To do this, simply drag your geographical field, in this case country, to the details shelf. The dimension now splits up your marks on the country level.

The quickest way to map in Tableau is to just double click your geographical dimension. The worksheet will then set itself up automatically.

**Why are my locations not recognised?**

In another frequently raised example, you may want to map the cities in your dataset. These are correctly set as a geographical field on the city level and you can see that the generated latitude and longitude fields are in your measures. But when you double click your city field you get an empty map with an indicator telling you that a number of your locations aren’t known. Or perhaps your cities are mapped in the wrong country.

City names repeat all across the world so when you are mapping cities or postcodes Tableau often needs some additional information about what region they are from. By default, Tableau will assume that you are mapping American locations. You can change this in two ways.

1. By clicking the indicator and editing the locations automatically (here you can also refer to other fields if for instance your cities are across several European countries).
2. Add the country field to details in addition to the city field.
3. Create a hierarchy with your geographical dimensions. This tells Tableau how they are related and the city field will take into account other geographical dimensions now, so you don't need to add the country field to the sheet.

![2017-09-22_08-37-13](https://nalediholly.files.wordpress.com/2017/09/2017-09-22_08-37-13.gif)

Also remember that you can only map locations if you have their coordinates. So either they need to be included in Tableau's database of locations or you need to bring in your own latitude and longitude fields. In that case, the dimension that splits up your coordinates is not a geographical field but just a string.

_Please feel free to leave a comment if you have any other mapping questions._
