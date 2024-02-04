"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Event } from '@/types/EventTypes';


const BigCalendar = ({events}: {events: Event[]}) => {
    return (
        <div className="max-h-screen mt-7">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                height="auto"
                events={events}
            />
        </div>
    );
};

export default BigCalendar;