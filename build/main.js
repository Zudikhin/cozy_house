$(document).ready(function() {
  "use strict";

  $("#burger_btn").click(function() {
    $("#burger_btn").toggleClass("active");
    $(".header__nav-mobile").toggleClass("active");
    $(".header__logo").toggleClass("change");
    $("body").toggleClass("notouch");
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".content__input").each(function(i, elem) {
    $(elem).focusin(function() {
      $(this).css("border", "1px solid #b2b2b2");
    });
    $(elem).focusout(function() {
      $(this).css("border", "1px solid #efefef");
    });
  });

  $(".popup__instagram input").on("propertychange input", function(e) {
    if (this.value == "") {
      $(this)
        .siblings("span")
        .removeClass("active");
      $(this).removeClass("active");
    } else {
      $(this)
        .siblings("span")
        .addClass("active");
      $(this).addClass("active");
    }
    if ($("#login-insta").val() != "" && $("#pass-insta").val() != "") {
      $(".insta__submit").addClass("active");
      $(".vk__submit").prop("disabled", false);
    } else {
      $(".insta__submit").removeClass("active");
      $(".vk__submit").prop("disabled", true);
    }
  });

  $("#pass-insta").on("propertychange input", function(e) {
    if (this.value == "") {
      $("#pass-insta").attr("type", "password");
      $(".insta__show").css("display", "none");
      $(".insta__hide").css("display", "none");
    } else {
      if ($("#pass-insta").attr("type") == "text") {
        $(".insta__show").css("display", "none");
      } else {
        $(".insta__show").css("display", "block");
      }
    }
  });

  $(".insta__show").click(function() {
    var btnShow = $(".insta__password input");
    if (btnShow.attr("type") == "password") {
      btnShow.attr("type", "text");
    }
    $(this).css("display", "none");
    $(".insta__hide").css("display", "block");
  });

  $(".insta__hide").click(function() {
    var btnHide = $(".insta__password input");
    if (btnHide.attr("type") == "text") {
      btnHide.attr("type", "password");
    }
    $(this).css("display", "none");
    $(".insta__show").css("display", "block");
  });

  $(".insta__close").click(function() {
    $(".popup__instagram").removeClass("active");
  });

  $(".vk__btn_show").click(function() {
    var btnShow = $(".vk__password");
    if (btnShow.attr("type") == "password") {
      btnShow.attr("type", "text");
    }
    $(this).css("display", "none");
    $(".vk__btn_hide").css("display", "block");
  });

  $(".vk__btn_hide").click(function() {
    var btnHide = $(".vk__password");
    if (btnHide.attr("type") == "text") {
      btnHide.attr("type", "password");
    }
    $(this).css("display", "none");
    $(".vk__btn_show").css("display", "block");
  });

  $(".vk__password").on("propertychange input", function(e) {
    if (window.screen.availWidth < 576) {
      if (this.value == "") {
        $(".vk__password").attr("type", "password");
        $(".vk__btn_show").css("display", "none");
        $(".vk__btn_hide").css("display", "none");
      } else {
        if ($(".vk__password").attr("type") == "text") {
          $(".vk__btn_show").css("display", "none");
        } else {
          $(".vk__btn_show").css("display", "block");
        }
      }
    } else {
      return false;
    }
  });

  $(".popup__vk input").on("propertychange input", function(e) {
    if ($(".vk__login").val() != "" && $(".vk__password").val() != "") {
      $(".vk__submit").prop("disabled", false);
      $(".vk__submit").addClass("active");
    } else {
      $(".vk__submit").prop("disabled", true);
      $(".vk__submit").removeClass("active");
    }
  });

  $(".vk__close").click(function() {
    $(".popup__vk").removeClass("active");
  });

  $(".friends__slider").slick({
    infinite: true,
    mobileFirst: true,
    prevArrow: $(".arrow-prev"),
    nextArrow: $(".arrow-next"),

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  var btnNextSlider = document.querySelector(".arrow-next");
  btnNextSlider.addEventListener(
    "click",
    function(e) {
      btnNextSlider.classList.remove("active");

      void btnNextSlider.offsetWidth;

      btnNextSlider.classList.add("active");
    },
    false
  );

  var btnPrevSlider = document.querySelector(".arrow-prev");
  btnPrevSlider.addEventListener(
    "click",
    function(e) {
      btnPrevSlider.classList.remove("active");

      void btnPrevSlider.offsetWidth;

      btnPrevSlider.classList.add("active");
    },
    false
  );

  $(".header__login").click(function() {
    $(".popup__login").addClass("active");
    $("body").css("overflow-y", "hidden");
  });

  $(".popup__login").click(function(e) {
    var div = $(".popup__login .content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup__login").removeClass("active");
      $("body").css("overflow-y", "auto");
    }
  });

  $(".content__close").click(function() {
    $(".popup__login").removeClass("active");
    $("body").css("overflow-y", "auto");
  });

  $("#content_Insta").click(function() {
    $(".popup__instagram").addClass("active");
  });

  $("#content_Vk").click(function() {
    $(".popup__vk").addClass("active");
  });

  $(".all__pagination button").click(function() {
    $(".all__pagination button").removeClass("active");
    $(this).addClass("active");
  });
});
