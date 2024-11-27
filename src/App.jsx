import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from the Express server
  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:5173'); // Adjust to the server's port
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <img src={reactLogo} alt="React logo" />
        <img src={viteLogo} alt="Vite logo" />
        <h1>React + Vite + Express</h1>
        <button onClick={fetchMessage}>Fetch Message</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
