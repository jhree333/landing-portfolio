export default function updateIntroduce() {
  $("body").click(function (e) {
    gsap.set(".emoji", {
      x: e.clientX,
      y: e.clientY,
    });

    let motion = gsap.timeline({});
    motion
      .addLabel("a1")
      .to(".emoji", { opacity: 1 }, "a1")
      .to(
        ".emoji",
        0.5,
        {
          x: "random(" + (e.clientX - 100) + "," + (e.clientX + 100) + ")",
          y: "random(" + (e.clientY - 100) + "," + (e.clientY + 100) + ")",
        },
        "a1"
      )
      .to(".emoji", { opacity: 0 });
    // motion.kill();
    motion.restart();
  });

  let motion2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".chat_wrap",
      start: "top 70%",
      end: "bottom top",
      // markers: true,
      scrub: 0.1,
    },
  });
  motion2
    .addLabel("m1")
    .to(".chat1", { x: -30, y: -100, rotate: 10 }, "m1")
    .to(".chat2", { x: 30, y: -100, rotate: 10 }, "m1")
    .to(".chat3", { x: -150, rotate: 20 }, "m1")
    .to(".chat4", { x: 130, rotate: 20 }, "m1")
    .to(".chat5", { x: -200, rotate: -50 }, "m1")
    .to(".chat6", { x: 100, rotate: -50 }, "m1");
}
