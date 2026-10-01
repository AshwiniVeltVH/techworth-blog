/* =========================================================
   TECHWORTH — WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            /*
             * CSS uses the "active" class to display
             * the mobile navigation menu.
             */
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });


        /* Close menu when a navigation link is clicked */

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";

            });

        });

    }


    /* =====================================================
       NEWSLETTER FORM
       ===================================================== */

    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput = newsletterForm.querySelector("input");

            if (!emailInput || emailInput.value.trim() === "") {

                alert("Please enter your email address.");

                return;
            }

            alert(
                "Thanks for subscribing to TechWorth! 🎉\n\n" +
                "Newsletter functionality will be connected later."
            );

            emailInput.value = "";

        });

    }


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thanks for contacting TechWorth! ✉️\n\n" +
                "Your message has been received."
            );

            contactForm.reset();

        });

    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchForm = document.querySelector(".search-box");

    if (searchForm) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchInput = searchForm.querySelector("input");

            if (!searchInput) {
                return;
            }

            const searchTerm =
                searchInput.value.trim().toLowerCase();

            if (searchTerm === "") {

                alert("Please type something to search.");

                return;
            }


            /*
             * Simple article search.
             * Later we can replace this with a proper
             * search system.
             */

            const articles =
                document.querySelectorAll(".article-card");

            let found = false;

            articles.forEach(function (article) {

                const articleText =
                    article.textContent.toLowerCase();

                if (articleText.includes(searchTerm)) {

                    article.style.display = "block";

                    found = true;

                } else {

                    article.style.display = "none";

                }

            });


            if (!found) {

                alert(
                    "No articles found for: " +
                    searchInput.value
                );

            }

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       SCROLL TO TOP
       ===================================================== */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});