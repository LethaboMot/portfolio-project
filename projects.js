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
