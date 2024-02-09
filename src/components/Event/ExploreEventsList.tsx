import React from 'react'
import ExploreEventCard from './ExploreEventCard'
import prisma from '../../lib/prisma'
import { getUser } from '../Auth/User'
import { EnrollmentStatus } from '@prisma/client'

async function findOrganisation(id: number): string {
    const orgName = await prisma.organisation.findUnique({
        where: {
            id: id
        }
    })
    return orgName.name;
}

async function checkStatus(eventId: number, volunteerId: number): EnrollmentStatus {
    try {
        const enrollment = await prisma.enrollment.findFirstOrThrow({
            where: {
                volunteerId: volunteerId,
                eventId: eventId
            }
        })
        return enrollment.status;
    } catch (error) {
        return EnrollmentStatus.NONE;
    }
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
    const user = getUser()
    const id = user.id
    // const viewer = user!.type == UserType.VOLUNTEER ? "volunteer" : "organisation"
    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {events.map(async e => {
                const enroll_status: EnrollmentStatus = await checkStatus(e.id, id);
                return (
                <div>
                    <ExploreEventCard
                    eventid={e.id}
                    name={e.name}
                    location={e.location}
                    start={e.startDate}
                    end={e.endDate}
                    organisation={findOrganisation(e.organisationId)}
                    id={id}
                    enroll_status={enroll_status}
                    />
                </div>)}
            )}
        </div >
    )
}

export default ExploreEventsList