import prisma from '../../../../lib/prisma'
import { Prisma } from '@prisma/client'
import EventCard from '@/components/Event/EventCard';
import { EventCardProps } from '@/components/Event/EventCard';


const ExplorePage = async () => {
    const events = await prisma.event.findMany();

    return (
        <div>
            {events.map(e =>
                <EventCard id={e.id} name={e.name} location={e.location} />
            )}
        </div >
    );
};

export default ExplorePage;
