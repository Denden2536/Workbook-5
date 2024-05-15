"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/300x300",
    description: "placeholder 10",
  },
];

let imgList = document.querySelector("#imgList");
let addButton = document.querySelector("#addButton");
let clearButton = document.querySelector("#clearButton");
let imgDisplay = document.querySelector("#imgDisplay");
window.onload = function init() {
  //get all html elements into variables

  setImage();
  addButton.onclick = displayImage;
};
//define  your functions

function setImage() {
  for (const imageFile of imageFiles) {
    let imgOption = document.createElement("option");
    imgOption.value = imageFile.id;
    imgOption.innerText = imageFile.description;
    imgList.appendChild(imgOption);
  }
}

function displayImage() {
  let id = imgList.value;
  for (const imageFile of imageFiles) {
    if (imageFile.id == id) {
      let image = document.createElement("img");
      image.src = imageFile.path;
      image.alt = imageFile.id;
      imgDisplay.appendChild(image);
    }
  }
}
//associate your functions with html element events
