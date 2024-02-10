import Header from '@/components/Layout/Header';
import OrganisationEventCard from '@/components/Event/OrganisationEventCard';
import prisma from './../../../../lib/prisma';
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';


const EventsPage = async () => {
    const events = await prisma.event.findMany();

    return (
        <div className="flex flex-col gap-5 h-[calc(100vh-64px)]">
            <div className="flex gap-5 items-center">
                <Header>Upcoming Events</Header>
                <Link href="/events/create" className="hover:text-[#35B2DE]">
                    <PlusCircle />
                </Link>
            </div>
            <ScrollArea className="h-svh">
                <div className="grid grid-cols-3 gap-6">
                    {events.map((e: any) =>
                        <OrganisationEventCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            location={e.location}
                            start={e.startDate}
                            end={e.endDate}
                            maxVolunteers={e.maxVolunteers}
                        />
                    )}
                </div >
            </ScrollArea>
        </div>
    )
};

export default EventsPage;
