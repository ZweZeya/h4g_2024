"use client";

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';


const SideBarItem = ({
    icon,
    label, 
    route
}: {
    icon: ReactNode, 
    label: string, 
    route: string
}) => {
    const pathname = usePathname();
    const [isCurrentPath,] = useState<boolean>((pathname === route) as boolean);
    
    return (
        <div className={"flex gap-3 px-7 py-2 cursor-pointer " + (isCurrentPath ? "text-black bg-[#DEACAB]" : "text-[#556A5B] hover:bg-[#FBE5B3]")}>
            <div>{icon}</div>
            <p className={"text-lg " + (isCurrentPath ? "text-black font-semibold text-lg" : "font-light")}>{label}</p>
        </div>
    );
};

export default SideBarItem;