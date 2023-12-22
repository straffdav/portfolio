"use strict";

gsap.registerPlugin(ScrollTrigger);
gsap.to("#create", {
  scrollTrigger: ".reveal",
  y: '0%',
  duration: 0.3,
  stagger: 0.1,
  delay: 0.1
});
gsap.to(".demo", {
  scrollTrigger: ".demo",
  opacity: '100%',
  duration: 0.5,
  stagger: 0,
  delay: 0.2
});
gsap.from(".demo", {
  scrollTrigger: ".demo",
  x: '20%',
  y: '20%',
  duration: 0.9,
  delay: 0.2
});
gsap.to(".demo", {
  scrollTrigger: {
    scrub: true
  },
  y: function y(i, target) {
    return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
  },
  ease: "none"
});
gsap.from(".line", {
  scrollTrigger: "#reveal2",
  opacity: '0',
  duration: 0.5,
  width: 1,
  delay: 0,
  stagger: 0.1
}, 0.2);
gsap.to("#show", {
  scrollTrigger: "#reveal2",
  x: '0%',
  duration: 0.3,
  stagger: 0.1,
  delay: 0
});
gsap.to(".word1", {
  scrollTrigger: {
    trigger: ".word3",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
    pin: ".scrub" //markers: true,

  },
  x: '-100%'
});
gsap.to(".word2", {
  scrollTrigger: {
    trigger: ".word3",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
    pin: ".scrub" // markers: true,

  },
  x: '-100%'
});
gsap.to(".word3", {
  scrollTrigger: {
    trigger: ".word3",
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
    pin: ".scrub" // markers: true,

  },
  x: '-100%'
});