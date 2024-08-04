import React from 'react'
import {  AppDispatch } from "@/store";
import {  useDispatch } from "react-redux";
import { fetchLogout } from '@/store/actions/authActions';
import { LOGOUT } from '@/store/actions/actionTypes';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();


    const handleLogout = async () => {
        try {
            const response = await dispatch(fetchLogout());
            if (response?.type === LOGOUT) {
                router.push("/");
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return { handleLogout }
}

export default Logout
