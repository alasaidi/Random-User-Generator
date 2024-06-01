import { paginationEvent } from "../components/pagination-page.js";
import { pagination } from "../components/pagination.js";
import { renderUser } from "../components/render-user.js";

export const chooseUser = async (e) => {
  const numberOfUsers = e.currentTarget.previousElementSibling.value;

  const root = document.getElementById("users");

  try {
    const users = await paginationEvent("1");
    console.log(users);
    pagination(numberOfUsers);
  } catch (err) {
    console.error(err);
  }
};
