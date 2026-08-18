
function toggleSidebar() {

    let sidebar = document.getElementById("sidebar-inner");

    if(sidebar.style.right === "0px"){
        sidebar.style.right = "-400px";
    }
    else{
        sidebar.style.right = "0px";
    }

}





	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.filters').on( 'click', 'button', function() {
		$('.filters button').removeClass('active');
		$(this).addClass('active');
	
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

					
	if(document.getElementById("days")){

    const releaseDate = new Date("December 31, 2026 23:59:59").getTime();

    function updateTimer() {

        const now = new Date().getTime();
        const distance = releaseDate - now;

        if (distance < 0) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
	}

if(document.querySelector('.tabs')){
const tab = document.querySelector('.tabs');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
	//Hide All Tabpane
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});
	
	//Deselect Tab Button
	tabButtons.forEach( button => {
		button.setAttribute('aria-selected', 'false');
	});
	
	//Mark New Tab
	e.currentTarget.setAttribute('aria-selected', 'true');
	
	//Show New Tab
	const { id } = e.currentTarget;
	
	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);
	
	currentTab.hidden = false;
}

tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
})

}


new Swiper('.team-swiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,

	speed: 3000,

	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

	navigation: {
		nextEl: '.team-swiper-button-next',
		prevEl: '.team-swiper-button-prev',
	},

	breakpoints: {
			320: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
	}
});


const swiper = new Swiper(".music-swiper", {
  slidesPerView: 8,
  spaceBetween: 1,
  loop: true,
  speed: 1800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".team-swiper-button-next",
    prevEl: ".team-swiper-button-prev",
  },
  
  
  breakpoints: {
				320: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 6,
				},
				1200: {
					slidesPerView: 8,
				}
			}
});

		const header = document.querySelector(".header-inner");
  const toggleClass = "is-sticky";

  window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});



const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});






const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


if(document.querySelector(".cursor-dot")){


	const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0,
    mouseY = 0;
let outlineX = 0,
    outlineY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();
}

if(document.getElementById("music-loader")){
window.addEventListener("load", function () {
    const loader = document.getElementById("music-loader");

    setTimeout(function () {
        loader.classList.add("hide");

        setTimeout(function () {
            loader.remove();
        }, 600);

    }, 800); // 3000ms = 3 seconds
});

}
if(document.querySelector(".cursor-dot")){
	const cursor = document.querySelector(".cursor-dot");

	document.querySelectorAll("a").forEach(link => {

		link.addEventListener("mouseenter", () => {
			cursor.classList.add("cursor-hover");
		});

		link.addEventListener("mouseleave", () => {
			cursor.classList.remove("cursor-hover");
		});

	});


}
    new WOW().init();

if(document.getElementById("scrollToTop")){

const scrollBtn = document.getElementById("scrollToTop");
const progressBar = document.querySelector(".progress-bar");

const circumference = 2 * Math.PI * 44;

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / documentHeight;

    // Fill circle according to scroll
    const offset = circumference - (scrollPercent * circumference);

    progressBar.style.strokeDashoffset = offset;

    // Show button after scrolling
    if (scrollTop > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
}


















document.addEventListener("DOMContentLoaded", () => {

  const slides = [
    {
      number: "01",
      title: "Upcoming Music",
      author: "By: Lother Leaxe,",
      location: "New York",
      heading: "Upcoming Events for Music, Film, and Art Lovers",
      description:
        "Velit egestas dui id ornare arcu. Nibh sit amet commodo nulla vehicula. Arcu dictum varius duis at consectetur. Faucibus",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85"
    },

    {
      number: "02",
      title: "Sound Cloud",
      author: "By: Lother Leaxe,",
      location: "New York",
      heading: "Discover New Sounds and Amazing Artists",
      description:
        "Explore fresh music, independent artists and exciting sounds from around the world.",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85"
    },

    {
      number: "03",
      title: "Live Stream",
      author: "By: Lother Leaxe,",
      location: "New York",
      heading: "Experience Music Live From Anywhere",
      description:
        "Enjoy live performances, exclusive events and unforgettable musical experiences online.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85"
    },

    {
      number: "04",
      title: "Art & Film",
      author: "By: Lother Leaxe,",
      location: "New York",
      heading: "The Latest in Film, Art and Culture",
      description:
        "Discover inspiring artists, filmmakers and creative events happening around the city.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85"
    }
  ];


  /* =========================
     ELEMENTS
  ========================= */

  const slider = document.getElementById("eventSlider");

  const activeArea = document.getElementById("activeArea");
  const slideContent = document.getElementById("slideContent");

  const activeNumber = document.getElementById("activeNumber");
  const author = document.getElementById("author");
  const location = document.getElementById("location");
  const heading = document.getElementById("heading");
  const description = document.getElementById("description");
  const slideImage = document.getElementById("slideImage");

  const sidePrev = document.getElementById("sidePrev");
  const sideNext = document.getElementById("sideNext");
  const sideNext2 = document.getElementById("sideNext2");

  const prevNumber = document.getElementById("prevNumber");
  const prevTitle = document.getElementById("prevTitle");

  const nextNumber = document.getElementById("nextNumber");
  const nextTitle = document.getElementById("nextTitle");

  const nextNumber2 = document.getElementById("nextNumber2");
  const nextTitle2 = document.getElementById("nextTitle2");


  /* =========================
     CURRENT SLIDE
  ========================= */

  let currentIndex = 0;


  /* =========================
     GET SLIDE INDEX
  ========================= */

  function getIndex(index) {
    return (index + slides.length) % slides.length;
  }


  /* =========================
     UPDATE SIDE PANELS
  ========================= */

  function updateSidePanels() {

    const prevIndex = getIndex(currentIndex - 1);
    const nextIndex = getIndex(currentIndex + 1);
    const nextIndex2 = getIndex(currentIndex + 2);

    const prevSlide = slides[prevIndex];
    const nextSlide = slides[nextIndex];
    const nextSlide2 = slides[nextIndex2];


    // Previous
    prevNumber.textContent = prevSlide.number;
    prevTitle.textContent = prevSlide.title;

    sidePrev.dataset.index = prevIndex;


    // Next
    nextNumber.textContent = nextSlide.number;
    nextTitle.textContent = nextSlide.title;

    sideNext.dataset.index = nextIndex;


    // Next 2
    nextNumber2.textContent = nextSlide2.number;
    nextTitle2.textContent = nextSlide2.title;

    sideNext2.dataset.index = nextIndex2;
  }


  /* =========================
     UPDATE ACTIVE SLIDE
  ========================= */

  function updateSlide(index, direction = "next") {

    currentIndex = getIndex(index);

    const slide = slides[currentIndex];


    // Animation out
    slideContent.classList.remove("slide-in-left", "slide-in-right");

    slideContent.classList.add(
      direction === "next"
        ? "slide-out-left"
        : "slide-out-right"
    );


    setTimeout(() => {

      // Content
      activeNumber.textContent = slide.number;
      author.textContent = slide.author;
      location.textContent = slide.location;
      heading.textContent = slide.heading;
      description.textContent = slide.description;

      // Image
      slideImage.src = slide.image;
      slideImage.alt = slide.title;


      // Side panels
      updateSidePanels();


      // Remove old animation
      slideContent.classList.remove(
        "slide-out-left",
        "slide-out-right"
      );


      // Animation in
      slideContent.classList.add(
        direction === "next"
          ? "slide-in-right"
          : "slide-in-left"
      );

    }, 250);
  }


  /* =========================
     NEXT
  ========================= */

  function nextSlide() {

    updateSlide(
      currentIndex + 1,
      "next"
    );
  }


  /* =========================
     PREVIOUS
  ========================= */

  function previousSlide() {

    updateSlide(
      currentIndex - 1,
      "prev"
    );
  }


  /* =========================
     CLICK SIDE PANELS
  ========================= */

  sidePrev.addEventListener("click", () => {

    const index = Number(sidePrev.dataset.index);

    updateSlide(index, "prev");

  });


  sideNext.addEventListener("click", () => {

    const index = Number(sideNext.dataset.index);

    updateSlide(index, "next");

  });


  sideNext2.addEventListener("click", () => {

    const index = Number(sideNext2.dataset.index);

    updateSlide(index, "next");

  });


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
      nextSlide();
    }

    if (e.key === "ArrowLeft") {
      previousSlide();
    }

  });


  /* =========================
     TOUCH / SWIPE
  ========================= */

  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

  }, { passive: true });


  slider.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

  }, { passive: true });


  function handleSwipe() {

    const distance = touchEndX - touchStartX;

    // Minimum swipe distance
    if (Math.abs(distance) < 50) return;


    if (distance < 0) {
      // Swipe left
      nextSlide();
    } else {
      // Swipe right
      previousSlide();
    }

  }


  /* =========================
     MOUSE DRAG
  ========================= */

  let mouseStartX = 0;
  let mouseEndX = 0;
  let isDragging = false;


  slider.addEventListener("mousedown", (e) => {

    isDragging = true;
    mouseStartX = e.clientX;

  });


  slider.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    mouseEndX = e.clientX;

  });


  slider.addEventListener("mouseup", () => {

    if (!isDragging) return;

    isDragging = false;

    const distance = mouseEndX - mouseStartX;

    if (Math.abs(distance) < 50) return;

    if (distance < 0) {
      nextSlide();
    } else {
      previousSlide();
    }

  });


  slider.addEventListener("mouseleave", () => {

    isDragging = false;

  });


  /* =========================
     INITIALIZE
  ========================= */

  updateSidePanels();

});






        // Back to top button

        const backTop = document.getElementById("backTop");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });


        // Service card interaction

        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            card.addEventListener("mouseenter", () => {

                cards.forEach(item => {
                    item.classList.remove("active");
                });

                card.classList.add("active");

            });

        });


