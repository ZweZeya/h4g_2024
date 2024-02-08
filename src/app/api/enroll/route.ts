import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';

const sampleJSON = {
    "eventId": 1,
    "volunteerId": 2,
}


export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { volunteerId, eventId } = requestBody;
        const enrollment: Prisma.EnrollmentCreateInput = {
            volunteer: {
                connect: {
                    id: volunteerId
                }
            },
            event: {
                connect: {
                    id: eventId
                }
            }
        };
        const createEnrollment = await prisma.enrollment.create({
            data: enrollment
        });
        return NextResponse.json(createEnrollment, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { id, status } = requestBody;
        const enroll: Prisma.EnrollmentUpdateInput = {
            status: status
        };
        const updateEvent = await prisma.enrollment.update({
            where: {
                id: id
            },
            data: enroll
        });
        return NextResponse.json(updateEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}