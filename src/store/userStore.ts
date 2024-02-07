import { create } from "zustand";
import { User } from "@/components/Auth/User";


export interface userStoreState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const userStore = create<userStoreState>((set) => ({
    user: null,
    login: (u: User) => set({ user: u }),
    logout: () => set({ user: null }),
}));

export default userStore;