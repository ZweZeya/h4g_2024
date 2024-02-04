import BigCalendar from "@/components/Calendar/BigCalendar";
import UpcomingEventsList from "@/components/Calendar/UpcomingEventsList";
import events from "@/components/Calendar/events";

const CalendarPage = () => {
    return (
        <div className="flex flex-col gap-3">
            <BigCalendar events={events} />
            <UpcomingEventsList events={events} />
        </div>
    );
};
  
export default CalendarPage;

  