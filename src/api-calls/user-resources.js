import { Base_Url } from "../config.js";

export const userResources = async (page = "1", query = "8") => {
  const url = `${Base_Url}?page=${page}&results=${query}&seed=abc`;
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
