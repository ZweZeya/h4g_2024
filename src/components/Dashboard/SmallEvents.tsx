import { Event } from "@/types/EventTypes";
import { Button } from "@/components/ui/button";

const SmallEvents = ({event}: {event: Event}) => {
    const startDateArr: string[] = new Date(event.start).toDateString().split(" ");
    const month = startDateArr[1];
    const date = startDateArr[2];

    return (
        <div className={"border border-[#e8e8e8] border-l-8 rounded-md my-4 px-2 py-3 flex gap-32 items-center"}>
            <div className="flex flex-col items-center">
            </div>
                <div className="text-h3-s text-left tracking-wide">
                    <p>{event.title}</p>
                </div>
                    <div className="text-body-s tracking-wide">
                    <p> {event.location} </p>
                    <p>{date} {month}</p>
                    </div>
                    <Button>Enroll</Button>
        </div>
    );
};

export default SmallEvents
