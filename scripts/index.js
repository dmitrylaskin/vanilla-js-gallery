const navbar = document.querySelector(".navbar");
const photos = document.querySelectorAll(".photo__item");

navbar.addEventListener("click", (event) => {
  if (event.target.classList.contains("navbar-item")) {
    navbar.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    const dataFilter = event.target.getAttribute("data-filter");
    
    photos.forEach((item) => {
        
      if (item.classList.contains(dataFilter) || dataFilter === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });
  }
});
