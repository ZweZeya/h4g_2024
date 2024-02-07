import LoginForm from '@/components/Auth/LoginForm';
import Header from '@/components/Layout/Header';
import React from 'react';

const LoginPage = () => {

    return (
        <div className="h-full">
            <Header>BAHfamily</Header>
            <div className="flex flex-col gap-20 items-center mt-20">
                <Header>Login</Header>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;