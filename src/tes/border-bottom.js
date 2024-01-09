import React, { useState, useEffect } from 'react';
import './css/style.css'; // Impor file CSS Anda

const BorderBottom = () => {
  const [borderColor, setBorderColor] = useState([0, 255, 251]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mengubah warna border-bottom secara acak
      const newColor = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
      ];
      setBorderColor(newColor);
    }, 1000); // Mengubah setiap 1000 milidetik (1 detik)

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div
      className="h"
      style={{
        borderBottom: `2px solid rgb(${borderColor[0]}, ${borderColor[1]}, ${borderColor[2]})`,
      }}
    >
      {/* Konten di dalam komponen, sesuai kebutuhan Anda */}
    </div>
  );
};

export default BorderBottom;
