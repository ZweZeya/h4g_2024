import { UserType } from "@/components/Auth/User";
import { cookies } from "next/headers";

const MainLayout = async ({
    organisation,
    volunteer
}: Readonly<{
    organisation: React.ReactNode;
    volunteer: React.ReactNode;
}>) => {
    let user;
    const userCookie = cookies().get("user-data");
    if (userCookie && userCookie.value) {
        user = JSON.parse(userCookie.value);
        return (
            <>{user!.type == UserType.VOLUNTEER ? volunteer : organisation}</>
        );
    } 
    return <></> 
    
};

export default MainLayout;