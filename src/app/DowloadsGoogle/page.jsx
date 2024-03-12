"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const CountdownModal = ({ isOpen, onCountdownComplete, initialCount = 30 }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    let timer;
    if (isOpen && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    } else if (count === 0) {
      onCountdownComplete();
      setCount(initialCount); // Reset for next time
    }
    return () => clearTimeout(timer);
  }, [isOpen, count, onCountdownComplete, initialCount]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      padding: '20px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>Downloading in {count} seconds...</h2>
    </div>
  );
};


const DownloadButtonWithCountdown = ({ fileName, url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDownload = () => {
    setIsModalOpen(true);
  };

  const handleCountdownComplete = () => {
    setIsModalOpen(false);
    window.location.href = url; // หรือใช้ Next.js router สำหรับ navigation
  };

  return (
    <div>
      <button onClick={startDownload}>Download {fileName}</button>
      <CountdownModal isOpen={isModalOpen} onCountdownComplete={handleCountdownComplete} />
    </div>
  );
};

const App = () => {
  return (
    <>  

<Head>
           <title>Download template website สำหรับทำโฆษณาสายเทา ฟรี</title>
           <meta name="description" content="Download template website สำหรับทำโฆษณาสายเทา ฟรี"/>
           <meta name="robots" content="index, follow"/>
           <meta name="author" content="adsmanager"/>
           <meta property="og:title" content="website สำหรับทำโฆษณาสายเทา"/>
           <meta property="og:description" content="nload template website สำหรับทำโฆษณาสายเทา ฟรี"/>
  <meta property="og:image" content="https://www.service-ads.com/img/ads.jpg"/>
       
       
  <link rel="canonical" href="https://www.service-ads.com/Dowloads" /> 

    </Head>
    <div className="container text-center" >
      <h1>Download Files</h1>

  
  



  <div className="p-2 flex-fill">
 
     <Image src="/img/gg.png" alt="Ads สายเทา" width={1040} height={1040} className="imgp" />
  <DownloadButtonWithCountdown fileName="Google" url="gg.zip" />

  </div>

</div>
 

    </>
  );
};

export default App;
