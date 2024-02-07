
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