// App.js

import React, { useState } from 'react';
import Header from './Header';
import MyChartComponent from './LineChart';

const App = () => {
  const [activeTab, setActiveTab] = useState('women');

  const changeTab = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      <Header changeTab={changeTab} />
      {activeTab === 'women' ? <MyChartComponent /> : null}
    </div>
  );
};

export default App;
