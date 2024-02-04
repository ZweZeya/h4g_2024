import BigCalendar from "@/components/Calendar/BigCalendar";

const CalendarPage = () => {
    return (
        <div>
            <BigCalendar events={[
                {id: "0", title: "event 1", start: "2024-02-01"},
                {id: "1", title: "event 2", start: "2024-02-04", color: "#DEACAB"},
                {id: "3", title: "event 3", start: "2024-02-11", end: "2024-02-15"},
            ]} />
        </div>
    );
};
  
export default CalendarPage;

  