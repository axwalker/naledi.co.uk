---
title: "Calculation testing in Tableau - A beginners guide"
summary: |
  Two techniques to use to really understand what your calculations are doing in Tableau. 
date: "2020-02-25"
categories: 
  - "tableau"
---

A while back I wrote about some steps you can take in order to systematically [familiarise yourself with your data](/blog/understanding-your-data-in-tableau-a-step-by-step-guide). Here I want to share some advice on similar approaches when creating calculations.

Creating calculations in Tableau can feel daunting when you first learn Tableau or don't consider yourself a "data person" or a "numbers person". Part of this is down to the invisibility of Tableau calculations. They happen somewhere in the background, off screen, and it can be difficult to tell if they are doing what you want.

If you have created a valid calculation, but it isn't giving you the results you expect, or you need to check that it is correct, try the following two approaches.

## Making calculations visible

The best way to create your calculations is to watch what's happening by creating a simple chart that includes the variables that you are using. Create your calculation, drag it into the view and see if it matches up with what the result should be. If you make a change to your calculation you can simply select "Apply" to update the values in the view.

I find this helps especially with Level of Detail calculations, as you can set up the chart to show the level of detail you are trying to achieve, then create your calculation and add or remove dimensions as needed to test if it still maintains the same values.

<n-img
src="https://nalediholly.files.wordpress.com/2019/10/2019-10-23_16-21-24.jpg?w=793"
alt="A screenshot of a table in Tableau and the underlying calculation. It highlights three areas in the chart and the correlating parts in the calculation, showing how each element of the calculation is visualised in the table."
img-class="w-full"></n-img>

This calculation extracts the maximum of either "CC\_last\_active" or "Last Login Date" depending on which is higher, accounting for possible NULL values. Having all three fields side-by-side it is easy to compare the results visually to see if the calculation works as expected.

## Breaking down calculations

If you have a calculation that consists of multiple parts that just doesn't seem to work the way you want it to, a good way is to break it down. I tend to do this by cancelling out different parts of the calculation with a double slash or taking out one part of the calculation and pasting it into a new calculation, to check that it is doing what I expect it to.

<n-img
src="https://nalediholly.files.wordpress.com/2019/10/2019-10-23_16-18-53.jpg?w=923"
alt="A screenshot of a Tableau calculation where one line is commented out."
img-class="w-full"></n-img>

Create your checking chart as explained above, then make sure that each part of your calculation is working as it should be in isolation. Add them together bit by bit to find out at which point things are going wrong. 

Comments are also really useful to just leave yourself a reminder about what each part of your calculation is doing and are vital for documentation if anyone should take over this workbook in the future.

You might also choose to break down your calculation into various individual calculations and give them names that make sense to you. In my example, I could have created four calculations instead of just one.

<n-img
src="https://nalediholly.files.wordpress.com/2019/10/2019-10-23_16-26-51.jpg?w=1024"
alt="A screenshot of a Tableau calculation. Each line is marked with a number to show that each of them could be in a different calculated field."
img-class="w-full"></n-img>

The first, second and third condition of the IF statement could each have been a separate calculation, which I could have tested separately and then referenced in a final calculation.

1. Last activity for CommCare users
2. Last activity for Tableau users
3. Last activity for cross-platform users
4. Combine all three

This is a matter of preference, as individual calculations can seem less complex in this way but it requires you to switch between various calculations when you are making changes.

## Confidence in Calculations

The two methods above help me have confidence in my calculations and help me figure out more complex processes. It is always good practice to make sure that your calculations are doing what you expect them to, and to investigate the causes if they don't.

What are your calculation checking best practices?
