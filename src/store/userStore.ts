import { create } from "zustand";

export interface userStoreState {
    isAuthenticated: boolean;
}

const userStore = create<userStoreState>((set) => ({
    isAuthenticated: true,
}));

export default userStore;