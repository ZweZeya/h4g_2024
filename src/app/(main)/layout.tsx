import { cookies } from 'next/headers'
import { redirectLogin } from '@/lib/actions';
import { UserType } from '@/components/Auth/User';

const MainLayout = ({
    organisation,
    volunteer
}: Readonly<{
    organisation: React.ReactNode;
    volunteer: React.ReactNode;
}>) => {
    let cookie = cookies().get("user-data");
    let user;
    if (!cookie) redirectLogin();
    else user = JSON.parse(cookie.value)

    return (
        <>{user!.type == UserType.VOLUNTEER ? volunteer : organisation}</>
    );
};

export default MainLayout;