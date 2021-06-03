import axios from "axios";
import { IApiResponse, ISearchParams } from "./customTypes";

const defaultParams: ISearchParams = {
  ts: 1,
  apikey: "0496dd1c25a6148054d36d77a65cfe14",
  hash: "1bc050ca4051e97e6e076c02cd39b807",
};

const baseURL = "http://gateway.marvel.com/v1/public/";

//calls MarvelApi
export const callAPi = async (url?: string, params?: ISearchParams) => {
  const apiParams = { ...defaultParams, ...(params || {}) };
  const apiResponse = await axios
    .get(baseURL + url, { params: apiParams })
    .then((res: IApiResponse) => res)
    .catch((e) => {
      console.error(e);
      return undefined;
    });

  return apiResponse?.data;
};
