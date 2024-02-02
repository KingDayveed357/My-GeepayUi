"use client"
import React from 'react';
import Chart from "chart.js";
import Image from 'next/image';
import blackMan from '../../images/avatars/black-man.png';
import blackBeauty from '../../images/avatars/black-beauty.png';
import prettyLady from '../../images/avatars/prettyLady.png';
import prettyCooper from '../../images/avatars/prettyCooper.png';
import coolNerd from '../../images/avatars/coolNerd.png';
import boxTick from '../../images/box-tick.png';
import rotate from '../../images/3d-rotate.png';
import shoppingCart from '../../images/shopping-cart.png';
import coin from '../../images/coin.png';
import { BiTrendingUp } from 'react-icons/bi';
import { TbFileDownload } from "react-icons/tb";
import ThemeSwitcher from "./ThemeSwitcher";

const PageContent = ({ toggleSidebar }) => {
  const { theme } = ThemeSwitcher();

  React.useEffect(() => {
    let barColor = theme === 'dark' ? "#0f3a2f" : "#7cefd3";

    let config = {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: barColor,
            borderColor: " ",
            data: [6000, 18000, 2500, 27000, 9000, 45000, 9000, 20200, 26000, 2800, 25000, 23200],
            fill: true,
            barThickness: 35,
            borderRadius: 20, // Set border radius to 20px
            // barPercentage: 0.8,
            barRoundness: 0.6 
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        borderRadius: 20,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false, // Hide legend
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                display: false, // Hide x-axis grid lines
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "",
              },
              gridLines: {  
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],  
                borderRadius: [20]
              },
              ticks: {
                beginAtZero: true,
                stepSize: 5000, // Set the step size to 5000
                maxTicksLimit: 7, // Set the maximum number of ticks to 8
                minTicksLimit: 7,
                callback: function (value, index, values) {
                  return value.toLocaleString(); // Format the tick labels with commas
                },
              },
            },
          ],
        },
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
    return () => {
      if (window.myBar) {
        window.myBar.destroy();
      }
    };
  }, [theme]);

  return (
    <div className="w-full h-auto">
      <div className="content-wrapper mt-5 max-w-full mx-5 flex flex-col justify-between">
      <div className={`grid grid-cols-1 gap-6 ${toggleSidebar ? 'grid grid-cols-1' : 'xl:grid-cols-12'}`}>
        <div className='xl:col-span-7 col-span-6'>
          
          <div className="card dark:bg-[#1D1D1D] dark:border-[#292929]  card-normal bg-base-100 border ">
             <div className="card-body">
                <div className="md:flex justify-between">
                  <h3 className="card-title ">Sales Trends</h3>
                  <div className="flex gap-4">
                    <p className="my-auto">Short by:</p>
                    <select name="" className="select rounded-full p-2 border dark:bg-[#1D1D1D] border-[#E5E3E3]" id="">
                      <option value="Weekly" selected>Weekly</option>
                      <option value="Daily" >Daily</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>
                <div className=" lg:py-2 py-3 flex-auto">
                 
                  <div className={`relative w- h-72 `}>
                    <canvas id="bar-chart" ></canvas>
                  </div>
                </div>
              </div>
            </div>
     </div> 

      <div className='xl:col-span-5 col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]  lg:card-side bg-base-100 border">
  <div className="card-body  p-[15px]">
    <div className='flex justify-between'>
    <div className='rounded-full border flex justify-center items-center border-green-200 text-left w-10 h-10'>
   {/* <img src={boxTick} alt="chart" srcset="" /> */}
   <Image src={boxTick} alt="" width="20" height="5" quality={100} />
    </div>
    <svg width="106" height="33" viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 3">
<path id="Vector 1" d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fill-opacity="0.16"/>
<path id="Vector 2" d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#77B900" stop-opacity="0"/>
<stop offset="0.809892" stop-color="#77B900"/>
</linearGradient>
</defs>
</svg>
    </div>
    <h6 className='text-xl mt-2  text-[#898989]'>Total Order</h6>
    <h6 className='text-2xl  font-semibold'>350</h6>
  <div className={` mt-1  ${toggleSidebar ? "flex flex-col" : "flex flex-row justify-between"}`}>
  <div className="badge bg-[#E7F9F4]   text-[#77DCC2] font-bold gap-2 ">
<BiTrendingUp className='text-lg my-auto' />
  23.5%
</div>
<p className='text-right'>vs. previous month</p>
  </div>
  </div>
</div>

<div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]  lg:card-side bg-base-100 border">
  <div className="card-body  p-[15px]">
    <div className='flex justify-between'>
    <div className='rounded-full border flex justify-center items-center border-green-200 text-left w-10 h-10'>
   <Image src={rotate} alt="" width="20" height="5" quality={100} />
    </div>
    <svg width="106" height="33" viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector 1" d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4778)" fill-opacity="0.16"/>
<path id="Vector 2" d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2133_4778" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED544E" stop-opacity="0"/>
<stop offset="0.809892" stop-color="#ED544E"/>
</linearGradient>
</defs>
</svg>
    </div>
    <h6 className='text-xl mt-2 text-[#898989]'>Total Refund</h6>
    <h6 className='text-2xl  font-semibold'>270</h6>
  <div className='flex mt-1 justify-between'>
  <div className="badge bg-[#FDEAEA] border-[#FDEAEA]  text-[#F49692] font-bold gap-2 ">
<BiTrendingUp className='text-lg my-auto' />
  23.5%
</div>
<p className='text-right'>vs. previous month</p>
  </div>
  </div>
</div>

<div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]   lg:card-side bg-base-100 border">
  <div className="card-body  p-[15px]">
    <div className='flex justify-between'>
    <div className='rounded-full border flex justify-center items-center border-green-200 text-left w-10 h-10'>
   <Image src={shoppingCart} alt="cart" width="20" height="5" quality={100} />
    </div>
    <svg width="106" height="33" viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector 1" d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z" fill="url(#paint0_linear_2133_4778)" fill-opacity="0.16"/>
<path id="Vector 2" d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536" stroke="#ED544E" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2133_4778" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED544E" stop-opacity="0"/>
<stop offset="0.809892" stop-color="#ED544E"/>
</linearGradient>
</defs>
</svg>
    </div>
    <h6 className='text-xl mt-2 text-[#898989]'>Average Sales</h6>
    <h6 className='text-2xl  font-semibold'>1567</h6>
  <div className='flex mt-1 justify-between'>
  <div className="badge bg-[#FDEAEA] border-[#FDEAEA]  text-[#F49692] font-bold gap-2 ">
<BiTrendingUp className='text-lg my-auto' />
  23.5%
</div>
<p className='text-right'>vs. previous month</p>
  </div>
  </div>
</div>

<div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]  lg:card-side bg-base-100 border">
  <div className="card-body  p-[15px]">
    <div className='flex justify-between'>
    <div className='rounded-full border flex justify-center items-center border-green-200 text-left w-10 h-10'>
   <Image src={coin} alt="coin" width="20" height="5" quality={100} />
    </div>
    <svg width="106" height="33" viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 3">
<path id="Vector 1" d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fill-opacity="0.16"/>
<path id="Vector 2" d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#77B900" stop-opacity="0"/>
<stop offset="0.809892" stop-color="#77B900"/>
</linearGradient>
</defs>
</svg>
    </div>
    <h6 className='text-xl mt-2 text-[#898989]'>Total Income</h6>
    <h6 className='text-2xl  font-semibold'>$350.000</h6>
  <div className='flex mt-1 justify-between'>
  <div className="badge bg-[#E7F9F4]   text-[#77DCC2] font-bold gap-2 ">
<BiTrendingUp className='text-lg my-auto' />
  23.5%
</div>
<p className='text-right'>vs. previous month</p>
  </div>
  </div>
</div>
      </div>
     </div>
     <div className='my-7 grid grid-cols-1 xl:grid-cols-12 gap-6'>
      <div className='xl:col-span-7 col-span-6'>
      {/* <div id="ico-token-supply-demand-chart" className="" style={{height:"35px"}}></div> */}
      <div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]  lg:card-side bg-base-100 border">
  <div className="card-body">
    <div className='flex' >
    <h2 className="card-title  ">Last Orders</h2>
    <p className='text-[#4DD1B0] text-right'>See All</p>
    </div>
    <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className='text-[#A8AFB5] dark:border-b-[#373737f2] font-thin text-[1rem]'>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Invoice</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='dark:border-b-[#373737f2]'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-8 h-8">
                <Image src={blackMan} alt="dark-man" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="">Marcus Bergson</div>
            </div>
          </div>
        </td>
        <td>
          Nov 15, 2023
        </td>
        <td><div className="font-semibold">$80,000</div></td>
        <td><p className='text-[#41CDAB]'>Paid</p></td>
        <td>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn shadow-none m-0  dark:text-white bg-transparent p-0 border-0 hover:bg-transparent font-normal flex gap-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<TbFileDownload className='my-auto dark:text-white text-lg '/>View</button>
<dialog id="my_modal_3" className="modal  dark:text-white">
  <div className="modal-box dark:bg-[#121212]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-green-400 text-lg">Invoice</h3>
    <div className="py-4 mx-4">
  <div className='flex flex-col gap-4'>
  <div className='flex gap-1'>
  <h5 className='font-semibold text-[1rem] '>Recepient:</h5>
  <p className='font-small'>Marcus Bergson</p>
  </div>
  <div className='flex  gap-1 '>
  <h5 className='font-semibold text-[1rem] '>Invoice Date:</h5>
  <p className='font-small'>1/24/2024</p>
  </div>
  <div className='flex  gap-1 '>
  <h5 className='font-semibold text-[1rem] '>Status:</h5>
  <div className='bg-[#41CDAB]'>
  <p className='text-[#ffff] px-2 '>Paid</p>
  </div>
  </div>
  </div>
  <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='dark:border-b-[#373737f2] dark:text-[#cbcaca]'>
        <th>Item Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="dark:border-b-[#373737f2] hover:bg-[#d3d2d2] dark:hover:bg-[#343434]">
        <td>Product A</td>
        <td>2</td>
        <td>$25000</td>
        <td>$50000</td>
      </tr>
      {/* row 2 */}
      <tr className="dark:border-b-[#373737f2] hover:bg-[#d3d2d2] dark:hover:bg-[#343434]">
      <td>Product B</td>
        <td>1</td>
        <td>$30000</td>
        <td>$30000</td>
      </tr>
      {/* row 3 */}
    </tbody>
  </table>
</div>
    </div>
<div className=' flex justify-end items-end'><span className='font-semibold text-[1rem]'>Total:</span>$80000</div>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>
</dialog>
        </td>
      </tr>
      {/* row 2 */}
      <tr className='dark:border-b-[#373737f2]'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-8 h-8">
                <Image src={prettyLady} alt="pretty-lady" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="">Jaydon Vaccaro</div>
            </div>
          </div>
        </td>
        <td> 
        Nov 14, 2023
        </td>
        <td><div className="font-semibold">$150,000</div></td>
        <td><p className='text-[#F17F7A]'>Refund</p></td>
        <td> 
<button className="btn shadow-none m-0  dark:text-white bg-transparent p-0 border-0 hover:bg-transparent font-normal flex gap-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<TbFileDownload className='my-auto dark:text-white text-lg' />View</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">View Order</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
        </td>
      </tr>
      {/* row 3 */}
      <tr className='dark:border-b-[#373737f2]'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-8 h-8">
                <Image src={blackBeauty} alt="dark-woman" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="">Corey Scheleifer</div>
            </div>
          </div>
        </td>
        <td>
        Nov 14, 2023
        </td>
        <td><div className="font-semibold">$87,000</div></td>

        <td><p className='text-[#41CDAB]'>Paid</p></td>
        <td> 
<button className="btn shadow-none m-0  dark:text-white bg-transparent p-0 border-0 hover:bg-transparent font-normal flex gap-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<TbFileDownload className='my-auto dark:text-white text-lg' />View</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">View Order</h3>
          <div className="py-4">
            {/* Replace the following placeholder values with your actual receipt data */}
            <div>Name: John Doe</div>
            <div>Date: January 30, 2024</div>
            <div>Amount: $100.00</div>
            <div>Status: Processing</div>
          </div>
  </div>
</dialog>
        </td>
      </tr>
      {/* row 4 */}
      <tr className='dark:border-b-[#373737f2]'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-8 h-8">
                <Image src={prettyCooper} alt="Cooper" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="">Cooper Press</div>
            </div>
          </div>
        </td>
        
        <td>
         Nov 14, 2023
        </td>
        <td><div className="font-semibold">$100,000</div></td>
        <td><p className='text-[#F17F7A]'>Refund</p></td>
        <td> 
<button className="btn shadow-none m-0  dark:text-white bg-transparent p-0 border-0 hover:bg-transparent font-normal flex gap-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<TbFileDownload className='my-auto dark:text-white text-lg' />View</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">View Order</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
        </td>
      </tr>
      <tr className='dark:border-b-[#373737f2]'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-8 h-8">
                <Image src={coolNerd} alt="Cooper" width="20" height="5" quality={100} />
              </div>
            </div>
            <div>
              <div className="">Philip Lubin</div>
            </div>
          </div>
        </td>
        <td>
         Nov 13, 2023
        </td>
        <td><div className="font-semibold">$100,000</div></td>
        <td><p className='text-[#41CDAB]'>Paid</p></td>
        <td> 
<button className="btn shadow-none m-0  dark:text-white bg-transparent p-0 border-0 hover:bg-transparent font-normal flex gap-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
<TbFileDownload className='my-auto dark:text-white text-lg' />View</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">View Order</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
        </td>
      </tr>
    </tbody>
    
  </table>
</div>
  </div>
</div>
      </div>
      <div className='xl:col-span-5  col-span-6 '>
      <div className="card dark:bg-[#1D1D1D] dark:border-[#1D1D1D]  lg:card-side bg-base-100 border">
  <div className="card-body">
    <div className='flex'>
    <h3 className="card-title">Top Platform</h3>
    <p className='text-[#4DD1B0] text-right'>See All</p>
    </div>
  <div className='flex flex-col gap-3 mt-3'>
<p className='text-xl font-semibold'>Book Bazaar</p>
<progress className="progress progress-primary w-full" value="70" max="100"></progress>
  <div className='flex justify-between'>
<p>$2,500,000</p>
<p className='flex-end text-right'>+15%</p>
  </div>
  </div>
  <div className='flex flex-col gap-3 mt-3'>
<p className='text-xl font-semibold'>Artisan Aisle</p>
<progress className="progress progress-info w-full" value="50" max="100"></progress>
  <div className='flex justify-between'>
<p>$1,800,000</p>
<p className='flex-end text-right'>+10%</p>
  </div>
  </div>
  <div className='flex flex-col gap-3 mt-3'>
<p className='text-xl font-semibold'> Toy Troop</p>
<progress className="progress progress-warning w-full" value="25" max="100"></progress>
  <div className='flex justify-between'>
<p>$1,200,000</p>
<p className='flex-end text-right'>+8%</p>
  </div>
  </div>
  <div className='flex flex-col gap-3 mt-3'>
<p className='text-xl font-semibold'>X store</p>
<progress className="progress progress-error w-full" value="25" max="100"></progress>
  <div className='flex justify-between'>
<p>$1,000,000</p>
<p className='flex-end text-right'>+6%</p>
  </div>
  </div>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
      </div>
     </div>
     </div>
    </div>
  );
}

export default PageContent;
