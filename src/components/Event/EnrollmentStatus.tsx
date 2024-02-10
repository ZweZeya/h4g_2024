
export type EnrollmentStatusProps = {
    name: string;
    mobileNumber: number;
    availability: string;
}

const EnrollmentStatus = ({ name, mobileNumber, availability } : EnrollmentStatusProps) => {
    return (
        <div className="flex divide-x">
            <div>{name}</div>
            <div>{mobileNumber}</div>
            <div>{availability}</div>
        </div>
    )
}

export default EnrollmentStatus;