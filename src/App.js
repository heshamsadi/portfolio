import { useState, useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    fetch('http://localhost:5001/') // Adjust the URL to your server's endpoint
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
