import Header from '@/components/Layout/Header';
import OrganisationEventCard from '@/components/Event/OrganisationEventCard';
import prisma from './../../../../lib/prisma'

const EventsPage = async () => {
    const events = await prisma.event.findMany();

    return (
        <div className="flex flex-col gap-5">
            <Header>Upcoming Events</Header>
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
        </div>
    )
};

export default EventsPage;
