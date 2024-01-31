import SideBar from "@/components/SideBar/SideBar";
import { CircleUserRound } from "lucide-react";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const viewAccount = async() => {
        "use server";
        console.log("account");
    }

    return (
        <main className="grid grid-cols-6" suppressHydrationWarning={true}>
            <div className="col-span-1"><SideBar /></div>
            <div className="col-span-5">
                <div className="px-7 py-5 pl-12">
                    <div className="flex">
                        <div className="ml-auto cursor-pointer" onClick={viewAccount}>
                            <CircleUserRound />
                        </div>
                    </div>
                {children}
                </div>
            </div>
        </main>
    );
};

export default MainLayout;