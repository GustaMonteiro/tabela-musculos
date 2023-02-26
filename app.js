const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button')
const cardList = document.querySelector('#card-list');

const allCards = [];

const musclesJson = JSON.parse('[{"name": "SUBESCAPULAR", "origin": "Fossa subescapular", "insertion": "Tubérculo menor do úmero (manguito rotador)", "inervation": "Nervo subescapular", "action": "Rotação medial e adução do ombro", "movePlan": "Transverso", "imageId": 0}, {"name": "SUPRA-ESPINHAL", "origin": "Fossa supra espinhal da escápula", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo supraescapular", "action": "Abdução do ombro", "movePlan": "Frontal", "imageId": 1}]');

class Muscle {
  constructor(name, origin, insertion, inervation, action, movePlan, imageId) {
    this.name = name;
    this.origin = origin;
    this.insertion = insertion;
    this.inervation = inervation;
    this.action = action;
    this.movePlan = movePlan;
    this.imageId = imageId;
  }
}

const createCard = muscle => {
  const col = document.createElement('div');
  col.classList.add('ol');

  const card = document.createElement('div');
  card.classList.add('card', 'h-100');

  const image = document.createElement('img');
  image.src = `images/${muscle.imageId}.jpg`;
  image.alt = `Imagem do ${muscle.name.toLowerCase()}`;
  image.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const muscleName = document.createElement('h5');
  muscleName.innerText = muscle.name;
  muscleName.classList.add('card-title');

  const infos = document.createElement('ul');
  infos.classList.add('list-group', 'list-group-flush');

  const origin = document.createElement('li');
  origin.innerHTML = `<strong>Origem:</strong> ${muscle.origin}`;
  origin.classList.add('list-group-item');

  const insertion = document.createElement('li');
  insertion.innerHTML = `<strong>Inserção:</strong> ${muscle.insertion}`;
  insertion.classList.add('list-group-item');

  const inervation = document.createElement('li');
  inervation.innerHTML = `<strong>Inervação:</strong> ${muscle.inervation}`;
  inervation.classList.add('list-group-item');

  const action = document.createElement('li');
  action.innerHTML = `<strong>Ação:</strong> ${muscle.action}`;
  action.classList.add('list-group-item');

  const movePlan = document.createElement('li');
  movePlan.innerHTML = `<strong>Plano de Movimento:</strong> ${muscle.movePlan}`;
  movePlan.classList.add('list-group-item');

  cardBody.appendChild(muscleName);

  infos.appendChild(origin);
  infos.appendChild(insertion);
  infos.appendChild(inervation);
  infos.appendChild(action);
  infos.appendChild(movePlan);

  card.appendChild(image);
  card.appendChild(cardBody);
  card.appendChild(infos);

  col.appendChild(card);

  return col;
}

for(let muscle of musclesJson) {
  allCards.push(createCard(new Muscle(muscle.name, muscle.origin, muscle.insertion, muscle.inervation, muscle.action, muscle.movePlan, muscle.imageId)));
}

// for(let card of allCards){
//   cardList.appendChild(card);
// }

// const subescapular = new Muscle("SUBESCAPULAR", "Fossa subescapular", "Tubérculo menor do úmero (manguito rotador)", "Nervo subescapular", "Rotação medial e adução do ombro", "Transverso", "0");
// const supraEspinhal = new Muscle("SUPRA-ESPINHAL", "Fossa supra espinhal da escápula", "Tubérculo maior do úmero (manguito rotador)", "Nervo supraescapular", "Abdução do ombro", "Frontal", "1");

// console.log(JSON.stringify(subescapular));

// for (let nome of nomes) {
//   const newLi = document.createElement('li');
//   newLi.innerText = nome;
//   allItems.push(newLi);
// }

const showAllCards = () => {
  for (let card of allCards) {
    cardList.appendChild(card);
  }
}

const removeAllCards = () => {
  while (cardList.firstChild) {
    cardList.removeChild(cardList.lastChild);
  }
}

console.log(allCards[0].firstElementChild.childNodes[1].firstElementChild.innerText);

searchBar.addEventListener('input', e => {
  console.log(searchBar.value);

  if (!searchBar.value) return showAllCards();
  removeAllCards();

  for (let card of allCards) {
    if (card.firstElementChild.childNodes[1].firstElementChild.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
      cardList.appendChild(card);
    }
  }
})

// cardList.appendChild(createCard(subescapular));
// cardList.appendChild(createCard(supraEspinhal));

showAllCards();

      // <div class="col">
      //   <div class="card h-100">
      //     <img src="images/2.jpg" class="card-img-top" alt="...">
      //     <div class="card-body">
      //       <h5 class="card-title">Card title</h5>
      //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //     </div>
      //     <ul class="list-group list-group-flush">
      //       <li class="list-group-item">An item</li>
      //       <li class="list-group-item">A second item lorem</li>
      //       <li class="list-group-item">A third item</li>
      //       <li class="list-group-item">A third item</li>
      //       <li class="list-group-item">A third item</li>
      //     </ul>
      //   </div>
      // </div>