import { cookies } from 'next/headers'

export enum UserType {
    VOLUNTEER,
    ORGANISATION,
    ADMIN
}

export type User = {
    id: number,
    userId: number,
    type: UserType
}

export function getUser(): User | null {
    let cookie = cookies().get("user-data");
    let user;
    if (!cookie) return null;
    else user = JSON.parse(cookie.value)
    return user;
}