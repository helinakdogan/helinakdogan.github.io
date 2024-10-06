import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ changeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabChange = (tab) => {
    changeTab(tab);
    setIsMenuOpen(false); // Menü kapansın
  };

  return (
    <div style={headerStyle}>
      <div style={headerContentStyle}>
        <span style={titleStyle}>MMPI PUAN HESAPLAMA</span>
        <div style={warningBoxStyle}>
          <strong>Uyarı:</strong> Uygulama henüz mobil kullanıma hazır değildir. Yalnızca bilgisayar üzerinden deneyiniz.
        </div>
        {/* Menü Açma Butonu */}
        <button onClick={toggleMenu} style={menuButtonStyle}>
          <FaBars />
        </button>
      </div>

      {/* Yan Menü (Sidebar) */}
      {isMenuOpen && (
        <div style={sidebarStyle}>
          <div style={menuItemStyle} onClick={() => handleTabChange('women')}>
            KADIN
          </div>
          <div style={menuItemStyle} onClick={() => handleTabChange('men')}>
            ERKEK
          </div>
          <div style={menuItemStyle} onClick={() => handleTabChange('example')}>
            ERKEK +
          </div>
        </div>
      )}
    </div>
  );
};

const headerStyle = {
  padding: '15px 20px', // Üst ve alt padding eklendi
  backgroundColor: '#222831',
  textAlign: 'center',
  width: 'calc(100% - 40px)', // Ekran boyutuna göre otomatik hesaplama
  height: 'auto', // Yükseklik otomatik ayarlandı
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
};

const headerContentStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%', // Header içeriği tam genişlikte
  justifyContent: 'space-between',
};

const titleStyle = {
  color: 'lightgrey',
  fontSize: '22px',
  fontFamily: 'Didot, serif',
  fontWeight: 'bold',
  flex: '1',
  textAlign: 'left',
};

const menuButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'white',
  fontSize: '28px',
  marginLeft: '20px',
};

const sidebarStyle = {
  position: 'absolute',
  top: '70px', // Header yüksekliğine göre ayarlayın
  right: '10px', // Sağdan 10px içeride
  backgroundColor: '#222831',
  padding: '5px', // Padding küçültüldü
  borderRadius: '5px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // İçerik ortalaması için
  width: '120px', // Menü genişliği daha da küçültüldü
  maxWidth: '80%', // Ekran boyutuna göre maksimum genişlik
  overflow: 'hidden',
};

const menuItemStyle = {
  padding: '8px 0', // Yalnızca dikey padding küçültüldü
  fontSize: '14px', // Font boyutu küçültüldü
  cursor: 'pointer',
  color: 'white',
  borderRadius: '5px',
  width: '100%', // Tüm genişliği kaplasın
  textAlign: 'center', // İçeriği ortalamak için
  marginBottom: '5px', // Alt boşluk azaltıldı
  transition: 'background-color 0.3s',
};

const warningBoxStyle = {
  color: '#a1b6cb',
  fontSize: '12px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'normal',
  lineHeight: '1.5',
  textAlign: 'left',
  flex: '1', // Uyarının yanındaki alanı kaplaması için
  marginLeft: '20px',
};

export default Header;
