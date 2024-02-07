import prisma from '../../../../lib/prisma'
import { Prisma } from '@prisma/client'
import EventCard from '@/components/Event/EventCard';
import { EventCardProps } from '@/components/Event/EventCard';

async function findOrganisation(id: number): string {
    const orgName = await prisma.organisation.findUnique({
        where: {
            id: id
        }
    })
    return orgName.name;
}

const ExplorePage = async () => {
    const events = await prisma.event.findMany();
    return (
        <div>
            {events.map(e =>
                <EventCard id={e.id} name={e.name} location={e.location} organisation={findOrganisation(e.organisationId)} />
            )}
        </div >
    );
};

export default ExplorePage;
