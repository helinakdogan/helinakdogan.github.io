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
        <span style={{ color: 'lightgrey', fontSize: '22px', fontFamily: 'Didot, serif', fontWeight: 'bold', marginLeft: '40px' }}>
          MMPI PUAN HESAPLAMA
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <div style={warningBoxStyle}>
            <div style={warningStyle}>
              <strong>Uyarı:</strong> Uygulama henüz mobil kullanıma hazır değildir. Yalnızca bilgisayar üzerinden deneyiniz.
            </div>
          </div>         
          <button style={{ ...commonButtonStyle, backgroundColor: '#5c5470', marginLeft: '10px' }} onClick={() => changeTab('women')}>
            KADIN
          </button>
          <button style={{ ...commonButtonStyle, backgroundColor: '#5585b5', marginLeft: '5px' }} onClick={() => changeTab('men')}>
            ERKEK
          </button>
          <button style={{ ...commonButtonStyle, backgroundColor: '#f5b461', marginLeft: '10px' }} onClick={() => changeTab('example')}>ERKEK +</button>
        </div>
      </div>
    </div>
  );
};

const headerStyle = {
  padding: '3px',
  backgroundColor: '#222831',
  textAlign: 'center',
  width: '100%',
};

const tabButtonsStyle = {
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
};

const warningBoxStyle = {
  backgroundColor: 'rgba(128, 128, 128, 0.1)',
  borderRadius: '5px',
  padding: '5px 5px',
  marginRight: '5px', 
  marginLeft: '5px',
};

const warningStyle = {
  color: '#a1b6cb',
  fontSize: '12px', 
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'normal',
  lineHeight: '1.5',
  textAlign: 'center',
};

export default Header;
