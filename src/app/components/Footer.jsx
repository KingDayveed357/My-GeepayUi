import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return ( 
    // bg-[#84E1BC]
    <footer className="footer bg-transparent items-center text-gray-400 p-4 px-7  ">
  <aside className="items-center grid-flow-col">
  <svg width="40" height="40" viewBox="0 0 40 40"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
</svg>
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4  md:place-self-center items-center justify-self-center text-center md:text-start md:justify-self-end text-[1.4rem] my-auto">
    <a href=" https://twitter.com/@AniagoD" className="hover:text-gray-400" target="_blank"> <FaXTwitter />  </a>
    <a href="https://github.com/KingDayveed357" className="hover:text-gray-400" target="_blank"><FaGithub /></a>
    <a href=" https://www.linkedin.com/in/david-aniago-4889aa28a" className="hover:text-gray-400" target="_blank"><FaLinkedin /></a>
  </nav>
</footer>
  )
}

export default Footer
