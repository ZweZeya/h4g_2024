import EnrollmentStatus from "./EnrollmentStatus";

export type volunteer = {
    id: number;
    userId: number;
    name: string;
    mobileNumber: number;
    bday: Date;
    address: string;
    availability: string;
}

type EnrollmentAcceptedListProps = {
    volunteers: { volunteer: volunteer }[];
}



const EnrollmentAcceptedList = ({ volunteers }: EnrollmentAcceptedListProps) => {
    return (
        <div>
            {volunteers.map(v => {
                return (
                    <div>
                        <EnrollmentStatus name={v.volunteer.name} mobileNumber={v.volunteer.mobileNumber} availability={v.volunteer.availability}/>
                    </div>
                )
            })}
        </div>
    )
}

export default EnrollmentAcceptedList;