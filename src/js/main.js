import owl from "owl.carousel"

$(".rotator.owl-carousel").owlCarousel({
  dots: false,
  items: 1,
  autoplay: true,
  loop: true,
})

$(".row.owl-carousel").owlCarousel({
  dots: false,
  items: 1,
  loop: true,
  margin: 10,
  responsive: {
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
      margin: 33,
    },
  },
})
