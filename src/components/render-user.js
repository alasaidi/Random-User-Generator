export const renderUser = (Data, root) => {
  // Clear the root element
  root.innerHTML = "";

  // Map through the data and create DOM elements
  const userProfiles = Data.results.map((result) => {
    const fullName = `${result.name.first} ${result.name.last}`;

    // Create the user profile container
    const userProfile = document.createElement("div");
    userProfile.className = "user-profile";

    // Create and append the image element
    const img = document.createElement("img");
    img.src = result.picture.medium;
    img.alt = "User Image";
    userProfile.appendChild(img);

    // Create and append the name introduction paragraph
    const nameIntro = document.createElement("p");
    nameIntro.textContent = "Hi, My name is";
    userProfile.appendChild(nameIntro);

    // Create and append the name element
    const name = document.createElement("h3");
    name.textContent = fullName;
    userProfile.appendChild(name);

    // Create and append the nationality paragraph
    const nationality = document.createElement("p");
    nationality.textContent = `Nationality: ${result.nat}`;
    userProfile.appendChild(nationality);

    // Create and append the email paragraph
    const email = document.createElement("p");
    email.textContent = `Email: ${result.email}`;
    userProfile.appendChild(email);

    // Create and append the phone paragraph
    const phone = document.createElement("p");
    phone.textContent = `Tel: ${result.phone}`;
    userProfile.appendChild(phone);

    // Create and append the age paragraph
    const age = document.createElement("p");
    age.textContent = `Age: ${result.dob.age}`;
    userProfile.appendChild(age);

    // Create and append the gender paragraph
    const gender = document.createElement("p");
    gender.textContent = `Gender: ${result.gender}`;
    userProfile.appendChild(gender);

    // Return the complete user profile element
    return userProfile;
  });

  // Append all user profile elements to the root element
  userProfiles.forEach((userProfile) => root.appendChild(userProfile));
};
