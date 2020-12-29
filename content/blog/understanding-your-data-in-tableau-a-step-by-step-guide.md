---
title: 'Understanding your data in Tableau - A step by step guide'
summary: |
  Tips for how to familiarise yourself with your data to generate meaningful insights in Tableau.
date: '2019-06-28'
categories:
  - 'tableau'
---

Tableau is a great tool to create charts at impressive speeds. But with this trend of fast analytics, and a focus on impressive visuals, the data checking process and thus accuracy aspect is sometimes be neglected. Fundamentally, you need to understand your data in order to make an effective dashboard

Right at the start of [training the team at Operation Fistula](https://nalediholly.wordpress.com/2018/08/20/training-the-team-at-operation-fistula/) in Tableau we used a [#MakeoverMonday](http://www.makeovermonday.co.uk) dataset on Nike factories. Of course the team focused on the variable looking at the proportion of women working in factories. When they presented their visualisations at the end of our one hour I quickly realised two things:

1. They were presenting the numbers at the country level, although the data was at the factory level
2. They were presenting the sum of this measure, even though it was a percentage

With these two aspects taken together, the visualisation obviously were not showing any meaningful or accurate picture of the situation.

In order to help avoid similar mistakes in the future and approach the data in a more systematic manner, I set up a checklist, that the team can work through in order to arrive at a visualisation that is an accurate reflection of the data while also being an effective tool of communication. Apart from the first step (look at the data preview or Excel file) all following steps should be completed using charts made in Tableau. This is far more effective than trying to figure something out from looking at a table of data of course.

I hope this checklist can be of use to others as well. I would love to hear from you if you have any steps that you would add to this list!

## Steps to building a Tableau visualisation

### Step 1 - Familiarise yourself with your data

First look at the raw data to get a general overview of the fields. Sometimes the dataset is so small you can understand it with one glance. Then use visual analytics in Tableau to answer the following questions:

- How many rows of data do you have?
- What is the lowest level of detail? I.e. what does _Number of records_ count?
- Are there duplicate entries?
- What are the members of the different dimensions?
- If there are several levels of detail, how do they relate? Are there hierarchies? (E.g. category and subcategory)
- What do numeric fields mean? Are they percentages or whole numbers?
- Are all fields assigned their correct data type?
- Are all fields correctly classified as dimensions or measures?

### Step 2 - Start asking questions

Using Tableau, explore the data to find first insights. There are likely hundreds of ways you can combine the fields in the data, and it might take some time until you find a combination that is meaningful. Some of the things you can do are:

- Break down your continuous measures with the different dimensions
- Look for correlations between your continuous measures by creating scatterplots
- Identify outliers
- Look for trends over time

### Step 3 - Build your visualisation

Once you have identified your story, think about how to best communicate it. Your story can be the answer to a very specific question you can ask about the data or it can guide the user in answering their own questions:

- What are you trying to say with your visualisation? What is your message?
- Are you creating an exploratory or explanatory visualisation?
- Do you need just one chart or will more charts add to your story?
- What chart types are best suited for your data and story?
- How can colours help you communicate your insights?
- What is the best dashboard layout for your message?
- Does your dashboard need additional explanation?
- What is a concise, informative title that expresses the purpose of the dashboard?
