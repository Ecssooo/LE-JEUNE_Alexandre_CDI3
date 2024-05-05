function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters").then((response) =>
    response.json()
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
      message: "rien",
    }),
  }).then((response) => response.json());
}
async function displayCharacters() {
  const data = await fetchCharacters();
  data.forEach((character) => {
    document.querySelector("#characters_list").innerHTML += `
        <a href="../character/index.html?slug=${character.slug}">
            <div class="character">
              <img class ="character_img" src="${character.image}" alt="${character.name}">
              <div class="character_info">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
              </div>
            </div>
        </a>`;
  });
  await fetchHouse(data);
}

function deleteCharacters() {
  document.querySelector("#characters_list").innerHTML = "";
}

async function displayCharactersFilter() {
  // Filtre les personnages en fonction de la maison via les checkbox
  deleteCharacters();
  const data = await fetchCharacters();
  // Récupère les checkbox
  let gryffindor = document.getElementById("gryffindor");
  let slytherin = document.getElementById("slytherin");
  let ravenclaw = document.getElementById("ravenclaw");
  let hufflepuff = document.getElementById("hufflepuff");
  if (gryffindor.checked) {
    // Si la checkbox est cochée, affiche les personnages de la maison correspondante
    data.forEach((character) => {
      if (character.house === "Gryffindor")
        document.querySelector("#characters_list").innerHTML += `
          <a href="../character/index.html?slug=${character.slug}">
            <div class="character">
              <img class ="character_img" src="${character.image}" alt="${character.name}">
              <div class="character_info">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
              </div>
            </div>
        </a>`;
    });
  }
  if (slytherin.checked) {
    data.forEach((character) => {
      if (character.house === "Slytherin")
        document.querySelector("#characters_list").innerHTML += `
          <a href="../character/index.html?slug=${character.slug}">
            <div class="character">
              <img class ="character_img" src="${character.image}" alt="${character.name}">
              <div class="character_info">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
              </div>
            </div>
        </a>`;
    });
  }
  if (ravenclaw.checked) {
    data.forEach((character) => {
      if (character.house === "Ravenclaw")
        document.querySelector("#characters_list").innerHTML += `
          <a href="../character/index.html?slug=${character.slug}">
            <div class="character">
              <img class ="character_img" src="${character.image}" alt="${character.name}">
              <div class="character_info">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
              </div>
            </div>
        </a>`;
    });
  }
  if (hufflepuff.checked) {
    data.forEach((character) => {
      if (character.house === "Hufflepuff")
        document.querySelector("#characters_list").innerHTML += `
          <a href="../character/index.html?slug=${character.slug}">
            <div class="character">
              <img class ="character_img" src="${character.image}" alt="${character.name}">
              <div class="character_info">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
              </div>
            </div>
        </a>`;
    });
  }
  if (other.checked) {
    data.forEach((character) => {
      if (character.house === "")
        document.querySelector("#characters_list").innerHTML += `
            <a href="../character/index.html?slug=${character.slug}">
              <div class="character">
                <img class ="character_img" src="${character.image}" alt="${character.name}">
                <div class="character_info">
                  <h2>${character.name}</h2>
                </div>
              </div>
          </a>`;
    });
  }
  // Si aucune checkbox n'est cochée, affiche tous les personnages
  if (
    !gryffindor.checked &&
    !slytherin.checked &&
    !ravenclaw.checked &&
    !hufflepuff.checked &&
    !other.checked
  ) {
    displayCharacters();
  }
}

displayCharacters();

let apply = document.querySelector("#applyFilter");
apply.addEventListener("click", displayCharactersFilter);
