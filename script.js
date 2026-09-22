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
