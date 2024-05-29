import { Base_Url } from "../config.js";

export const userResources = async (query = "") => {
  const url = `${Base_Url}/?results=${query}`;
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
