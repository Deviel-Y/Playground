import { AnimatePresence, motion, useAnimationControls } from "motion/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { MdSettingsInputComponent } from "react-icons/md";

const AccordionOption = ({
 Icon,
 title,
 isSidebarOpen,
}: {
 Icon: IconType;
 title: string;
 isSidebarOpen: boolean;
}) => {
 const [isAccardionOpen, setIsAccardionOpen] = useState<boolean>(false);

 const variants = {
  open: { height: "auto", opacity: 1 },
  close: { height: 40, opacity: 0 },
 };

 const accardionControl = useAnimationControls();

 return (
  <div>
   <motion.div
    onClick={() => {
     setIsAccardionOpen(!isAccardionOpen);
     accardionControl.start(isAccardionOpen ? "close" : "open");
    }}
    layout
    className="text-slate-500 hover:bg-slate-100 shrink-0 flex flex-col items-center justify-between rounded-md transition-colors"
    variants={variants}
    initial="close"
    animate="open"
   >
    <div className="flex flex-row items-center justify-start w-full py-[10px]">
     <motion.span
      layout
      className="grid place-content-center w-10 h-full text-lg"
     >
      <Icon />
     </motion.span>

     {isSidebarOpen && (
      <div className="flex-1 flex flex-row items-center justify-between pe-1">
       <motion.span
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        className="text-xs font-medium"
       >
        {title}
       </motion.span>

       <span
        className={`text-sm ${
         isAccardionOpen ? "rotate-90" : "rotate-0"
        } transition-transform`}
       >
        <FiChevronRight />
       </span>
      </div>
     )}
    </div>
   </motion.div>

   <AnimatePresence>
    {isAccardionOpen && (
     <motion.div
      layout
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden flex flex-col gap-1"
     >
      <motion.div
       layout
       initial={{ y: 12, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ delay: 0.125 }}
       className="flex flex-row justify-start items-center h-10 rounded-md text-slate-500 hover:bg-slate-100"
      >
       <motion.span
        layout
        className="grid h-full w-10 place-content-center text-lg"
       >
        <MdSettingsInputComponent />
       </motion.span>

       {isAccardionOpen && isSidebarOpen && (
        <motion.p
         layout
         transition={{ delay: 0.125 }}
         initial={{ y: 12, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         className="text-xs font-medium"
        >
         Setting 1
        </motion.p>
       )}
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 );
};

export default AccordionOption;
