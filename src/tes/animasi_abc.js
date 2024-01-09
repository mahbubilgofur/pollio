// src/Animasiabc.js

import React, { useState, useEffect } from 'react';
import './css/style.css';

const Animasiabc = () => {
  const [text, setText] = useState('');
  const words = ['M', 'O', 'H', 'A', 'M', 'M', 'A', 'D', ' ', 'M', 'A', 'H', 'B', 'U', 'B', 'I', 'L', ' ', 'G', 'O', 'F', 'U', 'R'];
  const animationSpeed = 1000; // Ubah kecepatan animasi sesuai kebutuhan Anda

  useEffect(() => {
    let currentIndex = 0;
    let tempText = '';

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        tempText += words[currentIndex];
        setText(tempText);
        currentIndex++;
      } else {
        // Jika sudah mencapai akhir daftar kata, kembalikan ke awal
        setText('');
        currentIndex = 0;
        tempText = '';
      }
    }, animationSpeed);

    return () => clearInterval(interval);
  }, []); // Perhatikan bahwa dependencies di sini hanya satu kali saat komponen did mount

  return <h1>{text}</h1>;
};

export default Animasiabc;
