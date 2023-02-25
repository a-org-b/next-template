import { ApiResponse, axios_instance } from "./axios"

export type GetCompanyPayload = {
    "emailId": string,
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
    activeUsers: number;

}

type GetCompaniesRes = ApiResponse<GetCompanyPayload>
export const get_my_company = () => {
    return axios_instance.get<GetCompaniesRes>("get-my-company")
}