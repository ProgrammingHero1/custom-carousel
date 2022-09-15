const images = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg",
];

let imgIndex = 0;

const img = document.getElementById("carousel-img");

setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgLink = images[imgIndex];
  img.setAttribute("src", imgLink);
  imgIndex++;
}, 4000);

const change = (task) => {
  let index = parseInt(img.getAttribute("src").at(-5));
  if (index === 1 && !task) {
    index = 9;
  } else if (index === 9 && task) index = 1;
  img.setAttribute("src", `/images/pic-${task ? ++index : --index}.jpg`);
};
