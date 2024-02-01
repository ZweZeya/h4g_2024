import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            res.status(405).json({ message: 'Method not allowed'});
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'PATCH':
            break;
        case 'DELETE':
            break;
        default:
            res.status(405).json({ message: 'Method not allowed'});
            break;
    }
}
