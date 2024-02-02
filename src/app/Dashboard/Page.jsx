"use client"
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import  { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PageContent from '../components/PageContent';
import Footer from '../components/Footer';
// import logo from '../../images/Group 2.png';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page content here */}
        <PageContent />
        <Footer/>
      </div>
      <div className="drawer lg:drawer-open bg-[#F7F8FA] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side lg:dark:bg-[#1F1F1F]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
