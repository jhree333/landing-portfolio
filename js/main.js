import updateIntro from "./section/intro.js";
import updateIntroduce from "./section/introduce.js";
import updateWorks from "./section/works.js";

$(function () {
  for (let index = 1; index < 8; index++) {
    $("body").append('<span class="emoji"><img src="./images/icon/img0' + index + '.png"></span>');
  }

  // back_top 버튼
  $(".back_top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  const initialize = () => {
    updateIntro();
    updateIntroduce();
    updateWorks();
  };

  initialize();
});
