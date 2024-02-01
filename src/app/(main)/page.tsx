import SmallCalendar from "@/components/Dashboard/SmallCalendar";
import Header from "@/components/Layout/Header";

const HomePage = () => {
    return (
        <div>
            <Header>Welcome to BAHfamily</Header>
            <div className="grid grid-cols-3 gap-14">
                <div className="col-span-2">
                    <div className="flex items-center">
                        <p>Explore Volunteering Events</p>
                        <p>View All</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3 items-center">
                    <SmallCalendar />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
