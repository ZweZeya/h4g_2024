import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password, name, mobileNumber, bday, availability } = requestBody;
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
        const data = await prisma.volunteer.create({ data: volunteer });

        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const requestBody = await request.json()
        const { id } = requestBody;
        const deleteEvent = await prisma.volunteer.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json(deleteEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
