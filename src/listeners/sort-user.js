import { sortUserByAge } from "../handlers/sort-user-by-age.js";

export const sortUser = (id = "") => {
  document.getElementById(id).addEventListener("click", sortUserByAge);
};
