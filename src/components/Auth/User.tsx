import { cookies } from 'next/headers'
import { redirectLogin } from '@/lib/actions';

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

export function getUser(): User {
    let cookie = cookies().get("user-data");
    let user;
    if (!cookie) redirectLogin();
    else user = JSON.parse(cookie.value)

    return user;
}