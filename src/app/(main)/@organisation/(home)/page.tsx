import prisma from '@/lib/prisma';
import SmallCalendar from "@/components/Dashboard/SmallCalendar";
import SmallEventsList from '@/components/Dashboard/SmallEventsList';
import Link from "next/link";
import { Event } from '@/types/EventTypes';
import SmallNotifications from '@/components/Dashboard/SmallNotifications';
import Header from "@/components/Layout/Header";

const OrganisationHomePage = async () => {
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
            <Header>Organisation Home Page</Header>
            <div className="grid grid-cols-3 gap-14">
                <div className="col-span-2">
                    <div className="flex items-center">
                        <p> Volunteering Events</p>
                        <Link className="ml-auto hover:underline" href="/explore">View All</Link>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3 items-center">
                        <SmallEventsList />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3 items-center">
                    <SmallCalendar />
                    <div className="col-span-2">
                        <div className="flex flex-row gap-40 items-center">
                            <div><p>Inbox</p>
                                </div>
                                <div><Link className="ml-auto hover:underline" href="/inbox">View All</Link></div>
                            </div>
                        </div>
                    <SmallNotifications />
                </div>
            </div>
        </div>
        
    );
};

export default OrganisationHomePage;
