import { ApiResponse, axios_instance } from "./axios"

export type GetCompanyPayload = {
    "emailId": string,
    "name": string,
    "price": number,
    "openToHire": boolean,
    "product": string,
    "domain": string,
    "currentYearProfit": number,
    "profileUrl": string
}

type GetCompaniesRes = ApiResponse<GetCompanyPayload>
export const get_my_company = () => {
    return axios_instance.get<GetCompaniesRes>("get-my-company")
}