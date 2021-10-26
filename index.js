// Import fs to handle file system
const fs = require("fs")

// load functions form canvas library
const { createCanvas, loadImage} = require("canvas");

// import layers, width and height from config
const {layers, width, height} = require('./input/config.js');

// create a canvas with 1000x 1000 Pixel size
const canvas = createCanvas(1000, 1000);

// context is mandatory to draw and make shapes etc.
const ctx = canvas.getContext("2d")

// Number of Images you want to create
const edition = 10;

const saveLayer = (_canvas, _edition) => {
  // to save file you need to buffer the image wiht the to buffer function
  fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer("image/png"));
};

// multiple layers for our art => not only one layer
const drawLayer = async (_layer, _edition) => {
  let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)]
  // takes in data as parameter after image is loaded
  const image = await loadImage(`${_layer.location}${element.fileName}`)
  // parameters are img, x, y, width and height
  ctx.drawImage(image, _layer.position.x, _layer.position.y, _layer.position.width, _layer.position.height);
  saveLayer(canvas, _edition);
};

for(let i = 1; i <= edition; i++) {
  layers.forEach((layer) => {
    drawLayer(layer, i);
  });

}
