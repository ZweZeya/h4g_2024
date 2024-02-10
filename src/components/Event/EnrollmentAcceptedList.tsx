// import EnrollmentStatus from "./EnrollmentStatus";
import { EnrollmentStatus } from "@prisma/client";

export type VolunteerEnrollment = {
    id: number;
    name: string;
    mobileNumber: number;
    availability: string;
    enroll_status: string;
}

type EnrollmentAcceptedListProps = {
    volunteers: VolunteerEnrollment[];
}



const EnrollmentAcceptedList = ({ volunteers }: EnrollmentAcceptedListProps) => {
    return (
        <div>
            {volunteers.map((v, idx) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default EnrollmentAcceptedList;