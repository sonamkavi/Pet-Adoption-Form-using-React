# React + Vite

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>

<h1>Pet Adoption Form</h1>

<p>A simple React app for pet adoption that allows users to fill out a form and view submitted data in a table.</p>

<h2>Overview</h2>
<p>The application consists of three main parts:</p>
<ul>
  <li><strong>Header:</strong> Displays the app’s title.</li>
  <li><strong>Form:</strong> Collects user information including pet and adopter details.</li>
  <li><strong>Table:</strong> Displays submitted form data in a table.</li>
</ul>

<h2>File Structure</h2>

<pre>
src/
├── App.jsx          # Main application component
├── Header.jsx       # Header component (App title)
├── Form.jsx         # Form component (User input)
├── Table.jsx        # Table component (Displays submitted data)
├── App.css          # Basic styling for the app
</pre>

<h2>Project Setup</h2>

<h3>1. Create a Vite Project</h3>
<pre><code>npm create vite@latest pet-adoption-form --template react</code></pre>

<h3>2. Install Dependencies</h3>
<pre><code>cd pet-adoption-form
npm install</code></pre>

<h3>3. Start Development Server</h3>
<pre><code>npm run dev</code></pre>

<h2>Components</h2>

<h3>Header Component</h3>
<p>Displays the title of the application.</p>

<h3>Form Component</h3>
<p>Collects information including:</p>
<ul>
  <li>Pet Name</li>
  <li>Pet Type</li>
  <li>Breed</li>
  <li>Adopter's Name</li>
  <li>Email</li>
  <li>Mobile Number</li>
</ul>
<p>Implements validation to ensure data integrity (e.g., email format, 10-digit mobile number).</p>

<h3>Table Component</h3>
<p>Displays the submitted data from the form in a structured table format.</p>

<h2>Styling</h2>
<p>The application is styled using a simple <code>App.css</code> file for a clean and responsive UI.</p>

<h2>Validation</h2>
<p>Form validation includes:</p>
<ul>
  <li>Minimum character length for pet name, breed, and adopter's name (at least 3 characters).</li>
  <li>Email format validation using a regular expression.</li>
  <li>Mobile number validation to ensure a 10-digit input.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

</body>
</html>
