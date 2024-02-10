import EditEventForm from "@/components/Event/EditEventForm";
import Header from "@/components/Layout/Header";
import { getUser } from "@/components/Auth/User";
import prisma from "@/lib/prisma";
import { useRouter } from 'next/router'


const EventsEditPage = async ({ params }: { params: { id: string } }) => {
    const id = Number(params.id);
    const event = await prisma.event.findUnique({
        where: {
            id: id
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