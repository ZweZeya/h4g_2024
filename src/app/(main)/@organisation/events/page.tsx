import Header from '@/components/Layout/Header';
import OrganisationEventCard from '@/components/Event/OrganisationEventCard';
import prisma from './../../../../lib/prisma'

const EventsPage = async () => {
    const events = await prisma.event.findMany({
        where: {
            organisationId: 1 // TBC
        }
    });
    return (
        <div>
            {events.map(e =>
                <OrganisationEventCard
                    id={e.id}
                    name={e.name}
                    location={e.location}
                    start={e.startDate}
                    end={e.endDate}
                    maxVolunteers={e.maxVolunteers}
                />
            )}
        </div >
    )
};

export default EventsPage;
