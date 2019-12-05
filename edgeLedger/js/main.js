//Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 44.786568, lng: 20.448921 };
  // Center map on the location
  const map = new google.maps.Map(document.querySelector(".map"), {
    //Your location
    center: loc,
    zoom: 14
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("navbar").style.opacity = 1;
  }
});

// Smooth Scrolling

$("#navbar a, btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
