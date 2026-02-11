Frontend JavaScript Projects

This repository contains two interactive web applications built using HTML, CSS, and JavaScript. These projects demonstrate practical implementation of DOM manipulation, local storage handling, real-time updates, and responsive UI design.

1. Advanced Digital Clock
Overview

The Advanced Digital Clock is a real-time web application that dynamically displays the current time and date. It includes multiple interactive features such as 12/24-hour format switching, dark/light mode toggle, and start/stop functionality.

Features

Real-time clock updates every second

12-hour and 24-hour format toggle

Dark and Light mode switch

Start and Stop clock control

Live formatted date display

Responsive design

Neon glow animation styling

Technologies Used

HTML5

CSS3

JavaScript (ES6)

How It Works

The JavaScript Date() object retrieves current system time.

setInterval() updates the clock every second.

Conditional logic handles 12-hour and 24-hour formatting.

DOM manipulation updates time and date dynamically.

CSS classes are toggled to switch themes.

How to Run

Open the Advanced-Digital-Clock folder.

Double-click index.html.

The clock will start automatically.

2. Pro Notes App (Local Storage Based)
Overview

The Pro Notes App is a fully functional notes management system built using JavaScript and browser localStorage. It allows users to create, edit, delete, search, and manage notes with persistent storage.

Features

Add new notes

Edit existing notes

Delete individual notes

Clear all notes with confirmation

Real-time search functionality

Category selection

Priority selection (Low, Medium, High)

Date and time tracking

Persistent storage using localStorage

Responsive design

Technologies Used

HTML5

CSS3

JavaScript (ES6)

Browser localStorage API

How It Works

Notes are stored as objects inside an array.

The array is converted into a string using JSON.stringify() before saving to localStorage.

On page load, JSON.parse() retrieves stored notes.

DOM manipulation dynamically renders notes.

Edit mode replaces the note content with an input field for inline editing.

Confirmation dialogs ensure safe deletion.

How to Run

Open the Pro-Notes-App folder.

Double-click index.html.

Add and manage notes. Data will persist even after refreshing.

Learning Outcomes

These projects demonstrate:

DOM manipulation

Event handling

Real-time updates using setInterval

Working with JavaScript Date object

CRUD operations in frontend

Data persistence using localStorage

Responsive UI development

Theme toggling using CSS classes

Future Enhancements

Add drag-and-drop note sorting

Add filtering by category and priority

Add alarm feature to digital clock

Combine analog and digital clock

Convert projects to React version

Connect Notes App to backend API

Author

Ashu
B.Tech Student – Information Technology
Bundelkhand Institute of Engineering and Technology
