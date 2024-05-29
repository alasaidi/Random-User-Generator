import { userResources } from "../api-calls/user-resources.js";
import { renderUser } from "../components/render-user.js";

export const chooseUser = async (e) => {
  const numberOfUsers = e.currentTarget.previousElementSibling.value;

  const root = document.getElementById("users");
  root.innerHTML = "";
  try {
    const users = await userResources(numberOfUsers);

    const userElement = renderUser(users, root);
  } catch (err) {
    console.error(err);
  }
};
