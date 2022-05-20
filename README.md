# Password-Generator-HW
## Description
The files found with this README file come together to create a password generator.

### HTML & CSS
The only things I changed in the html file were the links to the other files. The locations changed because I added more directories to better organize said files. Meanwhile, I did not change anything in the css file.

### Javascript
In the Javascript file, I did many things. I:

- Created global arrays for each character type.
- Created a function that collects user input into an object. To collect the input, it prompts and confirms with the user the length they want for the password as well as what character types they want to use. 
    - Added a check so that if no input was answered or if the password length was canceled, the function would end.
    - Limited the password length range from 8 to 128 characters.
- Created a second function that generated the password using the input from the first function. 
    - Created empty arrays to input possible and guaranteed characters as well as an empty array for the password itself.
    - Ensured that the password would be limited to the password length chosen prior as well as have the guaranteed characters set at the beginning so that at least one of each chosen character type would be included.
    - Used for loops to do the above within the function.
    - Alerted the user of their password with an alert.


## Problem
I had one problem that I was unable to figure out: I did not know how to add the password into the text box with the code provided.

The code from line 114 down were provided. However, I kept getting undefined as the result of the function in those lines. I attempted multiple things from checking syntax error to spelling errors to changing the variable yet nothing worked. I was also unable to find anything of help via researching the problem as well.

I do no doubt that I could code this in myself if given enough time, however, was unsure if I was allowed to delete the code provided. Thus, please let me know how to fix this problem. I know I technically pass the qualifications for this assignment because I used the alert, but I want to get better at coding so please help me expand my knowledge! Thank you!


## Screenshot
Here is a screenshot of the finished product:
![password generator](./README-assets/screenshot%20of%20deployed%20application.png "Password Generator")


## Link to Deployed Application
Here is the link to the deployed application via GitHub:
<a href="https://alylopez02.github.io/Password-Generator-HW/">https://alylopez02.github.io/Password-Generator-HW/</a>