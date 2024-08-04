import HttpService from "./httpServices";

export const Login = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/login";
    return await http.postData(payload, url);
}

export const logout = async () => {
    const http = new HttpService();
    const url = "/auth/logout";
    return await http.getDataWithToken(url);
}

export const forgotPassword = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/forgotpassword";
    return await http.postData(payload, url);
}

export const resetPassword = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/resetpassword";
    return await http.postData(payload, url);
}


export const Logout = async () => {
    const http = new HttpService();
    const url = "/auth/logout";
    return await http.postToRemoveToken(url);
}

