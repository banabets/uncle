import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Create a round favicon dynamically
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Create circular clipping
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, 2 * Math.PI);
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(img, 0, 0, 32, 32);
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      link.href = canvas.toDataURL();
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    img.src = '/unicz.png';
  }, []);

  return (
    <>
      <Head>
        <title>$UNCLE</title>
        <link rel="icon" type="image/png" href="/unicz.png" />
        <link rel="apple-touch-icon" href="/unicz.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Bungee&family=Nunito:wght@800;900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
