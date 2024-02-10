import prisma from '../../../../../../lib/prisma'
import EnrollmentAcceptedList from '../../../../../../components/Event/EnrollmentAcceptedList'
import { VolunteerEnrollment } from '../../../../../../components/Event/EnrollmentAcceptedList';
import { PendingColumns } from '../../../../../../components/Event/OrganisationEventDisplay/PendingColumns';
import { EnrolledColumns } from '@/components/Event/OrganisationEventDisplay/EnrolledColumns';
import { DataTableCompleted } from '../../../../../../components/Event/OrganisationEventDisplay/DataTableCompleted';
import { DataTablePending } from '../../../../../../components/Event/OrganisationEventDisplay/DataTablePending'

const EventEnrollmentPage = async ({ params }: { params: { id: string } }) => {
    const getEnrolledVolunteers = await prisma.enrollment.findMany({
        where: {
            AND: [
                {eventId: Number(params.id)},
                {
                    OR: [
                        { status: 'ASSIGNED' },
                        { status: 'COMPLETED' }
                    ]
                }
            ]
        },
        select: {
          volunteer: {
            select: {
                id: true,
                name: true,
                mobileNumber: true,
                availability: true
            }
          },
          status: true
        }
    });

    const getPendingVolunteers = await prisma.enrollment.findMany({
        where: {
            AND: [
                {eventId: Number(params.id)},
                { status: 'PENDING' }
            ]
        },
        select: {
          volunteer: {
            select: {
                id: true,
                name: true,
                mobileNumber: true, 
                availability: true
            }
          },
          status: true
        }
    });

    const enrolledVolunteers = getEnrolledVolunteers.map((v: any) => {
        const volunteer: VolunteerEnrollment = {
            id: v.volunteer.id,
            name: v.volunteer.name,
            mobileNumber: v.volunteer.mobileNumber,
            availability: v.volunteer.availability,
            enroll_status: v.status
        }
        return volunteer;
    })

    const pendingVolunteers = getPendingVolunteers.map((v: any) => {
        const volunteer: VolunteerEnrollment = {
            id: v.volunteer.id,
            name: v.volunteer.name,
            mobileNumber: v.volunteer.mobileNumber,
            availability: v.volunteer.availability,
            enroll_status: v.status
        }
        return volunteer;
    })


    return (
        <div>
            <h1>Pending Users</h1>
            <DataTablePending columns={PendingColumns} data={pendingVolunteers}></DataTablePending>
            <h1 className='mt-4'>Enrolled Users</h1>
            <DataTableCompleted columns={EnrolledColumns} data={enrolledVolunteers}></DataTableCompleted>
        </div>
    );
};

export default EventEnrollmentPage;