import Header from '@/components/Layout/Header';

import ExploreEventCard from './../../../../components/Event/ExploreEventCard'
import ExploreEventsList from '@/components/Event/ExploreEventsList';
import SearchEvent from '@/components/Event/SearchEvent';
import prisma from './../../../../lib/prisma'

const EventsPage = async ({
    searchParams,
    }: {
    searchParams?: {
        query?: string;
    };
    }) => {
    // const events = await prisma.event.findMany({
    //     where: {
    //         organisationId: 1 // TBC
    //     }
    // });

    const query = searchParams?.query || '';
    const events = await prisma.event.findMany({
        where: {
            OR: [
                {
                    name: {
                        search: query
                    },
                },
                {
                    organisation: {
                        name: {
                            search: query
                        }
                    }
                }
            ]
        },
    })

    // const events = await prisma.event.findMany();

    return (
        <div>
            <SearchEvent />
            <ExploreEventsList events={events}/>
        </div>
    )
};

export default EventsPage;