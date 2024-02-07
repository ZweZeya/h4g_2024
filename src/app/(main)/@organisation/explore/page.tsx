import Header from '@/components/Layout/Header';

import ExploreEventCard from './../../../../components/Event/ExploreEventCard'
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
                <ExploreEventCard
                    id={e.id}
                    name={e.name}
                    location={e.location}
                    start={e.start}
                    end={e.end}
                    organisation="AAAA" //TBC
                />
            )}
        </div >
    )
};

export default EventsPage;
