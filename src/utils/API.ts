import axios from "axios";
import { IApiResponse, ISearchParams } from "./customTypes";

export default class API {
  private static defaultParams: ISearchParams = {
    ts: 1,
    apikey: "0496dd1c25a6148054d36d77a65cfe14",
    hash: "1bc050ca4051e97e6e076c02cd39b807",
  };
  static get getDefaultParams() {
    return this.defaultParams;
  }
  static set setDefaultParams(params: ISearchParams) {
    this.defaultParams = params;
  }

  private static baseURL: string = "http://gateway.marvel.com/v1/public/";
  static get getBaseURL() {
    return this.baseURL;
  }
  static set setBaseURL(url: string) {
    this.baseURL = url;
  }

  //calls MarvelApi and returns data
  static call = async (url?: string, params?: ISearchParams) => {
    const apiParams = { ...API.defaultParams, ...(params || {}) };
    const apiResponse = await axios
      .get(API.baseURL + url, { params: apiParams })
      .then((res: IApiResponse) => res)
      .catch((e) => {
        console.error(e);
        return undefined;
      });

    return apiResponse?.data;
  };
}
