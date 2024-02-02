"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsGrid } from 'react-icons/bs';
import { SlLayers } from 'react-icons/sl';
import { BiTrendingUp } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { PiSignOutBold } from 'react-icons/pi';
import avatar from '../../images/fresh-avatar.png';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiUsersThin } from "react-icons/pi";
import box from "../../images/box.png";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { CiDiscount1 } from "react-icons/ci";
import ThemeSwitcher from "./ThemeSwitcher";

function Sidebar() {
   const [isSidebarOpen, setSidebarOpen] = useState(false);
     const { theme, setTheme } = ThemeSwitcher();
   
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className={`h-full dark:bg-[#1F1F1F] dark:text-white bg-[rgb(247,248,250)]  ${isSidebarOpen ? 'w-64 lg:w-60 ' : 'w-64 lg:w-20 overflow-y-hidden'} transition-all duration-300`}>
      <div className="lg:mt-2 mb-4 pt-2 mt-0 bg-[#F7F8FA] dark:bg-[#1F1F1F]">
        <div className="lg:mb-5  text-center">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
          <svg width="40" height="40" viewBox="0 0 40 40"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
</svg>
            <span className={`lg:ml-[-5rem] font-bold flex-grow dark:text-white p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>GEEPAY</span>
          </a>
       
        </div>
        <div>
        </div>
      </div>

      <ul className={`bg-[#F7F8FA] dark:bg-[#1F1F1F] ${isSidebarOpen ? 'mt-[-30px] space-y-[-0.5rem]' : 'lg:space-y-2'}`}>
        <li className="hover:bg-[#FFFFFF] dark:border-l-[#1F1F1F] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
            <BsGrid className={`text-xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#76839b] font-semibold flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Dashboard</span>
          </a>
        </li>
        <li className="hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} >
<g id="vuesax/broken/trend-up">
<g id="trend-up">
<path id="Vector" d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M11.17 12L10.7 11.3L7.5 14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M16.5 9.5L14.99 11.01L14 12" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M14.5 9.5H16.5V11.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Trend</span>
          </a>
        </li>
        <li className="hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
             <PiUsersThin className={`text-xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-3 lg:p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Profile</span>
          </a>
        </li>
        <li className="hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
            <Image src={box} alt="box" width="20" height="5" quality={100} className={`text-xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Overview</span>
          </a>
        </li>
        <li className="hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
              <LiaInfoCircleSolid className={`text-2xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Information</span>
          </a>
        </li>
        <li className="hover:bg-[#ffffff] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] ">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
             <CiDiscount1 className={`text-2xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-3 lg:p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Discount Rates</span>
          </a>
        </li>

        <li className="py-2">
          <a  className="flex items-center mr-[0.5rem] ml-[0.5rem] p-1   text-gray-900 rounded-lg hover:[] group">
            <div className={`bg-white dark:bg-[#393838] rounded-full p-[0.4rem] text-xl flex flex-col py-3 justify-center gap-5 items-center `}>
            <div className={` ${theme === 'light' ? "border-green-300 p-2 bg-green-300 rounded-full border-2" : "bg-none rounded-none border-0"}  cursor-pointer`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'light')}>
           
            <MdOutlineLightMode  className={`text-xl text-white ${theme === 'light' ? 'text-white' : 'text-[#90969f]'}`} />
             </div>
             <div className={` ${theme === 'dark' ? "border-green-300 p-2 bg-green-300  rounded-full border-2" : "bg-none rounded-none border-0"} cursor-pointer`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'dark')}>
            <MdOutlineDarkMode  className={`text-xl   ${theme === 'dark' ? 'text-white' : 'text-[#BAC2D0]'}`} />
            </div>
             </div>
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-1 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
          </a>
        </li>

        <div class={`${isSidebarOpen ? '' : 'lg:pt-16 lg:mb-4'}`}>
        <li className={`hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] hidden lg:block ${isSidebarOpen ? 'lg:block hidden ' : ''} border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5] cursor-pointer`} onClick={toggleSidebar}>
          <span className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
          <HiOutlineArrowRightCircle  className={`text-2xl text-[#BAC2D0] lg:block ${isSidebarOpen ? '' : 'icon-hover-effect'}`} onClick={toggleSidebar} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Collapse</span>
          </span>
        </li>
        <li className="hover:bg-[#FFFFFF] dark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5]">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
            <FiSettings className={`text-xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-2  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Settings</span>
          </a>
        </li>
        <li className=" hover:bg-[#FFFFFF] ark:hover:border-l-[#34CAA5] dark:hover:bg-[#323232] border-l-[#F7F8FA] dark:border-l-[#1F1F1F] border-l-4 hover:border-l-[#34CAA5]">
          <a href="/" className="flex items-center p-2 mx-4 text-gray-900 rounded-lg hover:[] group">
            <PiSignOutBold className={`text-xl text-[#BAC2D0] ${isSidebarOpen ? '' : 'icon-hover-effect'}`} />
            <span className={`ml-4  text-[#BAC2D0] flex-grow p-4 ${isSidebarOpen ? '' : 'flex lg:hidden'}`}>Log out</span>
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
