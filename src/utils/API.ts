import axios from "axios";
import { ICharacterInfo } from "../components/FillForm/CharacterForm";
import { IApiResponse, ISearchParams, IUser } from "./customTypes";

export default class API {
  //sets base parameters for api call
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

  //sets base URL for api call
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

  static addCharacter = async (character: ICharacterInfo) => {
    await axios
      .post("http://192.168.8.110:3001/api/characters", character)
      .catch((e) => console.error(e));
  };
  static getCharacter = async (id: number) => {
    const character: ICharacterInfo | undefined = await axios
      .get("http://192.168.8.110:3001/api/characters/" + id)
      .then((res: { data: ICharacterInfo }) => res.data)
      .catch((e) => {
        console.error(e);
        return undefined;
      });

    return character;
  };

  static isUser = async (name: string, email?: string, password?: string) => {
    const user: boolean = await axios
      .get("http://192.168.8.110:3001/api/users/is", {
        params: { name, email, password },
      })
      .then((res) => res.data.isUser)
      .catch((e) => console.error(e));
    return user;
  };

  static addUser = async (user: IUser) => {
    const currentUser: IUser = await axios
      .post("http://192.168.8.110:3001/api/users/", user)
      .then((res) => res.data)
      .catch((e) => console.error(e));
    return currentUser;
  };

  static findUser = async (name: string) => {
    const user: IUser = await axios
      .get("http://192.168.8.110:3001/api/users/find", { params: { name } })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((e) => console.log(e));

    return user;
  };
}
