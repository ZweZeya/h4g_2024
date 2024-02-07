import { EventCardProps } from "../Event/ExploreEventCard";
import { Button } from "@/components/ui/button";

const SmallEvents = ({ event }: { event: EventCardProps }) => {
    const startDateArr: string[] = event.start.toDateString().split(" ");
    const month = startDateArr[1];
    const date = startDateArr[2];

    return (
        <div className={"border border-[#e8e8e8] border-l-8 rounded-md my-4 px-2 py-3 flex gap-32 items-center"}>
            <div className="flex flex-row gap-40 items-center">
            <div className="flex text-h3-s text-left">
                <p>{event.name}</p>
            </div>
            <div className="flex flex-col text-body-s text-left">
                <p> {event.location} </p>
                <p>{date} {month}</p>
            </div>
            <div className="flex justify-end">
            <Button variant="mine">Enroll</Button>
            </div>
        </div>
    </div>
    );
};

export default SmallEvents
