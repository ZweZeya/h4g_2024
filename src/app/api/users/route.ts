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
        console.log(error);
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
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
