import prisma from '../../../../lib/prisma'
import ExploreEventsList from '@/components/Event/ExploreEventsList';

const ExplorePage = async () => {
    return (
        <div>

            <ExploreEventsList />
        </div>

    );
};

export default ExplorePage;
