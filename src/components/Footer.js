import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <span style={rightsStyle}>© 2024 Bütün hakları saklıdır.</span>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#535a66',
  color: '#eeeeee',
  textAlign: 'center',
  padding: '10px 0',
  fontFamily: 'Didot, serif',
  boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
  width: '100%',
  marginTop: 'auto',
  position: 'relative',
};

const rightsStyle = {
  fontSize: '12px',
  margin: '0',
};

export default Footer;
