import CreateEventForm from "@/components/Event/CreateEventForm";
import Header from "@/components/Layout/Header";
import { getUser } from "@/components/Auth/User";


const EventsCreationPage = () => {
    return (
        <div>
            <Header>Create Event</Header>
            <CreateEventForm organisationId={getUser().id} />
        </div>
    );
};

export default EventsCreationPage;