 
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll(".carousel-slide");
        const dots = document.querySelectorAll(".dot");

        // Auto-advance carousel
        function autoSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        setInterval(autoSlide, 7000);

        function currentSlide(n) {
            currentSlideIndex = n;
            showSlide(currentSlideIndex);
        }

        function showSlide(n) {
            slides.forEach((slide) => slide.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));

            slides[n].classList.add("active");
            dots[n].classList.add("active");
        }

        // Services carousel scroll
        let servicesScrollPosition = 0;

        function scrollServices(direction) {
            const track = document.getElementById("servicesTrack");
            const cardWidth = track.querySelector(".service-card").offsetWidth + 32; // Adjusted gap
            servicesScrollPosition += direction * cardWidth;

            const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
            servicesScrollPosition = Math.max(0, Math.min(servicesScrollPosition, maxScroll));

            track.style.transform = `translateX(-${servicesScrollPosition}px)`;
        }

        // Popup
        const popup = document.getElementById("popup");

        window.addEventListener("load", () => {
            setTimeout(() => {
                popup.classList.add("show");
            }, 5000);
        });

        function closePopup() {
            popup.classList.remove("show");
        }

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        // Header scroll effect
        window.addEventListener("scroll", () => {
            const header = document.querySelector(".header");
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });

        // Form submission
        document.querySelectorAll("form").forEach((form) => {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Thank you for your message! We will get back to you soon.");
                form.reset();
                closePopup();
            });
        });
   