//store datas
let movies = [
  {
    name: "falcon and the winter soldier",
    des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Addolorum est quis dignissimos quas iste culpa, vel eos magnam tempore nemo vitae necessitatibus laboriosam quam commodi corrupti, illo aliquid similique!",
    image: "images/slider 2.png",
  },
  {
    name: "loki",
    des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Addolorum est quis dignissimos quas iste culpa, vel eos magnam tempore nemo vitae necessitatibus laboriosam quam commodi corrupti, illo aliquid similique!",
    image: "images/slider 1.png",
  },
  {
    name: "wanda vision",
    des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Addolorum est quis dignissimos quas iste culpa, vel eos magnam tempore nemo vitae necessitatibus laboriosam quam commodi corrupti, illo aliquid similique!",
    image: "images/slider 3.png",
  },
  {
    name: "raya and the last dragon",
    des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Addolorum est quis dignissimos quas iste culpa, vel eos magnam tempore nemo vitae necessitatibus laboriosam quam commodi corrupti, illo aliquid similique!",
    image: "images/slider 4.png",
  },
  {
    name: "luca",
    des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Addolorum est quis dignissimos quas iste culpa, vel eos magnam tempore nemo vitae necessitatibus laboriosam quam commodi corrupti, illo aliquid similique!",
    image: "images/slider 5.png",
  },
];

//catch carousel class div in HTML
const carousel = document.querySelector(".carousel");

let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slider = document.createElement("div");
  let imgElement = document.createElement("img");
  let slide_content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  imgElement.src = movies[slideIndex].image;
  carousel.appendChild(slider);
  slider.appendChild(slide_content);
  slide_content.appendChild(h1);
  slide_content.appendChild(p);
  slider.appendChild(imgElement);

  slideIndex++;

  //add class attribute
  slider.className = "slider";
  slide_content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slider);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.chilren[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

// nav toggle
function toggleNav() {
  var navItems = document.querySelector(".nav-links");
  navItems.style.display =
    navItems.style.display === "flex" ? "none" : "flex";
}
