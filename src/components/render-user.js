export const renderUser = (Data, root) => {
  const userProfiles = Data.results.map((result) => {
    const fullName = `${result.name.first} ${result.name.last}`;
    return {
      picture: result.picture.medium,
      name: fullName,
      email: result.email,
      phone: result.phone,
      gender: result.gender,
      nationality: result.nat,
      age: result.dob.age,
      gender: result.gender,
    };
  });
  const userElement = userProfiles
    .map((result) => {
      return ` <div class=" user-profile">
      <img src="${result.picture}" alt="User Image">
      <p>Hi, My name is</p>
      <h3> ${result.name}</h3>
      <p>Nationality: ${result.nationality}</p>
      <p>Email:${result.email}</p>
      <p>Tel:${result.phone}</p>
      <p>Age:${result.age}</p>
      <p>Gender:${result.gender}</p>
  </div>`;
    })
    .join("");
  console.log(userElement);
  root.innerHTML = userElement;
};
