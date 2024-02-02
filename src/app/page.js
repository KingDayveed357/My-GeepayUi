// import Image from "next/image";
"use client"
import Dashboard from "./Dashboard/Page";
import ThemeSwitcher from "./components/ThemeSwitcher";
// import useDarkmode from "./components/useDarkmode";

export default function Home() {
  // useDarkmode();
  return (
   <div className="bg-[#FAFAFA] dark:bg-[#121212] dark:text-[#ffffff]">
<Dashboard/>
</div>
  );
}
