import React, { useState } from 'react';
import Header from './components/Header';
import WomanGraph from './components/WomanGraph';
import ManGraph from './components/ManGraph';

const App = () => {
  const [activeTab, setActiveTab] = useState('women');

  const changeTab = (newTab) => {
    setActiveTab(newTab);
  };

  const appStyle = {
    backgroundColor: '#ffffff', 
  };

  return (
    <div style={appStyle}>
      <Header changeTab={changeTab} />
      {activeTab === 'women' ? <WomanGraph /> : <ManGraph />}
    </div>
  );
};

export default App;
