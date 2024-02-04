import { useState } from "react";
import prisma from '../../lib/prisma'
import { Prisma } from '@prisma/client';


export type EventCardProps = {
    id: number,
    name: string,
    location: string
}
const EventCard = ({ id, name, location }: EventCardProps) => {
    return (
        <div>
            <div className="card">
                <h4>{name}</h4>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default EventCard