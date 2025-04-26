/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/api";
import { login } from "@/redux/slices/userReducer";
import React from "react";
import toast from "react-hot-toast";

export const signIn = async ({ dispatch, setLoading, email, password }: {
    dispatch: any,
    email: string,
    password: string
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
    try {
        setLoading(true)
        const url = "/auth/login";
        const response = await api.post(url, { email, password })
        toast.success("Login successful")
        console.log(response)
        dispatch(login({ ...response.data.data }))
        localStorage.setItem("token", response.data.data.token)
        setTimeout(() => {
            window.location.replace("/")
        }, 1000);
    } catch (error: any) {
        error?.response?.data?.message ? toast.error(error.response.data.message) : toast.error("Error loggin you in")
    } finally {
        setLoading(false)
    }
}

export const signUp = async ({setLoading, email, password, names, telephone } : {setLoading: React.Dispatch<React.SetStateAction<boolean>>, email: string, password: string, names: string, telephone: string}) => {
    try {
        setLoading(true)
        const url = "/user/create";
        await api.post(url, {email, password, names, telephone})
        toast.success("Signup successful")
        setTimeout(() => {
            window.location.replace("/auth/login")
        }, 1000);
    } catch (error: any) {
        error?.response?.data?.message ? toast.error(error.response.data.message) : toast.error("Error signing you up")
    } finally {
        setLoading(false)
    }
}