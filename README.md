📘 Assignment 6 — Creating a Simple Web Server with Node.js

This project demonstrates how to build a basic web server using Node.js and the built-in http module.
The server responds to different routes and serves HTML pages for /home, /about, and /contact.
It also includes a custom 404 page for invalid routes.
assignment6/
├── server.js
└── public/
    ├── home.html
    ├── about.html
    ├── contact.html
    └── 404.html
📂 Files Explained
server.js

Creates a server using the Node.js http module

Handles routing manually (/home, /about, /contact)

Serves HTML files dynamically using fs

Returns a custom 404 page for unknown routes

Uses asynchronous handling and clean modular structure

public/home.html, about.html, contact.html

Simple HTML pages rendered by the server based on the route

public/404.html

Custom 404 error page for invalid routes

How to Run the Project
Step 1: Install Node.js

Download and install Node.js from:
https://nodejs.org/

Step 2: Navigate to the project folder

cd assignment6
Step 3: Run the server
node server.js

Step 4: Open the browser and visit:

Home page: http://localhost:3000/home

About page: http://localhost:3000/about

Contact page: http://localhost:3000/contact

Invalid route: http://localhost:3000/xyz
 → Shows custom 404 page

 <img width="1849" height="919" alt="Screenshot 2025-11-14 225811" src="https://github.com/user-attachments/assets/8e5e98be-f200-41df-9787-4a616439dfaf" />
 
<img width="1920" height="1080" alt="Screenshot 2025-11-14 230117" src="https://github.com/user-attachments/assets/a7728491-5084-48df-b7a5-71daf0c85217" />

