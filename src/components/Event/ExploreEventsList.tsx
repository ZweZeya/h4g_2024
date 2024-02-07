import React from 'react'
import ExploreEventCard from './ExploreEventCard'
import prisma from '../../lib/prisma'

async function findOrganisation(id: number): string {
    const orgName = await prisma.organisation.findUnique({
        where: {
            id: id
        }
    })
    return orgName.name;
}

const ExploreEventsList = async () => {
    const events = await prisma.event.findMany();
    return (
        <div>
            {events.map(e =>
                <ExploreEventCard
                    id={e.id}
                    name={e.name}
                    location={e.location}
                    start={e.start}
                    end={e.end}
                    organisation={findOrganisation(e.organisationId)} />
            )}
        </div >
    )
}

export default ExploreEventsList