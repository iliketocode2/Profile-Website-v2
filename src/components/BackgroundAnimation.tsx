'use client'
import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="background-rec transition-all duration-300"></div>
      <div className="background-rec background-rec-2 transition-all duration-300"></div>
      <div className="background-rec background-rec-3 transition-all duration-300"></div>
    </>
  );
}