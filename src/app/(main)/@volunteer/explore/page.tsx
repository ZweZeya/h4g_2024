
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
    const events = query == '' ? (await prisma.event.findMany()) : (await prisma.event.findMany({
        where: {
            OR: [
                {
                    name: {
                        search: query.replace(/[\s\n\t]/g, '_')
                    },
                },
                {
                    organisation: {
                        name: {
                            search: query.replace(/[\s\n\t]/g, '_')
                        }
                    }
                }
            ]
        },
    }))

    // const events = await prisma.event.findMany();

    return (
        <div className='h-[calc(100vh-64px)] overflow-hidden'>
                <SearchEvent />
                <ExploreEventsList events={events}/> 
        </div>
    )
};

export default EventsPage;