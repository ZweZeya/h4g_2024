import prisma from '../../../lib/prisma'
import BigCalendar from "@/components/Calendar/BigCalendar";
import UpcomingEventsList from "@/components/Calendar/UpcomingEventsList";
import { Event } from '@/types/EventTypes';

const CalendarPage = async () => {
    const events: Event[] = (await prisma.event.findMany()).map((e: any) => {
        return {
            id: e.id,
            title: e.name,
            start: e.startDate.toISOString().substr(0, 10),
            end: e.endDate.toISOString().substr(0, 10),
            location: e.location
        }
    });

    return (
        <div className="flex flex-col gap-3">
            <BigCalendar events={events} />
            <UpcomingEventsList events={events} />
        </div>
    );
};

export default CalendarPage;

