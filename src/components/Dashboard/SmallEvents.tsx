import { EventCardProps } from "../Event/ExploreEventCard"
import { Button } from "@/components/ui/button"
import { EnrollmentStatus } from "@prisma/client"
import prisma from '../../lib/prisma'
import { getUser } from "../Auth/User"

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

const SmallEvents = ({ event }: { event: EventCardProps }) => {
    const status = checkStatus(event.id, getUser().id)
    const startDateArr: string[] = event.start.toDateString().split(" ");
    const month = startDateArr[1];
    const date = startDateArr[2];

    return (
        <div className={"border border-[#e8e8e8] border-l-8 rounded-md my-4 px-2 py-3 gap-32"}>
            <div className="grid grid-cols-4 flex-row gap-40 items-center">
                <div className="col-span-1">
                    <p>{event.name}</p>
                </div>
                <div className="col-span-2">
                    <p> {event.location} </p>
                    <p>{date} {month}</p>
                </div>
                <div className="col-span-1 flex-row justify-end">
                    if (getUser().type == UserType.VOLUNTEER) {
                        <Button variant="mine">Enroll</Button>
                    } else {
                        <Button variant="mine">Edit</Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SmallEvents
