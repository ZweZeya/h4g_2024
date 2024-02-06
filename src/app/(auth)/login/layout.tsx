const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main suppressHydrationWarning={true}>
            <p>Layout</p>
            {children}
        </main>
    );
};

export default AuthLayout;