/*
    Adding JavaScript to a Web Page
    JavaScript can be added to a web page in three different ways:
        - Inline Script
        - Internal Script
        - External Script
        - Multiple External Script
*/

/*
    Inline Script: Create a project folder on your desktop  or in any location, name it 30DaysOfJS and create an index.html
    file in the project folder. Then paste the following code and open it in a browser.

    Example : 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>30DaysOfScript:Inline Script</title>
    </head>
    <body>
        <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
    </body>
    </html>

    Now, you just wrote your first inline script. We can create a pop up alert message using the alert() built-in function
*/

/*
    Internal Script: The internal script can be written in the head or the body, but is preferred to put it on the body of the HTML 
    document. First, let us write on the head part of the page.

    head Example : 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>30DaysOfScript:Internal Script</title>
        <script>
        console.log('Welcome to 30DaysOfJavaScript')
        </script>
    </head>
    <body></body>
    </html>

    This is how we write an internal script most of the time. Writing the JavaScript code in the body section is the most preffered option.
    Open the browser console to see the output from the console.log().

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>30DaysOfScript:Internal Script</title>
    </head>
    <body>
        <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
        <script>
        console.log('Welcome to 30DaysOfJavaScript')
        </script>
    </body>
    </html>
*/


/*
    External Script: Similar to the internal script, the external script link can be on the header or body, but it is 
    preffered to put it in the body. First, we should create an external JavaScript file with .js extension. All files ending with .js
    extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js
    file at the bottom of the body.

    head example: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>30DaysOfJavaScript:External script</title>
        <script src="introduction.js"></script>
    </head>
    <body></body>
    </html>


    body example: 
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>30DaysOfJavaScript:External script</title>
        </head>
        <body>
            <!-- JavaScript external link could be in the header or in the body --> 
            <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
            <script src="introduction.js"></script>
        </body>
        </html>
*/


/*
    Multiple External Scripts :  We can also link multiple external JavaScript files to a web page. Create a helloworld.js file inside 30DaysOFJs
    folder and write the following code.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Multiple External Scripts</title>
    </head>
    <body>
        <script src="./helloworld.js"></script>
        <script src="./introduction.js"></script>
    </body>
    </html>
*/

