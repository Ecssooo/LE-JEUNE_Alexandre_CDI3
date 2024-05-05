function fetchCharacter() {
  let url = window.location.search;
  let slug = new URLSearchParams(url).get("slug");
  return fetch("https://hp-api.lainocs.fr/characters/" + slug).then(
    (response) => response.json()
  );
}

//Rendu semaine IOT
function fetchHouse(data) {
  return fetch("####", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: data.house,
    }),
  }).then((response) => response.json());
}

async function displayCharacter() {
  const data = await fetchCharacter();
  console.log(data);
  document.querySelector("#character_card").innerHTML = `
    <a id="button_back" href="../accueil/index.html">Back</a>
      <div class="character_card">
      <img class="character_card img" src="${data.image}" alt="${data.name}">
        <div id="character_card info">  
            <h2>${data.name}</h2>
            <ul id="ulinfo">
            <li>${data.house}</li>
                <li>${data.role}</li>
                <li>${data.blood}</li>
            </ul>
        </div>
      </div>
    `;
  await fetchHouse(data);
}

displayCharacter();
