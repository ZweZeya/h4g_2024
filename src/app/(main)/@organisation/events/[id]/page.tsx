import prisma from './../../../../../lib/prisma'
import EnrollmentAcceptedList from '../../../../../components/Event/EnrollmentAcceptedList'

const EventEnrollmentPage = async ({ params }: { params: { id: string } }) => {
    const volunteersAccepted = await prisma.enrollment.findMany({
        where: {
          eventId: Number(params.id)
        },
        select: {
          volunteer: true
        }
    });
    return (
        <div>
            <EnrollmentAcceptedList volunteers={volunteersAccepted}></EnrollmentAcceptedList>
        </div>
    );
};

export default EventEnrollmentPage;