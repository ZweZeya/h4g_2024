import { Calendar } from "../ui/calendar"

const SmallCalendar = () => {
    return (
        <div className="flex flex-col gap-3 items-start">
            <p>Calender</p>
            <Calendar />
        </div>
    );
};

export default SmallCalendar