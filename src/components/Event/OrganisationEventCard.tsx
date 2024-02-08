import React from 'react'
import { EventCardProps } from './ExploreEventCard'

type OrganisationEventCardProps = {
    id: string,
    name: string,
    location: string,
    start: Date,
    end: Date,
    maxVolunteers: number
}
const OrganisationEventCard = ({ id, name, location, start, end, maxVolunteers }: OrganisationEventCardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-900 text-base">
                    {start?.toDateString()}
                </p>
                <p className="text-gray-900 text-base">
                    {end?.toDateString()}
                </p>
                <p className="text-gray-700 text-base">
                    Address: {location}
                </p>

            </div>
        </div>
    )
}

export default OrganisationEventCard