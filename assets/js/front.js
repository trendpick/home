$(function () {
  new WOW().init();

  $(".counter").counterUp({
    time: 1000,
    delay: 10,
  });

  const $win = $(window),
    $header = $("header"),
    menu = $header.find("nav > ul > li"),
    menuBtn = $header.find("h2"),
    submenu = $(".submenu");

  menu.on({
    mouseenter: function () {
      if ($win.width() > 980) $(this).find(submenu).fadeIn(150);
    },
    mouseleave: function () {
      if ($win.width() > 980) $(this).find(submenu).fadeOut(150);
    },
  });

  menu.find("> a").on("click", function (e) {
    let $this = $(this).closest("li");
    if ($this.find("ul").is(submenu)) {
      e.preventDefault();

      if ($this.is(".on")) {
        $this.removeClass("on").find(submenu).slideUp();
      } else {
        $this.addClass("on").find(submenu).slideDown();
      }
    } else {
      menu.removeClass("on").find(submenu).slideUp();
    }
  });

  let scrT,
    headH,
    resultSection = $(".results");

  $win
    .on("scroll", function () {
      scrT = $win.scrollTop();

      if (scrT > 0) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
        if ($header.find("nav ul").is(".mb_show")) $header.addClass("fixed");
        if ($("#container").is(".sub_page")) $header.addClass("fixed");
      }

      if (resultSection.length > 0) {
        if (scrT > resultSection.offset().top - $win.height() / 2)
          resultSection.addClass("on");
      }
    })
    .scroll();

  if ($("#container").is(".sub_page")) {
    $header.addClass("fixed");
  }

  menuBtn.on("click", function () {
    $header.is(".fixed") && scrT == 0
      ? $header.removeClass("fixed")
      : $header.addClass("fixed");
    $header.find("nav > ul").toggleClass("mb_show");

    $header.is(".clr_change") && scrT == 0
      ? $header.removeClass("clr_change")
      : $header.addClass("clr_change");

    if ($("#container").is(".sub_page")) $header.addClass("fixed");
  });

  //top 踰꾪듉
  $(".top_btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //reason �곸뿭 �뺣젹
  const reasonLi = $(".reason ol li");
  $win
    .on("resize", function () {
      $win.width() > 768
        ? reasonLi.height(reasonLi.find(".pic").height())
        : reasonLi.height("auto");
      headH = $header.height();
    })
    .resize();

  //faq
  const faqTit = $(".toggle_list .tit"),
    faqCon = $(".toggle_list .con");

  faqTit.each(function () {
    $(this).on("click", function () {
      if ($(this).is(".on")) {
        $(this).removeClass("on").siblings(faqCon).slideUp();
      } else {
        faqTit.removeClass("on").siblings(faqCon).slideUp();
        $(this).addClass("on").siblings(faqCon).slideDown();
        if ($(this).siblings(faqCon).length == 0) $(this).removeClass("on");
      }
    });
  });

  //�뚮젅�댁뒪 �쒕퉬��
  $(".service_go").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $('[position-data="here"]').offset().top - headH,
    });
  });

  //硫붿씤 鍮꾩＜�� 踰꾪듉 �대┃��
  $(".result_go").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(".video_ad").offset().top - headH,
    });
  });

  //媛��대뜲 �붿냼 留덉슦�ㅼ삤踰�
  $(".review .story ul li:nth-child(2)").on({
    mouseenter: function () {
      if ($win.width() > 980) $(".review").addClass("on");
    },
    mouseleave: function () {
      if ($win.width() > 980) $(".review").removeClass("on");
    },
  });

  $(".review .story ul li:not(.active)").on("mouseover", function () {
    $(".review .story ul li").removeClass("active");
  });

  // 梨꾩슜 - 理쒓퀬�� 蹂듭��낅땲�� �щ씪�대뱶
  if ($(".happy_swiper").length > 0) {
    const happySwiper = new Swiper(".happy_swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: "auto",
    });
  }

  // 梨꾩슜 - 理쒗븯�� �대�吏� �щ씪�대뱶
  if ($(".just_imgslide").length > 0) {
    $(".just_imgslide").slick({
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      variableWidth: true,
      touchMove: false,
      draggable: false,
      cssEase: "linear",
    });
  }

  const conTab = $(".please_tab li"),
    conTabCon = $(".please_con > div");

  conTab
    .on("click", function () {
      let i = $(this).index();

      conTab.removeClass("on").eq(i).addClass("on");
      conTabCon.hide().eq(i).show();
    })
    .eq(0)
    .trigger("click");

  if ($(".business_entity .bu_slide").length > 0) {
    $(".bu_slide ul").slick({
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      variableWidth: true,
      touchMove: false,
      draggable: false,
    });
  }
});

$(window).load(function () {
  if ($(".review_grid").length > 0) {
    $(".review_grid").masonry({
      itemSelector: ".rv_item",
    });
  }
});
