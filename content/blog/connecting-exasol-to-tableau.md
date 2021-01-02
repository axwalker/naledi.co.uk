---
title: 'Getting started with Exasol for Tableau and Alteryx users - Connecting to Tableau'
summary: |
  Step by step instructions to connect to your Exasol database for the first time. 
date: '2017-04-10'
categories:
  - 'data'
  - 'tableau'
tags:
  - 'connect'
---

Using Exasol allows us to process large amounts of data at very high speeds and it works great with Tableau. When you open Tableau and navigate to the connection types in the welcome view you will see that Tableau has a native connector (called **EXASOL** from v10.2 and **EXASolution** in previous versions). Once selected, a dialogue will prompt you to enter your credentials.

![Tableau connection](https://nalediholly.files.wordpress.com/2017/03/tableau-connection.png)

- **Server**: This is the IP address of the database
- **Port**: This will usually be 8563 for Exasol
- **Username**: The user name that was assigned by your database manager or that you specified when installing your personal version of Exasol
- **Password**: The associated password with this user name. Again, this will have either been given to you when you received information about your schema or you will have specified this yourself during installation.

## Connecting for the first time
If you are using this connection for the first time you will probably receive an error message informing you that you haven’t got the necessary drivers to establish the connection. A link is included from where you can download this.

**Windows users**: On the Exasol page, navigate to the section " Download ODBC Driver" and select the file called: _EXASOL_ODBC-[version number].3-x86_64.msi_ or _EXASOL_ODBC-[version number]-x86.msi_.

**Mac users:** You are looking for a file that is called EXASOL_ODBC-[version number]-MacOS.dmg or EXASOL_ODBC-[version number].rc1-MacOS.dmg. This file isn't available for all versions so if it is not in the list of downloads alongside the Windows files, navigate through the  versions with the left-hand menu until you find the .dmg file you need.

Once downloaded and installed, return to the connection page in Tableau and try again. If everything is entered correctly you should now be connected to the database and will be shown the typical data source screen in Tableau, where you can select the schema you would like to connect to and interact with the tables just as you would with any flat file.


## Troubleshooting 
If you are having issues connecting even when entering the correct credentials or you cannot see any tables when connecting to the schema you are working with you may not have been given sufficient permissions by your database administrator. Contact them to find out. 

Exasol will speed up your processes in Tableau and provide better performance than you will have when using flat files. However, aspects of Tableau’s performance are still dictated by rendering speeds within Tableau rather than the speed of the underlying database. Some views and processes, for instance when creating a map with many individual locations, will not be sped up by using Exasol as your data connection.
