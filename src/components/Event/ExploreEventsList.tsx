import React from 'react'
import ExploreEventCard from './ExploreEventCard'
import prisma from '../../lib/prisma'
import { EnrollmentStatus } from '@prisma/client'

async function findOrganisation(id: number): string {
    const orgName = await prisma.organisation.findUnique({
        where: {
            id: id
        }
    })
    return orgName.name;
}

export type event = {
    id: number;
    organisationId: number;
    name: string;
    location: string;
    maxVolunteers: number;
    startDate: Date;
    endDate: Date;
}


export type eventListProps = {
    events: event[]
}

const ExploreEventsList = async ({ events } :eventListProps) => {

    return (
        <div>
            {events.map(e =>
                <ExploreEventCard
                    id={e.id}
                    name={e.name}
                    location={e.location}
                    start={e.startDate}
                    end={e.endDate}
                    organisation={findOrganisation(e.organisationId)} />
            )}
        </div >
    )
}

export default ExploreEventsList