import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client'

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { id, email, password } = requestBody;
        const user: Prisma.UserUpdateInput = {
            email: email,
            hashPassword: password
        };


        const updateEvent = await prisma.user.update({
            where: {
                id: id,
            },
            data: user
        });
        return NextResponse.json(updateEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const requestBody = await request.json()
        const { id } = requestBody;
        const deleteEvent = await prisma.user.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json(deleteEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

// TBC
// async function RetrieveUsers() {
//     const users = await prisma.user.findMany({
//         include: {
//             volunteer: true,
//             organisation: true,
//             admin: true
//         }
//     });
//     for (var o of users) {
//         var s = o.id + "|";
//         if (o.volunteer != null)
//             s += "Volunteer |" + o.volunteer.name;
//         if (o.organisation != null)
//             s += "Organisation |" + o.organisation.name;
//         if (o.admin != null)
//             s += "Admin |" + o.admin.name;

//         s += "|" + o.email + "|" + o.hashPassword
//         console.log(s);
//     }
// }