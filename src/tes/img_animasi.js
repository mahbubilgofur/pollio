import React, { useState, useEffect } from 'react';
import './css/style.css'; // Import file CSS Anda
import img from './img/logo.png';
const ImageWithMovingColor = () => {
  const [color, setColor] = useState([0, 255, 251]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mengubah warna secara acak
      const newColor = [
        Math.floor(Math.random() * 50) + 150,  // Mendekati nilai 0 untuk R
      Math.floor(Math.random() * 56) + 200,  // Mendekati nilai 255 untuk G
      Math.floor(Math.random() * 56) + 251,  // Mendekati nilai 251 untuk B
      ];
      setColor(newColor);
    }, 1000); // Mengubah setiap 1000 milidetik (1 detik)

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div
      className="l-img"
      style={{
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        boxShadow: `0px 7px 7px rgb(${color[0]}, ${color[1]}, ${color[2]})`,
      }}
    >
      {/* Konten di dalam komponen, misalnya sebuah gambar */}
      <img src={img} alt="gambar" />
    </div>
  );
};

export default ImageWithMovingColor;
