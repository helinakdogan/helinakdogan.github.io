import React, { useState } from 'react';
import WomanGraph from './components/WomanGraph';
import ManGraph from './components/ManGraph';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./App.css";
import ManGraph2 from './components/ManGraph2';

function App() {
  const [currentSelect, setCurrentSelect] = useState("Erkek");


  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      
      {currentSelect === "Erkek" && <ManGraph />}
      {currentSelect === "Kadın" && <WomanGraph />}
      {currentSelect === "Erkek+" && <ManGraph2 />}
      <Footer />
    </div>
  );
}

export default App;

