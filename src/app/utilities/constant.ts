import { environment } from "../environments/environment";

export module Constant {
    const baseUrl: string = environment.baseURL;
    export const signup: string = `${baseUrl}/signup`;
}