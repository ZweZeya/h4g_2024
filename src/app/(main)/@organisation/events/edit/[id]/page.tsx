import EditEventForm from "@/components/Event/EditEventForm";
import Header from "@/components/Layout/Header";
import { getUser } from "@/components/Auth/User";
import prisma from "@/lib/prisma";
import { useRouter } from 'next/router'


const EventsEditPage = async () => {
    const id = useRouter().query.id;
    const event = await prisma.event.findUnique({
        where: {
            id: Number(id)
        }
    })
    return (
        <div>
            <Header>Edit Event</Header>
            <EditEventForm event={event} organisationId={getUser()!.id} />
        </div>
    );
};

export default EventsEditPage;