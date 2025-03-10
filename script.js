// locomotive js for smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page1Animation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.9,
    stagger: 0.3,
  });
}
page1Animation();

//cursor
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});
// document.querySelector(".child1").addEventListener("mouseenter", function () {
//   gsap.to("#cursor", {
//     transform: "translate(-50%, -50%) scale(1)",
//   });
// });
// document.querySelector(".child1").addEventListener("mouseleave", function () {
//   gsap.to("#cursor", {
//     transform: "translate(-50%, -50%) scale(0)",
//   });
// });
document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)",
    });
  });
});
