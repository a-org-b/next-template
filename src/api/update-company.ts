import { axios_instance } from "./axios";

export type UpdateCompanyBody = {
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

export const update_company = (body: UpdateCompanyBody) => {
    return axios_instance.patch("update", body)
}