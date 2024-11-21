import React, { useState } from 'react';  // Ensure useState is imported correctly
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';  // Importing icons
import './App.css';  // Import CSS for styling
import logo from './logo.svg';  // Import logo
import me from './me.png';  // Import the "me" image
import storyblack from './storyblack.mp4'; // Import the video
import formal from './formal.png';  // Adjust the path if the image is inside a subfolder
import sea from './sea.png';  // Adjust the path if the image is inside a subfolder
import pizza from './pizza.png';  // Adjust the path if the image is inside a subfolder

function App() {
  // State hook to manage the text displayed
  const [text, setText] = useState('Hello,  eng ; AbdulRahman Redaa !');

  // Function to change the text
  const handleClick = () => {
    setText('Good Boy !');
  };

  return (
    <div className="App">
      <h1>{text}</h1>  {/* Display the current text */}
      
      {/* Display the imported images */}

      <img src={formal} className="App-image" alt="formal" />

      <img src={logo} className="App-logo" alt="logo" />
      <img src={me} className="App-image" alt="Me" />  {/* New image */}
      <img src={logo} className="App-logo" alt="logo" />
      <img src={sea} className="App-image" alt="sea" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={pizza} className="App-image" alt="pizza" />
      {/* Display video like an image */}
      <video className="App-image" controls>
        <source src={storyblack} type="storyblack/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Repeat the logo if necessary */}
      
      <a href="https://www.linkedin.com/in/abdulrahman-redaa-8517651b6/" target="_blank" rel="noopener noreferrer">
        <button className="social-button linkedin">
          <FaLinkedin size={20} /> LinkedIn  {/* Icon with text */}
        </button>
      </a>
      <a href="https://github.com/3bdoredaa2244" target="_blank" rel="noopener noreferrer">
        <button className="social-button github">
          <FaGithub size={20} /> Github
        </button>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <button className="social-button youtube">
          <FaYoutube size={20} /> YouTube
        </button>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <button className="social-button instagram">
          <FaInstagram size={20} /> Instagram
        </button>
      </a>
    </div>
  );
}

export default App;
