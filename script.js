$(".Ronak").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".Himanshu").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 100,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".Sunaina").slick({
  dots: true,
  infinite: true,
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".Sakshi").slick({
  dots: true,
  infinite: true,
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const span = document.querySelector(".typing_txt span");
const textArr = span.getAttribute("data-text").split(", ");
const maxTextIndex = textArr.length;
const sPerChar = 0.15;
const sBetweenWord = 1.5;
let textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  let charIndex = 0;
  const typeInterval = setInterval(() => {
    span.innerHTML += text[charIndex];
    if (charIndex++ === text.length - 1) {
      clearInterval(typeInterval);
      setTimeout(() => deleting(textIndex, text), sBetweenWord * 700);
    }
  }, sPerChar * 300);
}

function deleting(textIndex, text) {
  let charIndex = text.length - 1;
  const typeInterval = setInterval(() => {
    span.innerHTML = text.substring(0, charIndex--);
    if (charIndex < 0) {
      clearInterval(typeInterval);
      textIndex = (textIndex + 1) % maxTextIndex;
      setTimeout(
        () => typing(textIndex, textArr[textIndex]),
        sBetweenWord * 300
      );
    }
  }, sPerChar * 300);
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top_2").fadeIn();
    } else {
      $(".back-to-top_2").fadeOut();
    }
  });
  $(".back-to-top_2").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
