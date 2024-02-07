import { Event } from "@/types/EventTypes";
import SmallEvents from "./SmallEvents";
import { ScrollArea } from "@/components/ui/scroll-area"

import prisma from '../../lib/prisma'

// async function findOrganisation(id: number): string {
//     const orgName = await prisma.organisation.findUnique({
//         where: {
//             id: id
//         }
//     })
//     return orgName.name;
// }
const SmallEventsList = async () => {

    const events = await prisma.event.findMany();
    return (
        <div>
            {/* <p className="font-medium">Upcoming Events</p> */}
            <ScrollArea className="h-32" style={{ height: 450 }}>
                {events.map(e => <SmallEvents key={e.id} event={e} />)}

            </ScrollArea>
        </div>
    )
}

export default SmallEventsList