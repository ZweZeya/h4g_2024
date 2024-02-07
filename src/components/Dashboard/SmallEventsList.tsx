import { Event } from "@/types/EventTypes";
import SmallEvents from "./SmallEvents";
import { ScrollArea } from "@/components/ui/scroll-area"

const SmallEventsList = ({events}: {events: Event[]}) => {
    return (
        <div>
            <p className="font-medium">Upcoming Events</p>
            <ScrollArea className="h-32" style={{ height: 450 }}>
                {events.map(e => <SmallEvents key={e.id} event={e} />)}
                
            </ScrollArea>
        </div>
    )
}

export default SmallEventsList