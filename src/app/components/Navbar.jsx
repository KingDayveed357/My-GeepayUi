"use client"
import React from 'react';
import logo from '../../images/Group 2.png';
import Image from 'next/image';
import avatar from "../../images/fresh-avatar.png";
import profile from '../../images/avatars/profile.png';
import bell from '../../images/solar_bell-outline.svg';
import { LuAlignLeft } from 'react-icons/lu';
import { PiBellThin } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { createPopper } from '@popperjs/core';
import { Dropdown } from 'flowbite-react';
import {HiViewGrid } from "react-icons/hi";
import { HiCog } from "react-icons/hi";
import {HiCurrencyDollar } from "react-icons/hi";
import {HiLogout} from "react-icons/hi";
import { Button, Toast } from 'flowbite-react';
import { useState } from 'react';
import { HiFire } from 'react-icons/hi';
import { Datepicker } from 'flowbite-react';


function Navbar({ toggleSidebar }) {
 const [toggleSearch, setToggleSearch] = React.useState(false);
 
  const toggler = () =>{
    setToggleSearch(!toggleSearch);
  }
  
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",  // Change placement to bottom-end
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    <div className="w-full navbar dark:text-white border-b-2 dark:border-b-[#262626f2] border-b-[#F2F4F6] h-20 bg-[#FAFAFA] dark:bg-[#1F1F1F]">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <LuAlignLeft className="text-lg" onClick={toggleSidebar} />
        </label>
      </div>
      <div className="flex-1 ml-[-4px] md:px-3 px-0">
        {/* <img src={logo} className="p-2 h-16 md:h-20" alt="" /> */}
        <h5 className='font-semibold text-[1rem]  md:text-xl'>Dashboard</h5>
      </div>
     <div className={`flex-none hidden xl:flex justify-between dark:bg-[#1F1F1F]  items-center ${toggleSidebar ? 'gap-10' : 'gap-16'}`}>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-500 text-lg" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="input dark:bg-[#292828] outline-none rounded-full input-bordered pl-10 w-[20rem] max-w-[92rem]"
          />
        </div>
        <div className='my-auto flex justify-between gap-2'>
          {/* <IoCalendarOutline className='my-auto'  /> */}
          {/* <p>November 15, 2023</p> */}
          <Datepicker
  style={{
    border: 'none',
    background: 'transparent',
    color: 'inherit',  // Optional: Preserve text color
    outline: 'none'
  }}
  className=''
/>

        </div>
        <div className=''>
        <div className="text-gray-700 rounded-full border p-2 dark:bg-[#2f2e2e] dark:border-[#2f2f2f] relative">
        <PiBellThin className="dark:text-white text-lg" />
      </div>
        



        </div>
        <div>
          <div className="p-[0.35rem] flex gap-3 justify-between dark:bg-[#292828] dark:border-[#2f2f2f] rounded-full bg-transparent border w-full max-w-xs" >
          <div className="avatar ">
              <div className="mask mask-squircle w-[40px] h-[40px]">
                <Image src={profile} alt="Profile" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="font-semibold text-base">Justin Bergson</div>
              <div className="text-sm opacity-50">Justin@gmail.com</div>
            </div>
            <Dropdown inline className='dark:bg-[#1F1F1F] w-52 mt-2'>
            <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
      <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
        </div>
        </div>
      
      </div>
      <div className="flex xl:hidden gap-3  ">
        

<FiSearch className="text-gray-500 text-lg" onClick={toggler} />
     
        <div className="text-gray-700 rounded-full border p-2">
        <PiBellThin className="dark:text-white text-lg" />
          </div>
            <Dropdown dismissOnClick={false} label="" inline className="dark:bg-[#1F1F1F]" renderTrigger={() => <Image src={profile} className="avatar " alt="Profile" width="37" height="5" quality={100} />}>
  
      <Dropdown.Header>
        <span className="block text-sm">Justin Bergson</span>
        <span className="block truncate text-sm font-medium">Justin@gmail.com</span>
        {/* <span className=" truncate text-sm font-medium flex gap-1"> <IoCalendarOutline className='my-auto' />November 15, 2023</span> */}
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
      <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
        </div>

   </div>
   <form className={`${toggleSearch ? 'block mx-5 mt-3 xl:hidden' : 'hidden'} `}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="dark:bg-[#292828] outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

   </>
  );
}

export default Navbar;
