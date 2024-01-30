const Header = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <p className="text-3xl font-semibold my-4">{children}</p>
    );
};

export default Header;