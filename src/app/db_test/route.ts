import { PrismaClient, Prisma, Organisation } from '@prisma/client'

const prisma = new PrismaClient()

async function AddOrganisation(name: string, email: string, pw: string) {
    let user: Prisma.UserCreateInput;

    user = {
        email: email,
        hashPassword: pw
    };

    const createUser = await prisma.user.create({ data: user });

    let organisation: Prisma.OrganisationCreateInput;
    organisation = {
        name: name,
        user: {
            connect: createUser
        }
    }
    await prisma.organisation.create({ data: organisation });
}

async function RetrieveOrganisations() {
    const orgs = await prisma.organisation.findMany();

}

//AddOrganisation("Big At Heart", "bah@mail.com", "bah");
RetrieveOrganisations();
