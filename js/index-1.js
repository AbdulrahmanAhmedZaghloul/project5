$(window).scroll(function () {
  let doscroll = $(window).scrollTop();
  if (doscroll > teoset - 50) {
    $("#ven").css("backgroundColor", "rgba(0, 0, 0, 0.9)");
    $("#butup").fadeIn(500);
  } else {
    $("#ven").css("backgroundColor", " transparent");
    $("#butup").fadeOut(500);
  }
});

$("#butup").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 6000);
});

$("a[href^='#']").click(function () {
  let ahref = $(this).attr("href");
  let asd = $(ahref).offset().top;
  $("html,body").animate({ scrollTop: asd }, 2000);
});
$("#toggln").click(function () {
  let boxwidth = $("#colorbox").innerWidth();
  if ($("#side").css("left") == "0px") {
    $("#side").animate({ left: `-${boxwidth}` }, 1000);
  } else {
    $("#side").animate({ left: `0px` }, 1000);
  }
});

for (let i = 0; i < $(".item").length; i++) {
  let red = Math.round(Math.random() * 234);
  let red1 = Math.round(Math.random() * 234);
  let red2 = Math.round(Math.random() * 234);
  $(".item").eq(i).css("backgroundColor", `rgb(${red},${red1},${red2})`);
}

$(".item").click(function () {
  let xcolor = $(this).css("backgroundColor");
  $("p ,h1 ,h2,h3,h4,h5,h6,a").css("color", xcolor);
});

$(document).ready(function () {
  $("#loed").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});
let x = setTimeout(function () {
  console.log("hllol");
}, 3000);

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();

window.addEventListener("scroll", activeMenu);
/////////////////// sticky navbar  ////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});
/////////////////// toggle icon navbar  ////////////////////////
let menuIcon = document.querySelector("#menu-icon");

let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  //  menuIcon.classList.toggle("fa-thin");
  menuIcon.classList.toggle("fa-xmark");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  //  menuIcon.classList.toggle("fa-thin");
  menuIcon.classList.remove("fa-xmark");
  navlist.classList.remove("open");
};
