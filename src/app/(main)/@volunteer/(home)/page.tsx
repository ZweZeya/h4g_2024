import SmallCalendar from "@/components/Dashboard/SmallCalendar";
import Header from "@/components/Layout/Header";
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <Header>Welcome to BAHfamily</Header>
            <div className="grid grid-cols-3 gap-14">
                <div className="col-span-2">
                    <div className="flex items-center">
                        <p>Explore Volunteering Events</p>
                        <Link className="ml-auto hover:underline" href="/explore">View All</Link>
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
