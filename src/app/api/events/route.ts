import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {

        // GET Method - NOT ALLOWED
        case 'GET':
            res.status(405).json({ message: 'Method not allowed'});
            break;

        // POST Method - Creates new event
        // Requires organisation, name, location, maxVolunteers parameters in the request body
        case 'POST':
            try {
                const { organisation, name, location, maxVolunteers } = req.body;
                const event: Prisma.EventCreateInput = {
                    organisation: organisation,
                    location: location,
                    name: name,
                    maxVolunteers: maxVolunteers,
                };
                const createEvent = await prisma.event.create({
                    data: event
                });
                res.status(201).json(createEvent);
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        // PUT Method NOT ALLOWED
        case 'PUT':
            res.status(405).json({ message: 'Method not allowed'});
            break;

        // PATCH Method should update information about an event
        // Required parameters in request body: eventId
        // Optional parameters in request body: organisation, name, location, maxVolunteers (Information to be updated about event)
        case 'PATCH':
            try {
                const { organisation, name, location, maxVolunteers, eventId } = req.body;
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
                res.status(200).json(updateEvent);
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        // DELETE Method should remove an event
        // Required parameters in request body: eventId
        case 'DELETE':
            try {
                const { eventId } = req.body;
                const deleteEvent = await prisma.event.delete({
                    where: {
                        id: eventId,
                    },
                });
                res.status(200).json(deleteEvent);
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;
        default:
            res.status(405).json({ message: 'Method not allowed'});
            break;
    }
}
