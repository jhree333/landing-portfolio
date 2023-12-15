export default function updateIntro() {
  let motion01 = gsap.timeline({});

  motion01.fromTo(
    ".sc_intro h2",
    0.3,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      filter: "blur(16px)",
    }
  );
  ScrollTrigger.create({
    animation: motion01,
    trigger: ".sc_intro",
    start: "20% top",
    end: "+=100%",
    // markers: true,
    scrub: 0,
  });
}
