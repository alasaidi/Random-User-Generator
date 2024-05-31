import { userResources } from "../api-calls/user-resources.js";
import { renderUser } from "../components/render-user.js";

export async function paginationEvent(currentPage, root) {
  const users = await userResources(currentPage);
  renderUser(users, root);
  return users;
}
