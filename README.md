react-input-fields
A React package for easily handling file input fields, supporting various file types such as images, videos, and other files. It allows users to upload files via drag-and-drop or the standard file input interface.

Features
Feature	Description
Drag-and-Drop Upload	Supports drag-and-drop file upload.
Multiple File Types Supported	Accepts images, videos, and other file types.
Minimal Setup	Easy-to-use with React and minimal setup.
Installation
You can install the react-input-fields package via npm:

bash
Copy
Edit
npm install react-input-fields
How to Use
Here’s an example of how to use the InputImage component in your React project:

javascript
Copy
Edit

import React, { useState } from 'react';
import InputImage from 'react-input-fields';

const App = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new FormData object from the form
    const formData = new FormData(e.target);
    
    // Get the file from the form data (file input field name is 'custom-name')
    const uploadedFile = formData.get('custom-name');
    
    if (uploadedFile) {
      console.log("File submitted:", uploadedFile.name);
      // Proceed with the file upload logic (e.g., sending it to a server)
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mb-4">Upload Your File</h1>
      <form onSubmit={handleSubmit}>
        <InputImage
          width="100%"
          height="auto"
          inputName="custom-name"  // Updated to 'custom-name'
          color="#FF6347"  // Hex color for border and text on drag
          background="#f0f0f0"  // Hex color for background
        />
        <button 
          type="submit" 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

Component Props
Prop	Type	Description	Default Value
width	string	The width of the input field.	"100%"
height	string	The height of the input field.	"auto"
inputName	string	The name attribute for the input field.	"file-upload"
color	string	The color of the border and text when dragging.	"#FF6347"
background	string	The background color of the input field.	"#f0f0f0"
License
MIT © Nahid

