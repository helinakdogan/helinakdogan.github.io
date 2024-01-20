import "./App.css";

import LineChart from "./LineChart";

function App() {
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <LineChart />
      </div>
    </div>
  );
}

export default App;

// if paramValue between 1, change it with 22.5
// if paramValue between 2, change it with 24.5
// if paramValue between 3, change it with 27.5
// if paramValue between 4, change it with 30
// if paramValue between 5, change it with 32