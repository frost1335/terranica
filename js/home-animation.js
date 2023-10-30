gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((elem, index) => {
  gsap.from(elem, {
    y: 250,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: elem,
      start: "top 70%", // Animation starts when the top of the box is 80% in view
      end: "center 70%", // Animation ends when the center of the box is 80% in view
      //   markers: true, // Add visual markers to visualize trigger positions (remove in production)
      ease: "elastic",
      toggleActions: "play none none none", // Animation plays once when scrolling down and doesn't reverse
    },
  });
});

gsap.from("header", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  delay: 4.5,
  onComplete: () => {
    document.querySelector("header").style.transform = "unset";
  },
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

gsap.from("main", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "main",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from("#security-title", {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: "#security",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from("#security-img", {
  scale: 1.5,
  duration: 2,
  scrollTrigger: {
    trigger: "#security",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from("#myTab", {
  duration: 1.5,
  opacity: 0,
  y: -200,
  scrollTrigger: {
    trigger: "#security",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from(["#three-bg-img", "#three-bg-text"], {
  duration: 2,
  scale: 2,
  y: -150,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#three_model",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from("#three-text-span", {
  y: 70,
  opacity: 0.4,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#three_model",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from(".gallery-content img", {
  scale: 1.5,
  duration: 2,
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});

gsap.from("#interior .carousel-item img", {
  scale: 1.5,
  duration: 2,
  scrollTrigger: {
    trigger: "#interior",
    start: "top 70%",
    end: "center 70%",
    ease: "elastic",
    toggleActions: "play none none none",
  },
});
