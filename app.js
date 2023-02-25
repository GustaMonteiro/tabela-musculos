const itemsList = document.querySelector('#items-list');
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button')

const allItems = [];
const nomes = ["Sydney Mosley",
  "Paige Conway",
  "Denise Marquez",
  "Jessica Rangel",
  "Michael Bradley",
  "Martin Cunningham",
  "Rachel Ross",
  "Laura Schmidt",
  "Jared Carpenter",
  "Erin Hartman",
  "Marcus Mclean",
  "Natalie Walters",
  "Maria Miller",
  "James Morrison",
  "Rhonda Ramirez",
  "Shawn Hall",
  "Jesse Graham",
  "Kathryn Shannon",
  "Jeremy Hancock",
  "Steven Strickland",
  "David Woodard",
  "Ashley Gross",
  "Charles Butler",
  "Yolanda Reyes",
  "Wesley Wood",
  "Gerald Vincent",
  "Rhonda Johnson",
  "Andrew Anderson",
  "Christina Holmes",
  "Whitney Moreno",
  "Renan Fernandes",
  "Murilo Campos",
  "Bruna Cunha",
  "Luiza Azevedo",
  "Sr. Luiz Felipe Costela",
  "Vitor Correia",
  "Luiz Fernando Souza",
  "Júlia da Costa",
  "Isabel Freitas",
  "Sra. Bianca Fogaça",
  "Luiz Felipe da Mata",
  "Vicente Costa",
  "Nicolas da Mata",
  "Vitória Correia",
  "Sra. Lavínia Rocha",
  "Ana Beatriz Fernandes",
  "Stella Moreira",
  "Maitê Martins",
  "Dr. Samuel Barbosa",
  "Cauê Monteiro",
  "Vinicius Silva",
  "Nathan Martins",
  "Caio Farias",
  "Julia Ferreira",
  "Júlia Lima",
  "Yago da Rocha",
  "Dr. Luigi Cardoso",
  "Rafaela Viana",
  "Isabelly da Rosa",
  "Alexandre Oliveira",
  "Dra. Sabrina Campos",
  "Nathan Mendes",
  "Beatriz da Mata",
  "Dra. Helena Cardoso",
  "Caroline Cunha",
  "Sr. Levi Campos",
  "Davi Lucas Azevedo",
  "Carolina Nogueira",
  "Luana da Paz",
  "Sr. Marcelo Costela",
  "Dra. Alice Freitas",
  "Rafael da Mata",
  "Valentina da Mota",
  "Ryan Rodrigues",
  "Pedro Henrique Cunha",
  "Cecília da Conceição",
  "Luiz Fernando Rocha",
  "Enzo Gabriel da Rosa",
  "Ana Carolina Ferreira",
  "Brenda Almeida",
  "Yuri Barros",
  "Ana Beatriz Lopes",
  "Elisa da Conceição",
  "Maria Alice Araújo",
  "Samuel Peixoto",
  "Ana Julia Barbosa",
  "Pedro da Cunha",
  "Heloísa da Costa",
  "Thiago Ribeiro",
  "Thomas da Luz",
  "Vinicius Pereira",
  "Sr. Antônio das Neves",
  "Ana Oliveira",
  "Cauê Rezende",
  "Maria Fernanda Cavalcanti",
  "Pietro Correia",
  "Stella Araújo",
  "Sra. Clarice Peixoto",
  "Dr. Davi Barbosa",
  "Juliana Fernandes",
  "Antônio Moreira",
  "Dra. Daniela Nascimento",
  "Stella Araújo",
  "Ana Julia Dias",
  "Carlos Eduardo Alves",
  "Danilo Duarte",
  "Samuel Dias",
  "Maria Eduarda Aragão",
  "Davi Luiz Cardoso",
  "Thomas Lopes",
  "Benjamin Oliveira",
  "Gabriela Santos",
  "Sr. Diogo Nogueira",
  "Evelyn da Paz",
  "Gabriela Ribeiro",
  "Luiz Otávio Araújo",
  "Dr. Pedro Vieira",
  "Srta. Marcela Cunha",
  "Vitor Silva",
  "Sr. Enrico da Conceição",
  "Enzo Gabriel Alves",
  "Fernanda Farias",
  "Benício Cunha",
  "Ana Luiza da Cruz",
  "João Pereira",
  "Melissa da Luz",
  "Vitor Gabriel Costela",
  "Giovanna da Rosa",
  "Theo da Mata",
  "Brenda da Rocha"];

// for (let i = 0; i < 10; i++) {
//   const newLi = document.createElement('li');
//   newLi.innerText = `Item ${i + 1}`;
//   allItems.push(newLi);
// }

for (let nome of nomes) {
  const newLi = document.createElement('li');
  newLi.innerText = nome;
  allItems.push(newLi);
}

const showAllItems = () => {
  for (let item of allItems) {
    itemsList.appendChild(item);
  }
}

const removeAllItems = () => {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.lastChild);
  }
}

searchBar.addEventListener('input', e => {
  console.log(searchBar.value);

  if (!searchBar.value) return showAllItems();
  removeAllItems();

  for (let item of allItems) {
    if (item.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
      itemsList.appendChild(item);
    }
  }
})

searchButton.addEventListener('click', e => {
  e.preventDefault();
  console.log(searchBar.value);
})

showAllItems();