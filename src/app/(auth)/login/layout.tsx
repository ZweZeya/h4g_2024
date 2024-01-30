const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main suppressHydrationWarning={true}>
            {children}
        </main>
    );
};

export default AuthLayout;