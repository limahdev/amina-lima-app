import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

const name = 'Amima';

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://media0.giphy.com/media/l3q2P2l54336ew5iM/giphy.webp"
  );
  
  function handleClick() {
    window.alert("hello Amima!");
  }

  function fetchImage() {
    console.log("hello again!");
    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=aHi5kZ49h4esZTalKqyvkBO2llvuHeJr&tag=funny"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const newImageUrl = myJson.data.images.original.url;
        setImageUrl(newImageUrl);
      });
  }


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name} Giphy Shuffle App!</h1>
        <img src={imageUrl} className="App-logo" alt="logo" />
        <p>
          This App was created by {name}!!! 
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fetchImage}>Shuffle!</button>
      </header>
    </div>
  );
}

export default App;
