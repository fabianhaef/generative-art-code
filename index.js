// Import fs to handle file system
const fs = require("fs")

// load functions form canvas library
const { createCanvas, loadImage} = require("canvas");

// create a canvas with 1000 x 1000 Pixel size
const canvas = createCanvas(1000, 1000);

// context is mandatory to draw and make shapes etc.
const ctx = canvas.getContext("2d")


const saveLayer = (_canvas) => {
  // to save file you need to buffer the image wiht the to buffer function
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("Image created")

};

// multiple layers for our art => not only one layer
const drawLayer = async () => {
  // takes in data as parameter after image is loaded
  const image = await loadImage('./Logo.png')
  // parameters are img, x, y, width and height
  ctx.drawImage(image, 0, 0, 1000, 1000);

  console.log("This ran");
  saveLayer(canvas);
};

drawLayer();