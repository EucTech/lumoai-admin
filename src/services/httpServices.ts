import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "@/ultilities/tokenData";

class HttpService {
  private token: string;
  private baseUrl: string;

  constructor() {
    this.token = getAccessToken();
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  }

  postData = async (payload: any, url: string): Promise<AxiosResponse<any>> => {
    return await axios.post(this.baseUrl + url, payload);
  };

  postDataWithToken = async (
    payload: any,
    url: string
  ): Promise<AxiosResponse<any>> => {
    return await axios.post(this.baseUrl + url, payload, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  };

  postToRemoveToken = async (url: string): Promise<AxiosResponse<any>> => {
    const AuthStr = "Bearer ".concat(this.token);
    return axios.post(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };

  getDataWithToken = async (url: string): Promise<AxiosResponse<any>> => {
    const AuthStr = "Bearer ".concat(this.token);
    return axios.get(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };

  getDataWithoutToken = async (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url);
  };

  putDataWithToken = async (
    formData: any,
    url: string
  ): Promise<AxiosResponse<any>> => {
    const AuthStr = "Bearer ".concat(this.token);
    return axios.put(this.baseUrl + url, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  patchDataWithToken = async (
    formData: any,
    url: string
  ): Promise<AxiosResponse<any>> => {
    const AuthStr = "Bearer ".concat(this.token);
    return axios.patch(this.baseUrl + url, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  deleteData = async (url: string): Promise<AxiosResponse<any>> => {
    const AuthStr = "Bearer ".concat(this.token);
    return axios.delete(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };
};

export default HttpService;