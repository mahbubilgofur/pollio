import React, { useState } from 'react';
import './css/style.css'; // Pastikan Anda mengimpor file CSS Anda

function Animasi_contact({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const boxStyle = {
    width: '250px',
    height: '250px',
    backgroundColor: isHovered ? 'rgb(0, 255, 251)' : 'rgb(255, 255, 255)',
    border: 'solid 2px rgb(0, 255, 251)',
    boxShadow: isHovered ? '6px 8px 8px rgb(0, 255, 251)' : '3px 4px 4px rgb(0, 255, 251)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out', // Animasi transisi
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Efek skala saat hovered
    cursor: 'pointer' // Ubah kursor menjadi pointer saat dihover
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default Animasi_contact;
