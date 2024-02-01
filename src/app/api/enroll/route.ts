import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { volunteer, event } = requestBody;
        const enrollment: Prisma.EnrollmentCreateInput = {
            volunteer: volunteer,
            event: event
        };
        const createEnrollment = await prisma.enrollment.create({
            data: enrollment
        });
        return NextResponse.json(createEnrollment, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
