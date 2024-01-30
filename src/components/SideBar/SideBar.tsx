import { 
    LayoutGrid, 
    Compass, 
    CalendarDays, 
    Mail, 
    Pencil,
} from 'lucide-react';
import SideBarItem from './SideBarItem';

const SideBar = () => {

    return (
        <div className="bg-[#F5F1E6] h-screen flex flex-col gap-4 pt-20">
            <SideBarItem icon={<LayoutGrid />} label="Dashboard" route="/" />
            <SideBarItem icon={<Compass />} label="Explore" route="/explore" />
            <SideBarItem icon={<CalendarDays />} label="Calendar" route="/calendar" />
            <SideBarItem icon={<Mail />} label="Inbox" route="/inbox" />
            <SideBarItem icon={<Pencil />} label="Request" route="/request" />
        </div>
    );
};

export default SideBar;