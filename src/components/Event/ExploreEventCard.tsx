import { useState } from "react";
import prisma from '../../lib/prisma';
import { EnrollmentStatus, Prisma } from '@prisma/client';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";


export type EventCardProps = {
    id: number,
    name: string,
    location: string,
    organisation: string,
    start: Date,
    end: Date,
    enroll_status?: EnrollmentStatus,
}

async function checkStatus(eventId: number, volunteerId: number): Promise<EnrollmentStatus> {
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

const ExploreEventCard = async ({ id, name, location, organisation }: EventCardProps) => {
    const enroll_status: EnrollmentStatus = await checkStatus(id, 1);
    console.log(name + " " + enroll_status);
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
                {enroll_status &&
                    enroll_status === EnrollmentStatus.NONE &&
                    <Button variant="mine">Enroll</Button>
                }
                {enroll_status &&
                    enroll_status === EnrollmentStatus.PENDING &&
                    <Badge variant="pending">Pending</Badge>
                }
                {enroll_status &&
                    enroll_status === EnrollmentStatus.ASSIGNED &&
                    <Badge variant="assigned">Assigned</Badge>
                }
            </div>

        </div>
    );

};

export default ExploreEventCard