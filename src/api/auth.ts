import { ApiResponse, axios_instance } from "./axios"

type authReponse = {
    token: string
}
export const auth = (supabase_jwt: string) => {
    return axios_instance.post<ApiResponse<authReponse>>("auth", {
        supabaseToken: supabase_jwt
    })
}