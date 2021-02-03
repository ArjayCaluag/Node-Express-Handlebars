# Node Express Handlebars

This project consists of utilizing the use of Node Express Handlebars to create an application following the Model view controller design pattern. We are to use NODE and mySQL to query and route data in our app and handlebars to generate our HTML. I've chosen to create a fitness tracker that gives the user the ability to enter workouts that they plan on completing, followed by a button to mark as completed. 
<br><br>

![image](https://user-images.githubusercontent.com/52800632/106697499-b9660180-6593-11eb-8457-63403c5f607a.png)



# **Installation**
Install required dependencies
```html
npm install express
npm install mysql
npm install express-handlebars
```
Track changes and push onto your own Github Repository.

```html
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Node.js - Open-source back-end javascript runetime environment that executes Javascript code out a web broswer</li>
    <li> Express handlebars - Handlebar view engine for Express</li>
    <li> Javascript - text based programming languages used both on client-side and server-side</li>
    <li> mySQL - Fully managed database service to deploy cloud-native applications
</ul>

# **Code Snippet**

```handlebars

<img src="https://blog.zoom.us/wp-content/uploads/2020/05/workout-main-792x418.png">
<div class = 'wrap'>
<h1> Workout Tracker</h1>


<ul>
    {{#each workouts}}
    {{#unless completed}}
    {{> workouts/workout-block completed=true}}
    {{/unless}}
    {{/each}}
</ul>
<ul>
    {{#each workouts}}
    {{#if completed}}
    {{> workouts/workout-block completed=false}}
    {{/if}}
    {{/each}}
</ul>
</div>
);
```

```js
const orm = {
    all(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
  
      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';
  
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

```
# **Heroku Site Link**
https://workout-tracker-rc.herokuapp.com/

# **Author**

Ron-Arjay Caluag

[Portfolio](https://arjaycaluag.github.io/Portfolio-2/)
<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
