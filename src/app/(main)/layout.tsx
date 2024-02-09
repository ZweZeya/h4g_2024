import { UserType } from "@/components/Auth/User";
import { cookies } from "next/headers";

const MainLayout = async ({
    organisation,
    volunteer,
    admin
}: Readonly<{
    organisation: React.ReactNode;
    volunteer: React.ReactNode;
    admin: React.ReactNode;
}>) => {
    let user;
    const userCookie = cookies().get("user-data");
    if (userCookie && userCookie.value) {
        user = JSON.parse(userCookie.value);
        return (
            <>
                {user!.type == UserType.VOLUNTEER && volunteer}
                {user!.type == UserType.ORGANISATION && organisation}
                {user!.type == UserType.ADMIN && admin}
            </>
        );
    }
    return <></>

};

export default MainLayout;