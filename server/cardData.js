const CARD_ARRAY = [
  { id: 1, name: 'alvarezsaurus', imgUrl: '/img/alvarezsaurus.svg', type: 'land', power: 3, cost: 5  },
  { id: 2, name: 'amargasaurus', imgUrl: '/img/amargasaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 3, name: 'ampelosaurus', imgUrl: '/img/ampelosaurus.svg', type: 'land', power: 7, cost: 11  },
  { id: 4, name: 'ankylosaurus', imgUrl: '/img/ankylosaurus.svg', type: 'land', power: 6, cost: 9  },
  { id: 5, name: 'apatosaurus', imgUrl: '/img/apatosaurus.svg', type: 'land', power: 2, cost: 3  },
  { id: 6, name: 'azendohsaurus', imgUrl: '/img/azendohsaurus.svg', type: 'land', power: 2, cost: 3  },
  { id: 7, name: 'bactrosaurus', imgUrl: '/img/bactrosaurus.svg', type: 'land', power: 4, cost: 6  },
  { id: 8, name: 'baryonyx', imgUrl: '/img/baryonyx.svg', type: 'land', power: 7, cost: 11  },
  { id: 9, name: 'basilosaurus', imgUrl: '/img/basilosaurus.svg', type: 'water', power: 9, cost: 14  },
  { id: 10, name: 'bat', imgUrl: '/img/bat.svg', type: 'air', power: 6, cost: 9  },
  { id: 11, name: 'beipiaosaurus', imgUrl: '/img/beipiaosaurus.svg', type: 'air', power: 3, cost: 5  },
  { id: 12, name: 'bird', imgUrl: '/img/bird.svg', type: 'air', power: 3, cost: 5  },
  { id: 13, name: 'buitreraptor', imgUrl: '/img/buitreraptor.svg', type: 'land', power: 5, cost: 8  },
  { id: 14, name: 'caudipteryx', imgUrl: '/img/caudipteryx.svg', type: 'land', power: 4, cost: 6  },
  { id: 15, name: 'clam', imgUrl: '/img/clam.svg', type: 'water', power: 1, cost: 2  },
  { id: 16, name: 'coelophysis', imgUrl: '/img/coelophysis.svg', type: 'land', power: 6, cost: 9  },
  { id: 17, name: 'corythosaurus', imgUrl: '/img/corythosaurus.svg', type: 'land', power: 2, cost: 3  },
  { id: 18, name: 'dilophosaurus', imgUrl: '/img/dilophosaurus.svg', type: 'land', power: 1, cost: 2  },
  { id: 19, name: 'elasmosaurus', imgUrl: '/img/elasmosaurus.svg', type: 'water', power: 6, cost: 9  },
  { id: 20, name: 'euskelosaurus', imgUrl: '/img/euskelosaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 21, name: 'fish', imgUrl: '/img/fish.svg', type: 'water', power: 4, cost: 6  },
  { id: 22, name: 'graciliceratops', imgUrl: '/img/graciliceratops.svg', type: 'land', power: 8, cost: 13  },
  { id: 23, name: 'herrerasaurus', imgUrl: '/img/herrerasaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 24, name: 'hummingbird', imgUrl: '/img/hummingbird.svg', type: 'air', power: 1, cost: 2  },
  { id: 25, name: 'ichthyosaurus', imgUrl: '/img/ichthyosaurus.svg', type: 'water', power: 4, cost: 6  },
  { id: 26, name: 'iguanodon', imgUrl: '/img/iguanodon.svg', type: 'land', power: 1, cost: 2  },
  { id: 27, name: 'jellyfish', imgUrl: '/img/jellyfish.svg', type: 'water', power: 8, cost: 13  },
  { id: 28, name: 'lambeosaurus', imgUrl: '/img/lambeosaurus.svg', type: 'land', power: 3, cost: 5  },
  { id: 29, name: 'owl', imgUrl: '/img/owl.svg', type: 'air', power: 5, cost: 8  },
  { id: 30, name: 'pachycephalosaurus', imgUrl: '/img/pachycephalosaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 31, name: 'parasaurolophus', imgUrl: '/img/parasaurolophus.svg', type: 'land', power: 3, cost: 5  },
  { id: 32, name: 'pelicanimimus', imgUrl: '/img/pelicanimimus.svg', type: 'land', power: 1, cost: 2  },
  { id: 33, name: 'plateosaurus', imgUrl: '/img/plateosaurus.svg', type: 'land', power: 7, cost: 11  },
  { id: 34, name: 'protoceratops', imgUrl: '/img/protoceratops.svg', type: 'land', power: 6, cost: 9  },
  { id: 35, name: 'pterodactyl', imgUrl: '/img/pterodactyl.svg', type: 'air', power: 8, cost: 13  },
  { id: 36, name: 'rhamphorhynchus', imgUrl: '/img/rhamphorhynchus.svg', type: 'air', power: 7, cost: 11  },
  { id: 37, name: 'sauropelta', imgUrl: '/img/sauropelta.svg', type: 'land', power: 3, cost: 5  },
  { id: 38, name: 'scelidosaurus', imgUrl: '/img/scelidosaurus.svg', type: 'land', power: 4, cost: 6  },
  { id: 39, name: 'scutellosaurus', imgUrl: '/img/scutellosaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 40, name: 'spinosaurus', imgUrl: '/img/spinosaurus.svg', type: 'land', power: 10, cost: 15  },
  { id: 41, name: 'starfish', imgUrl: '/img/starfish.svg', type: 'water', power: 2, cost: 2  },
  { id: 42, name: 'stegosaurus', imgUrl: '/img/stegosaurus.svg', type: 'land', power: 8, cost: 13  },
  { id: 43, name: 'styracosaurus', imgUrl: '/img/styracosaurus.svg', type: 'land', power: 5, cost: 8  },
  { id: 44, name: 'syntarsus', imgUrl: '/img/syntarsus.svg', type: 'land', power: 7, cost: 11  },
  { id: 45, name: 'toucan', imgUrl: '/img/toucan.svg', type: 'air', power: 3, cost: 5  },
  { id: 46, name: 'triceratops', imgUrl: '/img/triceratops.svg', type: 'land', power: 8, cost: 13  },
  { id: 47, name: 'tyrannosaurus-rex', imgUrl: '/img/tyrannosaurus-rex.svg', type: 'land', power: 10, cost: 15  },
  { id: 48, name: 'velociraptor', imgUrl: '/img/velociraptor.svg', type: 'land', power: 8, cost: 13  },
  { id: 49, name: 'whale', imgUrl: '/img/whale.svg', type: 'water', power: 10, cost: 15  },
  { id: 50, name: 'yinlong', imgUrl: '/img/yinlong.svg', type: 'land', power: 5, cost: 8  },
  { id: 51, name: 'dracorex', imgUrl: '/img/dracorex.svg', type: 'land', power: 8, cost: 13  },
]

module.exports = { CARD_DATA:  CARD_ARRAY }
