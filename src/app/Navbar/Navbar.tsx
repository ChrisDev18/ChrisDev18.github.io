"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
        <a>Chris Wilson</a>
        <a>About me</a>
        <a>My work</a>
        <a>Connect</a>
      </div>
  );
}