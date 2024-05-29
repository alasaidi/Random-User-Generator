import { userResources } from "../api-calls/user-resources.js";

export const chooseUser = async (e) => {
  const numberOfUsers = e.currentTarget.previousElementSibling.value;
  const users = await userResources(numberOfUsers);
  console.log(users);
};
