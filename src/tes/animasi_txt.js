// src/Animasi_txt.js

import React, { useState, useEffect } from 'react';
import './css/style.css';

const Animasi_txt = () => {
  const [text, setText] = useState('');
  const words = ['S', 'M', 'K', 'N', ' ', '6', ' ', 'J', 'E', 'M', 'B', 'E', 'R'];
  const animationSpeed = 1000;

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

  return <h5 className='h5'>{text}</h5>;
};

export default Animasi_txt;
