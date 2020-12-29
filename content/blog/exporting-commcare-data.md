---
title: 'Exporting CommCare data'
summary: |
  Learn about the three methods to export CommCare data and which one is right for you.
date: '2019-10-21'
categories:
  - 'survey'
  - 'data'
tags:
  - 'alteryx'
  - 'api'
---

Throughout my time at operation Fistula we have used every way I know of to get our data from our CommCare apps into Tableau for analysis and presentation. There are three ways you can do this:

1. Manual exports on the CommCare site
2. The CommCare Export Tool
3. CommCare APIs

## How do _you_ collect data?

There are different types of CommCare users. Which data-export approach will be best for your organisation will depend on how you collect and analyse data.

1. **The steady-apper:** You have one or two well-made apps that you use for your work that gets set up and then has relatively few updates
2. **The multi-apper:** You create new apps frequently and have many apps that need to be produced, often in a relatively short time frame

Most CommCare users I've spoken to fall into category one, while we at Operation Fistula are definitely in category two. We create new apps frequently, as we digitise existing paper forms for clinicians and community workers across the world so that they can collect their patient information electronically.

The second question you should ask yourself is if you even need to export your data. There are different ways that data is utilised after it has been collected

1. **Regular fixed reports**: You might simply need to report on several agreed metrics once every few months to a predictable deadline.
2. **Dynamic analysis and frequent demands**: If you are more like us, there will constantly be new questions to answer and various timelines to follow. For instance, a partner might want their Tableau dashboard to be updated with the newest cases they have just entered because they have an important meeting a few days later. Or a donor has a question that needs to be answered urgently with the newest data.

## Manual exports

When I first started working with Operation Fistula [manual downloads](https://confluence.dimagi.com/display/commcarepublic/Data+Export+Overview) were all there were and it was my task to figure out how to make these automatic. Working with this setup for the first few months was extremely frustrating but that is partly due to the demands of our work, which requires constant monitoring and frequent changes.

**How:** Manual exports from CommCare are easy, although a little tedious if you have many different apps. Just navigate to the Data menu option and select either form downloads or case downloads, then add a new export. You can customise the field names and which fields should be included and save this export so it can be repeated at a later date.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-58.jpg)

**Pros**: It's free and simple. If you have a small number of apps and forms and a specific report you need to produce every quarter then this might be enough for you.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-19.jpg?w=96)

**Cons**: When you have a lot of forms and apps this list becomes pretty messy because any one-time request for data results in a new saved export. Especially when working with several colleagues on the platform, this quickly leads to duplicates unless there is a clear system for how exports are saved.

As the name suggests these downloads are not automated, so if you are trying to track something over time and get frequent updates this is a very inefficient way to do it. While you can make some changes to the download, there might be further cleaning steps required. So these will need to be repeated for each download (hopefully with an ETL tool such as Alteryx, which makes this easier but still not painless)

## The CommCare Export Tool

[This tool](https://confluence.dimagi.com/display/commcarepublic/CommCare+Data+Export+Tool) is provided by CommCare in order to allow automatic exports of your data. It's not an out of the box tool as much as a set of code and instructions in order to create your exports. We had a volunteer who created this system for us, as it was beyond my knowledge in this area.

Our system lived on AWS and consisted of a file storing system, a Postgres database and a scheduler. Once the system is set up, you need to create a template in Excel that explains to the tool exactly how your form should be exported, which allows you to make some changes to field names, account for field duplication that happened through renaming and insert filters amongst other things.

We used this for a while but in the end it wasn't the best solution for us.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-58.jpg)

**Pros**: If you have a limited number of apps with few changes and little cleansing needed then this is a viable option to achieve automation. You will need to have someone skilled enough to set this up for you but this could probably be achieved in a few days by someone with the right skills. In our case we were able to source this resource for free through a volunteer.

If you are adept with SQL you could perform your cleaning processes directly in the database or with another tool that allows you to automate this process.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-19.jpg?w=96)

**Cons**: The initial setup will need to be performed by someone with a good deal of developer or IT knowledge. It involves some Python. Because it runs on AWS there is some cost associated. Depending on the size of your app(s) you might get away with a micro instance and in the first year of use you will have your free tier which will make this pretty low cost. We had to upgrade to a small instance as we frequently experienced crashes. In the end we paid about £25/month.

The biggest reason we switched was the inflexibility of this system and the issues whenever creating a new automation. Any time changes were made to an app the template had to be amended, then reuploaded, then tested. Testing frequently revealed issues with our templates that sometimes took multiple iterations to figure out. This might be mitigated with a better storage place for the templates than we had in our case but the ways to make changes to templates still felt very limited and cumbersome. In part, the problem is that there is such limited insight into what the tool is actually doing, unless you pick apart the underlying code of the tool. This makes troubleshooting very difficult.

Another huge issue was that data still needed to be cleaned after being imported into the database. This meant running it through Alteryx and thus not actually having an automated setup at all in the end, as we do not have a way to automatically run our Alteryx workflows.

Furthermore, the export tool currently only supports exports to selected open-source databases and not our Exasol database.

## CommCare APIs

The website is a little confusing on this point because there is an API that is depricated (and this is generally the first search result) but there are [other APIs](https://confluence.dimagi.com/display/commcarepublic/CommCare+HQ+APIs) that are still active. This is the setup we use currently, which is getting us the closest to automation yet.

I have built a set of macros and workflows in Alteryx that allow me to easily access the data from CommCare, clean it and then output it to our Exasol database. While we unfortunately still don't have a way to automate our Alteryx workflows, this gets us to a point where we can refresh our data with the click of a button.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-58.jpg)

**Pros**: This is the most flexible model yet. It allows us a lot of freedom in the way that our system is set up and the exact structure of our database. While we use Alteryx, APIs can be easily used with a multitude of software and coding languages. You could translate all of our Alteryx workflows into an open-source language or alternative tool of your choice.

![](https://nalediholly.files.wordpress.com/2019/06/2019-06-21_12-04-19.jpg?w=96)

**Cons**: With lots of flexibility also comes lots of work, so the initial process of setting up your processes might be time-consuming. This is worth it for our setup where we might create a new app, want to monitor the pilot phase, make changes to the app, and then analyse the actual data coming in. The data export for a new app is set up very quickly with our approach and changes can be implemented easily. But if your platform is less complex the amount of effort that goes into figuring out the basics is possibly not worth it.

This also means that potentially fewer team members will be able to support with these activities, as they require more specialised knowledge.

## Conclusion

Each of the above approaches has its use cases. The approach you take will depend on the number of apps you have, the frequency that changes are made to these apps, and the skills and financial resources that are available to you.
