import { userResources } from "../api-calls/user-resources.js";
import { renderUser } from "../components/render-user.js";

export async function paginationEvent(currentPage, numberOfUsers) {
  console.log(currentPage);
  const users = await userResources(currentPage, numberOfUsers);
  console.log(users);
  renderUser(users);
  return users;
}
