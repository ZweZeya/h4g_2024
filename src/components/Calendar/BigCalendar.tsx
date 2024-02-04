"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Event } from '@/types/EventTypes';


const BigCalendar = ({ events }: { events: Event[] }) => {
    return (
        <div className="mt-5">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                height="auto"
                events={events}
                eventTextColor="black"
            />
        </div>
    );
};

export default BigCalendar;