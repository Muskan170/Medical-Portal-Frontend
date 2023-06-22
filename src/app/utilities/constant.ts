import { environment } from "../environments/environment";

export module Constant {
    const baseUrl: string = environment.baseURL;
    export const signup: string = `${baseUrl}/signup`;
    export const login: string = `${baseUrl}/login`;
    export const getdoctors: string = `${baseUrl}/doctors`
    export const getDoctorById: string = `${baseUrl}/doctors/doctor-by-id?id=`
    export const appoint: string = `${baseUrl}/user/appoint`
    export const getAppointmentForUser = `${baseUrl}/user/my-appointments/`
    export const updatePassword = `${baseUrl}/login/update-password`
    export const addDoctor = `${baseUrl}/user/addDoctor`
    export const updateDoctor = `${baseUrl}/user/updateDoctor`
}