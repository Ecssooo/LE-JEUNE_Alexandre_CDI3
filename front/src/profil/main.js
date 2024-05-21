const getMyProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/getMyProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
  //console.log(data);
};

window.addEventListener("DOMContentLoaded", () => {
  const welcomeDiv = document.getElementById("Welcome");
  getMyProfile().then((data) => {
    welcomeDiv.innerHTML += `<h2>Welcome, ${data.name}!</h2>`;
  });
});
