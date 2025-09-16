import { motion } from "motion/react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
 isSidebarOpen: boolean;
}

const TitleSection = ({ isSidebarOpen }: Props) => {
 return (
  <div className="mb-3 border-b border-slate-300 pb-3">
   <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
    <div className="flex items-center gap-2">
     <Logo />

     {isSidebarOpen && (
      <motion.div
       layout
       initial={{ opacity: 0, y: 12 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.125 }}
      >
       <span className="block text-xs font-semibold">Deviel Was Here</span>
       <span className="block text-xs text-slate-500">Pro Plan</span>
      </motion.div>
     )}
    </div>

    {isSidebarOpen && <FiChevronDown className="mr-2" />}
   </div>
  </div>
 );
};

export default TitleSection;

const Logo = () => {
 // Temp logo from https://logoipsum.com/
 return (
  <motion.div
   layout
   className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
  >
   <svg
    width="24"
    height="auto"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-slate-50"
   >
    <path
     d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
     stopColor="#000000"
    />
    <path
     d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
     stopColor="#000000"
    />
   </svg>
  </motion.div>
 );
};
