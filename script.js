// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page's filename (e.g., "about.html" or "contact.html")
  var currentPage = window.location.pathname.split("/").pop();

  // Add event listeners to the buttons
  document.getElementById("about").addEventListener("click", function () {
    window.location.href = "about.html";
  });

  document.getElementById("apply").addEventListener("click", function () {
    window.location.href = "apply.html";
  });

  document.getElementById("contact").addEventListener("click", function () {
    window.location.href = "contact.html";
  });

  // Set the "active" class for the current page's link
  var currentLink = document.getElementById(currentPage.replace(".html", ""));
  if (currentLink) {
    currentLink.classList.add("active");
  }

  // Add click event listeners to update active class on click
  var navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      navItems.forEach(function (navItem) {
        navItem.classList.remove("active");
      });

      // Add 'active' class to the clicked item
      item.classList.add("active");
    });
  });
});
