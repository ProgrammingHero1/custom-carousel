const img = document.getElementById("carousel-img");

setInterval(() => {
  change(1);
}, 4000);

const change = (task) => {
  let index = parseInt(img.getAttribute("src").at(-5));
  if (index === 1 && !task) {
    index = 9;
  } else if (index === 9 && task) index = 1;
  img.setAttribute("src", `/images/pic-${task ? ++index : --index}.jpg`);
};
