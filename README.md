# ErikEnder.github.io

Project Name: Champion's Quest

The application is a 2D RPG reminiscent of the late 80s/early 90s.  At the moment it is barebones compared to what I intend to do with it as it is mostly a front-end
skeleton with some basic scripts and functionality.  It allows you to login, view the Adventure Map, read some flavor text, and manage the names and models of several
of your party members.

I used HTML, CSS, JavaScript and jQuery for this project.  HTML/CSS/JavaScript due to them being project requirements and also a modern way to interact with front-end
development, and jQuery to increase the functionality and ease of using JavaScript to perform more complex tasks.  Easier getting/setting, query selection, etc.

Some challenges I faced were regex validation for the e-mail and password.  The biggest pain point was getting the Camp page to work properly as it has the most
functionality and required a lot of selecting and replacing values.  Although not programming related, finding and editing the gifs to be usable for player models
was also a struggle.

To use the site you must first provide an e-mail address and password.
The regex for these is not overly strict, and they do not have to be real, only valid for the parameters set.  

E-mail must fit a name@host.type structure, but could otherwise be gibberish EX: ducky@periwinkle.col
Password must just not be empty

You can access other pages upon valid input, and navigate through them using a nav bar attached to the bottom of what are typically the right-leaning yellow forms
although on the Contact page it would be centered.

Most of the functionality is on the Camp page.  You may rename three of the characters and change two of their models.  You may also interact with the limited shop and "buy" items.

MIT License

Copyright (c) 2022 Erik Ender

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
