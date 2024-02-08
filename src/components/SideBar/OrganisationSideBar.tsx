import {
    LayoutGrid,
    Compass,
    CalendarDays,
    Mail,
    Pencil,
    LogOut
} from 'lucide-react';
import SideBarItem from './SideBarItem';

const OrganisationSideBar = () => {

    const logout = async () => {
        "use server";
        console.log("logout")
    }

    return (
        <div className="bg-[#F5F1E6] h-full flex flex-col gap-4 pt-20">
            <SideBarItem icon={<LayoutGrid />} label="Dashboard" route="/" />
            <SideBarItem icon={<CalendarDays />} label="Events" route="/events" />
            <SideBarItem icon={<Mail />} label="Inbox" route="/inbox" />

            <div className="flex flex-col gap-7 px-7 mt-auto mb-7">
                <hr className="border-[#D2D2D2]" />
                <div className="flex items-center gap-3 cursor-pointer" onClick={logout}>
                    <div className="text-white bg-black p-4 rounded-full"><LogOut /></div>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
};

export default OrganisationSideBar;