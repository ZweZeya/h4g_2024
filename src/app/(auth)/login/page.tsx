import LoginForm from '@/components/Auth/LoginForm';
import Header from '@/components/Layout/Header';
import { Button } from "@/components/ui/button";
import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="h-full items-center">
            <Header>BAHfamily</Header>
            <div className="flex flex-col gap-20 items-center mt-20">
                <Header>Login</Header>
                <LoginForm />
            </div>
            {/* <div className="grid grid=rows-2 gap-5 mt-10 w-20 items-center">
                <Link href='/signup/volunteer'>
                    <Button className="bg-[#a886e7]" type="button">Sign Up As Volunteer</Button>
                </Link>

                <Button className="bg-[#a886e7]" type="button">Sign Up As Organisation</Button>
            </div> */}
        </div>
    );
};

export default LoginPage;