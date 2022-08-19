window.addEventListener("mousemove", function (dets) {
  document.querySelector("#mouse").style.top = `${dets.clientY}px`;
  document.querySelector("#mouse").style.left = `${dets.clientX}px`;
});
var ti = gsap.timeline();

ti.to("#count", {
  top: "75%",
  duration: 0,
  color: "black",
});
ti.to("#count", {
  color: "white",
});
ti.to("#c32", {
  top: "60%",
  duration: 0,
  color: "black",
});
ti.to("#c32", {
  color: "white",
});

ti.to("#c75", {
  top: "28%",
  duration: 0,
  color: "black",
});
ti.to("#c75", {
  color: "white",
});
ti.to("#c100", {
  top: "2%",
  duration: 0,
  color: "black",
});
ti.to("#c100", {
  color: "black",
});

ti.to("#loading", {
  //     ScrollTrigger:{
  //     trigger:"#loading",
  // start:"center center",
  // end:"top 50%",
  //     scrub:2,
  //     pin :true,
  //     markers:true
  //     },
  // rotate:"260deg",
  duration: 3,
  top: "-110%",

  ease: Expo.easeInOut,
});


ti.to("#txt h1", {
  duration: 1,
  opacity: 2,
  ease: Expo.easeInOut,
  onClick: function () {
    $(" #txt h1").textillate({ in: { effect: "fadeInUp" } });
  },
});

// gsap.to("#abouticon",{
//     scrollTrigger:{
//         trigger:"#aboutus",
//         start:"50px 40%",
//         end:"100vh 10%",
//         scrub:2,

//         markup:true,

//     },
//     width:"50%",
//     height:"50%",
//     transform:" rotate(270deg)",

//     ease: Power0.easeInOut
// })

var ex = gsap.timeline();

ex.to("#abouticon", {
  scrollTrigger: {
    trigger: "#exit",
    start: "50px 90%",
    end: "100vh 40%",
    scrub: 2,
    markup: true,
  },
  width: "50%",
  height: "50%",
  transform: " rotate(270deg)",
  display: "none",
  duration: 1,
  ease: Power0.easeInOut,
});

// var logo=document.querySelector("#logo");
// logo.addEventListener("mousemove")

VanillaTilt.init(document.querySelectorAll(".socList li>a"), {
  max: 10,
  speed: 100,
  glare: true,
  "max-glare": 0.65,
});

VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 25,
  speed: 400,
});

//popup setting

setTimeout(function () {
  document.getElementById("pop").classList.add("active");
}, 10000);

document.getElementById("closePop").addEventListener("click", function () {
  document.getElementById("pop").classList.remove("active");
});

// Gigi's JS
function scrollEv(leftArrow, rightArrow, carousel) {
  if (carousel.scrollLeft <= 0) {
    leftArrow.classList.add("arrow-inactive");
  } else {
    leftArrow.classList.remove("arrow-inactive");
  }
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth - 1) {
    rightArrow.classList.add("arrow-inactive");
  } else {
    rightArrow.classList.remove("arrow-inactive");
  }
}

function clicleftArrow(carousel, rectList) {
  let shiftScroll;
  for (let i = 0; i < rectList.length; i++) {
    if (carousel.scrollLeft > rectList[rectList.length - 1]) {
      shiftScroll = rectList[rectList.length - 1];
    } else if (
      carousel.scrollLeft > rectList[i] &&
      carousel.scrollLeft <= rectList[i + 1]
    ) {
      shiftScroll = rectList[i];
    }
  }
  carousel.scrollTo({
    left: shiftScroll,
    behavior: "smooth",
  });
}

function clickRight(carousel, rectList) {
  let shiftScroll;
  for (let i = 0; i < rectList.length; i++) {
    if (
      carousel.scrollLeft >= rectList[i] - 1 &&
      carousel.scrollLeft < rectList[i + 1]
    ) {
      shiftScroll = rectList[i + 1];
    }
  }
  carousel.scrollTo({
    left: shiftScroll,
    behavior: "smooth",
  });
}

function listRectCarousel(carouselNumber, carousels) {
  let divs = carousels[carouselNumber].getElementsByClassName("carousel-item");
  let rectList = [];
  let rectGauche = carousels[carouselNumber].getBoundingClientRect().left;

  for (let i = 0; i < divs.length; i++) {
    let rect = divs[i].getBoundingClientRect();
    rectList.push(rect.left - rectGauche);
  }

  for (let i = rectList.length - 1; i >= 0; i--) {
    rectList[i] = rectList[i] - rectList[0];
  }
  return rectList;
}

function autoSlidePosLeft(carouselNumber, carousels, leftArrows) {
  let rectList = listRectCarousel(carouselNumber, carousels);
  leftArrows[carouselNumber].addEventListener("click", () => {
    clicleftArrow(carousels[carouselNumber], rectList);
  });
}

function autoSlidePosRight(carouselNumber, carousels, rightArrows) {
  let rectList = listRectCarousel(carouselNumber, carousels);
  rightArrows[carouselNumber].addEventListener("click", () => {
    clickRight(carousels[carouselNumber], rectList);
  });
}

window.onload = () => {
  let leftArrows = document.getElementsByClassName("left-arrow");
  let rightArrows = document.getElementsByClassName("right-arrow");
  let carousels = document.getElementsByClassName("carousel");

  for (let i = 0; i < leftArrows.length; i++) {
    autoSlidePosLeft(i, carousels, leftArrows);
    window.onresize = () => {
      autoSlidePosLeft(i, carousels, leftArrows);
    };
  }

  for (let i = 0; i < rightArrows.length; i++) {
    autoSlidePosRight(i, carousels, rightArrows);
    window.onresize = () => {
      autoSlidePosRight(i, carousels, rightArrows);
    };
  }

  for (let i = 0; i < carousels.length; i++) {
    carousels[i].addEventListener("scroll", () => {
      scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
    });
  }

  for (let i = 0; i < carousels.length; i++) {
    scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
    window.onresize = () => {
      scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
    };
  }
};
