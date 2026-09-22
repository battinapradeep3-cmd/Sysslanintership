/* =========================================================
   AURELIA - VIEW EVENT FUNCTION
   View Event click -> Complete Event Details
========================================================= */

const aureliaEvents = {

    "Velvet Symphony": {
        category: "CLASSICAL NIGHT",
        date: "20 SEP 2026",
        time: "7:00 PM",
        location: "Vijayawada",
        venue: "The Grand Arena",
        description:
            "An elegant classical evening featuring timeless melodies, beautiful performances and a premium atmosphere.",
        general: 799,
        vip: 1499,
        vvip: 2499
    },

    "Midnight Noir": {
        category: "NIGHT EXPERIENCE",
        date: "25 SEP 2026",
        time: "6:30 PM",
        location: "Visakhapatnam",
        venue: "Harbour Convention Centre",
        description:
            "Experience an unforgettable night filled with music, lights, entertainment and an exclusive premium atmosphere.",
        general: 649,
        vip: 1299,
        vvip: 2199
    },

    "Aurum Jazz": {
        category: "JAZZ EXPERIENCE",
        date: "02 OCT 2026",
        time: "7:30 PM",
        location: "Hyderabad",
        venue: "Skyline Arena",
        description:
            "Enjoy a sophisticated jazz evening featuring soulful performances, elegant ambience and unforgettable moments.",
        general: 899,
        vip: 1699,
        vvip: 2799
    },

    "Grand Vintner": {
        category: "LUXURY EVENING",
        date: "05 OCT 2026",
        time: "7:00 PM",
        location: "Bengaluru",
        venue: "The Garden Stage",
        description:
            "A luxurious evening designed around premium entertainment, beautiful ambience and curated experiences.",
        general: 749,
        vip: 1399,
        vvip: 2299
    },

    "Celestial Rooftop": {
        category: "ROOFTOP EXPERIENCE",
        date: "18 OCT 2026",
        time: "8:00 PM",
        location: "Mumbai",
        venue: "Metro Live Arena",
        description:
            "A spectacular rooftop experience combining music, city lights and an unforgettable night under the stars.",
        general: 999,
        vip: 1899,
        vvip: 2999
    },

    "Imperial Opera": {
        category: "OPERA NIGHT",
        date: "31 OCT 2026",
        time: "6:00 PM",
        location: "Goa",
        venue: "Neon Beach Arena",
        description:
            "A grand opera-inspired evening with dramatic performances, elegant surroundings and premium entertainment.",
        general: 1099,
        vip: 1999,
        vvip: 3499
    },

    "Elysian Nights": {
        category: "SIGNATURE NIGHT",
        date: "08 NOV 2026",
        time: "7:30 PM",
        location: "Chennai",
        venue: "Grand Convention Hall",
        description:
            "A signature night created for guests looking for premium entertainment, music and memorable experiences.",
        general: 899,
        vip: 1599,
        vvip: 2699
    },

    "Veloura": {
        category: "LUXURY EXPERIENCE",
        date: "15 NOV 2026",
        time: "8:00 PM",
        location: "Pune",
        venue: "Imperial Convention Centre",
        description:
            "Step into a world of luxury, music and refined entertainment at this exclusive evening experience.",
        general: 1199,
        vip: 2199,
        vvip: 3299
    },

    "Noir Élan": {
        category: "MIDNIGHT AFFAIR",
        date: "21 NOV 2026",
        time: "9:00 PM",
        location: "Delhi",
        venue: "The Grand Pavilion",
        description:
            "A stylish midnight affair featuring premium entertainment, atmospheric lighting and unforgettable moments.",
        general: 1299,
        vip: 2299,
        vvip: 3499
    },

    "Astral Reverie": {
        category: "COSMIC EXPERIENCE",
        date: "05 DEC 2026",
        time: "8:30 PM",
        location: "Kochi",
        venue: "Waterfront Arena",
        description:
            "A cosmic-inspired evening bringing together music, lights and an immersive waterfront experience.",
        general: 1099,
        vip: 1999,
        vvip: 2999
    }
};


/* =========================================================
   SHOW EVENT DETAILS
========================================================= */

function showEvent(eventName) {

    const event = aureliaEvents[eventName];

    if (!event) {
        console.error("Event not found:", eventName);
        return;
    }

    /* Close other modals */

    const modals = [
        "eventModal",
        "loginModal",
        "signupModal",
        "bookingModal",
        "confirmationModal"
    ];

    modals.forEach(function(id) {
        const modal = document.getElementById(id);

        if (modal) {
            modal.classList.remove("active");
            modal.style.display = "none";
        }
    });


    /* Create event details page */

    let page = document.getElementById("aureliaFullEventPage");

    if (!page) {

        page = document.createElement("div");

        page.id = "aureliaFullEventPage";

        document.body.appendChild(page);
    }


    page.innerHTML = `

        <div class="aurelia-event-page">

            <!-- CLOSE BUTTON -->

            <button
                onclick="closeEventDetails()"
                style="
                    position:fixed;
                    top:25px;
                    right:30px;
                    width:45px;
                    height:45px;
                    border-radius:50%;
                    border:1px solid #c9a96e;
                    background:#090807;
                    color:#c9a96e;
                    font-size:25px;
                    cursor:pointer;
                    z-index:10;
                "
            >
                ×
            </button>


            <!-- EVENT CONTENT -->

            <div class="aurelia-event-details">

                <div class="aurelia-event-main">

                    <span
                        style="
                            color:#c9a96e;
                            font-size:0.75rem;
                            letter-spacing:0.18em;
                        "
                    >
                        ${event.category}
                    </span>

                    <h1>
                        ${eventName}
                    </h1>

                    <p class="aurelia-event-description">
                        ${event.description}
                    </p>

                </div>


                <!-- EVENT INFORMATION -->

                <div class="aurelia-event-info">

                    <div>
                        <small>DATE</small>
                        <strong>${event.date}</strong>
                    </div>

                    <div>
                        <small>TIME</small>
                        <strong>${event.time}</strong>
                    </div>

                    <div>
                        <small>LOCATION</small>
                        <strong>${event.location}</strong>
                    </div>

                    <div>
                        <small>VENUE</small>
                        <strong>${event.venue}</strong>
                    </div>

                </div>

            </div>


            <!-- TICKET PRICES -->

            <div style="margin-top:45px;">

                <h3
                    style="
                        font-family:'Playfair Display',serif;
                        font-size:2rem;
                        margin-bottom:20px;
                    "
                >
                    Ticket Prices
                </h3>


                <div class="aurelia-event-prices">

                    <div class="aurelia-price">
                        <span>General</span>
                        <strong>₹${event.general}</strong>
                    </div>

                    <div class="aurelia-price">
                        <span>VIP</span>
                        <strong>₹${event.vip}</strong>
                    </div>

                    <div class="aurelia-price">
                        <span>VVIP</span>
                        <strong>₹${event.vvip}</strong>
                    </div>

                </div>

            </div>


            <!-- BOOK BUTTON -->

            <div
                style="
                    margin-top:45px;
                    display:flex;
                    gap:15px;
                    flex-wrap:wrap;
                "
            >

                <button
                    class="btn btn-primary"
                    onclick="startBookingFromEvent('${eventName}')"
                >
                    Book Tickets
                </button>

                <button
                    class="btn btn-outline"
                    onclick="closeEventDetails()"
                >
                    Back to Events
                </button>

            </div>

        </div>
    `;


    /* Show */

    page.style.display = "block";

    document.body.classList.add("no-scroll");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   CLOSE EVENT DETAILS
========================================================= */

function closeEventDetails() {

    const page =
        document.getElementById("aureliaFullEventPage");

    if (page) {
        page.style.display = "none";
    }

    document.body.classList.remove("no-scroll");
}


/* =========================================================
   BOOK FROM EVENT DETAILS
========================================================= */

function startBookingFromEvent(eventName) {

    const event = aureliaEvents[eventName];

    if (!event) {
        return;
    }

    /* Close full event page */

    closeEventDetails();


    /* Existing booking variables */

    if (typeof selectedEvent !== "undefined") {
        selectedEvent = eventName;
    }

    if (typeof selectedEventName !== "undefined") {
        selectedEventName = eventName;
    }


    /* Fill booking event name */

    const bookingEventName =
        document.getElementById("bookingEventName");

    if (bookingEventName) {
        bookingEventName.textContent = eventName;
    }


    /* Open booking modal */

    const bookingModal =
        document.getElementById("bookingModal");

    if (bookingModal) {

        bookingModal.classList.add("active");

        bookingModal.style.display = "flex";
    }

    document.body.classList.add("no-scroll");
}


/* =========================================================
   VIEW EVENT BUTTONS
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const eventCards =
        document.querySelectorAll(".event-card");


    eventCards.forEach(function(card) {

        const titleElement =
            card.querySelector("h3");

        const button =
            card.querySelector("button");


        if (!titleElement || !button) {
            return;
        }


        const eventName =
            titleElement.textContent.trim();


        button.addEventListener("click", function(e) {

            e.preventDefault();

            e.stopPropagation();

            showEvent(eventName);

        });

    });
/* =========================================================
   AURELIA - GUARANTEED VIEW EVENT FIX
   Paste this at the VERY END of script.js
========================================================= */

(function () {

    const EVENT_DATA = {

        "Velvet Symphony": {
            category: "CLASSICAL NIGHT",
            date: "20 SEP 2026",
            time: "7:00 PM",
            location: "Vijayawada",
            venue: "The Grand Arena",
            description: "An elegant classical evening featuring timeless melodies, beautiful performances and unforgettable moments.",
            general: 799,
            vip: 1499,
            vvip: 2499
        },

        "Midnight Noir": {
            category: "NIGHT EXPERIENCE",
            date: "25 SEP 2026",
            time: "6:30 PM",
            location: "Visakhapatnam",
            venue: "Harbour Convention Centre",
            description: "Experience an unforgettable night filled with music, lights, entertainment and an exclusive premium atmosphere.",
            general: 649,
            vip: 1299,
            vvip: 2199
        },

        "Aurum Jazz": {
            category: "JAZZ EXPERIENCE",
            date: "02 OCT 2026",
            time: "7:30 PM",
            location: "Hyderabad",
            venue: "Skyline Arena",
            description: "Enjoy a sophisticated jazz evening featuring soulful performances, elegant ambience and unforgettable entertainment.",
            general: 899,
            vip: 1699,
            vvip: 2799
        },

        "Grand Vintner": {
            category: "LUXURY EVENING",
            date: "05 OCT 2026",
            time: "7:00 PM",
            location: "Bengaluru",
            venue: "The Garden Stage",
            description: "A luxurious evening designed around premium entertainment, beautiful ambience and curated experiences.",
            general: 749,
            vip: 1399,
            vvip: 2299
        },

        "Celestial Rooftop": {
            category: "ROOFTOP EXPERIENCE",
            date: "18 OCT 2026",
            time: "8:00 PM",
            location: "Mumbai",
            venue: "Metro Live Arena",
            description: "A spectacular rooftop experience combining music, city lights and an unforgettable night under the stars.",
            general: 999,
            vip: 1899,
            vvip: 2999
        },

        "Imperial Opera": {
            category: "OPERA NIGHT",
            date: "31 OCT 2026",
            time: "6:00 PM",
            location: "Goa",
            venue: "Neon Beach Arena",
            description: "A grand opera-inspired evening with dramatic performances, elegant surroundings and premium entertainment.",
            general: 1099,
            vip: 1999,
            vvip: 3499
        },

        "Elysian Nights": {
            category: "SIGNATURE NIGHT",
            date: "08 NOV 2026",
            time: "7:30 PM",
            location: "Chennai",
            venue: "Grand Convention Hall",
            description: "A signature night created for guests looking for premium entertainment, music and memorable experiences.",
            general: 899,
            vip: 1599,
            vvip: 2699
        },

        "Veloura": {
            category: "LUXURY EXPERIENCE",
            date: "15 NOV 2026",
            time: "8:00 PM",
            location: "Pune",
            venue: "Imperial Convention Centre",
            description: "Step into a world of luxury, music and refined entertainment at this exclusive evening experience.",
            general: 1199,
            vip: 2199,
            vvip: 3299
        },

        "Noir Élan": {
            category: "MIDNIGHT AFFAIR",
            date: "21 NOV 2026",
            time: "9:00 PM",
            location: "Delhi",
            venue: "The Grand Pavilion",
            description: "A stylish midnight affair featuring premium entertainment, atmospheric lighting and unforgettable moments.",
            general: 1299,
            vip: 2299,
            vvip: 3499
        },

        "Astral Reverie": {
            category: "COSMIC EXPERIENCE",
            date: "05 DEC 2026",
            time: "8:30 PM",
            location: "Kochi",
            venue: "Waterfront Arena",
            description: "A cosmic-inspired evening bringing together music, lights and an immersive waterfront experience.",
            general: 1099,
            vip: 1999,
            vvip: 2999
        }
    };


    /* =====================================================
       OPEN EVENT DETAILS
    ===================================================== */

    function openAureliaEvent(eventName) {

        const event = EVENT_DATA[eventName];

        if (!event) {
            alert("Event details not found.");
            return;
        }


        /* Remove old event page if it exists */

        const oldPage =
            document.getElementById(
                "aurelia-event-details-page"
            );

        if (oldPage) {
            oldPage.remove();
        }


        /* Create new page */

        const page =
            document.createElement("div");

        page.id =
            "aurelia-event-details-page";


        page.innerHTML = `

            <div class="aurelia-details-container">

                <button
                    class="aurelia-details-close"
                    id="aureliaCloseEvent"
                >
                    ×
                </button>


                <div class="aurelia-details-label">
                    ${event.category}
                </div>


                <h1>
                    ${eventName}
                </h1>


                <p class="aurelia-details-description">
                    ${event.description}
                </p>


                <div class="aurelia-details-info">

                    <div class="aurelia-detail-box">
                        <span>DATE</span>
                        <strong>${event.date}</strong>
                    </div>

                    <div class="aurelia-detail-box">
                        <span>TIME</span>
                        <strong>${event.time}</strong>
                    </div>

                    <div class="aurelia-detail-box">
                        <span>LOCATION</span>
                        <strong>${event.location}</strong>
                    </div>

                    <div class="aurelia-detail-box">
                        <span>VENUE</span>
                        <strong>${event.venue}</strong>
                    </div>

                </div>


                <h2 class="aurelia-ticket-heading">
                    Ticket Prices
                </h2>


                <div class="aurelia-ticket-prices">

                    <div class="aurelia-ticket-box">
                        <span>GENERAL</span>
                        <strong>₹${event.general}</strong>
                    </div>

                    <div class="aurelia-ticket-box">
                        <span>VIP</span>
                        <strong>₹${event.vip}</strong>
                    </div>

                    <div class="aurelia-ticket-box">
                        <span>VVIP</span>
                        <strong>₹${event.vvip}</strong>
                    </div>

                </div>


                <div class="aurelia-details-buttons">

                    <button
                        class="aurelia-book-btn"
                        id="aureliaBookEvent"
                    >
                        Book Tickets
                    </button>

                    <button
                        class="aurelia-back-btn"
                        id="aureliaBackEvent"
                    >
                        Back to Events
                    </button>

                </div>

            </div>
        `;


        document.body.appendChild(page);


        /* Prevent background scrolling */

        document.body.style.overflow =
            "hidden";


        /* Close */

        document
            .getElementById(
                "aureliaCloseEvent"
            )
            .onclick =
            closeAureliaEvent;


        document
            .getElementById(
                "aureliaBackEvent"
            )
            .onclick =
            closeAureliaEvent;


        /* Booking */

        document
            .getElementById(
                "aureliaBookEvent"
            )
            .onclick =
            function () {

                closeAureliaEvent();


                if (
                    typeof window.startBooking ===
                    "function"
                ) {

                    window.startBooking(
                        eventName
                    );

                } else {

                    const bookingModal =
                        document.getElementById(
                            "bookingModal"
                        );

                    if (bookingModal) {

                        bookingModal.style.display =
                            "flex";

                        bookingModal.classList.add(
                            "active"
                        );
                    }
                }
            };
    }


    /* =====================================================
       CLOSE EVENT
    ===================================================== */

    function closeAureliaEvent() {

        const page =
            document.getElementById(
                "aurelia-event-details-page"
            );


        if (page) {
            page.remove();
        }


        document.body.style.overflow =
            "";
    }


    /* =====================================================
       FIND VIEW EVENT BUTTONS
       EVENT CARD -> BUTTON -> EVENT NAME
    ===================================================== */

    function connectViewButtons() {

        const cards =
            document.querySelectorAll(
                ".event-card"
            );


        cards.forEach(
            function (card) {

                const heading =
                    card.querySelector(
                        "h3"
                    );


                if (!heading) {
                    return;
                }


                const eventName =
                    heading.textContent
                        .trim();


                const buttons =
                    card.querySelectorAll(
                        "button, a"
                    );


                buttons.forEach(
                    function (button) {

                        const buttonText =
                            button.textContent
                                .trim()
                                .toLowerCase();


                        if (
                            buttonText
                                .includes(
                                    "view event"
                                )
                        ) {

                            /*
                              IMPORTANT:
                              Stop ALL previous click
                              handlers/links.
                            */

                            button.onclick =
                                function (e) {

                                    e.preventDefault();

                                    e.stopPropagation();

                                    openAureliaEvent(
                                        eventName
                                    );

                                    return false;
                                };


                            button.setAttribute(
                                "href",
                                "javascript:void(0)"
                            );


                            button.style.cursor =
                                "pointer";
                        }
                    }
                );
            }
        );
    }


    /* =====================================================
       RUN AFTER PAGE LOAD
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            connectViewButtons
        );

    } else {

        connectViewButtons();
    }


    /* =====================================================
       GLOBAL ACCESS
    ===================================================== */

    window.openAureliaEvent =
        openAureliaEvent;

    window.closeAureliaEvent =
        closeAureliaEvent;


    /* =====================================================
       EXTRA CHECK
       Useful if cards are created later.
    ===================================================== */

    setTimeout(
        connectViewButtons,
        500
    );

    setTimeout(
        connectViewButtons,
        1500
    );

})();
});

/* =====================================================
   CONTACT FORM
   ===================================================== */

function sendContactMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const subject =
        document.getElementById("contactSubject").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();

    const status =
        document.getElementById("contactMessageStatus");


    if (!name || !email || !subject || !message) {

        status.textContent =
            "Please fill in all the fields.";

        status.style.color = "#d99b9b";

        return;
    }


    status.textContent =
        "Thank you, " + name + ". Your message has been received.";

    status.style.color = "#c9a96e";


    document.getElementById("contactForm").reset();
}
/* =========================================================
   AURELIA - VIEW EVENT DETAILS
   Paste this code at the VERY END of script.js
   ========================================================= */

(function () {

    const EVENTS = {
        "Velvet Symphony": {
            type: "CLASSICAL NIGHT",
            date: "20 SEP 2026",
            time: "7:00 PM",
            location: "Vijayawada",
            venue: "The Grand Arena",
            description:
                "An elegant classical evening featuring soulful music, refined ambience and an unforgettable live experience.",
            prices: {
                "Standard": 799,
                "Premium": 1499,
                "VIP": 2499
            }
        },

        "Midnight Noir": {
            type: "NIGHT EXPERIENCE",
            date: "25 SEP 2026",
            time: "6:30 PM",
            location: "Visakhapatnam",
            venue: "Harbour Convention Centre",
            description:
                "Step into a sophisticated night experience filled with music, atmosphere and premium entertainment.",
            prices: {
                "Standard": 649,
                "Premium": 1299,
                "VIP": 2199
            }
        },

        "Aurum Jazz": {
            type: "JAZZ EXPERIENCE",
            date: "02 OCT 2026",
            time: "7:30 PM",
            location: "Hyderabad",
            venue: "Skyline Arena",
            description:
                "Experience an extraordinary evening of smooth jazz, elegant ambience and premium entertainment.",
            prices: {
                "Standard": 899,
                "Premium": 1699,
                "VIP": 2799
            }
        },

        "Grand Vintner": {
            type: "LUXURY EVENING",
            date: "05 OCT 2026",
            time: "7:00 PM",
            location: "Bengaluru",
            venue: "The Garden Stage",
            description:
                "A luxury evening combining sophisticated entertainment, beautiful surroundings and memorable moments.",
            prices: {
                "Standard": 749,
                "Premium": 1399,
                "VIP": 2299
            }
        },

        "Celestial Rooftop": {
            type: "ROOFTOP EXPERIENCE",
            date: "18 OCT 2026",
            time: "8:00 PM",
            location: "Mumbai",
            venue: "Metro Live Arena",
            description:
                "Enjoy a spectacular rooftop experience under the stars with premium music and entertainment.",
            prices: {
                "Standard": 999,
                "Premium": 1899,
                "VIP": 2999
            }
        },

        "Imperial Opera": {
            type: "OPERA NIGHT",
            date: "31 OCT 2026",
            time: "6:00 PM",
            location: "Goa",
            venue: "Neon Beach Arena",
            description:
                "A grand opera night bringing together beautiful performances, atmosphere and an unforgettable experience.",
            prices: {
                "Standard": 1099,
                "Premium": 1999,
                "VIP": 3499
            }
        },

        "Elysian Nights": {
            type: "SIGNATURE NIGHT",
            date: "08 NOV 2026",
            time: "7:30 PM",
            location: "Chennai",
            venue: "Grand Convention Hall",
            description:
                "A signature night curated for music lovers looking for an elegant and memorable experience.",
            prices: {
                "Standard": 899,
                "Premium": 1699,
                "VIP": 2799
            }
        },

        "Veloura": {
            type: "LUXURY EXPERIENCE",
            date: "15 NOV 2026",
            time: "8:00 PM",
            location: "Pune",
            venue: "Imperial Convention Centre",
            description:
                "Discover a luxurious evening filled with premium entertainment and an exclusive atmosphere.",
            prices: {
                "Standard": 1199,
                "Premium": 2199,
                "VIP": 3299
            }
        },

        "Noir Élan": {
            type: "MIDNIGHT AFFAIR",
            date: "21 NOV 2026",
            time: "9:00 PM",
            location: "Delhi",
            venue: "The Grand Pavilion",
            description:
                "A sophisticated midnight affair designed around music, elegance and unforgettable moments.",
            prices: {
                "Standard": 1299,
                "Premium": 2299,
                "VIP": 3499
            }
        },

        "Astral Reverie": {
            type: "COSMIC EXPERIENCE",
            date: "05 DEC 2026",
            time: "8:30 PM",
            location: "Kochi",
            venue: "Waterfront Arena",
            description:
                "An immersive cosmic-inspired experience combining music, ambience and spectacular entertainment.",
            prices: {
                "Standard": 1099,
                "Premium": 1999,
                "VIP": 2999
            }
        }
    };


    /* ---------------------------------------------------------
       FIND EVENT NAME FROM THE CARD
       --------------------------------------------------------- */

    function getEventNameFromCard(card) {

        const heading = card.querySelector("h3");

        if (!heading) {
            return null;
        }

        return heading.textContent.trim();
    }


    /* ---------------------------------------------------------
       CREATE EVENT DETAILS PAGE
       --------------------------------------------------------- */

    function showEventDetails(eventName) {

        const event = EVENTS[eventName];

        if (!event) {
            alert("Event details not found for: " + eventName);
            return;
        }

        /* Remove old details page if already present */

        const oldPage = document.getElementById("aureliaEventDetails");

        if (oldPage) {
            oldPage.remove();
        }


        /* Create page */

        const page = document.createElement("div");

        page.id = "aureliaEventDetails";

        page.innerHTML = `
            <div class="aurelia-details-overlay">

                <div class="aurelia-details-box">

                    <button
                        class="aurelia-details-close"
                        type="button"
                        aria-label="Close"
                    >
                        ×
                    </button>


                    <div class="aurelia-details-content">

                        <p class="details-label">
                            ${event.type}
                        </p>

                        <h1>
                            ${eventName}
                        </h1>

                        <p class="details-description">
                            ${event.description}
                        </p>


                        <div class="details-info-grid">

                            <div class="details-info">
                                <span>DATE</span>
                                <strong>${event.date}</strong>
                            </div>

                            <div class="details-info">
                                <span>TIME</span>
                                <strong>${event.time}</strong>
                            </div>

                            <div class="details-info">
                                <span>LOCATION</span>
                                <strong>${event.location}</strong>
                            </div>

                            <div class="details-info">
                                <span>VENUE</span>
                                <strong>${event.venue}</strong>
                            </div>

                        </div>


                        <div class="ticket-section">

                            <p class="details-label">
                                TICKET PRICES
                            </p>

                            <div class="ticket-price-grid">

                                <div class="ticket-price">
                                    <span>STANDARD</span>
                                    <strong>₹${event.prices.Standard}</strong>
                                </div>

                                <div class="ticket-price">
                                    <span>PREMIUM</span>
                                    <strong>₹${event.prices.Premium}</strong>
                                </div>

                                <div class="ticket-price">
                                    <span>VIP</span>
                                    <strong>₹${event.prices.VIP}</strong>
                                </div>

                            </div>

                        </div>


                        <div class="details-actions">

                            <button
                                type="button"
                                class="details-book-btn"
                                id="detailsBookButton"
                            >
                                Book Tickets
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `;


        document.body.appendChild(page);


        /* Close button */

        const closeButton =
            page.querySelector(".aurelia-details-close");

        closeButton.addEventListener("click", function () {
            page.remove();
            document.body.style.overflow = "";
        });


        /* Book button */

        const bookButton =
            page.querySelector("#detailsBookButton");

        bookButton.addEventListener("click", function () {

            page.remove();

            document.body.style.overflow = "";

            /*
             * If your existing website has a booking function,
             * use it here.
             */

            if (typeof openBooking === "function") {
                openBooking(eventName);
            }

            else if (typeof openBookingModal === "function") {
                openBookingModal(eventName);
            }

            else {
                alert(
                    "Selected Event: " +
                    eventName +
                    "\n\nBooking section will open here."
                );
            }

        });


        /* Close when clicking outside */

        page.querySelector(".aurelia-details-overlay")
            .addEventListener("click", function (e) {

                if (e.target === this) {
                    page.remove();
                    document.body.style.overflow = "";
                }

            });


        /* ESC key */

        function escapeHandler(e) {

            if (e.key === "Escape") {

                if (document.getElementById("aureliaEventDetails")) {
                    page.remove();
                    document.body.style.overflow = "";
                }

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );
            }

        }

        document.addEventListener(
            "keydown",
            escapeHandler
        );


        document.body.style.overflow = "hidden";
    }


    /* ---------------------------------------------------------
       CONNECT ALL VIEW EVENT BUTTONS
       --------------------------------------------------------- */

    function connectViewEventButtons() {

        const cards =
            document.querySelectorAll(".event-card");


        cards.forEach(function (card) {

            const eventName =
                getEventNameFromCard(card);


            if (!eventName || !EVENTS[eventName]) {
                return;
            }


            const buttons =
                card.querySelectorAll("button, a");


            buttons.forEach(function (button) {

                const text =
                    button.textContent
                        .trim()
                        .toLowerCase();


                if (text.includes("view event")) {

                    /* Prevent old action */

                    button.onclick = function (e) {

                        e.preventDefault();
                        e.stopPropagation();

                        showEventDetails(eventName);

                        return false;
                    };

                }

            });

        });

    }


    /* ---------------------------------------------------------
       START
       --------------------------------------------------------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            connectViewEventButtons
        );

    } else {

        connectViewEventButtons();

    }


    /* Retry in case cards are loaded dynamically */

    setTimeout(
        connectViewEventButtons,
        500
    );

    setTimeout(
        connectViewEventButtons,
        1500
    );


    /* Make function available globally */

    window.showAureliaEvent =
        showEventDetails;

})();

Next important step: paina JS code ki styling kuda kavali. "style.css" ending lo ee CSS paste cheyyandi:

:::writing{variant="document" id="73816" title="AURELIA View Event Details — style.css"}

/* =========================================================
   AURELIA EVENT DETAILS PAGE
   ========================================================= */

#aureliaEventDetails {
    position: fixed;
    inset: 0;
    z-index: 99999;
    font-family: "Inter", sans-serif;
}

.aurelia-details-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.94);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px;
    overflow-y: auto;
}

.aurelia-details-box {
    position: relative;

    width: 100%;
    max-width: 900px;

    background:
        linear-gradient(
            145deg,
            #15120e,
            #090807
        );

    border: 1px solid rgba(201, 169, 110, 0.35);

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.8);

    color: #ffffff;

    animation: aureliaDetailsIn 0.35s ease;
}

@keyframes aureliaDetailsIn {

    from {
        opacity: 0;
        transform: translateY(25px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

}


.aurelia-details-content {
    padding: 60px;
}


.aurelia-details-close {
    position: absolute;

    top: 20px;
    right: 20px;

    width: 44px;
    height: 44px;

    border: 1px solid rgba(201, 169, 110, 0.4);

    background: transparent;

    color: #c9a96e;

    font-size: 28px;

    cursor: pointer;

    transition: 0.25s ease;
}

.aurelia-details-close:hover {
    background: #c9a96e;
    color: #090807;
}


.details-label {
    color: #c9a96e;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 3px;

    margin-bottom: 15px;
}


.aurelia-details-content h1 {
    margin: 0 0 20px;

    font-family: "Playfair Display", serif;

    font-size: clamp(42px, 7vw, 76px);

    font-weight: 400;

    line-height: 1.05;

    color: #f4eee5;
}


.details-description {
    max-width: 700px;

    color: #aaa29a;

    font-size: 16px;

    line-height: 1.8;

    margin-bottom: 45px;
}


/* INFORMATION */

.details-info-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 1px;

    background: rgba(201, 169, 110, 0.18);

    border: 1px solid rgba(201, 169, 110, 0.18);

    margin-bottom: 45px;
}


.details-info {

    background: #0d0b09;

    padding: 25px 20px;
}


.details-info span {

    display: block;

    color: #80786f;

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 10px;
}


.details-info strong {

    color: #eee7dd;

    font-size: 14px;

    font-weight: 500;

    line-height: 1.5;
}


/* TICKET PRICES */

.ticket-section {
    margin-top: 10px;
}


.ticket-price-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 16px;

    margin-top: 20px;
}


.ticket-price {

    border: 1px solid rgba(201, 169, 110, 0.25);

    background: rgba(201, 169, 110, 0.04);

    padding: 25px;

    transition: 0.25s ease;
}


.ticket-price:hover {

    border-color: #c9a96e;

    transform: translateY(-3px);
}


.ticket-price span {

    display: block;

    color: #80786f;

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 10px;
}


.ticket-price strong {

    font-family: "Playfair Display", serif;

    color: #c9a96e;

    font-size: 30px;

    font-weight: 400;
}


/* BOOK BUTTON */

.details-actions {

    margin-top: 45px;
}


.details-book-btn {

    min-height: 50px;

    padding: 0 35px;

    background: #c9a96e;

    border: 1px solid #c9a96e;

    color: #090807;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 2px;

    cursor: pointer;

    transition: 0.25s ease;
}


.details-book-btn:hover {

    background: transparent;

    color: #c9a96e;
}


/* MOBILE */

@media (max-width: 700px) {

    .aurelia-details-overlay {

        padding: 15px;

        align-items: flex-start;
    }


    .aurelia-details-box {

        margin: 20px 0;
    }


    .aurelia-details-content {

        padding: 45px 25px 35px;
    }


    .aurelia-details-content h1 {

        font-size: 42px;
    }


    .details-info-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }


    .ticket-price-grid {

        grid-template-columns: 1fr;
    }


    .ticket-price {

        padding: 20px;
    }


    .aurelia-details-close {

        top: 12px;

        right: 12px;
    }

}


/* VERY SMALL MOBILE */

@media (max-width: 400px) {

    .details-info-grid {

        grid-template-columns: 1fr;
    }

    .aurelia-details-content h1 {

        font-size: 36px;
    }

}

Ippudu exact flow ila untundi

Events → View Event → Event Details

Example Velvet Symphony click chesthe:

- Velvet Symphony
- Classical Night
- Date: 20 SEP 2026
- Time: 7:00 PM
- Location: Vijayawada
- Venue: The Grand Arena
- Standard: ₹799
- Premium: ₹1499
- VIP: ₹2499
- Book Tickets button

Alage remaining events ki kuda respective details vastayi. Ee event names/dates/locations mee live AURELIA page lo currently unna event listing ki match chesanu.

GitHub lo "script.js" + "style.css" save → Commit changes → GitHub Pages refresh cheyyandi. "View Event" click chesinappudu details page open avvali.
