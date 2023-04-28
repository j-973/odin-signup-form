# odin-signup-form

## Description
A signup form created based on a provided screenshot of a design (sign-up-form.png in the "img" folder).

I filled the design with some of my own content, envisioning a flower boquet delivery business called "Flowerr 🌻".

My iteration of this project adheres to the guidelines set out by the maintainers of **The Odin Project**, a self-paced curriculum for learning web development (links at the bottom).

**Why did I complete this project?:** To demonstrate my understanding of HTML forms and their elements, pseudoclasses, and form validation (via regular expressions).

## Preview
![Capture2](https://user-images.githubusercontent.com/47262509/235028607-cbc30c39-6c55-429b-ac9d-f5f932d6adcd.PNG)

## Launching this Project
- Click here to run it in your browser: https://j-973.github.io/odin-signup-form/
## What I Learned
- CSS Reset stylesheets like https://meyerweb.com/eric/tools/css/reset/ are crucially important in making sure websites stay consistent across browsers.
- The HTML `pattern` property is used to specify the Regular Expression, or pattern, that inputs should match (like making sure parentheses and dashes are used in a phone number).
- The HTML `placeholder` property can be used to give users a hint as to how their input is expected (like specifying (123)- or 123- for phone numbers).
- Regular expressions, or regexes, are fromatted patterns used to make sure text strings fit that particular pattern (like making sure a password has lowercase, uppercase, and digits). 
  - Positive Lookaheads `(?= )`, used within RegExes, check if a string meets conditions for a pattern but doesn't match it (such as making sure a password has certain kinds of characters, or certain numbers within parts of a string).
  - The `.test()` method is used with RegExes to make sure certain strings (such as user-inputted passwords) stick to a certain RegEx pattern
  - The `.matches()` method are used to check if an element can be selected by a specific CSS selector. (Useful for targeting specific IDs, like input elements that are the target of a click event.)
### Sources
- Odin Project Full Stack JavaScript Path: https://www.theodinproject.com/paths/full-stack-javascript/
  - Odin Project "Intermediate" HTML and CSS Course: https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css
- Project Instructions: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form
