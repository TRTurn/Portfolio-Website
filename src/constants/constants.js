export const hostedProjects = [
  {
    title: '3STAT: 3X (ETF) Short Term Algorithmic Trader (Senior Project)',
    description: "Within a team I designed and built a web app to determine buy and sell signals for 3X leveraged ETFs for a client: Levrum Data Technologies. Users are notified via email about changes in signaling for their selected ETFs or they can choose to access the information directly via the REST API. ",
      image: '/images/stock-market.png',
      tags: ['Mongo', 'Flask', 'React', 'Python'],
    source: 'https://github.com/CSToddDEV/CS467-Short-Term-Algorithmic-Strategies',
    visit: 'https://www.cstodd.dev/3stat',
    id: 0,
  },
  {
    title: 'E-Commerce w/ Microservices Architecture (Coming Soon)',
    description:"I am currently building a full e-commerce application to better get an understanding of using microservices architecture in conjunction with containerization via Docker. Estimated Completion: Early Mar. 2022",
    image: '/images/e-commerce.png',
    tags: ['Docker', 'Node.js', 'Mongo', 'Typescript'],
    source: '',
    visit: '',
    id: 1,
  },

  // Hosted Project Template
  // {
  //   title: '',
  //   description: "",
  //   image: '',
  //   tags: [''],
  //   source: '',
  //   visit: '',
  //   id: 
  // },
];

export const unhostedProjects = [
    {
    title: 'Flappy Bird',
    description: "Utilizes the NeuroEvolution of Augmenting Topologies (NEAT) evolutionary algorithm to effectively solve the game Flappy Bird. The game was created using PyGame and the AI is run using the NEAT-python-library",
    image: '/images/flappy-bird.png',
    tags: ['Python', 'NEAT Algorithm', 'Deep Learning', 'PyGame'],
    source: 'https://github.com/TRTurn/flappy-bird-NEAT-AI',
    id: 2
  },
  {
    title: 'Small Shell: Clang',
    description: "A simple shell created for my Operating Systems course at Oregon State. Low level != Slow level",
    image: '/images/c-shell.png',
    tags: ['CLang', 'Shell Scripting'],
    source: 'https://github.com/TRTurn/smallsh-cs-344',
    id: 1,
  },

    // Unhosted Project Template
  {
    title: 'A* Pathfinder',
    description: "An application that allows that displays a grid and allows a user to choose a starting and ending node. The user can then build barriers between the nodes before starting the algorithm. The algorithm then displays the process of traveling from node to node while searching for the ending location. ",
    image: '/images/pathfinder.png',
    tags: ['PyGame', 'Pathfinding Algorithm'],
    source: 'https://github.com/TRTurn/Pathfinder-Visualization',
    id: 0
  },
      // Unhosted Project Template
  // {
  //   title: '',
  //   description: "",
  //   image: '',
  //   tags: [''],
  //   source: '',
  //   id: 
  // },
]

export const TimeLineData = [
  { year: 2017, month: "Jun", text: 'Graduated from University California, San Diego with a B.S. in Biochemistry', },
  { year: 2017, month: "Jul", text: 'Moved from San Diego to Seattle', },
  { year: 2017, month: "Nov", text: 'Started working for a local biotech focused on immunodiagnostic research', },
  { year: 2019, month: "Jan", text: 'Enrolled in Oregon State University\'s Computer Science postbac program', },
  { year: 2021, month: "Dec", text: 'Graduated from Oregon State University with a BS in Computer Science', },
];

export const hobbies = [
  { name: 'Mountaineering ', description: 'Baker | Rainier | Washington '},
  { name: 'Guitar', description: 'Electric | Acoustic', },
  { name: 'Archery', description: 'Compound | Target', },
  { name: 'Skiing', description: 'Freeride | AT', }
];