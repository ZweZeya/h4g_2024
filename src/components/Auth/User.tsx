export enum UserType {
    VOLUNTEER,
    ORGANISATION,
    ADMIN
}

export type User = {
    id: number,
    type: UserType
}