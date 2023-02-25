import { ApiResponse, axios_instance } from "./axios"

export type GetCompaniesPayload = {
    "emailId": string,
    "name": string,
    "price": number,
    "openToAquire": boolean,
    "product": string,
    "domain": string,
    "currentYearProfit": number,
    "profileUrl": string
}

export type GetCompaniesRes = ApiResponse<GetCompaniesPayload[]>
export const get_companies = (sort_by: "price" | "users") => {
    return axios_instance.get<GetCompaniesRes>("get-companies" + "?sortBy=" + sort_by + "&startOffSet=0")
}