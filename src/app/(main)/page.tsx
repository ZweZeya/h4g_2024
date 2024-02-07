import prisma from '../../lib/prisma'
import SmallCalendar from "@/components/Dashboard/SmallCalendar";
import SmallEventsList from '@/components/Dashboard/SmallEventsList';
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { Event } from '@/types/EventTypes';

const HomePage = async () => {
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
        <div>
            <Header>Welcome to BAHfamily</Header>
            <div className="grid grid-cols-3 gap-14">
                <div className="col-span-2">
                    <div className="flex items-center">
                        <p>Explore Volunteering Events</p>
                        <Link className="ml-auto hover:underline" href="/explore">View All</Link>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3 items-center">
                            <SmallEventsList events={events}  />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3 items-center">
                    <SmallCalendar />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
