import prisma from '../../../../lib/prisma'
import ExploreEventsList from '@/components/Event/ExploreEventsList';

const ExplorePage = async () => {
    return (
        <ExploreEventsList />
    );
};

export default ExplorePage;
