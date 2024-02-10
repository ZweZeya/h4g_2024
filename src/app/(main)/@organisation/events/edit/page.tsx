import EditEventForm from "@/components/Event/EditEventForm";
import Header from "@/components/Layout/Header";
import { getUser } from "@/components/Auth/User";


const EventsCreationPage = () => {
    return (
        <div>
            <Header>Edit Event</Header>
            {/* <EditEventForm organisationId={getUser()!.id} /> */}
        </div>
    );
};

export default EventsCreationPage;