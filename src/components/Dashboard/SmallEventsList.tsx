import SmallEvents from "./SmallEvents";
import { ScrollArea } from "@/components/ui/scroll-area"

import prisma from '../../lib/prisma'

async function findOrganisation(id: number): Promise<string> {
    const orgName = await prisma.organisation.findUnique({
        where: {
            id: id
        }
    })
    return orgName.name;
}
const SmallEventsList = async () => {

    const events = await prisma.event.findMany();
    return (
        <div>
            {/* <p className="font-medium">Upcoming Events</p> */}
            <ScrollArea className="h-32" style={{ height: 450 }}>
                {events.map(async (e: any) =>
                    <SmallEvents
                        key={e.id}
                        event={
                            {
                                id: e.id,
                                name: e.name,
                                start: e.startDate,
                                end: e.endDate,
                                location: e.location,
                                organisation: await findOrganisation(e.organisationId)
                            }
                        } />)}

            </ScrollArea>
        </div>
    )
}

export default SmallEventsList