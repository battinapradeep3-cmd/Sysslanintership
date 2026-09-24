"use strict";

/* ============================================================
   AURELIA EVENT BOOKING WEBSITE
   CLEAN UPDATED JAVASCRIPT
   ============================================================ */

const EVENTS = {
    "Velvet Symphony": {
        category: "CLASSICAL NIGHT",
        date: "20 SEP 2026",
        time: "7:00 PM",
        location: "Vijayawada",
        venue: "The Grand Arena",
        price: 799,
        vip: 1499,
        vvip: 2499,
        description: "An elegant evening of classical music, live performances and unforgettable moments. Experience premium sound, beautiful ambience and an extraordinary night at The Grand Arena."
    },

    "Midnight Noir": {
        category: "NIGHT EXPERIENCE",
        date: "25 SEP 2026",
        time: "6:30 PM",
        location: "Visakhapatnam",
        venue: "Harbour Convention Centre",
        price: 649,
        vip: 1299,
        vvip: 2199,
        description: "Step into an atmospheric night filled with music, lights and premium entertainment. Midnight Noir brings a sophisticated nightlife experience to Visakhapatnam."
    },

    "Aurum Jazz": {
        category: "JAZZ EXPERIENCE",
        date: "02 OCT 2026",
        time: "7:30 PM",
        location: "Hyderabad",
        venue: "Skyline Arena",
        price: 899,
        vip: 1699,
        vvip: 2799,
        description: "A premium live jazz evening featuring extraordinary performances, elegant ambience and unforgettable musical moments."
    },

    "Grand Vintner": {
        category: "LUXURY EVENING",
        date: "05 OCT 2026",
        time: "7:00 PM",
        location: "Bengaluru",
        venue: "The Garden Stage",
        price: 749,
        vip: 1499,
        vvip: 2399,
        description: "A sophisticated luxury evening created for people who appreciate music, atmosphere and memorable experiences."
    },

    "Celestial Rooftop": {
        category: "ROOFTOP EXPERIENCE",
        date: "18 OCT 2026",
        time: "8:00 PM",
        location: "Mumbai",
        venue: "Metro Live Arena",
        price: 999,
        vip: 1899,
        vvip: 2999,
        description: "Enjoy an unforgettable rooftop experience under the stars with premium entertainment, music and a spectacular atmosphere."
    },

    "Imperial Opera": {
        category: "OPERA NIGHT",
        date: "31 OCT 2026",
        time: "6:00 PM",
        location: "Goa",
        venue: "Neon Beach Arena",
        price: 1099,
        vip: 1999,
        vvip: 3299,
        description: "An elegant opera experience combining art, music, stage performance and luxury in the beautiful surroundings of Goa."
    },

    "Elysian Nights": {
        category: "SIGNATURE NIGHT",
        date: "08 NOV 2026",
        time: "7:30 PM",
        location: "Chennai",
        venue: "Grand Convention Hall",
        price: 899,
        vip: 1699,
        vvip: 2799,
        description: "A signature AURELIA experience featuring music, entertainment and an elegant atmosphere designed for an unforgettable evening."
    },

    "Veloura": {
        category: "LUXURY EXPERIENCE",
        date: "15 NOV 2026",
        time: "8:00 PM",
        location: "Pune",
        venue: "Imperial Convention Centre",
        price: 1199,
        vip: 2199,
        vvip: 3499,
        description: "Veloura is a premium luxury experience bringing together music, entertainment and an elegant atmosphere."
    },

    "Noir Élan": {
        category: "MIDNIGHT AFFAIR",
        date: "21 NOV 2026",
        time: "9:00 PM",
        location: "Delhi",
        venue: "The Grand Pavilion",
        price: 1299,
        vip: 2399,
        vvip: 3699,
        description: "A stylish midnight affair featuring premium entertainment, dramatic lighting and an unforgettable nightlife atmosphere."
    },

    "Astral Reverie": {
        category: "COSMIC EXPERIENCE",
        date: "05 DEC 2026",
        time: "8:30 PM",
        location: "Kochi",
        venue: "Waterfront Arena",
        price: 1099,
        vip: 2099,
        vvip: 3299,
        description: "Step into a cosmic experience where music, atmosphere and entertainment come together for an extraordinary night."
    }
};

const EVENT_ALIASES = {
    velvet: "Velvet Symphony",
    noir: "Midnight Noir",
    aurum: "Aurum Jazz",
    vintner: "Grand Vintner",
    celestial: "Celestial Rooftop",
    imperial: "Imperial Opera",
    elysian: "Elysian Nights",
    veloura: "Veloura",
    noirelan: "Noir Élan",
    astral: "Astral Reverie"
};

let selectedEventName = null;
let selectedEvent = null;


/* ============================================================
   LOCAL STORAGE
   ============================================================ */

function getUser() {
    try {
        return JSON.parse(localStorage.getItem("aureliaUser"));
    } catch (e) {
        return null;
    }
}

function saveUser(user) {
    localStorage.setItem("aureliaUser", JSON.stringify(user));
}

function removeUser() {
    localStorage.removeItem("aureliaUser");
}

function getAccounts() {
    try {
        return JSON.parse(localStorage.getItem("aureliaAccounts")) || [];
    } catch (e) {
        return [];
    }
}

function saveAccounts(accounts) {
    localStorage.setItem("aureliaAccounts", JSON.stringify(accounts));
}

function getBookings() {
    try {
        return JSON.parse(localStorage.getItem("aureliaBookings")) || [];
    } catch (e) {
        return [];
    }
}

function saveBookings(bookings) {
    localStorage.setItem("aureliaBookings", JSON.stringify(bookings));
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ============================================================
   MODALS
   ============================================================ */

function openModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
        console.warn("Modal not found:", id);
        return;
    }

    modal.style.display = "flex";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.style.display = "none";
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function closeAllModals() {
    document.querySelectorAll(".modal").forEach(function(modal) {
        modal.style.display = "none";
        modal.classList.remove("active");
    });

    document.body.style.overflow = "";
}


/* ============================================================
   VIEW EVENT
   ============================================================ */

function showEvent(eventName) {
    const actualName = EVENT_ALIASES[eventName] || eventName;
    const event = EVENTS[actualName];

    if (!event) {
        alert("Event details not available.");
        return;
    }

    selectedEventName = actualName;
    selectedEvent = event;

    closeAllModals();

    let oldPage = document.getElementById("aureliaFullEventPage");

    if (oldPage) {
        oldPage.remove();
    }

    const page = document.createElement("div");
    page.id = "aureliaFullEventPage";

    page.innerHTML = `
        <div class="aurelia-event-screen">

            <button type="button"
                    class="aurelia-event-back"
                    id="aureliaEventBack">
                ← Back to Events
            </button>

            <div class="aurelia-event-inner">

                <p class="section-label">
                    ${escapeHTML(event.category)}
                </p>

                <h1 class="aurelia-event-title">
                    ${escapeHTML(actualName)}
                </h1>

                <p class="aurelia-event-description">
                    ${escapeHTML(event.description)}
                </p>

                <div class="aurelia-event-meta">

                    <div>
                        <span>DATE</span>
                        <strong>${escapeHTML(event.date)}</strong>
                    </div>

                    <div>
                        <span>TIME</span>
                        <strong>${escapeHTML(event.time)}</strong>
                    </div>

                    <div>
                        <span>LOCATION</span>
                        <strong>${escapeHTML(event.location)}</strong>
                    </div>

                    <div>
                        <span>VENUE</span>
                        <strong>${escapeHTML(event.venue)}</strong>
                    </div>

                </div>

                <div class="aurelia-event-prices">

                    <div>
                        <span>STANDARD</span>
                        <strong>₹${event.price}</strong>
                    </div>

                    <div>
                        <span>VIP</span>
                        <strong>₹${event.vip}</strong>
                    </div>

                    <div>
                        <span>VVIP</span>
                        <strong>₹${event.vvip}</strong>
                    </div>

                </div>

                <button type="button"
                        class="btn btn-primary"
                        id="aureliaEventBook">
                    Book Tickets
                </button>

            </div>
        </div>
    `;

    document.body.appendChild(page);
    document.body.style.overflow = "hidden";

    document.getElementById("aureliaEventBack").onclick = function() {
        page.remove();
        document.body.style.overflow = "";
    };

    document.getElementById("aureliaEventBook").onclick = function() {
        startBooking(actualName);
    };
}


/* ============================================================
   LOGIN
   ============================================================ */

function openLogin() {
    const user = getUser();

    if (user) {
        const logout = confirm(
            "You are signed in as " +
            user.name +
            ".\n\nDo you want to Sign Out?"
        );

        if (logout) {
            signOut();
        }

        return;
    }

    openModal("loginModal");
}

function handleLogin(event) {
    event.preventDefault();

    const emailElement = document.getElementById("loginEmail");
    const passwordElement = document.getElementById("loginPassword");

    if (!emailElement || !passwordElement) {
        return false;
    }

    const email = emailElement.value.trim().toLowerCase();
    const password = passwordElement.value;

    const message = document.getElementById("loginMessage");

    const accounts = getAccounts();

    const account = accounts.find(function(item) {
        return (
            item.email &&
            item.email.toLowerCase() === email &&
            item.password === password
        );
    });

    if (!account) {
        if (message) {
            message.textContent = "Invalid email or password.";
            message.style.color = "#d88";
        } else {
            alert("Invalid email or password.");
        }

        return false;
    }

    saveUser({
        name: account.name,
        email: account.email
    });

    closeModal("loginModal");
    updateAuthUI();

    alert("Welcome back, " + account.name + "!");

    return false;
}


/* ============================================================
   SIGN UP
   ============================================================ */

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById("signupName")?.value.trim();
    const email = document.getElementById("signupEmail")?.value.trim().toLowerCase();
    const password = document.getElementById("signupPassword")?.value;

    if (!name || !email || !password) {
        alert("Please fill all fields.");
        return false;
    }

    let accounts = getAccounts();

    const exists = accounts.some(function(account) {
        return account.email.toLowerCase() === email;
    });

    if (exists) {
        alert("An account with this email already exists.");
        return false;
    }

    const account = {
        name: name,
        email: email,
        password: password
    };

    accounts.push(account);
    saveAccounts(accounts);

    saveUser({
        name: name,
        email: email
    });

    closeModal("signupModal");
    updateAuthUI();

    alert("Account created successfully!");

    return false;
}

function switchToSignup() {
    closeModal("loginModal");
    openModal("signupModal");
}

function switchToLogin() {
    closeModal("signupModal");
    openModal("loginModal");
}


/* ============================================================
   SIGN OUT
   ============================================================ */

function signOut() {
    removeUser();
    updateAuthUI();
    loadTickets();

    alert("You have been signed out.");
}


/* ============================================================
   AUTH UI
   ============================================================ */

function updateAuthUI() {
    const user = getUser();

    const authButton =
        document.getElementById("authButton");

    const userStatus =
        document.getElementById("userStatus");

    if (!authButton) return;

    if (user) {
        authButton.textContent = "Sign Out";

        if (userStatus) {
            userStatus.textContent =
                "Hi, " + user.name;
        }

        authButton.onclick = function(event) {
            event.preventDefault();
            openLogin();
        };

    } else {

        authButton.textContent = "Sign In";

        if (userStatus) {
            userStatus.textContent = "";
        }

        authButton.onclick = function(event) {
            event.preventDefault();
            openLogin();
        };
    }
}


/* ============================================================
   BOOKING
   ============================================================ */

function startBooking(eventName) {

    const user = getUser();

    if (!user) {
        alert("Please Sign In before booking a ticket.");
        openLogin();
        return;
    }

    // If eventName is passed, select that event
    if (eventName) {
        const actualName =
            EVENT_ALIASES[eventName] || eventName;

        if (EVENTS[actualName]) {
            selectedEventName = actualName;
            selectedEvent = EVENTS[actualName];
        }
    }

    if (!selectedEvent || !selectedEventName) {
        alert("Please select an event first.");
        return;
    }

    setValue(
        "bookingEventName",
        selectedEventName
    );

    setValue(
        "bookingName",
        user.name || ""
    );

    setValue(
        "bookingEmail",
        user.email || ""
    );

    setValue(
        "ticketType",
        "general"
    );

    setValue(
        "ticketQuantity",
        "1"
    );

    updateBookingTotal();

    openModal("bookingModal");
       }

/* ============================================================
   BOOKING TOTAL
   ============================================================ */

function updateBookingTotal() {

    if (!selectedEvent) return;

    const typeElement =
        document.getElementById("ticketType");

    const quantityElement =
        document.getElementById("ticketQuantity");

    if (!typeElement || !quantityElement) {
        return;
    }

    const type = typeElement.value;

    let quantity =
        parseInt(quantityElement.value, 10);

    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        quantityElement.value = 1;
    }

    let price = selectedEvent.price;

    if (type === "vip") {
        price = selectedEvent.vip;
    }

    if (type === "vvip") {
        price = selectedEvent.vvip;
    }

    const total = price * quantity;

    const totalElement =
        document.getElementById("bookingTotal");

    if (totalElement) {
        totalElement.textContent =
            "₹" + total;
    }
}


/* ============================================================*//
   HANDLE BOOKING
   function handleBooking(event) {

    if (event) {
        event.preventDefault();
    }

    const user = getUser();

    if (!user) {
        closeModal("bookingModal");
        openLogin();
        return false;
    }

    if (!selectedEvent || !selectedEventName) {
        alert("Please select an event.");
        return false;
    }

    const name =
        getValue("bookingName");

    const email =
        getValue("bookingEmail");

    const phone =
        getValue("bookingPhone");

    const ticketType =
        getValue("ticketType") || "general";

    let quantity =
        parseInt(
            getValue("ticketQuantity"),
            10
        );

    if (!name || !email || !phone) {
        alert("Please fill all booking details.");
        return false;
    }

    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid ticket quantity.");
        return false;
    }

    let price = selectedEvent.price;

    if (ticketType === "vip") {
        price = selectedEvent.vip;
    }

    if (ticketType === "vvip") {
        price = selectedEvent.vvip;
    }

    const total = price * quantity;

    const booking = {

        id:
            "AUR-" +
            Date.now()
                .toString()
                .slice(-8),

        event:
            selectedEventName,

        description:
            selectedEvent.description,

        category:
            selectedEvent.category,

        date:
            selectedEvent.date,

        time:
            selectedEvent.time,

        location:
            selectedEvent.location,

        venue:
            selectedEvent.venue,

        name:
            name,

        email:
            email,

        userEmail:
            user.email,

        phone:
            phone,

        ticketType:
            ticketType,

        quantity:
            quantity,

        price:
            price,

        total:
            total,

        bookedAt:
            new Date().toISOString()
    };


    let bookings =
        getBookings();

    bookings.push(booking);

    saveBookings(bookings);


    /* CLOSE BOOKING */
    closeModal("bookingModal");


    /* ============================
       CONFIRMATION DETAILS
       ============================ */

    setText(
        "confirmationId",
        booking.id
    );

    setText(
        "confirmationEvent",
        booking.event
    );

    setText(
        "confirmationDate",
        booking.date +
        " · " +
        booking.time
    );

    setText(
        "confirmationTickets",
        booking.quantity +
        " × " +
        formatTicketType(
            booking.ticketType
        )
    );

    setText(
        "confirmationTotal",
        "₹" +
        booking.total
    );


    /* SHOW CONFIRMATION */

    openModal(
        "confirmationModal"
    );


    /* ADD QR */

    addConfirmationQR(
        booking
    );


    /* REFRESH MY TICKETS */

    loadTickets();

    return false;
}

/* ============================================================
   CONFIRMATION
   ============================================================ */

function showConfirmation(booking) {

    const confirmation =
        document.getElementById("confirmationModal");

    if (!confirmation) {

        alert(
            "Booking confirmed!\n\n" +
            "Booking ID: " +
            booking.id
        );

        return;
    }

    const eventElement =
        document.getElementById("confirmationEvent");

    const idElement =
        document.getElementById("confirmationId");

    const totalElement =
        document.getElementById("confirmationTotal");

    if (eventElement) {
        eventElement.textContent =
            booking.event;
    }

    if (idElement) {
        idElement.textContent =
            booking.id;
    }

    if (totalElement) {
        totalElement.textContent =
            "₹" + booking.total;
    }

    openModal("confirmationModal");

    addConfirmationQR(booking);
}


/* ============================================================
   TICKET TYPE
   ============================================================ */

function formatTicketType(type) {

    if (type === "vip") {
        return "VIP";
    }

    if (type === "vvip") {
        return "VVIP";
    }

    return "Standard";
}


/* ============================================================
   QR CODE
   ============================================================ */
function createQRCodeData(booking) {

    const data =
        encodeURIComponent(
            [
                "AURELIA TICKET",
                booking.id,
                booking.event,
                booking.date,
                booking.time,
                booking.userName
            ].join(" | ")
        );

    return (
        "https://api.qrserver.com/v1/create-qr-code/" +
        "?size=180x180&data=" +
        data
    );
}

function addConfirmationQR(booking) {

    const container =
        document.getElementById("confirmationQR");

    if (!container) return;

    container.innerHTML = `
        <img
            src="${createQRCodeData(booking)}"
            alt="Booking QR Code"
            style="
                width:150px;
                height:150px;
                background:#fff;
                padding:6px;
            "
        >
    `;
}
    function loadTickets() {

    const container =
        document.getElementById("ticketList") ||
        document.getElementById("ticketsContainer");

    if (!container) {
        return;
    }

    const user = getUser();

    if (!user) {

        container.innerHTML = `
            <div class="empty-tickets">

                <h3>Sign In To View Tickets</h3>

                <p>
                    Sign in and book an event
                    to see your tickets here.
                </p>

                <button
                    type="button"
                    class="btn btn-primary"
                    onclick="openLogin()">
                    Sign In
                </button>

            </div>
        `;

        return;
    }


    const allBookings =
        getBookings();


    /*
       Supports both:
       userEmail
       and old email
    */

    const bookings =
        allBookings.filter(function(booking) {

            const bookingEmail =
                (
                    booking.userEmail ||
                    booking.email ||
                    ""
                )
                .toLowerCase()
                .trim();

            const currentEmail =
                (
                    user.email ||
                    ""
                )
                .toLowerCase()
                .trim();

            return (
                bookingEmail ===
                currentEmail
            );

        });


    if (bookings.length === 0) {

        container.innerHTML = `
            <div class="empty-tickets">

                <h3>No Tickets Yet</h3>

                <p>
                    Book an event and your
                    digital ticket will appear here.
                </p>

                <a
                    href="#events"
                    class="btn btn-primary">
                    Explore Events
                </a>

            </div>
        `;

        return;
    }


    container.innerHTML = "";


    bookings.forEach(function(booking) {

        const card =
            document.createElement("div");

        card.className =
            "ticket-card";


        card.innerHTML = `

            <div class="ticket-info">

                <small>
                    AURELIA DIGITAL TICKET
                </small>


                <h3>
                    ${escapeHTML(
                        booking.event ||
                        "AURELIA Event"
                    )}
                </h3>


                ${
                    booking.description
                    ?
                    `
                    <p class="ticket-description">
                        ${escapeHTML(
                            booking.description
                        )}
                    </p>
                    `
                    :
                    ""
                }


                <div class="ticket-detail">

                    <span>DATE</span>

                    <strong>
                        ${escapeHTML(
                            booking.date ||
                            "Date unavailable"
                        )}
                    </strong>

                </div>


                <div class="ticket-detail">

                    <span>TIME</span>

                    <strong>
                        ${escapeHTML(
                            booking.time ||
                            "Time unavailable"
                        )}
                    </strong>

                </div>


                <div class="ticket-detail">

                    <span>LOCATION</span>

                    <strong>
                        ${escapeHTML(
                            booking.location ||
                            "Location unavailable"
                        )}
                    </strong>

                </div>


                <div class="ticket-detail">

                    <span>VENUE</span>

                    <strong>
                        ${escapeHTML(
                            booking.venue ||
                            "Venue unavailable"
                        )}
                    </strong>

                </div>


                <div class="ticket-detail">

                    <span>TICKETS</span>

                    <strong>
                        ${escapeHTML(
                            String(
                                booking.quantity ||
                                1
                            )
                        )}
                        ×
                        ${escapeHTML(
                            formatTicketType(
                                booking.ticketType ||
                                "general"
                            )
                        )}
                    </strong>

                </div>


                <div class="ticket-detail">

                    <span>TOTAL</span>

                    <strong>
                        ₹${escapeHTML(
                            String(
                                booking.total ||
                                0
                            )
                        )}
                    </strong>

                </div>


                <p class="ticket-id">

                    Booking ID:
                    ${escapeHTML(
                        booking.id
                    )}

                </p>


                <div
                    style="
                        margin-top:18px;
                        text-align:center;
                        padding:15px;
                        border-top:
                        1px solid
                        rgba(255,255,255,.10);
                    "
                >

                    <img
                        src="${createQRCodeData(
                            booking
                        )}"
                        alt="QR code"
                        style="
                            width:140px;
                            height:140px;
                            background:#fff;
                            padding:5px;
                            margin:auto;
                        "
                    >

                    <small
                        style="
                            display:block;
                            margin-top:8px;
                        "
                    >
                        SCAN TO VERIFY
                    </small>

                </div>


                <button
                    type="button"
                    class="btn btn-outline"
                    data-cancel-ticket="${escapeHTML(
                        booking.id
                    )}"
                >
                    Cancel Ticket
                </button>

            </div>
        `;


        container.appendChild(card);

    });


    /* CANCEL BUTTONS */

    container
        .querySelectorAll(
            "[data-cancel-ticket]"
        )
        .forEach(function(button) {

            button.onclick =
                function() {

                    cancelTicket(
                        button.getAttribute(
                            "data-cancel-ticket"
                        )
                    );

                };

        });
    }  

/* ============================================================
   CANCEL TICKET
   ============================================================ */

function cancelTicket(id) {

    const answer =
        confirm(
            "Are you sure you want to cancel this ticket?"
        );

    if (!answer) return;

    let bookings =
        getBookings();

    bookings =
        bookings.filter(function(booking) {
            return booking.id !== id;
        });

    saveBookings(bookings);

    loadTickets();

    alert(
        "Ticket cancelled successfully."
    );
}


/* ============================================================
   EVENT BUTTONS
   IMPORTANT:
   Fixes View Event buttons even if old
   inline onclick is incorrect.
   ============================================================ */

function setupEventButtons() {

    document
        .querySelectorAll("button, a")
        .forEach(function(button) {

            const text =
                button.textContent
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase();

            if (!text.includes("view event")) {
                return;
            }

            const card =
                button.closest(
                    ".event-card, article, .card"
                );

            if (!card) return;

            const heading =
                card.querySelector(
                    "h1,h2,h3,h4,h5,h6"
                );

            if (!heading) return;

            const title =
                heading.textContent
                    .replace(/\s+/g, " ")
                    .trim();

            if (!EVENTS[title]) return;

            button.onclick =
                function(event) {

                    event.preventDefault();
                    event.stopPropagation();

                    showEvent(title);

                    return false;
                };
        });
}


/* ============================================================
   SIGN IN BUTTON
   ============================================================ */

function setupSignInButton() {

    const button =
        document.getElementById(
            "authButton"
        );

    if (!button) {
        console.warn(
            "authButton not found."
        );
        return;
    }

    button.onclick =
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            openLogin();

            return false;
        };
}


/* ============================================================
   NAVIGATION
   ============================================================ */

function setupNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    const target =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !target ||
                        target === "#"
                    ) {
                        return;
                    }

                    const section =
                        document.querySelector(
                            target
                        );

                    if (!section) {
                        return;
                    }

                    event.preventDefault();

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });
}
/* ============================================================
   FORMS
   ============================================================ */

function setupForms() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );

    if (loginForm) {
        loginForm.onsubmit =
            handleLogin;
    }

    const signupForm =
        document.getElementById(
            "signupForm"
        );

    if (signupForm) {
        signupForm.onsubmit =
            handleSignup;
    }

    const bookingForm =
        document.getElementById(
            "bookingForm"
        );

    if (bookingForm) {
        bookingForm.onsubmit =
            handleBooking;
    }

    const ticketType =
        document.getElementById(
            "ticketType"
        );

    if (ticketType) {

        ticketType.addEventListener(
            "change",
            updateBookingTotal
        );

    }

    const quantity =
        document.getElementById(
            "ticketQuantity"
        );

    if (quantity) {

        quantity.addEventListener(
            "input",
            updateBookingTotal
        );

        quantity.addEventListener(
            "change",
            updateBookingTotal
        );
    }
}


/* ============================================================
   MODAL ACTIONS
   ============================================================ */

function setupModalActions() {

    document
        .querySelectorAll(".modal")
        .forEach(function(modal) {

            modal.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target ===
                        modal
                    ) {

                        closeModal(
                            modal.id
                        );

                    }

                }
            );

        });


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }

            const eventPage =
                document.getElementById(
                    "aureliaFullEventPage"
                );

            if (eventPage) {

                eventPage.remove();

                document.body.style.overflow =
                    "";

                return;
            }

            closeAllModals();

        }
    );
}


/* ============================================================
   GLOBAL FUNCTIONS
   Makes HTML onclick work correctly.
   ============================================================ */

window.openLogin = openLogin;
window.showEvent = showEvent;
window.startBooking = startBooking;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleBooking = handleBooking;
window.switchToSignup = switchToSignup;
window.switchToLogin = switchToLogin;
window.signOut = signOut;
window.cancelTicket = cancelTicket;
window.closeModal = closeModal;
window.closeAllModals = closeAllModals;


/* ============================================================
   START AURELIA
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "AURELIA JS loaded successfully."
        );

        updateAuthUI();

        setupEventButtons();

        setupSignInButton();

        setupForms();

        setupModalActions();

        setupNavigation();

        loadTickets();

    }
);

         
       
