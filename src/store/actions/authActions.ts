import { AppDispatch } from "..";
import {
  Login,
  forgotPassword,
  resetPassword,
  logout,
} from "@/services/authService";
import * as types from "../actions/actionTypes";
import { removeAccessToken, setAccessToken } from "@/ultilities/tokenData";
import toast from "react-hot-toast";

interface SignUpPayload {
  email: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const fetchLogin = (payload: LoginPayload) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.LOGIN_LOADING });
    try {
      const response = await Login(payload);
      setAccessToken(response.data.token);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response.data,
      });
      // toast.success(response.data.message);
      return { type: types.LOGIN_SUCCESS };
    } catch (error: any) {
      
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
      return { type: types.LOGIN_FAILURE };
    }
  };
};

export const fetchForgotPassword = (payload: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const response = await forgotPassword(payload);
      dispatch({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message);
      return { type: types.FORGOT_PASSWORD_SUCCESS };
    } catch (error: any) {
      dispatch({
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: error.response.data,
      });
      toast.error(error.response.data.error);
      // console.log(error.response.data.error);
      return { type: types.FORGOT_PASSWORD_FAILURE };
    }
  };
};

export const fetchResetPassword = (payload: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
      const response = await resetPassword(payload);
      dispatch({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message);
      return { type: types.RESET_PASSWORD_SUCCESS };
    } catch (error: any) {
      dispatch({
        type: types.RESET_PASSWORD_FAILURE,
        payload: error.response.data,
      });
      toast.error(error.response.data.error);
      // console.log(error.response.data.error);
      return { type: types.RESET_PASSWORD_FAILURE };
    }
  };
};

export const fetchLogout = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.IS_LOADING });
    try {
    //   await logout();
      removeAccessToken();
      dispatch({
        type: types.LOGOUT,
      });
      toast.success("Logged out successfully");
      return { type: types.LOGOUT };
    } catch (error: any) {
      toast.error("Failed to logout");
    }
  };
};
