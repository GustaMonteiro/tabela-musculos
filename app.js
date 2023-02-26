const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button')
const cardList = document.querySelector('#card-list');

const allCards = [];

const musclesJson = JSON.parse('[{"name": "SUBESCAPULAR", "origin": "Fossa subescapular", "insertion": "Tubérculo menor do úmero (manguito rotador)", "inervation": "Nervo subescapular", "action": "Rotação medial e adução do ombro", "movePlan": "Transverso", "imageId": 0}, {"name": "SUPRA-ESPINHAL", "origin": "Fossa supra espinhal da escápula", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo supraescapular", "action": "Abdução do ombro", "movePlan": "Frontal", "imageId": 1}, {"name": "INFRA-ESPINHAL", "origin": "Superfície posterior da escápula", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo supraescapular", "action": "Rotação lateral e adução do ombro", "movePlan": "Transverso", "imageId": 2}, {"name": "REDONDO MENOR", "origin": "Escápula posterior, borda lateral", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo axilar", "action": "Rotação lateral e adução do ombro", "movePlan": "Transverso", "imageId": 3}, {"name": "REDONDO MAIOR", "origin": "Face posterior do ângulo inferior da escápula", "insertion": "Lábio medial do Sulco intertubercu lar do úmero", "inervation": "Nervo subescapular", "action": "Rotação medial e adução do ombro", "movePlan": "Sagital, frontal e transverso", "imageId": 4}, {"name": "DELTÓIDE", "origin": "Terço final da clavícula, acrômio e espinha da escápula", "insertion": "Tuberosidade deltoidea do úmero", "inervation": "Nervo axilar", "action": "Abdução, extensão e flexão", "movePlan": "Frontal, sagital e Transverso", "imageId": 5}, {"name": "BÍCEPS BRAQUIAL", "origin": "Tubérculo supra glenoidal e processo coracoide", "insertion": "Tuberosidade do rádio", "inervation": "Nervo musculocutâneo", "action": "Flexão e supinação do antebraço", "movePlan": "Transverso, sagital e frontal", "imageId": 6}, {"name": "BRAQUIAL", "origin": "Face anterior da metade distal do úmero", "insertion": "Processo coronoide da ulna", "inervation": "Nervo musculocutâneo", "action": "Flexão do antebraço", "movePlan": "Sagital", "imageId": 7}, {"name": "CORACOBRAQUIAL", "origin": "Processo coracoide da escápula", "insertion": "Terço médio do úmero", "inervation": "Nervo musculocutâneo", "action": "Flexão e Adução do ombro", "movePlan": "Transverso", "imageId": 8}, {"name": "TRÍCEPS BRAQUIAL", "origin": "Tubérculo infraglenoidal, face posterior do úmero e sulco radial", "insertion": "Olécrano", "inervation": "Nervo radial", "action": "Extensão do antebraço", "movePlan": "Sagital, frontal e transverso", "imageId": 9}, {"name": "BRAQUIORRADIAL", "origin": "Crista supraepicondilar lateral do úmero", "insertion": "Processo estiloide do rádio", "inervation": "Nervo radial", "action": "Pronação, supinação e Flexão do antebraço", "movePlan": "Sagital e transverso", "imageId": 10}, {"name": "EXTENSOR RADIAL LONGO DO CARPO", "origin": "Crista supraepicondilar lateral do úmero", "insertion": "Base do 2° metacarpal", "inervation": "Nervo radial", "action": "Extensão do punho e abdução da mão (desvio radial)", "movePlan": "Sagital, transverso e frontal", "imageId": 11}, {"name": "EXTENSOR RADIAL CURTO DO CARPO", "origin": "Epicôndilo lateral do úmero", "insertion": "Base do 3° metacarpal", "inervation": "Nervo radial", "action": "Extensão do punho", "movePlan": "Sagital e frontal", "imageId": 12}, {"name": "EXTENSOR ULNAR DO CARPO", "origin": "Epicôndilo lateral do úmero", "insertion": "Base do 5° metacarpal", "inervation": "Nervo radial", "action": "Extensão e adução do punho (desvio ulnar)", "movePlan": "Sigital e frontal", "imageId": 13}, {"name": "EXTENSOR DOS DEDOS", "origin": "Epicôndilo lateral do úmero", "insertion": "Falanges média e distal do 2° ao 5° dedos", "inervation": "Nervo radial", "action": "Extensão do punho", "movePlan": "Sagital", "imageId": 14}]');

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

showAllCards();
