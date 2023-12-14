/** @format */

let toggler = document.querySelector(".mobile-header .toggle");
let dropMenu = document.querySelector(".drob-menu");
let LocationsNav = document.querySelector(".header .locations");
let deliveyNavMob = document.querySelector(".drob-menu .delivery");
let LocationsNavMob = document.querySelector(".drob-menu .locations");
let locationToggler = document.querySelector(".location-head .toggle");
let locationSideBar = document.querySelector(".location-head");
let deliverSiderBar = document.querySelector(".delivery-head");
let deliveryToggler = document.querySelector(".delivery-head .toggle");
let deliveryNav = document.querySelector(".header .delivery");
let jumpButton = document.querySelector(".food-catagory-small .button");
let foodCatagorySmall = document.querySelector(".food-catagory-small");
let foodsmall = document.querySelectorAll(".food-small li");
let foodCatagory = document.querySelector(".food-catagory");
let catagories = document.querySelectorAll(".menu .catagory li");
let catagoryDetails = document.querySelectorAll(".catagory-details .details");
let scrollToTop = document.querySelector(".scrollToTop");
let scrollProgress = document.querySelector(".scroll-progress");
catagories.forEach((catagory) => {
  catagory.addEventListener("click", (element) => {
    catagories.forEach((catagory) => {
      catagory.classList.remove("active");
    });
    element.currentTarget.classList.add("active");
    if (element.currentTarget.dataset.cat != "foods") {
      foodCatagory.style.display = "none";
      foodCatagorySmall.style.display = "none";
    } else {
      foodCatagory.style.display = "flex";
      foodCatagorySmall.style.display = "block";
    }
    catagoryDetails.forEach((ele) => {
      if (ele.dataset.cat != element.currentTarget.dataset.cat) {
        ele.style.display = "none";
      } else {
        ele.style.display = "block";
      }
    });
  });
});
toggler.addEventListener("click", (element) => {
  dropMenu.classList.toggle("active");
  toggler.classList.toggle("active");
});
LocationsNav.addEventListener("click", (element) => {
  locationSideBar.classList.toggle("active");
  deliverSiderBar.classList.remove("active");
});
locationToggler.addEventListener("click", (element) => {
  locationSideBar.classList.toggle("active");
});
LocationsNavMob.addEventListener("click", (element) => {
  locationSideBar.classList.toggle("active");
  deliverSiderBar.classList.remove("active");
});
deliveyNavMob.addEventListener("click", (element) => {
  deliverSiderBar.classList.toggle("active");
  locationSideBar.classList.remove("active");
});
deliveryNav.addEventListener("click", (element) => {
  deliverSiderBar.classList.toggle("active");
  locationSideBar.classList.remove("active");
});
deliveryToggler.addEventListener("click", (element) => {
  deliverSiderBar.classList.toggle("active");
});
jumpButton.addEventListener("click", (element) => {
  foodCatagorySmall.classList.toggle("active");
});
window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
  scrollProgress.style.width = `${
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  }%`;
};
foodsmall.forEach((element) => {
  element.addEventListener("click", () => {
    foodCatagorySmall.classList.remove("active");
  });
});
