import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { organisationId, name, location, maxVolunteers, startDate, endDate } = requestBody;
        const event: Prisma.EventCreateInput = {
            organisation: { connect: { id: organisationId } },
            location: location,
            name: name,
            maxVolunteers: maxVolunteers,
            startDate: startDate,
            endDate: endDate
        };
        const createEvent = await prisma.event.create({
            data: event
        });

        return NextResponse.json(createEvent, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { organisation, name, location, maxVolunteers, eventId } = requestBody;
        const event: Prisma.EventUpdateInput = {
            organisation: organisation,
            name: name,
            location: location,
            maxVolunteers: maxVolunteers
        };
        const updateEvent = await prisma.event.update({
            where: {
                id: eventId,
            },
            data: event
        });
        return NextResponse.json(updateEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const requestBody = await request.json()
        const { eventId } = requestBody;
        const deleteEvent = await prisma.event.delete({
            where: {
                id: eventId,
            },
        });
        return NextResponse.json(deleteEvent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}