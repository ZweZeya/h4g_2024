import AdminSideBar from "@/components/SideBar/AdminSideBar";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const viewAccount = async () => {
        "use server";
        console.log("account");
    }

    return (
        <main className="grid grid-cols-6 h-screen" suppressHydrationWarning={true}>
            <div className="col-span-1"><AdminSideBar /></div>
            <div className="col-span-5">
                <div className="px-7 py-5 pl-12">
                    <div className="flex">
                        <div className="ml-auto cursor-pointer">
                            <Link href="/account">
                                <CircleUserRound />
                            </Link>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;