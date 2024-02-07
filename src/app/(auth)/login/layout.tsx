const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main suppressHydrationWarning={true} className="h-screen px-5">
            {children}
        </main>
    );
};

export default AuthLayout;