const fs = require("fs");

// setup project and make it reusable in this config file
const width = 1000;
const height = 1000;
const dir = __dirname;

// rarites

const rarity = [
  {key: "",   val: "original"},
  {key: "_r",   val: "rare"},
  {key: "_sr",   val: "super rare"},
];

const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
}


// clean name
const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "")
  });
  return name;
}

// get all elements from 
const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/^(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        rarity: addRarity(i),
      }
    })
}

const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background`,
    elements: getElements(`${dir}/background`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 2,
    name: "ball",
    location: `${dir}/ball`,
    elements: getElements(`${dir}/ball`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 3,
    name: "bottomlid",
    location: `${dir}/bottomlid`,
    elements: getElements(`${dir}/bottomlid`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 4,
    name: "eyecolor",
    location: `${dir}/eyecolor`,
    elements: getElements(`${dir}/eyecolor`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 5,
    name: "iris",
    location: `${dir}/iris`,
    elements: getElements(`${dir}/iris`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 6,
    name: "shine",
    location: `${dir}/shine`,
    elements: getElements(`${dir}/shine`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
  {
    id: 7,
    name: "toplid",
    location: `${dir}/toplid`,
    elements: getElements(`${dir}/toplid`),
    position: {x: 0, y: 0},
    size: {width: width, height: height},
  },
]

module.exports = {layers, width, height};