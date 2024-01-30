import SideBar from "@/components/SideBar/SideBar";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="grid grid-cols-6" suppressHydrationWarning={true}>
            <div className="col-span-1"><SideBar /></div>
            <div className="col-span-5">{children}</div>
        </main>
    );
};

export default MainLayout;