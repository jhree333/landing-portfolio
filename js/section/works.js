export default function updateWorks() {
  let gauge = gsap.to(".gauge, .curr", { width: 100 + "%" });
  ScrollTrigger.create({
    trigger: "body",
    animation: gauge,
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    scrub: 1,
  });
}
