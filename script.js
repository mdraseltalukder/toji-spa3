// animation for the carousel
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.fromTo(
  ".header-img",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scale: 1,
    delay: 0.4,
    duration: 0.4,
    ease: "power2.out",
  }
);

tl.fromTo(
  ".desktob-nav",
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  }
);
// tl.fromTo(
//   ".logo-img",
//   {
//     opacity: 0,
//     scale: 1,
//   },
//   {
//     scale: 1,
//     opacity: 1,
//     duration: 0.6,
//     ease: "power2.out",
//   }
// );

tl.fromTo(
  "#rock_left",
  {
    opacity: 0,
    x: -600,
    rotate: -100,
  },
  {
    opacity: 1,
    x: 0,
    rotate: 0,
    duration: 1.6,
    ease: "power2.out",
  },
  "rockStart"
);

tl.fromTo(
  "#rock_right",
  {
    opacity: 0,
    x: 600,
    rotate: 100,
  },
  {
    opacity: 1,
    x: 0,
    rotate: 0,
    duration: 1.6,
    ease: "power2.out",
  },
  "rockStart"
);

// scroll animation
gsap.fromTo(
  "#rock_right",
  {
    x: 0,
    rotate: 0,
  },
  {
    scrollTrigger: {
      trigger: "#rock_right",
      start: "top 10%",
      end: "bottom 20%",
      scrub: true,
    },
    x: 600,
    rotate: 100,
    ease: "none",
  }
);
gsap.fromTo(
  "#rock_left",
  {
    x: 0,
    rotate: 0,
  },
  {
    scrollTrigger: {
      trigger: "#rock_right",
      start: "top 10%",
      end: "bottom 20%",
      scrub: true,
    },
    x: -400,
    rotate: -100,
    ease: "none",
  }
);
gsap.fromTo(
  ".logo-img",
  {
    scale: 1,
    opacity: 1,
  },
  {
    scrollTrigger: {
      trigger: ".logo-img",
      start: "top 20%",
      end: "bottom 20%",
      scrub: true,
    },
    scale: 0.5,
    opacity: 0.5,
    ease: "none",
  }
);
gsap.fromTo(
  "#hero-title",
  {
    y: 100,
    opacity: 0.3,
  },
  {
    scrollTrigger: {
      trigger: "#hero-title",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: "none",
  }
);
// about
// about section bg animation
gsap.to(".bg-animate", {
  rotation: 5,
  x: 50,
  scale: 1.05,
  duration: 6,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
});

gsap.fromTo(
  "#about-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.4,
  },
  {
    scrollTrigger: {
      trigger: "#about-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    scale: 1,
    ease: "power2.out",
  }
);
gsap.to(".tree_left", {
  scrollTrigger: {
    trigger: ".tree_left",
    start: "top 60%",
    end: "bottom 20%",
    scrub: true,
  },

  rotate: -30,
  ease: "power2.inOut",
});

// service
gsap.fromTo(
  "#service-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.4,
  },
  {
    scrollTrigger: {
      trigger: "#service-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    scale: 1,
    ease: "power2.out",
  }
);
// benefit
gsap.fromTo(
  "#benefit-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.4,
  },
  {
    scrollTrigger: {
      trigger: "#benefit-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    ease: "power2.out",
    scale: 1,
  }
);
gsap.fromTo(
  "#benefit-img",
  {
    rotate: -40,
  },
  {
    scrollTrigger: {
      trigger: "#benefit-img",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },
    rotate: 0,
    ease: "power2.out",
  }
);
gsap.fromTo(
  "#benefit-content",
  {
    opacity: 0.2,
    filter: "blur(10px)",
  },
  {
    scrollTrigger: {
      trigger: "#benefit-content",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    opacity: 1,
    filter: "blur(0px)",
    ease: "power2.out",
  }
);
gsap.to(".right-benefit-img", {
  scrollTrigger: {
    trigger: ".right-benefit-img",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true,
  },

  rotate: 0,
  ease: "power2.inOut",
});
// bath

gsap.fromTo(
  "#bath-img",
  {
    rotate: -40,
  },
  {
    scrollTrigger: {
      trigger: "#bath-img",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },
    rotate: 0,
    ease: "power2.out",
  }
);
gsap.fromTo(
  "#bath-content",
  {
    opacity: 0.2,
    filter: "blur(10px)",
  },
  {
    scrollTrigger: {
      trigger: "#bath-content",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    opacity: 1,
    filter: "blur(0px)",
    ease: "power2.out",
  }
);
// hotstone

gsap.fromTo(
  "#hotstone-img",
  {
    rotate: 40,
  },
  {
    scrollTrigger: {
      trigger: "#hotstone-img",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },
    rotate: 0,
    ease: "power2.out",
  }
);
gsap.fromTo(
  "#hotstone-content",
  {
    opacity: 0.2,
    filter: "blur(10px)",
  },
  {
    scrollTrigger: {
      trigger: "#hotstone-content",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    opacity: 1,
    filter: "blur(0px)",
    ease: "power2.out",
  }
);

// testimonial

gsap.fromTo(
  "#testimonial-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.8,
  },
  {
    scrollTrigger: {
      trigger: "#testimonial-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    ease: "power2.out",
    scale: 1,
  }
);
gsap.fromTo(
  ".right-tree",
  {
    scale0: 0.8,
  },
  {
    scrollTrigger: {
      trigger: ".right-tree",
      start: "top 60%",
      end: "bottom 20%",
      scrub: true,
    },
    scale: 1,
    rotate: 30,
    ease: "power2.inOut",
  }
);

// career

gsap.fromTo(
  "#career-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.8,
  },
  {
    scrollTrigger: {
      trigger: "#career-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    ease: "power2.out",
    scale: 1,
  }
);
// training

gsap.fromTo(
  "#training-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.8,
  },
  {
    scrollTrigger: {
      trigger: "#training-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    ease: "power2.out",
    scale: 1,
  }
);
// expertise

gsap.fromTo(
  "#expertise-title",
  {
    filter: "blur(80px)",
    y: 100,
    scale: 0.8,
  },
  {
    scrollTrigger: {
      trigger: "#expertise-title",
      start: "top 100%",
      end: "bottom 60%",
      scrub: true,
    },

    filter: "blur(0px)",
    y: 0,
    ease: "power2.out",
    scale: 1,
  }
);
