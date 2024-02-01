import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';
import { add } from 'date-fns';

const sampleJSON = {
    "email": "mono@mail.com",
    "password": "monomono",
    "name": "mono.",
    "mobileNumber": "12345678",
    "bday": "2003-11-02T17:29:49.023Z", // use toJSON
    "address": "", // OPTIONAL!
    "availability": "WEEKEND"
}
export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password, name, mobileNumber, bday, availability, address } = requestBody;
        let user: Prisma.UserCreateInput = {
            email: email,
            hashPassword: password
        };

        const createUser = await prisma.user.create({ data: user });

        let volunteer: Prisma.VolunteerCreateInput = {
            name: name,
            mobileNumber: mobileNumber,
            bday: bday,
            availability: availability,
            address: address,
            user: {
                connect: {
                    id: createUser.id
                }
            }
        }
        const data = await prisma.volunteer.create({ data: volunteer });

        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { id, name, mobileNumber, bday, availability, address } = requestBody;
        const inputData: Prisma.VolunteerUpdateInput = {
            name: name,
            mobileNumber: mobileNumber,
            bday: bday,
            availability: availability,
            address: address
        };

        const updateEvent = await prisma.volunteer.update({
            where: {
                id: id,
            },
            data: inputData
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
        const deleteEvent = await prisma.volunteer.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json(deleteEvent, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
