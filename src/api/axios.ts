import axios, { AxiosRequestConfig } from "axios";

export const LOCAL_TOKEN_KEY = "auth_token"

let headers = {}
if (global.window != undefined) {
  headers = {
    "Authorization": localStorage.getItem(LOCAL_TOKEN_KEY)
  }
}
const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  headers
};


export const axios_instance = axios.create(config)

export interface ApiResponse<T> {
  status: number,
  message: string,
  payload: T
}