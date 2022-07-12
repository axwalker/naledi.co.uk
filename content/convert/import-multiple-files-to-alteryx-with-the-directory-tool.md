---
title: "Import multiple files to Alteryx with the Directory tool"
summary: |
  The directory tool in Alteryx extracts all information about a folder. Find out how you can use it to import multiple files at once. 
date: "2017-04-22"
categories: 
  - "alteryx"
tags: 
  - "tools"
---

I recently discovered the Directory tool and have since learned how useful it can be in a variety of situations. The directory tool extracts information about all files from a folder, and, if desired, all sub-directories. This results in a list of these file names that can then be used with other tools. It also returns information about these files, such as the time they were created and last accessed.

## Importing multiple files with the directory tool

![2017-04-22_14-37-09](https://nalediholly.files.wordpress.com/2017/04/2017-04-22_14-37-09.jpg)

The most direct (and best known) way to download multiple files with the same file structure from a folder is to use the input tool with a wildcard [Input tool with a wildcard](https://www.thedataschool.co.uk/borja-leiva/4840). The Directory tool can be used to achieve the same goal but with added flexibility.

![2017-04-22_14-32-20](https://nalediholly.files.wordpress.com/2017/04/2017-04-22_14-32-20.jpg)

All you need to do is to extract the file names with the directory tool and then use a dynamic input tool to import the files. The directory tool can be configured to return all files in a folder or only those with a specific file extension. You can use a filter before the Dynamic Download to specify which files you are interested in. The benefit of this approach is that you have more flexibility around the files you wish to download. In addition, it gives you the ability to include sub-directories, which you cannot do with just an Input tool using a wildcard.

![2017-04-22_14-36-06](https://nalediholly.files.wordpress.com/2017/04/2017-04-22_14-36-06.jpg)


As with the wildcard input, the file structure will need to be the same across the files you are downloading since Alteryx will otherwise not know how to union your files
