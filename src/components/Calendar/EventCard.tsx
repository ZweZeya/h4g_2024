import { Event } from "@/types/EventTypes";

const UpcomingEventCard = ({event}: {event: Event}) => {
    return (
        <div className={"border border-[#e8e8e8] border-l-8 rounded-md my-4 px-3 py-3 " + `border-l-[${event.color}]`}>
            <div>
                <p>{event.title}</p>
            </div>
        </div>
    );
};

export default UpcomingEventCard;