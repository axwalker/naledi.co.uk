---
title: 'Exasol for Tableau and Alteryx users -Installing Exaplus'
summary: |
  A quick introduction to installing exaplus, to interact with your Exasol database. 
date: '2017-03-23'
categories:
  
  - 'data'
---

Having started my new Data School placement with Exasol recently, one of my first goals was to familiarise myself with the product.

I am given access to the company Exasol database so I don’t need to install my own instance. If your organisation doesn’t use Exasol or you want to create your own database for personal use you can download the [Free Community Edition](https://www.exasol.com/portal/display/DOWNLOAD/Free+Trial) to store your own data.

Exaplus is the interface that sits on top of that database and allows you to interact with your data through SQL commands. It also supports several other programming languages such as Python and R that enable you to analyse data directly in the database. You don't need Exaplus to use Exasol with Tableau and Alteryx but I find it helpful to have that direct insight into my data and be able to test if connections are working.

I downloaded Exaplus to interact with the schema that had been set up for me. You can download Exaplus for free from the [downloads website](https://www.exasol.com/portal/display/DOWNLOAD/6.0). In the left pane you can select the newest version of Exasol. Then, in the main view, scroll down to the list of latest downloads. Look for the 'Download Client' section and you can see that the green file name is 'Exaplus-[version number].[file type]'. Have a close look at the file name to identify the correct version for your system. 

**Windows users**: The .msi file is usually your best bet, so try downloading this first. 

**Mac users**: Watch out for a .dmg file. This is not available for each version, so if you don't see one in the newest download section, go back to the menu on the left and go through the earlier versions until you find a .dmg file in the 'Download Client' section of the downloads. 

Once downloaded, you just need to follow the instructions throughout the installation process.

![Exaplus download](https://nalediholly.files.wordpress.com/2017/03/exaplus-download.png)
