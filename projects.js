const projects = [
  {
    card: 1,
    client: 'Canopy',
    id: 3,
    year: 2015,
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the',
    image: './img/images/Snapshoot Portfolio.svg',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/LethaboMot',
    link: 'https://lethabomot.github.io/Port-folio/',
  },
  {
    card: 2,
    client: 'Canopy',
    id: 3,
    year: 2015,
    name: 'Multi-Post Stories ',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the',
    image: './img/images/colorfulbasketball.svg',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/LethaboMot',
    link: 'https://lethabomot.github.io/Port-folio/',
  },
  {
    card: 3,
    name: 'Facebook',
    client: 'Canopy',
    id: 3,
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the',
    image: './img/images/colorfulbasketball.svg',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/LethaboMot',
    link: 'https://lethabomot.github.io/Port-folio/',
  },
  {
    card: 4,
    client: 'Canopy',
    id: 3,
    year: 2015,
    name: 'Uber Navigation Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the',
    image: './img/images/orange ting.svg"',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/LethaboMot',
    link: 'https://lethabomot.github.io/Port-folio/',
  },
];

window.onclick = function (event) {
  if (event.target === projects) {
    projects.style.display = 'none';
  }
};

const nameObj = document.getElementById('name');
const emailObj = document.getElementById('mail');
const msgObj = document.getElementById('message');

// form addEventListener on change
// stringify the object 

contactForm.addEventListener('input', () => {

  localStorage.setItem("name", JSON.stringify(nameObj.value));
  localStorage.setItem("email", JSON.stringify(emailObj.value));
  localStorage.setItem("message", JSON.stringify(msgObj.value));

})

// window eventlistener on load 
// parse the string
// place it in the fields

window.addEventListener('load', () => {

  nameObj.value = JSON.parse(localStorage.getItem("name"));
  emailObj.value = JSON.parse(localStorage.getItem("email"));
  msgObj.value = JSON.parse(localStorage.getItem("message"));

})