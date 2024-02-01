import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client'

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password, name } = requestBody;

        let userInputData: Prisma.UserCreateInput = {
            email: email,
            hashPassword: password
        };

        const userData = await prisma.user.create({ data: userInputData });

        let inputData: Prisma.AdminCreateInput = {
            name: name,
            user: {
                connect: userData
            }
        }
        const organisationData = await prisma.admin.create({ data: inputData });

        return NextResponse.json(organisationData, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { id, name } = requestBody;
        const inputData: Prisma.AdminUpdateInput = {
            name: name
        };

        const updateEvent = await prisma.admin.update({
            where: {
                id: id,
            },
            data: inputData
        });
        return NextResponse.json(updateEvent, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
