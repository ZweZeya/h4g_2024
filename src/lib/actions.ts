'use server'
import prisma from "./prisma";
import { useAuth } from "@/components/Auth/AuthProvider";
import { UserType } from "@/components/Auth/User";


async function signInAsVolunteer(formData: FormData) {
    try {
        const user = await prisma.volunteer.findFirstOrThrow({
            where: {
                user: {
                    email: formData.get("email")?.toString(),
                    hashPassword: formData.get("password")?.toString()
                }
            }
        })
        const userInfo = {
            id: user.id,
            type: UserType.VOLUNTEER
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}
async function signInAsOrganisation(formData: FormData) {
    try {
        const user = await prisma.organisation.findFirstOrThrow({
            where: {
                user: {
                    email: formData.get("email")?.toString(),
                    hashPassword: formData.get("password")?.toString()
                }
            }
        })
        const userInfo = {
            id: user.id,
            type: UserType.ORGANISATION
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}
async function signInAsAdmin(formData: FormData) {
    try {
        const user = await prisma.admin.findFirstOrThrow({
            where: {
                user: {
                    email: formData.get("email")?.toString(),
                    hashPassword: formData.get("password")?.toString()
                }
            }
        })
        const userInfo = {
            id: user.id,
            type: UserType.ADMIN
        }
        return userInfo;
    } catch (error) {
        throw error;
    }
}

export async function authenticate(formData: FormData) {
    try {
        var auth = useAuth();
        var user;
        switch (formData.get("type")?.toString()) {
            case "volunteer":
                user = await signInAsVolunteer(formData);
                break;
            case "admin":
                user = await signInAsAdmin(formData);
                break;
            case "organisation":
                user = await signInAsOrganisation(formData);
                break;
            default:
                throw Error("Invalid User Type");
        }
        auth.login(user);
    } catch (error) {
        if (error) { throw error; }
    }
}