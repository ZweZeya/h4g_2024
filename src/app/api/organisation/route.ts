import { Prisma } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password, name, mobileNumber } = requestBody;

        let user: Prisma.UserCreateInput = {
            email: email,
            hashPassword: password
        };

        const createUser = await prisma.user.create({ data: user });

        let organisation: Prisma.OrganisationCreateInput = {
            name: name,
            mobileNumber: mobileNumber,
            user: {
                connect: createUser
            }
        }
        const organisationData = await prisma.organisation.create({ data: organisation });

        return NextResponse.json(organisationData, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { id, name, mobileNumber } = requestBody;
        const org: Prisma.OrganisationUpdateInput = {
            name: name,
            mobileNumber: mobileNumber
        };

        const updateEvent = await prisma.organisation.update({
            where: {
                id: id,
            },
            data: org
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
        const deleteEvent = await prisma.organisation.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json(deleteEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}