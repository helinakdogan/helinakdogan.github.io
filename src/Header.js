// Header.js

import React from 'react';

const commonButtonStyle = {
  margin: '5px',
  padding: '10px',
  fontSize: '14px',
  cursor: 'pointer',
  color: "white",
  borderRadius: '5px' , fontFamily: "Didot, serif"
};

const Header = ({ changeTab }) => {
  return (
    <div style={headerStyle}>
      <div style={tabButtonsStyle}>
        <button style={{ ...commonButtonStyle, backgroundColor: '#5c5470' }} onClick={() => changeTab('women')}>Kadın</button>
        <button style={{ ...commonButtonStyle, backgroundColor: '#5585b5' }} onClick={() => changeTab('men')}>Erkek</button>
      </div>
    </div>
  );
};

const headerStyle = {
  padding: '3px',
  backgroundColor: '#222831',
  textAlign: 'center',
};

const tabButtonsStyle = {
  margin: '10px',
  
};

export default Header;
