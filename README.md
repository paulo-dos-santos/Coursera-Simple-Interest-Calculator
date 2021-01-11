# coding-project-template

## Step 1 of 8

Project - Simple Interest Calculator

## Step 2 of 8

Objectives

Clone the project repo.
Modify the html file as per requirements.
Modify the css file as per requirements.
Modify the javascript file as per requirements.
Verify if the app is working properly.
Upload to GitHub and submit the github pages URL for peer review.

## Step 3 of 8

Exercise 1 : Clone the project repo.

In the project prepration phase you have forked the project into your GitHub Account.
Clone the project repository onto your local machine or the Theia environment from the github fork.

## Step 4 of 8

Exercise 2 : Modify the html file.

In this exercise, you will correct any mistakes in the existing code and also add any missing tags.

<pre>
Doctype is missing. Add the doctype.
Add "Simple Interest Calculator" as title.
Move all the content which currently is in the <body> to a <div> tag.
Set the class attribute of this div to 'maindiv'.
Modify the input text box for interest rate to a slider using the <range> tag.
For the <range> tag set the attributes min to 1, max to 20 and step to 0.25 and the value to 10.25.
Range is an elegant way to input numeric input. But the drawback is that it does not visually show value the user has selected.
To show the value selected by the <range>, create a <span> element right after the range.
Inside the '` tag add the text "10.25 %".
Modify the input text box for "No of years" into a dropdown box with options 1 to 10.
Change the "Compute" button to "Compute Interest".
Below the "Compute Interest" button create an empty <span> and set its id to 'result'.
Add a copyright message using the <footer> tag.
</pre>

## Step 5 of 8

Exercise 3 : Modify the css file.

In this exercise, you will correct the look and feel of the web page.

<pre>
Set the body color to 'black', font to arial and font color to white.
Set the <h1> color to 'grey' and font to verdana.
Create an entry for class 'maindiv'.
Set the background color to white, font color to black, width to 300 pixels, and padding to 20px in the newly created maindiv class.
Set the border radius to 25 px.
Align the div to the center of the page.
Visualize your html file in the browser and make sure that you have not missed anything.
</pre>

## Step 6 of 8

Exercise 4 : Modify the javascript file.

In this exercise, you will write the javascript code to implement the simple interest calculation logic.

<pre>
Before we start writing any javascript, make sure that the button in html file has the onclick attribute set to "compute()"
Create a variable called 'principal' and assign to it the value of the input element "principal"
Create a variable called rate and assign to it the value of the input element "rate"
Create a variable called years and assign to it the value of the input element "years"
Create a variable called interest and assign to it the value of principal * years * rate / 100
Write the logic to convert the 'No of Years' into the actual year in the future.
Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
Link this function with an "onchange" event on the range.
Change the slider, and test if the display in the span is being updated dynamically.
Get the reference to the element named 'result'
When "Compute Interest" is clicked, set its inner html property to the below text. If you deposit 1000000, at an interest rate of 3.5%. You will receive an amount of 175000, in the year 2025 
The number above are for indication only. Make sure the output contains the relevant values by using the correct variables.
Make sure that the input you have taken as "No of Years" is converted into an actual year.
Make sure the numbers in the result are highlighted.
Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box. You can refer to the Javascript Form Validation lab.
You are done with the coding. Let us proceed to next exercise where we test the code.
Write comments in your code. They not only help you score more marks in the project, but also help you to debug and maintain the code in the long term.
</pre>

## Step 7 of 8

Exercise 5 : Test the app.

Now that you have finished coding your app. Let us do some basic testing, before we release it.

<pre>
Enter these values in the form. Amount = 0  Rate = 1  No. of Years = 1 
Click on Compute button.

You should see an alert "Enter a positive number”.

Enter these values in the form. Amount = 99999 Rate = 9 No. of Years = 9
Click on Compute button. You should see the following output.

If you deposit 99999,<br>
at an interest rate of 9.<br>
You will receive an amount of 80999.19,<br>
in the year 2029<br>
</pre>

As I write this, the year is 2020, so 2029 is correct.
If you app has passed both the test cases, it is time to go to the next excercise.
Otherwise, start debugging your code to see where you went wrong.

## Step 8 of 8

Exercise 6 : Upload to GitHub and submit the github pages URL for peer review.

When you are done with all the changes in the project, commit and push to GitHub.
Open the URL of your project in a browser. (You created this URL in Exercise 1)
You should see your completed project.
Submit this URL for peer review.
