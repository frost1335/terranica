gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section,main");

sections.forEach((elem, index) => {
  gsap.from(elem, {
    y: 250,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%", // Animation starts when the top of the box is 80% in view
      end: "center 80%", // Animation ends when the center of the box is 80% in view
      markers: true, // Add visual markers to visualize trigger positions (remove in production)
      ease: "elastic",
      toggleActions: "play none none none", // Animation plays once when scrolling down and doesn't reverse
    },
  });
});

gsap.from("header", {
  y: -200,
  backgroundPosition: -300,
  opacity: 0,
  duration: 1.5,
  delay: 4.5,
});

gsap.from(".header__mid", {
  y: 300,
  opacity: 0,
  duration: 1.3,
  delay: 4.5,
});

gsap.from("#float__video", {
  opacity: 0,
  delay: 6,
  duration: 1,
});
