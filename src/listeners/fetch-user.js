import { chooseUser } from "../handlers/choose-user.js";

export const fetchUser = async (id) => {
  document.getElementById(id).addEventListener("click", chooseUser);
};
