import { axiosInstance } from "../services/axiosInstance";
import catchAsync from "../utils/catchAsync";


export const authLogin = catchAsync(async (body: any) => {
  const { data } = await axiosInstance.post('/Account/AdminLogin', body);
  return data;
});


export const authForgotPassword = catchAsync(async (body : any) => {
  const { data } = await axiosInstance.post("/api/password/email", body);
  return data;
});

export const addPushToken = catchAsync(async (body : any) => {
  const { data } = await axiosInstance.post('/PushTokens', body);
  return data;
});
