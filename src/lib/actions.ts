'use server'
import prisma from "./prisma";
import { UserType } from "@/components/Auth/User";
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";
import { redirect } from 'next/navigation'
import { use } from "react";

async function findVolunteer(data: any) {
    try {
        const user = await prisma.volunteer.findFirstOrThrow({
            where: {
                user: {
                    email: data.email,
                    hashPassword: data.password
                }
            }
        })
        const userInfo = {
            id: user.id,
            userId: user.userId,
            type: UserType.VOLUNTEER
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}
async function findOrganisation(data: any) {
    try {
        const user = await prisma.organisation.findFirstOrThrow({
            where: {
                user: {
                    email: data.email,
                    hashPassword: data.password
                }
            },
        })
        const userInfo = {
            id: user.id,
            userId: user.userId,
            type: UserType.ORGANISATION
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}
async function findAdmin(data: any) {
    try {
        const user = await prisma.admin.findFirstOrThrow({
            where: {
                user: {
                    email: data.email,
                    hashPassword: data.password
                }
            }
        })
        const userInfo = {
            id: user.id,
            userId: user.userId,
            type: UserType.ADMIN
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}

async function handleLogin(user: any) {
    // const token = jwt.sign({ userId: user.id }, "my secret", {
    //     expiresIn: 60 * 60 * 24 * 7, // One week
    // });
    cookies().set('user-data', JSON.stringify(user), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    })
}

export async function authenticate(data: any) {
    try {
        var user;
        switch (data.role) {
            case "volunteer":
                user = await findVolunteer(data);
                break;
            case "admin":
                user = await findAdmin(data);
                break;
            case "organisation":
                user = await findOrganisation(data);
                break;
            default:
                throw Error("Invalid User Type");
        }
        await handleLogin(user);
    } catch (error) {
        if (error) { throw error; }
    }
}

export async function redirectLogin() {
    redirect(`/login`);
}

export async function redirectHome() {
    redirect('/');
}