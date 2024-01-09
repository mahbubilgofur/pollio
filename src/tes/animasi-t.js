import React, { useState, useEffect } from 'react';

const Animasi_t = () => {
  const [borderColor, setBorderColor] = useState('rgb(0, 255, 251)');

  useEffect(() => {
    // Fungsi untuk mengubah warna secara acak
    const changeColor = () => {
      const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      setBorderColor(newColor);
    };

    // Interval untuk memanggil fungsi changeColor setiap 2 detik
    const intervalId = setInterval(changeColor, 2000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="l-tnt" style={{ borderColor }}>
     
                <div className='l-1'>
                    <div className='l-p1'>
                    <p>Nama Lengkap</p>
                    </div>
                    <div className='l-p11'>
                    <p>:MOHAMMAD MAHBUBIL GOFUR</p>
                    </div>
                </div>
                <div className='l-2'>
                    <div className='l-p2'>   
                    <p>Jenis Kelamin</p>
                    </div>
                    <div className='l-p22'>
                    <p>:LAKI-LAKI</p>
                    </div>
                </div>
                <div className='l-3'>
                    <div className='l-p3'>
                    <p>TTL</p>
                    </div>
                    <div className='l-p33'>
                    <p>:17 AGUSTUS 2006</p>
                    </div>
                </div>
                <div className='l-4'>
                    <div className='l-p4'>
                    <p>Agama</p>
                    </div>
                    <div className='l-p44'>
                    <p>:ISLAM</p>
                    </div>
                </div>
                <div className='l-5'>
                    <div className='l-p5'>
                    <p>Alamat</p>
                    </div>
                    <div className='l-p55'>
                    <p>:GAMBIRONO</p>
                    </div>
                </div>
            
    </div>
  );
};

export default Animasi_t;
