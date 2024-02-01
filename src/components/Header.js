import React from 'react';

const commonButtonStyle = {
  outerWidth: '30px',
  margin: '5px',
  padding: '10px',
  fontSize: '14px',
  cursor: 'pointer',
  color: 'white',
  borderRadius: '5px',
  fontFamily: 'Didot, serif',
};

const Header = ({ changeTab }) => {
  return (
    <div style={headerStyle}>
      <div style={tabButtonsStyle}>
        <span style={{ color: 'lightgrey', fontSize: '22px', fontFamily: 'Didot, serif', fontWeight: 'bold', marginLeft:'40px' }}>MMPI PUAN HESAPLAMA</span>
        <div style={{ marginLeft: 'auto' , marginRight:'40px' }}>
          <button style={{ ...commonButtonStyle, backgroundColor: '#5c5470' }} onClick={() => changeTab('women')}>
            KADIN
          </button>
          <button style={{ ...commonButtonStyle, backgroundColor: '#5585b5' }} onClick={() => changeTab('men')}>
            ERKEK
          </button>
        </div>
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
  display: 'flex',
  alignItems: 'center',
};

export default Header;
