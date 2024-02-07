"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from './User';
import userStore from '@/store/userStore';

interface AuthContextProps {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userData');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvide');
    }
    return context;
}