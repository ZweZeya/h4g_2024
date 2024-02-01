import { PrismaClient, Prisma, Organisation, Volunteer, Availability } from '@prisma/client'
import { connect } from 'http2';

const prisma = new PrismaClient()

type OrganisationProps = {
    name: string,
    email: string,
    password: string,
    mobileNumber: string
}
async function AddOrganisation({ name, email, password, mobileNumber }: OrganisationProps) {
    let user: Prisma.UserCreateInput;

    user = {
        email: email,
        hashPassword: password
    };

    const createUser = await prisma.user.create({ data: user });

    let organisation: Prisma.OrganisationCreateInput;
    organisation = {
        name: name,
        mobileNumber: mobileNumber,
        user: {
            connect: createUser
        }
    }
    await prisma.organisation.create({ data: organisation });
}
type VolunteerProps = {
    name: string,
    email: string,
    password: string,
    bday: Date,
    mobileNumber: string,
    availability: Availability
}
async function AddVolunteer({ name, email, password, bday, mobileNumber, availability }: VolunteerProps) {
    let user: Prisma.UserCreateInput;

    user = {
        email: email,
        hashPassword: password
    };

    const createUser = await prisma.user.create({ data: user });

    let volunteer: Prisma.VolunteerCreateInput;
    volunteer = {
        name: name,
        mobileNumber: mobileNumber,
        bday: bday,
        availability: availability,
        user: {
            connect: createUser
        }
    }

    await prisma.volunteer.create({ data: volunteer });
}

async function RetrieveUsers() {
    const users = await prisma.user.findMany({
        include: {
            volunteer: true,
            organisation: true,
            admin: true
        }
    });
    for (var o of users) {
        var s = o.id + "|";
        if (o.volunteer != null)
            s += "Volunteer |" + o.volunteer.name;
        if (o.organisation != null)
            s += "Organisation |" + o.organisation.name;
        if (o.admin != null)
            s += "Admin |" + o.admin.name;

        s += "|" + o.email + "|" + o.hashPassword
        console.log(s);
    }
}

// AddOrganisation({
//     name: "My Company",
//     email: "my@mail.com",
//     password: "my",
//     mobileNumber: "11111111"
// });
// AddVolunteer({
//     name: "Sush1",
//     email: "sushi@mail.com",
//     password: "sushi",
//     mobileNumber: "11111111",
//     availability: Availability.WEEKEND,
//     bday: new Date("2003-01-01")

// });
RetrieveUsers();
