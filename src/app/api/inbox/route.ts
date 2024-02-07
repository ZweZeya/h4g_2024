import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';

const sampleJSON = {
    "userId": 10,
    "message": "Your enrollment for EventName has been approved! See you there!"
}

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { userId, message } = requestBody;
        const inbox: Prisma.InboxNotificationCreateInput = {
            user: {
                connect: {
                    id: userId
                }
            },
            message: message
        };
        const createInbox = await prisma.inboxNotification.create({
            data: inbox
        });

        return NextResponse.json(createInbox, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}