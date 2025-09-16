"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
 FiBarChart,
 FiDollarSign,
 FiHome,
 FiMonitor,
 FiShoppingCart,
 FiTag,
 FiUsers,
} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import AccordionOption from "./Accardion";
import Option from "./SidebarOptions";
import TitleSection from "./TitleSection";
import ToggleClose from "./ToggleClose";

export const SideBar = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
 const [selected, setSelected] = useState("Dashboard");

 return (
  <div className="flex bg-indigo-50">
   <motion.nav
    layout
    className={`${
     isSidebarOpen ? "w-[225px]" : "w-fit"
    } sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2 flex flex-col gap-1`}
   >
    <TitleSection isSidebarOpen={isSidebarOpen} />

    <Option
     key="Dashboard"
     Icon={FiHome}
     open={isSidebarOpen}
     selected={selected}
     setSelected={setSelected}
     title="Dashboard"
    />

    <AccordionOption
     isSidebarOpen={isSidebarOpen}
     Icon={IoSettingsOutline}
     title="Settings"
    />

    <div className="space-y-1">
     {navbarLinks.map((link, index) => (
      <Option
       key={index}
       Icon={link.icon}
       open={isSidebarOpen}
       selected={selected}
       setSelected={setSelected}
       title={link.title}
       notifs={link.notifs}
      />
     ))}
    </div>

    <ToggleClose open={isSidebarOpen} setOpen={setIsSidebarOpen} />
   </motion.nav>
  </div>
 );
};

const navbarLinks: {
 icon: IconType;
 title: string;
 notifs?: number;
}[] = [
 {
  icon: FiDollarSign,
  title: "Sales",
  notifs: 3,
 },
 {
  icon: FiMonitor,
  title: "View Site",
 },
 {
  icon: FiShoppingCart,
  title: "Products",
 },
 {
  icon: FiTag,
  title: "Tags",
 },
 {
  icon: FiBarChart,
  title: "Analytics",
 },
 {
  icon: FiUsers,
  title: "Members",
 },
] as const;
