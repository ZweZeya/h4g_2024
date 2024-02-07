import SideBar from "@/components/SideBar/SideBar";
import { CircleUserRound } from "lucide-react";

const MainLayout = ({
    organisation,
    volunteer
}: Readonly<{
    organisation: React.ReactNode;
    volunteer: React.ReactNode;
}>) => {
    return (
        <>{volunteer}</>
    );
};

export default MainLayout;