---
title: "Do you need to be a SQL expert as a Tableau developer?"
date: "2020-07-13"
categories: 
  - "data"
  - "tableau"
tags: 
  - "career"
  - "sql"
---

I've looked at a lot of job adverts aimed at Tableau Experts since finishing The Data School and many of them want you to be a SQL expert. I had placements with four different companies, of which one was a consultancy, a two-year job and several freelance projects as an analyst before I actually needed "advanced" SQL skills.

So is it worth learning SQL if you know Tableau and Alteryx? What does it mean to be a SQL expert? Do the jobs that ask for SQL experts really need them? And how do you get a job that asks for SQL experts when you aren't one?

## Do they really need SQL experts?

Not every job advert that asks for SQL experts actually needs one. I believe this is due to several factors. The first being that there is an assumption that analysts started out using SQL and Excel before they moved on to more specialised tools such as Tableau and Alteryx. For analysts that got a lot of their training on the job this might be true, but coming from a trainee programme myself, which was specialised in Tableau and Alteryx, my path looked a bit different. There simply was no need to work in Excel, and we covered SQL with just one week of training but never used it. So when HR is putting together that job description, they might feel that by adding SQL as a skill they are making sure that they get the "real analysts".

My second theory about why SQL experts are often sought for Tableau roles is that if an organisation is new to Tableau, they haven't quite understood yet what Tableau can do. I have seen analysts that came from a SQL background to Tableau, who were quite proficient with Tableau, still use SQL to answer ad-hoc questions. Going into Tableau to explore the data for an answer is still a different way of thinking, and doing this in SQL, with repeatedly writing out queries, is what they are used to and good at. If they are the people feeding into the job advert, then it is natural that they will believe their new team member will need the same skills, because they might not understand that you can use Tableau for the same purpose.

## Why SQL might be needed

But that doesn't mean they are all wrong. There will be many roles that are asking for SQL skills because the role really does need them.

The main reason why you might need SQL is automation. If you have a database, and you are connecting to this with Tableau, there might be times when the data setup required becomes too complex for Tableau. You can achieve better performance or a quicker workbook setup by forming the data into a more suitable shape. Even if your organisation uses Alteryx or another ETL tool, you will need a way to automate this, which in many cases adds significant cost and is thus not available. The quickest and cheapest way to reshape your data and support Tableau updates at the speed of your database updates is with a custom SQL query or view.

Secondly, if your team mates are all SQL experts then this is the way they will communicate with each other. You want to be able to QA their work at some point and understand what they are saying when they post queries into Slack, highlighting oddities they have discovered in the data.

Moreover, even if you are not responsible for creating tables in the database, you need to understand them, and detailed documentation is often not in place. Instead, the team might simply point you in the direction of the source query that creates the table and you will need to figure things out from there.

In my most recent role there was another reason, which is that we often didn't provide analyses, we provided data. I could have created a Tableau workbook connected to the same data, with the same conditions and then exported the data from there. In the end Tableau is just an interface to create a data query. But this would have required my teammates to understand and check what I had set up in Tableau, which is actually more complex than interpreting someone else's SQL query. You need to click into different calculations to see how they are set up and make sure you check if there are any workbook level filters applied. With a SQL query it's all there in one view, which makes it easier to understand the logic behind an analysis.

Finally, it is easier and more space efficient for documentation purposes to save a SQL query in a simple txt file rather than a Tableau workbook.

## Ok, so what now?

Having the very basics of SQL skills is always useful as an analyst. If you are working with databases, it is good to have a little understanding of how they are set up and how you would directly interact with one if you really had to. In The Data School we did this training over the course of one week, and I'd say once you know your way around the basic structure of making a query, grouping it and adding some filters, this requirement is met. There, you can put SQL on your CV.

The next step is to determine what the job advert actually means when it asks for "expert SQL skills" and why the organisation wants them.

If you make it to the interview stage, find out some of the following:

##### 1\. What does the team use SQL for?

They might use SQL to create functions in the database, that you need to understand but not be able to create yourself. Equally, at this point the interviewers might say that the team uses SQL to analyse data and find answers. You can then explain to them how you do this with Tableau and the benefits this has for you.

##### 2\. What is SQL used for in relation to Tableau?

Perhaps they don't do this at all, and SQL is just used to set up the database. Perhaps they constantly write custom SQL because they don't know how to manipulate data in Tableau and this approach is easier for them. Perhaps they do this because the complex data structures mean that they need to prepare the data into the right shape because Tableau wouldn't be able to handle it.

Try to assess if the use case is something you can circumvent with your Tableau knowledge or if what they are describing sounds like you would need to use it the same way.

##### 3\. What SQL knowledge do they believe you should have?

SQL can be used to manage a database, by creating users and schemas and assigning roles. While rare, this might be all you need to do. SQL is also used to create data structures and to retrieve them. The knowledge needed for these different use cases is quite different, and you can be an expert in one area but known nothing about another.

Ask the interviewers to describe what they mean with those "expert SQL skills" that they are asking for. Can they give examples of commands you should know, for instance:

- A lot of requests we get is for pivoted data, you should be confident in reshaping data
- The database is quite clean, so all you need to do is retrieve data and apply the relevant conditions to it
- The database is still work in progress and part of your role will be to create complex calculations in SQL to create reusable functions and materialised tables
- You will frequently need to use RegEx with this data
- We work at a fast pace, so it's important that you are very quick at writing SQL commands
- There is a need to combine data from lots of different tables, so the queries can be very long and complex

#### Tell them what you know

Their response might still not be 100% fitting to what you will actually need to do in this role, but it gives you a chance to evaluate if you think the role is suitable for you. Equally, if they can't really answer these questions, it might be an indication that SQL skills made their way onto the job advert somehow but aren't actually needed.

The answers you get to these questions might convince you that you don't really want this job, and that you would rather work in a place where other tools are used. That's absolutely fine. An interview is a two-way process.

If you do want the role, be honest about what your skills and experience with SQL are and if you believe you already know how to do the things they have just outlined or where you think you would need to learn more. The thing is, if your skills in other areas are convincing enough, they might be perfectly happy with giving you some time and support to learn on the job. Explain to them that you are willing to learn, and ideally give some examples of other things you learned, how you taught yourself and the other skills you have that will make this easier for you.

Recently, I was offered two jobs that listed advanced SQL skills as one of the requirements. I was honest with both of them about my limited SQL knowledge, and they were willing to support my learning.
