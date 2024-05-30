import { filteredUsers } from "../handlers/filter-user-by-value.js";

export const filterUser = (id = "") => {
  document.getElementById(id).addEventListener("click", filteredUsers);
};
