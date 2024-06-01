export const filteredUsers = (e) => {
  const filterValue = e.currentTarget.previousElementSibling.value;
  if (filterValue === "" || filterValue === Number) {
    alert("search values in not valid !");
    e.currentTarget.previousElementSibling.value = "";
  } else {
    console.log(filterValue);
    let users = document.getElementsByClassName("user-profile");
    const userArray = [...users];
    const filteredUsers = userArray.filter((result) => {
      const dataName = result.getAttribute("data-name").toLocaleLowerCase();
      const filterValueCase = filterValue.toLocaleLowerCase();
      return dataName.includes(filterValueCase);
    });
    if (filteredUsers.length === 0) {
      alert("search result is empty !");
      e.currentTarget.previousElementSibling.value = "";
    } else {
      const root = document.getElementById("users");
      root.innerHTML = "";
      for (let div of filteredUsers) {
        console.log(div);
        root.appendChild(div);
      }
      console.log(userArray);
    }
  }
};
