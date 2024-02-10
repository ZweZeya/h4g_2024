import React from 'react';
import {
    LayoutGrid,
    Compass,
    CalendarDays,
    Mail,
    Pencil,
    LogOut
} from 'lucide-react';
import SideBarItem from './SideBarItem';
import { logout } from '../../lib/actions';

const OrganisationSideBar = () => {

    return (
        <div className="bg-[#F5F1E6] h-screen flex flex-col gap-4 pt-20">
            <SideBarItem icon={<LayoutGrid />} label="Dashboard" route="/" />
            <SideBarItem icon={<CalendarDays />} label="Events" route="/events" />
            <SideBarItem icon={<Mail />} label="Inbox" route="/inbox" />

            <div className="flex flex-col gap-7 px-7 mt-auto mb-7">
                <hr className="border-[#D2D2D2]" />
                <form action={logout}>
                    <button type="submit">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="text-white bg-black p-4 rounded-full"><LogOut /></div>
                            <p>Logout</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrganisationSideBar;