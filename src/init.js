import { fetchUser } from "./listeners/fetch-user.js";
import { filterUser } from "./listeners/filter-users.js";
import { sortUser } from "./listeners/sort-user.js";

fetchUser("searchBtn");
sortUser("sortBtn");
filterUser("filterBtn");
