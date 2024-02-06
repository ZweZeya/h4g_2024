import { Event } from "@/types/EventTypes";

const UpcomingEventCard = ({event}: {event: Event}) => {
    const startDateArr: string[] = new Date(event.start).toDateString().split(" ");
    const month = startDateArr[1];
    const date = startDateArr[2];

    return (
        <div className={"border border-[#e8e8e8] border-l-8 rounded-md my-4 px-7 py-3 flex gap-32 items-center "}>
            <div className="flex flex-col items-center gap-2 text-2xl font-medium">
                <p>{date}</p>
                <p>{month}</p>
            </div>
            <div>
                <p>{event.title}</p>
            </div>
        </div>
    );
};

export default UpcomingEventCard;