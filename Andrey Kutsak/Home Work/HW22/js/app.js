$("document").ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 2,
        nav: true,
      },
      720: {
        items: 4,
        nav: true,
      },
    },
  });
  // resize video
  $(".youtube").width(100 + "%");
  let wdth = $(".youtube").width();
  $(".youtube").height(wdth / 1.7);
  // fixed menu on scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("header").addClass("fixed");
      $(".head-part").css("padding-top", $("header").height());
    } else {
      $("header").removeClass("fixed");
    }
  });
});
function r(f) {
  /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
}
r(function () {
  if (!document.getElementsByClassName) {
    // Поддержка IE8
    var getElementsByClassName = function (node, classname) {
      var a = [];
      var re = new RegExp("(^| )" + classname + "( |$)");
      var els = node.getElementsByTagName("*");
      for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
      return a;
    };
    var videos = getElementsByClassName(document.body, "youtube");
  } else {
    var videos = document.getElementsByClassName("youtube");
  }
  var nb_videos = videos.length;
  for (var i = 0; i < nb_videos; i++) {
    // Находим постер для видео, зная ID нашего видео
    videos[i].style.backgroundImage = "url(img/video-baner.jpg)";
    // Размещаем над постером кнопку Play, чтобы создать эффект плеера
    var play = document.createElement("div");
    play.setAttribute("class", "play");
    videos[i].appendChild(play);
    videos[i].onclick = function () {
      // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
      var iframe = document.createElement("iframe");
      var iframe_url =
        "https://www.youtube.com/embed/" + this.id + "?autoplay=1&mute=1";
      if (this.getAttribute("data-params"))
        iframe_url += "&" + this.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("frameborder", "0");
      // Высота и ширина iFrame будет как у элемента-родителя
      iframe.style.width = this.style.width;
      iframe.style.height = this.style.height;
      // Заменяем начальное изображение (постер) на iFrame
      this.parentNode.replaceChild(iframe, this);
    };
  }
});
