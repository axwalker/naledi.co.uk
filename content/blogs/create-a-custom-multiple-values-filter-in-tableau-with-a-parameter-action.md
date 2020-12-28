---
title: 'Create a custom multiple values filter in Tableau with a Parameter Action'
summary: |
  Create a custom filter in Tableau to match your dashboard design, that lets you select and deselect multiple items.
date: '2020-11-22'
categories:
  - 'tableau'
tags:
  - 'filter'
  - 'parameter-action'
---

Tableau provides a bunch of different filtering options to enable the functionality we need to interact with our data. However, while practical, there are very few options to customise the look of these filters. After spending a long time polishing that perfect dashboard, you want your filters to blend in seamlessly.

![A screenshot of a Tableau dashboard, showing the different options for configuring regular filters](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_13-42-24.png?w=254)

<p class="caption">The different filter presentation options available on a Tableau dashboard</p>

Instead of heading to the limited formatting options for your filter controls you can create your own filter interactions by using sheets, which give you all the customisation options normally available when building visualisations.

Examples of customised filters include creating [legends that allow you to filter](https://kb.tableau.com/articles/howto/How-To-Use-Legends-As-Filters-In-A-Dashboard) your visualisation or [filtering your view using shapes](https://www.thedataschool.co.uk/emily-dowling/using-custom-shapes-filter-tableau). However, in both these examples multiple items can only be selected if the user holds down the shift button. That's not a very intuitive or user friendly way to interact with a filter.

Set actions allow us to extend these examples, by allowing us to add items to a set incrementally, without having to use our keyboard to select multiple items. But what if you want to both select and then deselect items again to flexibly change what is in your view, just like with a regular multiple values filter? A set action can either add or remove from the set, not both. I want to show one way that a customised multiple select filter can be created in Tableau, using parameter actions.

## The goal

1. I have a list of the items that can be filtered
2. If I click an item it is added
3. If I click it again it is removed
4. It is clear which items are selected and which are not
5. The clicked item does not highlight, only the symbol changes

![](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_13-47-08.png?w=1011)

<p class="caption">The final dashboard</p>

## How to do it

![](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_14-18-48.png?w=1024)

<p class="caption">How the filter sheet is set up</p>

1. Create a sheet that will be your filter sheet
2. Drag the field you want to filter with to the sheet. I am using the Tableau "World Indicators" data for this example and am setting up a filter for region so I placed this to the rows shelf.
3. I want my filter to also act as a legend, so I place Region on colour.
4. I don't have a need for tooltips in my filter, so I turned those off.
5. Now create a parameter. Set the data type to string and allow all values

![](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_12-46-08.png?w=558)

<p class="caption">How to set up the parameter</p>

6. Create a calculation that will use this parameter.
   1. The calculation evaluates if the field that is being selected is part of the current parameter value or not. The parameter is a concatenated list of all the values that are selected.
   2. If the parameter already includes the selected value then it removes it from the concatenated list by replacing the value with .
   3. If it is not then it adds the value to the list of all selected values in the parameter.
7. Underscores are included to delineate the individual values. This will need to be customised to what the values are that you are stringing together. If your values already include underscores replace this part with a symbol that isn't part of the field.
8. Place this new calculation on the details shelf of your filtering sheet. In my example this is called "Add/remove region from parameter"

```
IF CONTAINS([Parameter], '_' + [Region] + '_')
THEN REPLACE([Parameter], '_' + [Region] + '_', '')
ELSE [Parameter] + '_' + [Region] + '_'
END
```

9. From this field you create another field that checks if the value is in the parameter list or not. For this you can just take the first statement of the IF syntax, which will evaluate as a boolean. I called this field "Is region in parameter?"
10. This is the field that I use to distinguish the selected and not selected regions. I placed it on the shapes field and assigned two different shapes to the TRUE and FALSE values so that a filled square is shown when a region is selected and an empty one when it is not in the parameter.

```
 CONTAINS([Parameter], '_' + [Region] + '_')
```

11. As we are setting up a filter we of course need something to be filtered. I created a simple line chart for this example and placed the second calculation "Is region in parameter" onto to the filter shelf of this sheet to show only the TRUE values.
12. The next step is to create a dashboard and place both sheets on this.
13. Now create a dashboard action where you select the filter sheet as the source. On select, the parameter that I have created is changed, based on the first calculation that I created. We don't want anything to happen when we clear the selection, so it is set to just keep the same value.

![](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_12-58-24.png?w=502)

<p class="caption">How to set up the parameter action</p>

14. With this our filter already works, but whenever we click a region to add or remove it from the line chart the selection gets highlighted. There are a few ways to stop this from happening but I followed the approach explained in [this video](https://www.vizwiz.com/2020/11/reorder-stacked-bars.html).
15. I created a "No highlight" field, which just contains a string with those words, placed it on the details shelf on my filter sheet and then set up a filter action to filter from that field to one I don't use in my view.

![](https://nalediholly.files.wordpress.com/2020/11/2020-11-21_13-04-42.png?w=522)

<p class="caption">A filter action to stop selections from highlighting</p>

With all these steps completed I now have a filter set up that allows me to add and remove regions from my line chart, with just three calculations, one parameter and two dashboard actions. The benefit of this approach is that it works with fields that contain many different members, as we don't have to create a calculated field or action for each individual item.

You can test out the custom filter and download the workbook [on Tableau Public](https://public.tableau.com/profile/naledi.hollbruegge#!/vizhome/Checkboxfilterexample/Acustommultipleselectfilterusingparameteractions).
