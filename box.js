
  const loopTrack = document.getElementById("loopTrack");

  // Duplicate elements for smooth scrolling
  loopTrack.innerHTML += loopTrack.innerHTML;

  let speed = 1; // pixels per frame

  function animate() {
    loopTrack.scrollLeft += speed;

    const firstBox = loopTrack.children[0];
    const boxWidth = firstBox.offsetWidth + 20; // 20 = gap

    if (loopTrack.scrollLeft >= boxWidth) {
      loopTrack.appendChild(firstBox);
      loopTrack.scrollLeft -= boxWidth;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);


  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
