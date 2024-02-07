import { useState } from "react";
import prisma from '../../lib/prisma'
import { Prisma } from '@prisma/client';
import { Button } from "../ui/button";


export type EventCardProps = {
    id: number,
    name: string,
    location: string,
    organisation: string
}

const ExploreEventCard = ({ id, name, location, organisation }: EventCardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-900 text-base">
                    {organisation}
                </p>
                <p className="text-gray-700 text-base">
                    Address: {location}
                </p>

            </div>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

            <div className="px-6 pt-4 pb-2">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll</button>
            </div>

        </div>
    );

};

export default ExploreEventCard