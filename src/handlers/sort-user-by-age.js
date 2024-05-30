export const sortUserByAge = () => {
  let users = document.getElementsByClassName("user-profile");
  const userArray = [...users];
  //   const age = userArray[0].getAttribute("data-age");
  console.log(userArray);
  console.log(userArray);
  const list = userArray.sort(
    (a, b) => a.getAttribute("data-age") - b.getAttribute("data-age"),
  );
  //   console.log(list);
  const root = document.getElementById("users");
  //   root.innerHTML = "";
  for (let div of list) {
    console.log(div);
    root.appendChild(div);
  }
};
