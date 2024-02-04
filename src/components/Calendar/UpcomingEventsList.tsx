import { Event } from "@/types/EventTypes";
import UpcomingEventCard from "./EventCard";
import { ScrollArea } from "@/components/ui/scroll-area"

const UpcomingEventsList = ({events}: {events: Event[]}) => {
    return (
        <div>
            <p className="font-medium">Upcoming Events</p>
            <ScrollArea className="h-32">
                {events.map(e => <UpcomingEventCard key={e.id} event={e} />)}
            </ScrollArea>
        </div>
    )
}

export default UpcomingEventsList