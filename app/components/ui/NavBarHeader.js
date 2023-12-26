"use client"
import './module.css'
import Logo from "../../../public/images/logo.png"
import Image from 'next/image';
import Navbar from './Navbar';
import { useState } from 'react';  

import Link from 'next/link';

const NavBarHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-full flex flex-row justify-center ">
      <div className="w-[80%] flex flex-row justify-between	 text-[#fff]">
        <div className="logo-container w-[30%]">
          <Link href="/">
            <Image src={Logo} height={60}/>
          </Link>
        </div>
        <div className={`w-[70%] menu-container ${menuOpen ? 'open' : ''}`}>
          <ul className="menu text-base">
            <li className='hover:border-b-yellow-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:border-b-yellow-500'>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="" >
   
          <Navbar/>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBarHeader;



