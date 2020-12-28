---
title: 'Getting started with Exasol for Tableau and Alteryx users - Connecting to Tableau'
date: '2017-04-10'
categories:
  - 'data'
  - 'tableau'
tags:
  - 'connect'
---

Using Exasol allows us to process large amounts of data at very high speeds and it works great in combination with Tableau. When you open Tableau and navigate to the connection types in the welcome view you will see that Tableau has a native connector (called **EXASOL** in v10.2 and **EXASolution** in previous versions). Once selected, a dialogue will prompt you to enter your credentials.

![Tableau connection](https://nalediholly.files.wordpress.com/2017/03/tableau-connection.png)

- _Server_: This is the IP address of the database
- _Port_: This will usually be 8563 for Exasol
- _Username_: The user name that was assigned by your database manager or that you specified when installing your personal version of Exasol
- _Password_: The associated password with this user name. Again, this will have either been given to you when you received information about your schema or you will have specified this yourself during installation.

If you are using this connection for the first time you will probably receive an error message informing you that you haven’t got the necessary drivers to establish the connection. A link is included to a page where you can install this from the Exasol website.

**Windows users**: Navigate to the section " Download ODBC Driver" and select the file called: _EXASOL_ODBC-6.1.3-x86_64 .msi_ or _EXASOL_ODBC-6.1.3-x86.msi_. The version number in this case is 6.1.3 but there are other versions available as well.

**Mac users:** You are looking for a file that is called EXASOL_ODBC-6.1.0-MacOS.dmg or EXASOL_ODBC-6.2.rc1-MacOS.dmg. You will need to use the menu on the left of the page to navigate to either version 6.1.0 or 6.2.rc1 in order to find these files (At the time of writing these were the only two versions available for Mac but this might change in the future).

Once installed, return to the connection page in Tableau and try again. If everything is entered correctly you should now be connected to the database and will be shown the typical data source screen in Tableau, where you can select the schema you would like to connect to and interact with the tables just as you would with any flat file.

If you are having issues connecting even when entering the correct credentials or you cannot see any tables when connecting to the schema you are working with you may not have been given sufficient permissions by your database administrator.

Exasol will speed up your processes in Tableau and provide better performance than you will have when using flat files. However, aspects of Tableau’s performance are still dictated by rendering speeds within Tableau. Some views, for instance when creating a map with many individual locations, might still take a while to set up.
