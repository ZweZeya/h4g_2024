import React from 'react'
import Image from 'next/image'

type OrganisationEventCardProps = {
    id: string,
    name: string,
    location: string,
    start: Date,
    end: Date,
    maxVolunteers: number
}
const OrganisationEventCard = ({ id, name, location, start, end, maxVolunteers }: OrganisationEventCardProps) => {
    const startDateArr: string[] = new Date(start).toDateString().split(" ");
    const month = startDateArr[1];
    const date = startDateArr[2];

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <div className={`bg-[url('/volunteer-pic-${parseInt(id) % 4}.jpg')] h-48`}></div>
            <div className="flex gap-4 items-center px-6 py-3">
                <div className="flex flex-col gap-1 items-center">
                    <p className="text-[#35B2DE]">{month}</p>
                    <p className="text-3xl font-bold">{date}</p>
                </div>
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">{name}</p>
                    <p className="text-[#6A6A6A] text-lg">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrganisationEventCard;