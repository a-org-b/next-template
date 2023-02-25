import { ApiResponse, axios_instance } from "./axios"

export type GetCompaniesPayload = {
    emailId: string;
    profileUrl: string;
    name: string;
    price: number;
    openToAquire: boolean;
    domain: string;
    product: string;
    currentYearProfit: number;
    ceo: string;
    owner: string;
    cto: string;
    address: string;
    description: string;
    networth: number;
    linkedIn: string;
    website: string;
    youtube: string;
    businessLicenseLink: string;
    liveUserLink: string;
}

export type GetCompaniesRes = ApiResponse<GetCompaniesPayload[]>
export const get_companies = (sort_by: "price" | "users") => {
    return axios_instance.get<GetCompaniesRes>("get-companies" + "?sortBy=" + sort_by + "&startOffSet=0")
}