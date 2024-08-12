var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (dets) {
  var rectloc = rect.getBoundingClientRect();
  var inrect = dets.clientX - rectloc.left;

  if (inrect < rectloc.width / 2) {
    var redcolor = gsap.utils.mapRange(0, rectloc.width / 2, 255, 0, inrect);
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      opacity: 0.8,
      ease: "power4",
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      rectloc.width / 2,
      rectloc.width,
      0,
      255,
      inrect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      opacity: 0.8,
      ease: "power4",
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, { backgroundColor: "white", opacity: 1 });
});
