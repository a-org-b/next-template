import { ApiResponse, axios_instance } from "./axios"

type getCompaniesResponse = {
    "emailId": string,
    "name": string,
    "price": number,
    "openToHire": boolean
}
export const getCompanies = (sort_by: "price" | "users") => {
    return axios_instance.get<ApiResponse<getCompaniesResponse>>("get-companies" + "/sortBy=" + sort_by)
}