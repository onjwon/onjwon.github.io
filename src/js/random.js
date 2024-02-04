const randomImg = document.querySelector(".random");

function random() {
  let images = [],
    index = 0;

  images[0] = "src/images/img01.jpg";
  images[1] = "src/images/img02.jpg";
  images[2] = "src/images/img03.jpg";
  images[3] = "src/images/img04.jpg";


  index = Math.floor(Math.random() * images.length);
  randomImg.style.background = `url('${images[index]}') no-repeat center center / cover`;
}

setInterval(random, 5000);
