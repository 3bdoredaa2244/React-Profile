import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';
//import logo from './logo.svg';
import images from './images.png'; // Import your new logo
import formal from './formal.png';
import me from './me.png';
import pizza from './pizza.png';
import sea from './sea.png';
import hh from './hh.png';

// ThemeToggle function
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-theme' : 'dark-theme';
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={formal} className="App-profile" alt="Profile" />
        <h1>AbdulRahmann Redaa</h1>
        <h2>Software Engineer | Blockchain Developer | Web3 Specialist</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/abdulrahman-redaa-8517651b6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="social-icon linkedin" />
          </a>
          <a href="https://github.com/3bdoredaa2244" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="social-icon github" />
          </a>
        </div>
      </header>

      <ThemeToggle /> {/* Add ThemeToggle component here */}

      <img src={hh} className="App-image" alt="hh" />
      <img src={images} className="App-logo" alt="Ethereum Logo" />
      <img src={me} className="App-image" alt="Me" />
      <img src={images} className="App-logo" alt="Ethereum Logo" />
      <img src={sea} className="App-image" alt="sea" />
      <img src={images} className="App-logo" alt="Ethereum Logo" />
      <img src={pizza} className="App-image" alt="pizza" />

      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm AbdulRahmann Redaa, a passionate Innovative Web3 & Blockchain Developer with expertise in developing smart contracts and decentralized applications (DApps) on Ethereum
            and other blockchain platforms. Skilled in Solidity, Ethereum, and token standards (ERC-20, ERC-721, ERC-1155, ERC-4626). Experienced in
            optimizing smart contracts for performance, ensuring security through rigorous audits, and integrating seamless user interfaces with Web3.js.
            Possesses deep knowledge in decentralized finance (DeFi), cryptography, and the Ethereum Virtual Machine (EVM), supported by studies of
            "Mastering Ethereum" and "Mastering Blockchain". Actively participated in several hackathons, contributing to cutting-edge projects and
            gaining valuable experience in real-world blockchain development. Experienced with development tools such as Hardhat, Truffle, Foundry,
            and Remix IDE, and focused on creating efficient, secure blockchain solutions to drive innovation in the Web3 space.
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Blockchain Development (Ethereum, Solidity, Smart Contracts)</li>
            <li>Decentralized Applications (DApps) & Decentralized Finance (DeFi)</li>
            <li>Cryptography, OpenZeppelin, and EVM</li>
            <li>Tools: Hardhat, Truffle, Foundry, Remix IDE</li>
            <li>Libraries: Web3.js, Ethers.js, CCIP</li>
            <li>Smart Contract Auditing & NFT Development</li>
            <li>Programming Languages: JavaScript, Python, Dart, C++</li>
            <li>Mobile Development with Flutter</li>
            <li>Frontend: React, Redux</li>
            <li>Development Platforms: Linux, Git/GitHub</li>
            <li>Embedded Systems: Arduino, Embedded C/C++, Sensor Integration</li>
            <li>Data Tools: Power BI</li>
          </ul>
        </section>

        <section className="education">
          <h2>Education & Certifications</h2>
          <p><strong>Bachelor’s in Computer Science</strong> - Fayoum University, 2023</p>
          <ul>
            <li>Solidity Developer Bootcamp - Encode Club</li>
            <li>Full-Stack Web Development - FreeCodeCamp</li>
          </ul>
        </section>

        <section id="personal-touch" className="personal-touch">
          <div className="container">
            <h2>About Me</h2>
            <ul>
              <li>
                ⚽ I love football and support <strong>FC Barcelona</strong> and <strong>Zamalek SC</strong>.
              </li>
              <li>💪 I'm passionate about fitness and enjoy going to the gym.</li>
              <li>
                🤖 I'm fascinated by AI and machine learning and aim to explore these
                areas alongside blockchain.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 AbdulRahmann Redaa | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
