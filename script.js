const campus = document.querySelector("summary");
const flexCampus = document.getElementById("campus-flex");

campus.addEventListener("click", () => {
  if (flexCampus.style.display === "block") {
    flexCampus.style.display = "none";
  } else {
    flexCampus.style.display = "block";
  }
});

const more = document.getElementById("more");
const more_content = document.querySelector(".more-content");

more.addEventListener("click", () => {
  if (more) {
    more_content.classList.toggle("active");
  }
});

const search = document.getElementById("search");
const bgSearch = document.querySelector(".query");

search.addEventListener("click", () => {
  if (bgSearch.style.display === "none") {
    bgSearch.style.display = "flex";
  } else {
    bgSearch.style.display = "none";
  }
});

const menu = document.getElementById("menu");
const lapse = document.querySelector(".lapse");

menu.addEventListener("click", () => {
  if (menu) {
    lapse.classList.toggle("active");
  }
});
